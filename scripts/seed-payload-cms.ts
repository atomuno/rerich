/**
 * Опциональный первичный импорт из src/data/* в пустую SQLite (см. DATABASE_URL).
 * В обычной работе источник правды — БД + public/media; переносите их между серверами
 * (npm run payload:backup / payload:restore). Повторный seed без --force не трогает
 * коллекции, где уже есть документы. --force затирает контент и media (users не трогаем).
 * Для сида нужны файлы из src/data; старые public/gallery, public/sgfr и т.п. удалены —
 * повторный полный сид только после восстановления архива или с копии legacy-файлов.
 *
 * Запуск: npm run seed:cms   |   Полная перезаливка: npm run seed:cms -- --force
 */

import "./env-bootstrap";

import { existsSync } from "node:fs";
import path from "node:path";

import { getPayload } from "payload";

import config from "../payload.config";
import { booksData } from "../src/data/books";
import { conferenciesData } from "../src/data/conferenciesData";
import { craftsData } from "../src/data/craftsData";
import { diplomasData } from "../src/data/diplomasData";
import { fundExhibitions } from "../src/data/exhibitionsFundData";
import { exhibitions } from "../src/data/exhibitionsUrielData";
import { fundVideos } from "../src/data/fundVideos";
import { galleryData } from "../src/data/gallery";
import { lecturesData } from "../src/data/lecturesData";
import { junior, middle, senior } from "../src/data/shipsData";

const CONTENT_COLLECTIONS = [
  "diplomas",
  "exhibitions-uriel",
  "ships-models",
  "crafts",
  "gallery",
  "books",
  "exhibitions-fund",
  "conferences",
  "videos",
  "lectures",
  "media",
] as const;

type PayloadInstance = Awaited<ReturnType<typeof getPayload>>;

async function purgeCollection(
  payload: PayloadInstance,
  slug: (typeof CONTENT_COLLECTIONS)[number],
): Promise<void> {
  for (;;) {
    const res = await payload.find({
      collection: slug,
      limit: 100,
      depth: 0,
      overrideAccess: true,
    });
    if (res.docs.length === 0) break;
    for (const doc of res.docs) {
      await payload.delete({
        collection: slug,
        id: doc.id,
        overrideAccess: true,
      });
    }
  }
}

async function collectionHasDocs(
  payload: PayloadInstance,
  slug: (typeof CONTENT_COLLECTIONS)[number],
): Promise<boolean> {
  const res = await payload.find({
    collection: slug,
    limit: 1,
    depth: 0,
    overrideAccess: true,
  });
  return res.totalDocs > 0;
}

/** Путь вида /sgfr/01/01.jpg → файл в public */
function absolutePublicPath(webPath: string): string {
  const rel = webPath.startsWith("/") ? webPath.slice(1) : webPath;
  const parts = rel.split("/").filter(Boolean);
  return path.join(process.cwd(), "public", ...parts);
}

function fileExistsVariants(webPath: string): string | null {
  const base = absolutePublicPath(webPath);
  const candidates = [
    base,
    base.replace(/\.jpg$/i, ".JPG"),
    base.replace(/\.jpeg$/i, ".JPEG"),
    base.replace(/\.jpg$/i, ".jpg"),
  ];
  const seen = new Set<string>();
  for (const p of candidates) {
    if (seen.has(p)) continue;
    seen.add(p);
    if (existsSync(p)) return p;
  }
  return null;
}

const mediaIdBySource = new Map<string, number>();

async function getOrCreateMediaFromWebPath(
  payload: PayloadInstance,
  webPath: string,
  alt: string,
): Promise<number | null> {
  const key = webPath.startsWith("/") ? webPath : `/${webPath}`;
  if (mediaIdBySource.has(key)) return mediaIdBySource.get(key)!;

  const abs = fileExistsVariants(key);
  if (!abs) {
    console.warn(`    файл не найден: ${key}`);
    return null;
  }

  let doc: { id: number | string };
  try {
    doc = (await payload.create({
      collection: "media",
      data: { alt },
      filePath: abs,
      overrideAccess: true,
    })) as { id: number | string };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.warn(`    не удалось загрузить в Media (пропуск): ${key} — ${msg}`);
    return null;
  }

  const id = doc.id as number;
  mediaIdBySource.set(key, id);
  return id;
}

async function main(): Promise<void> {
  if (!process.env.PAYLOAD_SECRET?.trim()) {
    console.error(
      "Нет PAYLOAD_SECRET. Добавьте длинную случайную строку в .env.local (см. .env.example).",
    );
    process.exit(1);
  }

  const force = process.argv.includes("--force");

  const payload = await getPayload({ config });

  if (force) {
    console.log("—force: очистка контент-коллекций и media (users не трогаем)…");
    for (const slug of CONTENT_COLLECTIONS) {
      await purgeCollection(payload, slug);
      console.log(`  очищено: ${slug}`);
    }
    mediaIdBySource.clear();
  }

  // --- conferences ---
  if (!force && (await collectionHasDocs(payload, "conferences"))) {
    console.log("conferences: уже есть записи, пропуск.");
  } else {
    let i = 0;
    for (const row of conferenciesData) {
      const r = row as {
        id: number;
        title: string;
        speaker: string;
        date: string;
        url: string;
        tag: string;
      };
      await payload.create({
        collection: "conferences",
        data: {
          sortOrder: r.id * 10,
          title: r.title,
          speaker: r.speaker,
          date: r.date,
          url: r.url,
          tag: r.tag,
        },
        overrideAccess: true,
      });
      i++;
    }
    console.log(`conferences: создано ${i} записей.`);
  }

  // --- videos ---
  if (!force && (await collectionHasDocs(payload, "videos"))) {
    console.log("videos: уже есть записи, пропуск.");
  } else {
    let i = 0;
    for (const row of fundVideos) {
      await payload.create({
        collection: "videos",
        data: {
          sortOrder: (i + 1) * 10,
          title: row.title,
          description: row.description,
          rutubeUrl: row.rutubeUrl,
        },
        overrideAccess: true,
      });
      i++;
    }
    console.log(`videos: создано ${i} записей.`);
  }

  // --- lectures ---
  if (!force && (await collectionHasDocs(payload, "lectures"))) {
    console.log("lectures: уже есть записи, пропуск.");
  } else {
    let n = 0;
    for (const row of lecturesData) {
      await payload.create({
        collection: "lectures",
        data: {
          sortOrder: row.id,
          title: row.title,
          speaker: row.speaker,
          date: row.date,
          url: row.url,
          ...(row.tag !== undefined && row.tag.trim() !== ""
            ? { tag: row.tag.trim() }
            : {}),
        },
        overrideAccess: true,
      });
      n++;
    }
    console.log(`lectures: создано ${n} записей.`);
  }

  // --- exhibitions-fund ---
  if (!force && (await collectionHasDocs(payload, "exhibitions-fund"))) {
    console.log("exhibitions-fund: уже есть записи, пропуск.");
  } else {
    let n = 0;
    for (const ex of fundExhibitions) {
      const photos: { image: number; caption?: string }[] = [];
      for (const ph of ex.photos ?? []) {
        const mid = await getOrCreateMediaFromWebPath(
          payload,
          ph.src,
          ph.caption ?? ex.title,
        );
        if (mid)
          photos.push({
            image: mid,
            ...(ph.caption ? { caption: ph.caption } : {}),
          });
      }
      const videos =
        ex.videos?.map((v) => ({ title: v.title, url: v.url })) ?? [];

      await payload.create({
        collection: "exhibitions-fund",
        data: {
          sortOrder: ex.id * 10,
          date: ex.date,
          title: ex.title,
          location: ex.location,
          summary: ex.summary,
          description: ex.description,
          photos,
          videos,
        },
        overrideAccess: true,
      });
      n++;
    }
    console.log(`exhibitions-fund: создано ${n} записей.`);
  }

  // --- books ---
  if (!force && (await collectionHasDocs(payload, "books"))) {
    console.log("books: уже есть записи, пропуск.");
  } else {
    let n = 0;
    let sort = 10;
    for (const b of booksData) {
      const img = await getOrCreateMediaFromWebPath(
        payload,
        b.image,
        `${b.title} — обложка`,
      );
      const pdf = await getOrCreateMediaFromWebPath(
        payload,
        b.pdf,
        `${b.title} — PDF`,
      );
      if (!img || !pdf) {
        console.warn(`  книга пропущена (нет файлов): ${b.id}`);
        continue;
      }
      await payload.create({
        collection: "books",
        data: {
          sortOrder: sort,
          key: b.id,
          title: b.title,
          author: b.author,
          year: b.year,
          pages: b.pages,
          circulation: b.circulation,
          description: b.description,
          image: img,
          pdf,
        },
        overrideAccess: true,
      });
      sort += 10;
      n++;
    }
    console.log(`books: создано ${n} записей.`);
  }

  // --- gallery ---
  if (!force && (await collectionHasDocs(payload, "gallery"))) {
    console.log("gallery: уже есть записи, пропуск.");
  } else {
    let n = 0;
    for (const g of galleryData) {
      const img = await getOrCreateMediaFromWebPath(
        payload,
        g.image,
        g.title,
      );
      if (!img) {
        console.warn(`  галерея пропущена: ${g.title}`);
        continue;
      }
      await payload.create({
        collection: "gallery",
        data: {
          sortOrder: g.id * 10,
          title: g.title,
          year: g.year,
          material: g.material,
          dimensions: g.dimensions,
          image: img,
          ...(g.description ? { description: g.description } : {}),
          quotes: (g.quotes ?? []).map((q) => ({
            text: q.text,
            author: q.author,
          })),
          width: g.width,
          height: g.height,
        },
        overrideAccess: true,
      });
      n++;
    }
    console.log(`gallery: создано ${n} записей.`);
  }

  // --- crafts ---
  if (!force && (await collectionHasDocs(payload, "crafts"))) {
    console.log("crafts: уже есть записи, пропуск.");
  } else {
    let n = 0;
    let sort = 10;
    for (const c of craftsData) {
      const src = `/crafts/${c.id}.jpg`;
      const img = await getOrCreateMediaFromWebPath(payload, src, c.title);
      if (!img) {
        console.warn(`  поделка пропущена: ${c.id} ${c.title}`);
        continue;
      }
      await payload.create({
        collection: "crafts",
        data: {
          sortOrder: sort,
          key: c.id,
          title: c.title,
          desc: c.desc?.trim() ? c.desc : "—",
          image: img,
        },
        overrideAccess: true,
      });
      sort += 10;
      n++;
    }
    console.log(`crafts: создано ${n} записей.`);
  }

  // --- exhibitions-uriel ---
  if (!force && (await collectionHasDocs(payload, "exhibitions-uriel"))) {
    console.log("exhibitions-uriel: уже есть записи, пропуск.");
  } else {
    let n = 0;
    for (const ex of exhibitions) {
      await payload.create({
        collection: "exhibitions-uriel",
        data: {
          sortOrder: ex.id * 10,
          date: ex.date,
          title: ex.title,
          location: ex.location,
          hasPhotos: Boolean(ex.hasPhotos),
          ...(ex.slug ? { slug: ex.slug } : {}),
          ...(typeof ex.photoCount === "number"
            ? { photoCount: ex.photoCount }
            : {}),
        },
        overrideAccess: true,
      });
      n++;
    }
    console.log(`exhibitions-uriel: создано ${n} записей.`);
  }

  // --- diplomas ---
  if (!force && (await collectionHasDocs(payload, "diplomas"))) {
    console.log("diplomas: уже есть записи, пропуск.");
  } else {
    let n = 0;
    for (const group of diplomasData) {
      const certificates: { image: number }[] = [];
      for (let i = 0; i < group.count; i++) {
        const suffix = i === 0 ? "" : `_${i + 1}`;
        const ext = group.year === 2010 ? "JPG" : "jpg";
        const webPath = `/diplomas/${group.year}${suffix}.${ext}`;
        const mid = await getOrCreateMediaFromWebPath(
          payload,
          webPath,
          `Диплом ${group.year}${suffix}`,
        );
        if (mid) certificates.push({ image: mid });
      }
      if (certificates.length === 0) {
        console.warn(`  дипломы ${group.year}: нет файлов, пропуск.`);
        continue;
      }
      await payload.create({
        collection: "diplomas",
        data: {
          sortOrder: group.year,
          year: group.year,
          certificates,
        },
        overrideAccess: true,
      });
      n++;
    }
    console.log(`diplomas: создано ${n} записей (по годам).`);
  }

  // --- ships-models ---
  if (!force && (await collectionHasDocs(payload, "ships-models"))) {
    console.log("ships-models: уже есть записи, пропуск.");
  } else {
    const groups: { key: "junior" | "middle" | "senior"; data: typeof junior }[] =
      [
        { key: "junior", data: junior },
        { key: "middle", data: middle },
        { key: "senior", data: senior },
      ];
    let n = 0;
    let sortOrder = 10;
    for (const { key, data: g } of groups) {
      const bgRel = g.background.replace(/^\/public\/?/, "");
      const bgPath = bgRel.startsWith("/") ? bgRel : `/${bgRel}`;
      const bgId = await getOrCreateMediaFromWebPath(
        payload,
        bgPath,
        `${g.name} — фон`,
      );
      if (!bgId) {
        console.warn(`  ships ${key}: нет фона, пропуск группы.`);
        continue;
      }
      const baseRel = g.url.replace(/^\/public\/?/, "");
      const models: { modelId: number; title: string; image: number }[] = [];
      for (const m of g.models) {
        const relJpg = `/${baseRel}/${m.id}.jpg`;
        const relJPG = `/${baseRel}/${m.id}.JPG`;
        const img =
          (await getOrCreateMediaFromWebPath(payload, relJpg, m.title)) ??
          (await getOrCreateMediaFromWebPath(payload, relJPG, m.title));
        if (!img) continue;
        models.push({ modelId: m.id, title: m.title, image: img });
      }
      await payload.create({
        collection: "ships-models",
        data: {
          sortOrder,
          groupKey: key,
          name: g.name,
          background: bgId,
          url: g.url,
          models,
        },
        overrideAccess: true,
      });
      sortOrder += 10;
      n++;
    }
    console.log(`ships-models: создано ${n} групп.`);
  }

  console.log("\nГотово. Проверьте /admin и страницы сайта.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
