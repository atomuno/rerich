import type { Metadata } from "next";
import { fetchFundVideos } from "@/lib/cms/payload-queries";
import VideosContent from "./videos-content";

export const dynamic = "force-dynamic";

const PAGE_TITLE = "Видеоролики";
const OG_TITLE = "Видеоролики фонда Рерихов";
const PAGE_PATH = "/fund/videos";

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
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: OG_TITLE,
    description:
      "Смотрите архивные видеоролики Севастопольского городского фонда Рерихов.",
    url: `https://sevcrf.ru${PAGE_PATH}`,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(OG_TITLE)}`,
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description:
      "Смотрите архивные видеоролики Севастопольского городского фонда Рерихов.",
    images: [`/api/og?title=${encodeURIComponent(OG_TITLE)}`],
  },
};

export default async function VideosPage() {
  const videos = await fetchFundVideos();
  return <VideosContent videos={videos} />;
}
