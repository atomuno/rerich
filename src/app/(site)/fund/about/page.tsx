import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchFundAbout } from "@/lib/cms/payload-queries";

import FundAboutContent from "./Org1AboutContent";

export const dynamic = "force-dynamic";

const TITLE = "Об организации";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Подробная информация о Севастопольском городском фонде Рерихов: история создания и официальные реквизиты организации.",
  keywords: [
    "Об организации",
    "РОО СГФР",
    "реквизиты фонда Рерихов",
    "история фонда",
  ],
  // Добавляем динамическую картинку для этой страницы
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

export default async function AboutPage() {
  const data = await fetchFundAbout();
  if (!data) notFound();
  return <FundAboutContent data={data} />;
}
