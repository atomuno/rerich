/**
 * Перенос фото кружков из public/drawing и public/techmodel в Payload.
 * Папки удалены из репо после миграции — для повторного запуска восстановите из архива.
 *
 * npm run payload:migrate-club-photos   (NODE_ENV=production — не запускайте при активном npm run dev)
 * npm run payload:migrate-club-photos -- --force
 */

import "./env-bootstrap";

import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

import { getPayload } from "payload";

import config from "../payload.config";
import { getOrCreateMediaFromWebPath } from "./lib/payload-media";

type ClubKey = "art" | "techmodel";

const CLUBS: {
  club: ClubKey;
  folder: string;
  defaultAlt: string;
}[] = [
  {
    club: "art",
    folder: "drawing",
    defaultAlt: "Занятия в художественном кружке",
  },
  {
    club: "techmodel",
    folder: "techmodel",
    defaultAlt: "Техническое моделирование",
  },
];

function listJpgPaths(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", folder);
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => {
      const na = Number.parseInt(a.replace(/\D/g, ""), 10) || 0;
      const nb = Number.parseInt(b.replace(/\D/g, ""), 10) || 0;
      return na - nb;
    })
    .map((f) => `/${folder}/${f}`);
}

async function clubHasPhotos(
  payload: Awaited<ReturnType<typeof getPayload>>,
  club: ClubKey,
): Promise<boolean> {
  const res = await payload.find({
    collection: "club-gallery",
    where: { club: { equals: club } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  });
  return res.totalDocs > 0;
}

async function main(): Promise<void> {
  if (!process.env.PAYLOAD_SECRET?.trim()) {
    console.error("Нет PAYLOAD_SECRET (.env.local).");
    process.exit(1);
  }

  const force = process.argv.includes("--force");
  const payload = await getPayload({ config });

  for (const { club, folder, defaultAlt } of CLUBS) {
    if (!force && (await clubHasPhotos(payload, club))) {
      console.log(`${club}: записи уже есть, пропуск.`);
      continue;
    }

    if (force) {
      const existing = await payload.find({
        collection: "club-gallery",
        where: { club: { equals: club } },
        limit: 200,
        depth: 0,
        overrideAccess: true,
      });
      for (const doc of existing.docs) {
        await payload.delete({
          collection: "club-gallery",
          id: doc.id,
          overrideAccess: true,
        });
      }
    }

    const webPaths = listJpgPaths(folder);
    if (webPaths.length === 0) {
      console.warn(`${club}: нет файлов в public/${folder}`);
      continue;
    }

    console.log(`→ ${club}: ${webPaths.length} фото`);
    let sort = 10;
    let created = 0;

    for (const webPath of webPaths) {
      const fileName = webPath.split("/").pop() ?? "";
      const mid = await getOrCreateMediaFromWebPath(
        payload,
        webPath,
        `${defaultAlt} — ${fileName}`,
      );
      if (!mid) continue;

      const index = created;
      const width = 900;
      const height =
        club === "art"
          ? index % 3 === 0
            ? 1200
            : 900
          : index % 2 === 0
            ? 1000
            : 700;

      await payload.create({
        collection: "club-gallery",
        data: {
          sortOrder: sort,
          club,
          image: mid,
          alt: defaultAlt,
          width,
          height,
        },
        overrideAccess: true,
      });
      sort += 10;
      created++;
    }

    console.log(`  ✓ создано ${created}`);
  }

  console.log("\nГотово.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
