/**
 * Webp-вариант есть только у legacy-файлов в public/ (рядом лежит .webp).
 * У Payload Media URL вида /api/media/file/… — отдельного .webp нет.
 */
export function optionalWebpSrc(src: string): string | null {
  if (!src || src.includes("/api/media/")) return null;
  if (!/\.(jpe?g|png)$/i.test(src)) return null;
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}
