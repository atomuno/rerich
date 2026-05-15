import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchUrielAbout } from "@/lib/cms/payload-queries";

import UrielAbout from "./Org2About";

export const dynamic = "force-dynamic";

// Текст, который будет отрисован нашим стильным генератором на Playfair Display
const OG_TITLE = "Об организации: СГЦДТ «Уриэль»";
const PAGE_PATH = "/uriel/about";

export const metadata: Metadata = {
  title: "Об организации",
  description:
    "Сведения о Севастопольском городском центре детского творчества «Уриэль» имени Н.К. Рериха. История центра, руководство и официальные реквизиты СГЦДТ.",
  keywords: [
    "Центр Уриэль Севастополь",
    "СГЦДТ Уриэль",
    "детское творчество Севастополь",
    "реквизиты Уриэль",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "О центре «Уриэль» — История и реквизиты",
    description:
      "Официальная информация о Севастопольском центре детского творчества.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
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
  twitter: {
    card: "summary_large_image",
    title: "О центре «Уриэль» — История и реквизиты",
    description:
      "Официальная информация о Севастопольском центре детского творчества.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default async function AboutPage() {
  const data = await fetchUrielAbout();
  if (!data) notFound();
  return <UrielAbout data={data} />;
}
