import { Metadata } from "next";
import MuseumPage from "./MuseumPage";

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
    title: "Историко-технический музей в моделях морских судов",
    description:
      "Бесплатные экскурсии по морской тематике и выставка Петриковской росписи в Севастополе.",
    url: "https://uriel-centre.ru/fund/museum", // Замените на ваш реальный домен
    siteName: "Центр Уриэль",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/museum-og-preview.jpg", // Ссылка на превью для соцсетей в папке public
        width: 1200,
        height: 630,
        alt: "Интерьер музея моделей морских судов",
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
