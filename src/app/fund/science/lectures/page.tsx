import type { Metadata } from "next";
import LecturesClient from "./LecturesClient";

// Заголовок для нашей сочной карточки (сделаем акцент на научном статусе)
const OG_TITLE = "Научный лекторий СГФР: Видеоархив докладов";
const PAGE_PATH = "/fund/science/lectures";

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
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Научный лекторий СГФР — Видеоархив докладов",
    description:
      "Архив выступлений ведущих ученых на международных конференциях по культурному наследию.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
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
  twitter: {
    card: "summary_large_image",
    title: "Научный лекторий СГФР — Видеоархив докладов",
    description:
      "Архив выступлений ведущих ученых на международных конференциях по культурному наследию.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default function LecturesPage() {
  return <LecturesClient />;
}
