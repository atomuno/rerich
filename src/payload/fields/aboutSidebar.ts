import type { Field } from "payload";

export const aboutSidebarFields: Field[] = [
  {
    name: "sidebarTitle",
    type: "text",
    required: true,
    label: "Заголовок боковой панели",
  },
  {
    name: "address",
    type: "text",
    required: true,
    label: "Адрес",
  },
  { name: "ogrn", type: "text", required: true, label: "ОГРН" },
  { name: "inn", type: "text", required: true, label: "ИНН" },
  { name: "kpp", type: "text", required: true, label: "КПП" },
  {
    name: "registeredAt",
    type: "text",
    required: true,
    label: "Дата регистрации",
  },
];
