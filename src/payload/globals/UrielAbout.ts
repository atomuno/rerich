import type { GlobalConfig } from "payload";

import { PAYLOAD_ADMIN_GROUP, PAYLOAD_GLOBAL_LABELS } from "../admin-labels";
import { aboutSidebarFields } from "../fields/aboutSidebar";

export const UrielAbout: GlobalConfig = {
  slug: "uriel-about",
  label: PAYLOAD_GLOBAL_LABELS.urielAbout,
  admin: { group: PAYLOAD_ADMIN_GROUP.uriel },
  access: { read: () => true },
  fields: [
    { name: "pageTitle", type: "text", required: true, label: "Заголовок" },
    { name: "subtitle", type: "text", required: true, label: "Подзаголовок" },
    {
      name: "introLabel",
      type: "text",
      required: true,
      label: "Метка «Организация»",
    },
    {
      name: "orgFullName",
      type: "textarea",
      required: true,
      label: "Полное название организации",
    },
    {
      name: "introText",
      type: "textarea",
      required: true,
      label: "Текст после названия (**жирный** для даты)",
    },
    {
      name: "goalsHeading",
      type: "text",
      required: true,
      label: "Заголовок целей",
    },
    {
      name: "goals",
      type: "array",
      label: "Цели",
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
      label: "Подвал",
    },
    ...aboutSidebarFields,
  ],
};
