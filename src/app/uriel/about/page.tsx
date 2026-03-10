import type { Metadata } from "next";
import UrielAbout from "./Org2About";

// Текст, который будет отрисован нашим стильным генератором на Playfair Display
const OG_TITLE = "Об организации: СГЦДТ «Уриэль»";

export const metadata: Metadata = {
  title: "Об организации",
  description:
    "Сведения о Севастопольском городском центре детского творчества «Уриэль» имени Н.К. Рериха. История центра, руководство и официальные реквизиты СГЦДТ.",
  keywords: [
    "Центр Уриэль Севастополь",
    "СГЦДТ Уриэль",
    "Александр Михайлович Анохин",
    "детское творчество Севастополь",
    "реквизиты Уриэль",
  ],
  openGraph: {
    title: "О центре «Уриэль» — История и реквизиты",
    description:
      "Официальная информация о Севастопольском центре детского творчества.",
    url: "http://sevcrf.ru/uriel/about",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        // Наш динамический API с ярким градиентом и сочным шрифтом
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
};

export default function AboutPage() {
  return <UrielAbout />;
}
