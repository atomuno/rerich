import type { Metadata } from "next";
import FoundationHero from "./main";

// Для главной страницы на картинке лучше вывести полное название
const OG_TITLE = "Севастопольский городской фонд Рериха";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Добро пожаловать на официальную страницу Севастопольского городского фонда Рериха. Культурные проекты, история и просвещение.",
  keywords: [
    "Фонд Рериха",
    "СГФР",
    "Севастополь культура",
    "Рериховское движение",
  ],
  openGraph: {
    title: "Севастопольский городской фонд Рериха",
    description: "Культурные проекты, история и просвещение в Севастополе.",
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

export default function FoundationPage() {
  return <FoundationHero />;
}
