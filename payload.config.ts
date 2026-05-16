import path from "node:path";
import { fileURLToPath } from "node:url";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Books } from "./src/payload/collections/Books";
import { ClubGallery } from "./src/payload/collections/ClubGallery";
import { Crafts } from "./src/payload/collections/Crafts";
import { Diplomas } from "./src/payload/collections/Diplomas";
import { ExhibitionsFund } from "./src/payload/collections/ExhibitionsFund";
import { ExhibitionsUriel } from "./src/payload/collections/ExhibitionsUriel";
import { Gallery } from "./src/payload/collections/Gallery";
import { Lectures } from "./src/payload/collections/Lectures";
import { Media } from "./src/payload/collections/Media";
import { ShipsModels } from "./src/payload/collections/ShipsModels";
import { Users } from "./src/payload/collections/Users";
import { Videos } from "./src/payload/collections/Videos";
import { FundAbout } from "./src/payload/globals/FundAbout";
import { FundConferences } from "./src/payload/globals/FundConferences";
import { FundLibrary } from "./src/payload/globals/FundLibrary";
import { FundMuseum } from "./src/payload/globals/FundMuseum";
import { UrielAbout } from "./src/payload/globals/UrielAbout";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (
  process.env.NODE_ENV === "production" &&
  !process.env.PAYLOAD_SECRET?.trim()
) {
  throw new Error(
    "PAYLOAD_SECRET is required in production. Set it in .env on the server.",
  );
}

export default buildConfig({
  admin: {
    user: Users.slug,
    // Расширения браузера (напр. Яндекс) добавляют атрибуты на <html> — иначе hydration warning в dev.
    suppressHydrationWarning: true,
    importMap: {
      baseDir: path.resolve(dirname, "src/payload"),
    },
  },
  collections: [
    Users,
    Media,
    ExhibitionsFund,
    Videos,
    Lectures,
    Books,
    Gallery,
    ShipsModels,
    Crafts,
    ClubGallery,
    ExhibitionsUriel,
    Diplomas,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "src/payload/payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || "file:./payload.sqlite",
    },
    wal: true,
    // Без этого в dev Drizzle ждёт ответ в терминале (y/N) при расхождении схемы —
    // навигация «зависает» на Rendering, а отказ завершает процесс (process.exit).
    push: false,
  }),
  globals: [FundAbout, FundMuseum, FundLibrary, FundConferences, UrielAbout],
  sharp,
  plugins: [],
});
