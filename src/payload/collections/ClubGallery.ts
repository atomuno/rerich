import type { CollectionConfig } from "payload";

import { authenticated } from "../access/authenticated";

/** Фото галереи кружков: /uriel/clubs/art и /uriel/clubs/ships */
export const ClubGallery: CollectionConfig = {
  slug: "club-gallery",
  defaultSort: "sortOrder",
  admin: {
    group: "Uriel",
    useAsTitle: "alt",
    defaultColumns: ["sortOrder", "club", "alt"],
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
      label: "Порядок",
    },
    {
      name: "club",
      type: "select",
      required: true,
      label: "Кружок",
      options: [
        { label: "«Озарение» (рисование)", value: "art" },
        { label: "Техническое моделирование", value: "techmodel" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Фото",
    },
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Подпись (alt)",
    },
    {
      name: "width",
      type: "number",
      label: "Ширина (для сетки)",
      defaultValue: 900,
    },
    {
      name: "height",
      type: "number",
      label: "Высота (для сетки)",
      defaultValue: 900,
    },
  ],
};
