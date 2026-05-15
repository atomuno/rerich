import type { CollectionConfig } from "payload";

import { authenticated } from "../access/authenticated";

/**
 * Структура как junior / middle / senior в shipsData:
 * name, background → Media, url, models[] { id, title } + фото модели в Media.
 */
export const ShipsModels: CollectionConfig = {
  slug: "ships-models",
  defaultSort: "sortOrder",
  admin: {
    group: "Uriel",
    useAsTitle: "name",
    defaultColumns: ["sortOrder", "groupKey", "name"],
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
      label: "Порядок групп",
    },
    {
      name: "groupKey",
      type: "select",
      required: true,
      unique: true,
      label: "Ключ группы",
      options: [
        { label: "Младшая (junior)", value: "junior" },
        { label: "Средняя (middle)", value: "middle" },
        { label: "Старшая (senior)", value: "senior" },
      ],
    },
    { name: "name", type: "text", required: true, label: "Название группы" },
    {
      name: "background",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Фон (background)",
    },
    {
      name: "url",
      type: "text",
      required: true,
      label: "Базовый URL (как в shipsData.url)",
    },
    {
      name: "models",
      type: "array",
      label: "Модели",
      fields: [
        {
          name: "modelId",
          type: "number",
          required: true,
          label: "ID модели (как id в shipsData.models)",
        },
        { name: "title", type: "text", required: true, label: "Название" },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Фото модели",
        },
      ],
    },
  ],
};
