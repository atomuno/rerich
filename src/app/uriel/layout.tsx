import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Центр «Уриэль»", // Подстраницы будут выглядеть как "Галерея | Центр «Уриэль»"
    default: "СГЦДТ «Уриэль» им. Н.К. Рериха",
  },
  description:
    "Севастопольский городской центр детского творчества имени Н.К. Рериха. Развитие талантов, выставки и творческие мастерские для детей в Севастополе.",
  openGraph: {
    title: "Центр детского творчества «Уриэль»",
    description:
      "Пространство для развития талантов и художественного образования детей.",
    images: ["/uriel-bg.jpg"], // Ваше фоновое изображение для соцсетей
  },
};

export default function Org2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white">
      {/* Сюда можно будет добавить специфическое меню для Уриэль */}
      {children}
    </section>
  );
}
