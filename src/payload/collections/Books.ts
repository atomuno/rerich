import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/**
 * Соответствует Book: id → key (строковый идентификатор),
 * image / pdf → связи с media (PDF разрешён в коллекции Media).
 */
export const Books: CollectionConfig = {
  slug: "books",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.books,
  admin: {
    group: PAYLOAD_ADMIN_GROUP.fund,
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "title", "year"],
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
      label: "ID (как в books.ts: id)",
    },
    { name: "title", type: "text", required: true, label: "Название" },
    { name: "author", type: "text", required: true, label: "Автор" },
    { name: "year", type: "text", required: true, label: "Год" },
    { name: "pages", type: "text", required: true, label: "Объём" },
    {
      name: "circulation",
      type: "text",
      required: true,
      label: "Тираж",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Описание",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Обложка",
    },
    {
      name: "pdf",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "PDF",
    },
  ],
};
