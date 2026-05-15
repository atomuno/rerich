import type { GlobalConfig } from "payload";

import { aboutSidebarFields } from "../fields/aboutSidebar";

export const FundAbout: GlobalConfig = {
  slug: "fund-about",
  label: "Фонд — О нас",
  admin: { group: "Страницы" },
  access: { read: () => true },
  fields: [
    { name: "pageTitle", type: "text", required: true, label: "Заголовок страницы" },
    {
      name: "introText",
      type: "textarea",
      required: true,
      label: "Вводный абзац (**жирный**)",
    },
    {
      name: "goalsHeading",
      type: "text",
      required: true,
      label: "Заголовок блока целей",
    },
    {
      name: "goals",
      type: "array",
      label: "Цели деятельности",
      fields: [{ name: "text", type: "textarea", required: true, label: "Пункт" }],
    },
    {
      name: "closingText",
      type: "text",
      required: true,
      label: "Заключительный абзац",
    },
    {
      name: "footerText",
      type: "text",
      required: true,
      label: "Текст в подвале страницы",
    },
    ...aboutSidebarFields,
  ],
};
