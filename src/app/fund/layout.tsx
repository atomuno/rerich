import type { Metadata } from "next";

export const metadata: Metadata = {
  // 1. Умные заголовки для всех подстраниц Фонда
  title: {
    template: "%s | Фонд Рериха",
    default: "Севастопольский городской фонд Рериха",
  },

  // 2. Описание раздела
  description:
    "Официальный сайт РОО «СГФР». Просветительская деятельность, архивные материалы и сохранение культурного наследия семьи Рерихов в Севастополе.",

  // 3. OpenGraph специально для этого раздела
  openGraph: {
    title: "Севастопольский городской фонд Рериха",
    description:
      "Просветительская деятельность и культурное наследие в Севастополе.",
    type: "website",
    images: [
      {
        url: "/fond-bg.jpg", // Используем ваше фоновое изображение для превью ссылок раздела
        width: 1200,
        height: 630,
        alt: "Фонд Рериха Севастополь",
      },
    ],
  },
};

export default function FundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white">
      {/* Если в будущем решите добавить боковое меню или 
         специфический подзаголовок для всего Фонда, 
         это делается здесь.
      */}
      {children}
    </section>
  );
}
