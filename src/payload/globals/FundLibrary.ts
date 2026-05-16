import type { GlobalConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_GLOBAL_LABELS } from "../admin-labels";

/** Страница /fund/library */
export const FundLibrary: GlobalConfig = {
  slug: "fund-library",
  label: PAYLOAD_GLOBAL_LABELS.fundLibrary,
  admin: { group: PAYLOAD_ADMIN_GROUP.fund },
  access: { read: () => true },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Шапка страницы",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              defaultValue: "Общественно-массовая библиотека",
              label: "Заголовок",
              admin: {
                description: "Перенос строки — через Enter (отображается в две строки).",
              },
            },
            {
              name: "address",
              type: "text",
              required: true,
              defaultValue: "ул. Бориса Михайлова 17-А",
              label: "Адрес",
            },
            {
              name: "schedule",
              type: "text",
              required: true,
              defaultValue: "пн — сб: 10.00 – 15.00",
              label: "Время работы",
            },
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
              label: "Главное фото",
              admin: {
                description:
                  "Если не задано, на сайте используется /biblio.jpg.",
              },
            },
          ],
        },
        {
          label: "Историческая справка",
          fields: [
            {
              name: "historyText",
              type: "textarea",
              required: true,
              label: "Текст справки",
              defaultValue:
                "Библиотека основана 12 июля 1994 г., зарегистрирована как общественно-массовая библиотека Севастопольского городского фонда Рерихов 10 июля 2003 г. в Управлении Культуры Севастопольской городской государственной администрации. Регистрационная карточка № 1. На 10 июля 2008 г. библиотечный фонд содержит 11 250 экземпляров книг по десяти отделам библиотечной классификации из многих отраслей знания.",
            },
            {
              name: "fundCount",
              type: "text",
              required: true,
              defaultValue: "11 250",
              label: "Число для выделения в тексте",
              admin: {
                description:
                  "Фрагмент из текста справки, который на сайте выделяется синим (например: 11 250).",
              },
            },
          ],
        },
        {
          label: "Статистика фонда",
          fields: [
            {
              name: "statsHeading",
              type: "text",
              required: true,
              defaultValue: "Статистика фонда",
              label: "Заголовок раздела",
            },
            {
              name: "statsRows",
              type: "array",
              label: "Строки таблицы",
              labels: { singular: "Строка", plural: "Строки" },
              required: true,
              fields: [
                {
                  name: "category",
                  type: "text",
                  required: true,
                  label: "Категория знания",
                },
                {
                  name: "count",
                  type: "text",
                  required: true,
                  label: "Фонд (экз.)",
                },
              ],
            },
            {
              name: "statsTotalLabel",
              type: "text",
              required: true,
              defaultValue: "Всего в наличии:",
              label: "Подпись итога",
            },
            {
              name: "statsTotalValue",
              type: "text",
              required: true,
              defaultValue: "11 250 книг",
              label: "Итоговое значение",
            },
          ],
        },
      ],
    },
  ],
};
