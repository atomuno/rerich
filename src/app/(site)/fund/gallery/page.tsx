import type { Metadata } from "next";
import { fetchGallery } from "@/lib/cms/payload-queries";
import GalleryContent from "./gallery-content"; // Перенеси основной код сюда

export const dynamic = "force-dynamic";

const PAGE_TITLE = "Галерея картин Л.Л. Кирилловой";
const OG_TITLE = "Галерея картин Л.Л. Кирилловой — СГФР";
const PAGE_PATH = "/fund/gallery";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Виртуальная экспозиция работ Людмилы Леонидовны Кирилловой из коллекции Севастопольского городского фонда Рерихов. Философия Живой Этики в красках.",
  keywords: [
    "Людмила Кириллова",
    "художник Севастополь",
    "галерея картин",
    "Живая Этика искусство",
    "СГФР галерея",
    "культурное наследие Рерихов",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: OG_TITLE,
    description:
      "Познайте красоту мироздания через творчество Л.Л. Кирилловой.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
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
      "Познайте красоту мироздания через творчество Л.Л. Кирилловой.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default async function GalleryPage() {
  const items = await fetchGallery();
  return <GalleryContent items={items} />;
}
