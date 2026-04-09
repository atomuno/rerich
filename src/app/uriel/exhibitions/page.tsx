import type { Metadata } from "next";
import ExhibitionsContent from "./exhibitions-content"; // Путь к клиентскому файлу

const PAGE_TITLE = "Городские выставки и культурные мероприятия";
const OG_TITLE = "Архив выставок СГЦДТ «Уриэль» — Севастополь";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Архив городских выставок и культурных мероприятий Севастопольского городского центра духовного творчества «Уриэль» за более чем 20 лет деятельности.",
  keywords: [
    "выставки Севастополь",
    "Уриэль Севастополь",
    "культурные мероприятия",
    "творческие коллективы Севастополя",
    "СГЦДТ Уриэль",
    "художественные выставки архив",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "История участия центра «Уриэль» в культурной жизни города. Фотоархив и памятные события.",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
};

export default function ExhibitionsPage() {
  return <ExhibitionsContent />;
}
