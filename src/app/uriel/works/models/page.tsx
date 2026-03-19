import type { Metadata } from "next";
import ShipModelsGallery from "./ShipModelsGallery";

const TITLE = "Модели кораблей";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Галерея работ воспитанников историко-технического музея СГФР. Коллекция моделей морских судов, выполненных младшей, средней и старшей группами.",
  keywords: [
    "Модели кораблей",
    "судомоделизм Севастополь",
    "выставка моделей судов",
    "детское техническое творчество",
    "СГФР музей",
  ],
  // Динамическое превью для соцсетей
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(TITLE)}`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default function ShipModelsPage() {
  return (
    <>
      {/* Микроразметка Schema.org для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: TITLE,
            description:
              "Экспозиция судомодельной мастерской Севастопольского городского фонда Рерихов",
            creator: {
              "@type": "Organization",
              name: "СГФР",
            },
            genre: "Судомоделизм",
          }),
        }}
      />
      <ShipModelsGallery />
    </>
  );
}
