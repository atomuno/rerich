import path from "node:path";
import { fileURLToPath } from "node:url";

import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Books } from "./src/payload/collections/Books";
import { Conferences } from "./src/payload/collections/Conferences";
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

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, "src/payload"),
    },
  },
  collections: [
    Users,
    Media,
    ExhibitionsFund,
    Conferences,
    Videos,
    Lectures,
    Books,
    Gallery,
    ShipsModels,
    Crafts,
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
  }),
  sharp,
  plugins: [],
});
