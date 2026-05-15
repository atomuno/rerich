import type { CollectionConfig } from "payload";

import { authenticated } from "../access/authenticated";

/** Соответствует FundExhibition + ExhibitionPhoto (image → Media) + ExhibitionVideo */
export const ExhibitionsFund: CollectionConfig = {
  slug: "exhibitions-fund",
  defaultSort: "sortOrder",
  admin: {
    group: "Fund",
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "title", "date"],
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
    { name: "date", type: "text", required: true, label: "Даты" },
    { name: "title", type: "text", required: true, label: "Название" },
    { name: "location", type: "text", required: true, label: "Место" },
    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Кратко",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Описание",
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
    {
      name: "videos",
      type: "array",
      label: "Видео",
      fields: [
        { name: "title", type: "text", required: true, label: "Заголовок" },
        { name: "url", type: "text", required: true, label: "Ссылка" },
      ],
    },
  ],
};
