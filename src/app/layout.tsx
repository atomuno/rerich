import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import Metrika from "@/components/Metrika";
import { Suspense } from "react";

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

const DOMAIN = "https://sevcrf.ru";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),

  // Шаблон заголовка: если на странице title: "Контакты",
  title: {
    default: "Организации имени Н.К. Рериха | Севастополь",
    template: "%s",
  },

  description:
    "Официальный портал Севастопольского фонда Рериха и Центра детского творчества «Уриэль». Культурно-просветительская деятельность и наследие семьи Рерихов.",

  openGraph: {
    title: "Организации имени Н.К. Рериха | Севастополь",
    description: "Культура, наука и детское творчество в Севастополе.",
    url: DOMAIN,
    locale: "ru_RU",
    type: "website",
    // Здесь МЫ НЕ ПИШЕМ images, чтобы они подтягивались динамически из page.tsx
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
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
        {/* Аналитика обернута в Suspense для корректной работы в Next.js */}
        <Suspense fallback={null}>
          <Metrika />
        </Suspense>

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
                </div>
              </div>

              <div className="text-[9px] text-slate-500 tracking-widest uppercase text-center md:text-right">
                <p>© {new Date().getFullYear()} — СГФР | УРИЭЛЬ</p>
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
