import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Организации имени Н.К. Рериха | Севастополь",
  description: "Официальный портал Севастопольского фонда Рерихов и Центра детского творчества Уриэль",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Navbar />

        <main className="flex-grow pt-14">
          {children}
        </main>

        {/* СТИЛЬНЫЙ ТЕМНО-СИНИЙ FOOTER */}
         <footer className="bg-[#0f172a] text-white/80 py-6 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Левая часть: Мини-лого */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-serif tracking-[0.5em] text-blue-400 uppercase font-bold">
                  Рерих
                </span>
                <div className="h-3 w-[1px] bg-slate-700 hidden md:block"></div>
                <span className="text-[9px] text-slate-500 uppercase tracking-[0.2em] hidden md:block">
                  Севастополь
                </span>
              </div>

              {/* Правая часть: Лаконичный копирайт */}
              <div className="text-[9px] text-slate-500 tracking-widest uppercase text-center md:text-right">
                <p>© {new Date().getFullYear()} — Все права защищены</p>
              </div>

            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}