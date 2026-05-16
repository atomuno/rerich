import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/** Соответствует FundVideoItem */
export const Videos: CollectionConfig = {
  slug: "videos",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.videos,
  admin: {
    group: PAYLOAD_ADMIN_GROUP.fund,
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "title"],
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
    { name: "title", type: "text", required: true, label: "Название" },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Описание",
    },
    {
      name: "rutubeUrl",
      type: "text",
      required: true,
      label: "Ссылка Rutube",
    },
  ],
};
