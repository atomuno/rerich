import type { GlobalConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_GLOBAL_LABELS } from "../admin-labels";

const talkFields = [
  {
    name: "sortOrder",
    type: "number" as const,
    required: true,
    defaultValue: 0,
    label: "Порядок сортировки",
  },
  { name: "title", type: "text" as const, required: true, label: "Название" },
  { name: "speaker", type: "text" as const, required: true, label: "Докладчик" },
  { name: "date", type: "text" as const, required: true, label: "Дата" },
  { name: "url", type: "text" as const, required: true, label: "Ссылка (Rutube)" },
  { name: "tag", type: "text" as const, required: true, label: "Тег / рубрика" },
];

/** Страница /fund/science/conferences: PDF и видеоматериалы в одном разделе админки. */
export const FundConferences: GlobalConfig = {
  slug: "fund-conferences",
  label: PAYLOAD_GLOBAL_LABELS.fundConferences,
  admin: { group: PAYLOAD_ADMIN_GROUP.fund },
  access: { read: () => true },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "PDF",
          fields: [
            {
              name: "sectionTitle",
              type: "text",
              required: true,
              defaultValue: "Сборник материалов конференции",
              label: "Заголовок секции (PDF)",
            },
            {
              name: "proceedingsPdf",
              type: "upload",
              relationTo: "media",
              label: "PDF для предпросмотра",
              admin: {
                description:
                  "Документ отображается на странице конференций перед блоком «Видеоматериалы конференции».",
              },
            },
          ],
        },
        {
          label: "Видеоматериалы",
          fields: [
            {
              name: "talks",
              type: "array",
              label: "Доклады",
              labels: { singular: "Доклад", plural: "Доклады" },
              admin: {
                initCollapsed: false,
                description: "Карточки с видеозаписями на странице конференции.",
              },
              fields: talkFields,
            },
          ],
        },
      ],
    },
  ],
};
