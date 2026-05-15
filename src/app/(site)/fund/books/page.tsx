import type { Metadata } from "next";
import { fetchBooks } from "@/lib/cms/payload-queries";
import BooksContent from "./books-content";

export const dynamic = "force-dynamic";

const OG_TITLE = "Книги Севастопольского городского фонда Рерихов";

export const metadata: Metadata = {
  title: "Книги",
  description:
    "Библиотека и каталог изданий Севастопольского городского фонда Рерихов. Научные монографии, исторические хроники Севастополя и труды по гуманной педагогике.",
  keywords: [
    "СГФР книги",
    "Севастопольские летописи",
    "Рерих литература",
    "гуманная педагогика",
    "история Севастополя книга",
    "Расулова Т.С.",
    "Лебеденко А.А.",
    "Головина Севастополь",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "Научные и культурно-просветительские издания нашего фонда доступны для ознакомления.",
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

export default async function BooksPage() {
  const books = await fetchBooks();
  return <BooksContent books={books} />;
}
