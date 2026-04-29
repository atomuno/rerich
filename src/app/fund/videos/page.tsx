import type { Metadata } from "next";
import VideosContent from "./videos-content";

const PAGE_TITLE = "Видеоролики";
const OG_TITLE = "Видеоролики фонда Рерихов";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "Архив видеороликов Севастопольского городского фонда Рерихов: культурные, исторические и музыкальные материалы.",
  keywords: [
    "видеоролики СГФР",
    "Рерих фонд видео",
    "видеоархив фонда",
    "культура и история",
    "RuTube видеоматериалы",
  ],
  openGraph: {
    title: OG_TITLE,
    description:
      "Смотрите архивные видеоролики Севастопольского городского фонда Рерихов.",
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

export default function VideosPage() {
  return <VideosContent />;
}
