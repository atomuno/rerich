import type { Metadata } from "next";
import FundExhibitionsContent from "./exhibitions-content";

const PAGE_TITLE = "Выставки фонда";
const OG_TITLE = "Выставочные проекты СГФР";
const PAGE_PATH = "/fund/exhibitions";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Архив выставок Севастопольского городского фонда Рерихов: культурные проекты, международные инициативы, фотоархив и видеоматериалы.",
  keywords: [
    "СГФР",
    "выставки фонда Рерихов",
    "Севастополь выставки",
    "Пакт Рериха выставка",
    "архив СГФР",
    "Н.К. Рерих выставки",
    "С.Н. Рерих выставки",
    "культурные проекты Севастополя",
    "международный выставочный проект",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: OG_TITLE,
    description:
      "Хроника выставочных проектов Севастопольского городского фонда Рерихов в Севастополе.",
    url: PAGE_PATH,
    locale: "ru_RU",
    type: "website",
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
    description:
      "Архив выставочных проектов СГФР: ключевые события, фотографии и видеоматериалы.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FundExhibitionsPage() {
  return <FundExhibitionsContent />;
}
