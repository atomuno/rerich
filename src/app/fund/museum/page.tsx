import { Metadata } from "next";
import MuseumPage from "./MuseumPage";

const OG_TITLE = 'Историко-технический музей в моделях морских судов"';

// ОБЪЕКТ SEO (Metadata API)
export const metadata: Metadata = {
  title: "Историко-технический музей в моделях морских судов | Севастополь",
  description:
    "Посетите уникальный музей моделей морских судов в Севастополе. Руководитель Васильцова Галина Михайловна. Вход свободный. Экспозиции: морская тематика и Петриковская роспись.",
  keywords: [
    "музей моделей судов",
    "Севастополь",
    "Бориса Михайлова 17-А",
    "Петриковская роспись",
    "Васильцова Галина Михайловна",
    "бесплатные музеи Севастополя",
    "фонд Рерихов",
  ],
  authors: [{ name: "Севастопольский городской фонд Рерихов" }],
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Разметка JSON-LD для Google (структурированные данные) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Museum",
            name: "Историко-технический музей в моделях морских судов",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ул. Бориса Михайлова, 17-А",
              addressLocality: "Севастополь",
              addressCountry: "RU",
            },
            openingHours: "Sa,Su 11:00-16:00",
            isAccessibleForFree: true,
            publicAccess: true,
            manager: "Васильцова Галина Михайловна",
          }),
        }}
      />

      {/* Основной контент страницы */}
      <MuseumPage />
    </>
  );
}
