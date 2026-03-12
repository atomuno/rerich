import type { Metadata } from "next";
import GalleryContent from "./gallery-content"; // Перенеси основной код сюда

const PAGE_TITLE = "Галерея картин Л.Л. Кирилловой";
const OG_TITLE = "Галерея картин Л.Л. Кирилловой — СГФР";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Виртуальная экспозиция работ Людмилы Леонидовны Кирилловой из коллекции Севастопольского городского фонда Рерихов. Философия Живой Этики в красках.",
  keywords: [
    "Людмила Кириллова",
    "художник Севастополь",
    "галерея картин",
    "Живая Этика искусство",
    "СГФР галерея",
    "культурное наследие Рерихов",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "Познайте красоту мироздания через творчество Л.Л. Кирилловой.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
