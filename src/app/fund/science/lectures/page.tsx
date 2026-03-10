import type { Metadata } from "next";
import LecturesClient from "./LecturesClient";

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
    type: "website",
    // Сюда в будущем можно добавить ссылку на картинку-превью для соцсетей
    // images: ['/og-lectures.jpg'],
  },
};

export default function LecturesPage() {
  return <LecturesClient />;
}
