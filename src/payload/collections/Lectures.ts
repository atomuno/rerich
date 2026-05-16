import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/** Лекторий: title, speaker, date, url, опциональный tag; сортировка sortOrder */
export const Lectures: CollectionConfig = {
  slug: "lectures",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.lectures,
  admin: {
    group: PAYLOAD_ADMIN_GROUP.fund,
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "tag", "title", "date"],
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
    { name: "speaker", type: "text", required: true, label: "Лектор" },
    { name: "date", type: "text", required: true, label: "Дата" },
    { name: "url", type: "text", required: true, label: "Ссылка (Rutube)" },
    { name: "tag", type: "text", label: "Тег / рубрика" },
  ],
};
