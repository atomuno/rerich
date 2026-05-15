import type { CollectionConfig } from "payload";

import { authenticated } from "../access/authenticated";

/** Соответствует Exhibition из exhibitionsUrielData */
export const ExhibitionsUriel: CollectionConfig = {
  slug: "exhibitions-uriel",
  defaultSort: "sortOrder",
  admin: {
    group: "Uriel",
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "date", "hasPhotos", "title"],
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
    { name: "date", type: "text", required: true, label: "Дата" },
    { name: "title", type: "text", required: true, label: "Название" },
    { name: "location", type: "text", required: true, label: "Место" },
    {
      name: "hasPhotos",
      type: "checkbox",
      label: "Есть фотогалерея",
      defaultValue: false,
    },
    {
      name: "slug",
      type: "text",
      label: "Slug папки галереи (как в TS)",
    },
    {
      name: "photoCount",
      type: "number",
      label: "Количество фото (как в TS; при переходе на Media можно не использовать)",
    },
  ],
};
