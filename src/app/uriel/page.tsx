import type { Metadata } from "next";
import CenterHero from "./main";

// Для превью выведем полное красивое название центра
const OG_TITLE = "Центр детского творчества «Уриэль»";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Добро пожаловать в СГЦДТ «Уриэль» — центр художественного воспитания и творческого развития детей в Севастополе.",
  keywords: [
    "детское творчество",
    "художественная школа Севастополь",
    "Уриэль",
    "центр Рериха",
    "развитие детей",
  ],
  openGraph: {
    title: "СГЦДТ «Уриэль» — Творческое развитие в Севастополе",
    description: "Художественное воспитание и развитие талантов в Севастополе.",
    url: "http://sevcrf.ru/uriel",
    siteName: "Рериховский Центр Севастополя",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        // Наш динамический генератор сделает стильную афишу центра
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
};

export default function CenterPage() {
  return <CenterHero />;
}
