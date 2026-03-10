import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import Metrika from "@/components/Metrika";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

// Константы для удобства
const SITE_NAME = "Рериховский Центр Севастополя";
const DOMAIN = "http://sevcrf.ru";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Организации имени Н.К. Рериха | Севастополь",
    template: "%s | Рериховский Центр",
  },

  description:
    "Официальный портал Севастопольского фонда Рериха и Центра детского творчества «Уриэль». Культурно-просветительская деятельность, наследие семьи Рерихов и творческое развитие молодежи.",

  keywords: [
    "Фонд Рериха",
    "Уриэль Севастополь",
    "Центр детского творчества",
    "Севастополь культура",
    "Николай Рерих",
    "Анохин Александр Михайлович",
  ],

  openGraph: {
    title: "Организации имени Н.К. Рериха | Севастополь",
    description: "Культура, наука и детское творчество в Севастополе.",
    url: DOMAIN,
    siteName: SITE_NAME,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        // По умолчанию для главной страницы
        url: `/api/og?title=${encodeURIComponent("Рериховский Центр Севастополя")}`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    // Twitter также подхватит нашу динамическую картинку
    images: [
      `/api/og?title=${encodeURIComponent("Рериховский Центр Севастополя")}`,
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Metrika />
        <GoogleAnalytics gaId="G-SP8BH9SRNC" />
        <Navbar />

        <main id="main-content" className="flex-grow pt-14">
          {children}
        </main>

        <footer className="bg-[#0f172a] text-white/80 py-8 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-serif tracking-[0.5em] text-blue-400 uppercase font-bold">
                  Рерих
                </span>
                <div className="h-4 w-[1px] bg-slate-700 hidden md:block"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">
                    Севастополь
                  </span>
                  <span className="text-[8px] text-slate-600 uppercase tracking-[0.1em] hidden md:block">
                    Культурное наследие
                  </span>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 tracking-widest uppercase text-center md:text-right">
                <p>© {new Date().getFullYear()} — Все права защищены</p>
                <p className="mt-1 text-slate-600 lowercase tracking-normal">
                  официальное представительство
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
