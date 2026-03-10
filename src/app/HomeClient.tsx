"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HomeClient() {
  const scrollToSections = () => {
    const element = document.getElementById("sections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col font-serif">
      <section className="relative h-[calc(100vh-10px)] min-h-[600px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 z-10 bg-slate-950/65 backdrop-blur-[1px]" />

        <div className="relative z-20 max-w-6xl mx-auto space-y-10 md:space-y-12 -mt-10">
          <div className="space-y-4 md:space-y-5">
            <span className="text-white/95 font-serif tracking-[0.2em] uppercase text-[14px] md:text-base lg:text-lg block font-bold">
              Региональная общественная организация
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg tracking-wide">
              Севастопольский городской <br className="hidden md:block" />
              фонд Рериха
            </h1>
          </div>

          <div className="h-px w-20 md:w-32 bg-white/30 mx-auto shadow-sm"></div>

          <div className="space-y-4 md:space-y-5">
            <span className="text-white/95 font-serif tracking-[0.2em] uppercase text-[14px] md:text-base lg:text-lg block font-bold">
              Севастопольский городской центр детского творчества
            </span>
            <h2 className="text-3xl md:text-6xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg uppercase tracking-[0.1em]">
              «УРИЭЛЬ»
            </h2>
            <span className="text-white/90 font-serif tracking-[0.15em] uppercase text-xs md:text-lg block font-bold">
              имени Н.К. Рериха
            </span>
          </div>
        </div>

        <button
          onClick={scrollToSections}
          aria-label="Листать вниз"
          className="absolute bottom-10 z-30 text-white/40 hover:text-white transition-all transform hover:scale-110 animate-bounce cursor-pointer focus:outline-none"
        >
          <ChevronDown className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
        </button>
      </section>

      <section
        id="sections"
        className="flex flex-col md:flex-row min-h-screen overflow-hidden scroll-mt-16 bg-white font-serif"
      >
        <Link
          href="/fund"
          className="relative flex-1 group flex items-center justify-center p-8 overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 transition-all duration-700 min-h-[50vh] md:min-h-0"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105"
            style={{ backgroundImage: "url('/fond-bg.jpg')" }}
          />
          <div className="absolute inset-0 z-10 bg-slate-950/60 transition-all duration-700 group-hover:bg-blue-900/75" />
          <div className="relative z-20 text-center space-y-6 px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-[0.1em] text-white leading-tight">
              Севастопольский городской <br /> фонд Рериха
            </h2>
            <div className="inline-flex items-center font-sans text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase text-[10px] tracking-[0.2em] border border-white/30 px-6 py-2 rounded-full">
              Перейти <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>

        <Link
          href="/uriel"
          className="relative flex-1 group flex items-center justify-center p-8 overflow-hidden transition-all duration-700 min-h-[50vh] md:min-h-0"
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105"
            style={{ backgroundImage: "url('/uriel-bg.jpg')" }}
          />
          <div className="absolute inset-0 z-10 bg-slate-950/60 transition-all duration-700 group-hover:bg-blue-800/75" />
          <div className="relative z-20 text-center space-y-6 px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-[0.1em] text-white leading-tight">
              СГЦДТ «УРИЭЛЬ» <br /> имени Н.К. РЕРИХА
            </h2>
            <div className="inline-flex items-center font-sans text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase text-[10px] tracking-[0.2em] border border-white/30 px-6 py-2 rounded-full">
              Перейти <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
