import type { Metadata } from "next";
import FundAboutContent from "./Org1AboutContent";

const TITLE = "Об организации";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Подробная информация о Севастопольском городском фонде Рерихов: история создания, руководство (Анохин А.М.) и официальные реквизиты организации.",
  keywords: [
    "Об организации",
    "РОО СГФР",
    "Александр Михайлович Анохин",
    "реквизиты фонда Рерихов",
    "история фонда",
  ],
  // Добавляем динамическую картинку для этой страницы
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(TITLE)}`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default function AboutPage() {
  return <FundAboutContent />;
}
