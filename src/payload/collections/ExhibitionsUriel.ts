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
      label: "Есть фотогалерея (устарело — см. поле «Фото»)",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug legacy-папки (public/exhibitions)",
      admin: {
        description: "Используется скриптом миграции; после переноса можно оставить для справки.",
        position: "sidebar",
      },
    },
    {
      name: "photoCount",
      type: "number",
      label: "Кол-во фото legacy (для миграции)",
      admin: { position: "sidebar" },
    },
    {
      name: "photos",
      type: "array",
      label: "Фото",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Изображение",
        },
        { name: "caption", type: "text", label: "Подпись" },
      ],
    },
  ],
};
