import type { Metadata } from "next";
import ConferenceClient from "./ConferenceClient";

// Заголовок для нашей стильной карточки (сделаем акцент на ИИ)
const OG_TITLE = "Искусственный интеллект и виртуальная личность (2026)";

export const metadata: Metadata = {
  title: "Конференция ПРСО-2026",
  description:
    "27-я Всероссийская научно-практическая конференция «Перспективы развития современного общества» в Севастополе. Тема 2026: Искусственный интеллект и виртуальная личность.",
  keywords: [
    "Конференция СевГУ 2026",
    "Пакт Рериха Севастополь",
    "Перспективы развития современного общества",
    "РИНЦ сборник статей",
    "Искусственный интеллект исследования",
    "Осознание Культуры",
  ],
  openGraph: {
    title: "Конференция: Перспективы развития современного общества (2026)",
    description:
      "Научная дискуссия о влиянии ИИ на личность и культуру в цифровую эпоху.",
    url: "http://sevcrf.ru/fund/science/conferences", // Указываем точный путь
    siteName: "Рериховский Центр Севастополя",
    locale: "ru_RU",
    type: "article",
    images: [
      {
        // Наш динамический генератор с Playfair Display и ярким градиентом
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: "Конференция ПРСО-2026: ИИ и виртуальная личность",
      },
    ],
  },
};

export default function ConferencesPage() {
  return <ConferenceClient />;
}
