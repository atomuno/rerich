import type { Metadata } from "next";
import LecturesClient from "./LecturesClient";

// Заголовок для нашей сочной карточки (сделаем акцент на научном статусе)
const OG_TITLE = "Научный лекторий СГФР: Видеоархив докладов";

export const metadata: Metadata = {
  title: "Научный лекторий | СГФР",
  description:
    "Видеоархив докладов ученых России, Белоруссии и Казахстана. Изучение и популяризация культурного наследия семьи Рерихов и конференции «Перспективы развития современного общества».",
  keywords: [
    "лекторий СГФР",
    "наследие Рерихов",
    "научные доклады",
    "РИНЦ",
    "культура и наука",
    "Лебеденко А.А.",
  ],
  openGraph: {
    title: "Научный лекторий СГФР — Видеоархив докладов",
    description:
      "Архив выступлений ведущих ученых на международных конференциях по культурному наследию.",
    url: "http://sevcrf.ru/lectures",
    siteName: "Рериховский Центр Севастополя",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        // Наша динамическая картинка с Playfair Display и неоновым свечением
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: "Научный лекторий СГФР: Архив докладов",
      },
    ],
  },
};

export default function LecturesPage() {
  return <LecturesClient />;
}
