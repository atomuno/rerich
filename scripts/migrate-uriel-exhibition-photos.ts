/**
 * Перенос фото выставок «Уриэль» из public/exhibitions/{slug}/ в Payload (поле photos).
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
import { buildUrielExhibitionPhotos } from "./lib/payload-media";

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
    const slug = typeof doc.slug === "string" ? doc.slug.trim() : "";
    const title = String(doc.title ?? "Выставка");
    const existing = Array.isArray(doc.photos) ? doc.photos : [];
    const photoCount =
      typeof doc.photoCount === "number" ? doc.photoCount : 0;
    const legacyHasPhotos = Boolean(doc.hasPhotos);

    if (!slug && !legacyHasPhotos) {
      skipped++;
      continue;
    }

    if (existing.length > 0 && !force) {
      skipped++;
      continue;
    }

    if (!slug) {
      console.warn(`  id=${doc.id}: hasPhotos без slug, пропуск`);
      empty++;
      continue;
    }

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
      data: {
        photos,
        hasPhotos: true,
        photoCount: photos.length,
      },
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
