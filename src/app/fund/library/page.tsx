import type { Metadata } from "next";
import LibraryContent from "./LibraryContent";

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
};

export default function LibraryPage() {
  return <LibraryContent />;
}
