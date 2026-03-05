import type { Metadata } from "next";
import Org1AboutContent from "./Org1AboutContent";

export const metadata: Metadata = {
  title: "Об организации",
  description:
    "Подробная информация о Севастопольском городском фонде Рериха: история создания, руководство (Анохин А.М.) и официальные реквизиты организации.",
  keywords: [
    "Об организации",
    "РОО СГФР",
    "Александр Михайлович Анохин",
    "реквизиты фонда Рериха",
    "история фонда",
  ],
};

export default function AboutPage() {
  return <Org1AboutContent />;
}
