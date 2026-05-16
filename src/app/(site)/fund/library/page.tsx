import type { Metadata } from "next";

import { fetchFundLibrary } from "@/lib/cms/payload-queries";

import LibraryContent from "./LibraryContent";

export const dynamic = "force-dynamic";

const OG_TITLE = "Общественно-массовая библиотека СГФР";

export const metadata: Metadata = {
  title: "Общественно-массовая библиотека СГФР",
  description:
    "Каталог и фонды общественно-массовой библиотеки Севастопольского городского фонда Рерихов. Более 11 000 экземпляров книг по философии, этике, истории и искусству.",
  keywords: [
    "библиотека Рериха Севастополь",
    "фонд Рерихов библиотека",
    "Агни Йога книги Севастополь",
    "гуманная педагогика библиотека",
    "общественно-массовая библиотека",
    "редкие издания книг Севастополь",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "Каталог и фонды общественно-массовой библиотеки Севастопольского городского фонда Рерихов. Более 11 000 экземпляров книг по философии, этике, истории и искусству.",
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

export default async function LibraryPage() {
  const library = await fetchFundLibrary();
  return <LibraryContent library={library} />;
}

