/**
 * Перенос фото выставок «Уриэль» из public/exhibitions/{slug}/ в Payload (поле photos).
 * Параметры legacy (slug, photoCount) берутся из src/data/exhibitionsUrielData.ts по id выставки.
 * Папка public/exhibitions удалена из репозитория после миграции — для повторного запуска
 * восстановите её из архива backup или старого коммита.
 * Безопасно повторять: пропускает записи, у которых photos уже заполнен.
 *
 * npm run payload:migrate-uriel-exhibitions
 * npm run payload:migrate-uriel-exhibitions -- --force   # перезалить photos
 */

import "./env-bootstrap";

import { getPayload } from "payload";

import config from "../payload.config";
import { exhibitions } from "../src/data/exhibitionsUrielData";
import { buildUrielExhibitionPhotos } from "./lib/payload-media";

function legacyMetaForSortOrder(sortOrder: number) {
  const id = Math.round(sortOrder / 10);
  return exhibitions.find((ex) => ex.id === id);
}

async function main(): Promise<void> {
  if (!process.env.PAYLOAD_SECRET?.trim()) {
    console.error("Нет PAYLOAD_SECRET (.env.local).");
    process.exit(1);
  }

  const force = process.argv.includes("--force");
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "exhibitions-uriel",
    limit: 500,
    depth: 0,
    overrideAccess: true,
  });

  let updated = 0;
  let skipped = 0;
  let empty = 0;

  for (const doc of docs) {
    const title = String(doc.title ?? "Выставка");
    const existing = Array.isArray(doc.photos) ? doc.photos : [];
    const sortOrder = Number(doc.sortOrder ?? 0);
    const legacy = legacyMetaForSortOrder(sortOrder);
    const slug = legacy?.slug?.trim() ?? "";

    if (!legacy?.hasPhotos || !slug) {
      skipped++;
      continue;
    }

    if (existing.length > 0 && !force) {
      skipped++;
      continue;
    }

    const photoCount = legacy.photoCount ?? 0;
    console.log(`→ ${title} (${slug}, ожидается ~${photoCount || "?"} фото)`);
    const photos = await buildUrielExhibitionPhotos(
      payload,
      slug,
      photoCount,
      title,
    );

    if (photos.length === 0) {
      console.warn(`  нет загруженных файлов для slug=${slug}`);
      empty++;
      continue;
    }

    await payload.update({
      collection: "exhibitions-uriel",
      id: doc.id,
      data: { photos },
      overrideAccess: true,
    });
    console.log(`  ✓ ${photos.length} фото`);
    updated++;
  }

  console.log(
    `\nГотово: обновлено ${updated}, пропущено ${skipped}, без файлов ${empty}.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
