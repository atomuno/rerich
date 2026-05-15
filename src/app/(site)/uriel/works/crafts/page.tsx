import type { Metadata } from "next";
import { fetchCrafts } from "@/lib/cms/payload-queries";
import CraftsContent from "./CraftsContent";

export const dynamic = "force-dynamic";

const TITLE = "Поделки | Петриковская роспись";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Авторская декоративная роспись по дереву Людмилы Кирилловой. Коллекция изделий в петриковском стиле в Севастополе.",
  keywords: [
    "петриковская роспись Севастополь",
    "поделки из дерева",
    "декоративная роспись по дереву",
    "Людмила Кириллова",
    "народные промыслы Крыма",
  ],
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(TITLE)}`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default async function CraftsPage() {
  const crafts = await fetchCrafts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VisualBusiness",
            name: "Выставка поделок Л.Л. Кирилловой",
            description:
              "Экспозиция декоративно-прикладного искусства в стиле петриковской росписи",
            location: "Севастополь",
          }),
        }}
      />
      <CraftsContent crafts={crafts} />
    </>
  );
}
