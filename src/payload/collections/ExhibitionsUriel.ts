import type { CollectionConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_COLLECTION_LABELS } from "../admin-labels";
import { authenticated } from "../access/authenticated";

/** Выставки центра «Уриэль» — /uriel/exhibitions */
export const ExhibitionsUriel: CollectionConfig = {
  slug: "exhibitions-uriel",
  defaultSort: "sortOrder",
  labels: PAYLOAD_COLLECTION_LABELS.exhibitionsUriel,
  admin: {
    group: PAYLOAD_ADMIN_GROUP.uriel,
    useAsTitle: "title",
    defaultColumns: ["sortOrder", "date", "title", "location"],
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
      name: "photos",
      type: "array",
      label: "Фото",
      labels: { singular: "Фото", plural: "Фотографии" },
      admin: {
        description:
          "Если добавлены фото, на сайте выставка откроется с галереей.",
      },
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
