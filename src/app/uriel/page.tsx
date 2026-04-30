import type { Metadata } from "next";
import CenterHero from "./main";

// Для превью выведем полное красивое название центра
const OG_TITLE = "Центр детского творчества «Уриэль»";
const PAGE_PATH = "/uriel";

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
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "СГЦДТ «Уриэль» — Творческое развитие в Севастополе",
    description: "Художественное воспитание и развитие талантов в Севастополе.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
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
  twitter: {
    card: "summary_large_image",
    title: "СГЦДТ «Уриэль» — Творческое развитие в Севастополе",
    description: "Художественное воспитание и развитие талантов в Севастополе.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default function CenterPage() {
  return <CenterHero />;
}
