import type { Metadata } from "next";
import FoundationHero from "./main";

// Для главной страницы на картинке лучше вывести полное название
const OG_TITLE = "Севастопольский городской фонд Рерихов";
const PAGE_PATH = "/fund";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Добро пожаловать на официальную страницу Севастопольского городского фонда Рерихов. Культурные проекты, история и просвещение.",
  keywords: [
    "Фонд Рерихов",
    "СГФР",
    "Севастополь культура",
    "Рериховское движение",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Севастопольский городской фонд Рерихов",
    description: "Культурные проекты, история и просвещение в Севастополе.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: "Культурные проекты, история и просвещение в Севастополе.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default function FoundationPage() {
  return <FoundationHero />;
}
