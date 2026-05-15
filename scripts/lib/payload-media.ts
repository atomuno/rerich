import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

import type { getPayload } from "payload";

export type PayloadInstance = Awaited<ReturnType<typeof getPayload>>;

const mediaIdBySource = new Map<string, number>();

export function clearPayloadMediaCache(): void {
  mediaIdBySource.clear();
}

export function absolutePublicPath(webPath: string): string {
  const rel = webPath.startsWith("/") ? webPath.slice(1) : webPath;
  const parts = rel.split("/").filter(Boolean);
  return path.join(process.cwd(), "public", ...parts);
}

export function fileExistsVariants(webPath: string): string | null {
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

export async function getOrCreateMediaFromWebPath(
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

/** Нумерованные 01.jpg, 02.jpg … в папке public/exhibitions/{slug}/ */
export function listExhibitionJpgPaths(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "exhibitions", slug);
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => {
      const na = Number.parseInt(a.replace(/\D/g, ""), 10) || 0;
      const nb = Number.parseInt(b.replace(/\D/g, ""), 10) || 0;
      return na - nb;
    })
    .map((f) => `/exhibitions/${slug}/${f}`);
}

export type ExhibitionPhotoRow = { image: number; caption?: string };

/** Загружает фото выставки «Уриэль» в Media. */
export async function buildUrielExhibitionPhotos(
  payload: PayloadInstance,
  slug: string,
  photoCount: number,
  title: string,
): Promise<ExhibitionPhotoRow[]> {
  const webPaths =
    photoCount > 0
      ? Array.from({ length: photoCount }, (_, i) => {
          const n = (i + 1).toString().padStart(2, "0");
          return `/exhibitions/${slug}/${n}.jpg`;
        })
      : listExhibitionJpgPaths(slug);

  const photos: ExhibitionPhotoRow[] = [];
  for (const webPath of webPaths) {
    const base = webPath.split("/").pop() ?? "";
    const mid = await getOrCreateMediaFromWebPath(
      payload,
      webPath,
      `${title} — ${base}`,
    );
    if (mid) photos.push({ image: mid });
  }
  return photos;
}
