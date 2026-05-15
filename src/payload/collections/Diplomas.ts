import type { CollectionConfig } from "payload";

import { authenticated } from "../access/authenticated";

/**
 * Один документ на год: сертификаты как массив Media.
 * На фронте count = длина массива (эквивалент DiplomaGroup.count).
 */
export const Diplomas: CollectionConfig = {
  slug: "diplomas",
  defaultSort: "sortOrder",
  admin: {
    group: "Uriel",
    useAsTitle: "year",
    defaultColumns: ["sortOrder", "year"],
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
      name: "year",
      type: "number",
      required: true,
      unique: true,
      label: "Год",
    },
    {
      name: "certificates",
      type: "array",
      label: "Грамоты / дипломы (порядок = порядок в сетке)",
      minRows: 1,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Изображение",
        },
      ],
    },
  ],
};
