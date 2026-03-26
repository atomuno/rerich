import type { Metadata } from "next";
import CraftsContent from "./CraftsContent";

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

export default function CraftsPage() {
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
      <CraftsContent />
    </>
  );
}
