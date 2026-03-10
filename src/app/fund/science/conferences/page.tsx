import type { Metadata } from "next";
import ConferenceClient from "./ConferenceClient";

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
    images: ["/university-bg.jpg"],
  },
};

export default function ConferencesPage() {
  return <ConferenceClient />;
}
