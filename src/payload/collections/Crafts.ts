import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/** Соответствует элементам craftsData; изображение — Media вместо /crafts/{id}.jpg */
export const Crafts: CollectionConfig = {
  slug: "crafts",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.crafts,
  admin: {
    group: PAYLOAD_ADMIN_GROUP.uriel,
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "key", "title"],
  },
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "sortOrder",
      type: "number",
      required: true,
      defaultValue: 0,
      label: "Порядок сортировки",
    },
    {
      name: "key",
      type: "text",
      required: true,
      unique: true,
      label: "ID (как id в craftsData, напр. 01)",
    },
    { name: "title", type: "text", required: true, label: "Название" },
    {
      name: "desc",
      type: "textarea",
      required: true,
      label: "Описание (desc)",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Фото работы",
    },
  ],
};
