import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();
const TARGET_DIRS = ["public/gallery", "public/sgfr", "public/exhibitions"];
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const WEBP_QUALITY = 78;

async function walkFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

async function optimizeOneFile(sourcePath) {
  const parsed = path.parse(sourcePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

  const [sourceStat, webpStat] = await Promise.all([
    fs.stat(sourcePath),
    fs.stat(webpPath).catch(() => null),
  ]);

  if (webpStat && webpStat.mtimeMs >= sourceStat.mtimeMs) {
    return { status: "skipped", sourcePath };
  }

  await sharp(sourcePath)
    .rotate()
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(webpPath);

  return { status: "optimized", sourcePath };
}

async function main() {
  let optimized = 0;
  let skipped = 0;

  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.join(PROJECT_ROOT, dir);
    const exists = await fs
      .stat(absoluteDir)
      .then((stat) => stat.isDirectory())
      .catch(() => false);

    if (!exists) {
      continue;
    }

    const allFiles = await walkFiles(absoluteDir);
    const sourceFiles = allFiles.filter((filePath) =>
      SOURCE_EXTENSIONS.has(path.extname(filePath).toLowerCase()),
    );

    for (const sourcePath of sourceFiles) {
      const result = await optimizeOneFile(sourcePath);
      if (result.status === "optimized") optimized += 1;
      if (result.status === "skipped") skipped += 1;
    }
  }

  console.log(
    `Image optimization complete. Optimized: ${optimized}, skipped (up-to-date): ${skipped}`,
  );
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
