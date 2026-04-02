import type { Metadata } from "next";
import ShipModelingContent from "./ShipsClubContent";

const TITLE = "Кружок технического моделирования";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Судомодельный кружок в Севастополе под руководством Г.М. Васильцовой. Обучение детей техническому моделированию, конструированию моделей судов и патриотическое воспитание на базе центра Уриэль.",
  keywords: [
    "судомодельный кружок Севастополь",
    "техническое моделирование для детей",
    "конструирование моделей кораблей",
    "центр Уриэль Севастополь",
    "бесплатные технические кружки",
    "Васильцова Галина Михайловна",
    "Кириллов Владимир Васильевич",
    "моделирование из дерева и картона",
  ],
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

export default function ShipModelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: TITLE,
            description:
              "Кружок технического моделирования (судомоделизм) для детей от 7 до 17 лет. Обучение навыкам мастерства и конструирования.",
            provider: {
              "@type": "Organization",
              name: "Севастопольский городской центр детского творчества Уриэль",
            },
            educationalLevel: "Техническое творчество и моделирование",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "RUB",
              category: "Free",
            },
          }),
        }}
      />
      {/* ИСПРАВЛЕНО: вызываем компонент с контентом, а не саму страницу */}
      <ShipModelingContent />
    </>
  );
}
