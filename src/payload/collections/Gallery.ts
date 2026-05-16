import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/** Соответствует GalleryItem + Quote; image → Media */
export const Gallery: CollectionConfig = {
  slug: "gallery",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.gallery,
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
    { name: "title", type: "text", required: true, label: "Название" },
    { name: "year", type: "text", required: true, label: "Год" },
    { name: "material", type: "text", required: true, label: "Материал" },
    {
      name: "dimensions",
      type: "text",
      required: true,
      label: "Размеры",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Изображение",
    },
    { name: "description", type: "textarea", label: "Описание" },
    {
      name: "quotes",
      type: "array",
      label: "Цитаты",
      fields: [
        { name: "text", type: "textarea", required: true, label: "Текст" },
        { name: "author", type: "text", required: true, label: "Автор" },
      ],
    },
    {
      name: "width",
      type: "number",
      required: true,
      label: "Ширина (px)",
    },
    {
      name: "height",
      type: "number",
      required: true,
      label: "Высота (px)",
    },
  ],
};
