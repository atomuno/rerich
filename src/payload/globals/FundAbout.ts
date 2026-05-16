import type { GlobalConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_GLOBAL_LABELS } from "../admin-labels";
import { aboutSidebarFields } from "../fields/aboutSidebar";

export const FundAbout: GlobalConfig = {
  slug: "fund-about",
  label: PAYLOAD_GLOBAL_LABELS.fundAbout,
  admin: { group: PAYLOAD_ADMIN_GROUP.fund },
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
