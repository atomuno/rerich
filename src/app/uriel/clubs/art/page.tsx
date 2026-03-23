import type { Metadata } from "next";
import ArtClubContent from "./ArtClubContent";

const TITLE = "Кружок «Озарение»";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Художественный кружок Озарение в Севастополе. Обучение живописи, графике и петриковской росписи для детей и взрослых на базе центра Уриэль.",
  keywords: [
    "художественный кружок Севастополь",
    "обучение рисованию детей",
    "петриковская роспись уроки",
    "центр Уриэль",
    "кружок Озарение",
    "бесплатные кружки Севастополь",
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

export default function ArtClubPage() {
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
              "Кружок изобразительного и декоративно-прикладного искусства под руководством Кирилловой Л.Л.",
            provider: {
              "@type": "Organization",
              name: "Центр детского творчества Уриэль",
            },
            educationalLevel: "Начальное и среднее художественное образование",
          }),
        }}
      />
      <ArtClubContent />
    </>
  );
}
