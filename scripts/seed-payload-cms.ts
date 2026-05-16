/**
 * Опциональный первичный импорт из src/data/* в пустую SQLite (см. DATABASE_URL).
 * В обычной работе источник правды — БД + public/media; переносите их между серверами
 * (npm run payload:backup / payload:restore). Повторный seed без --force не трогает
 * коллекции, где уже есть документы. --force затирает контент и media (users не трогаем).
 * Для полного seed:cms --force нужны legacy-файлы (см. scripts/seed-payload-cms.ts в репозитории
 * или восстановите payload:restore из архива). Сайт читает только payload.sqlite + public/media.
 * Одноразовые миграции: payload:migrate-uriel-exhibitions, payload:migrate-club-photos,
 * payload:migrate-fund-conferences (страница конференций: PDF + доклады).
 *
 * Запуск: npm run seed:cms   |   Полная перезаливка: npm run seed:cms -- --force
 */

import "./env-bootstrap";

import { getPayload } from "payload";

import config from "../payload.config";
import {
  buildUrielExhibitionPhotos,
  clearPayloadMediaCache,
  getOrCreateMediaFromWebPath,
  type PayloadInstance,
} from "./lib/payload-media";
import { booksData } from "../src/data/books";
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
  "videos",
  "lectures",
  "media",
] as const;

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
    clearPayloadMediaCache();
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
      const photos =
        ex.hasPhotos && ex.slug
          ? await buildUrielExhibitionPhotos(
              payload,
              ex.slug,
              ex.photoCount ?? 0,
              ex.title,
            )
          : [];

      await payload.create({
        collection: "exhibitions-uriel",
        data: {
          sortOrder: ex.id * 10,
          date: ex.date,
          title: ex.title,
          location: ex.location,
          ...(photos.length ? { photos } : {}),
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
