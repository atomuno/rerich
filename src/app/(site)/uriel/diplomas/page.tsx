import type { Metadata } from "next";
import { fetchDiplomaCards } from "@/lib/cms/payload-queries";
import DiplomasContent from "./diplomas-content"; // Путь к клиентскому компоненту

const PAGE_TITLE = "Благодарности и дипломы СГЦДТ «Уриэль»";
const OG_TITLE = "Официальные награды центра «Уриэль» — Севастополь";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Архив официальных благодарственных писем, дипломов и грамот, полученных Севастопольским городским центром духовного творчества «Уриэль» и его сотрудниками с 1997 года.",
  keywords: [
    "награды Уриэль",
    "дипломы Севастополь",
    "СГЦДТ Уриэль благодарности",
    "общественная деятельность Севастополь",
    "архив документов Уриэль",
    "признание и награды",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "История признания заслуг коллектива «Уриэль» в культурной и духовной жизни Севастополя.",
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

export default async function DiplomasPage() {
  const cards = await fetchDiplomaCards();
  return <DiplomasContent cards={cards} />;
}
