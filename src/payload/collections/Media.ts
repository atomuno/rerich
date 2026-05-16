import path from "node:path";
import { fileURLToPath } from "node:url";

import type { CollectionConfig } from "payload";

import { PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  labels: PAYLOAD_COLLECTION_LABELS.media,
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Описание (alt)",
    },
  ],
  upload: {
    staticDir: path.resolve(dirname, "../../../public/media"),
    mimeTypes: ["image/*", "application/pdf"],
    adminThumbnail: "thumbnail",
    focalPoint: true,
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        position: "centre",
      },
    ],
  },
};
