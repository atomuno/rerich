"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HomeClient() {
  const highlights = [
    {
      title: "Культурные проекты",
      desc: "Выставки, архивы и просветительские инициативы фонда.",
    },
    {
      title: "Детское творчество",
      desc: "Кружки, работы воспитанников и городские выставки «Уриэль».",
    },
    {
      title: "Наследие Рерихов",
      desc: "Изучение, сохранение и популяризация культурного наследия.",
    },
  ];

  const quickActions = [
    { href: "/fund/exhibitions", label: "Выставки фонда" },
    { href: "/fund/gallery", label: "Галерея картин" },
    { href: "/fund/videos", label: "Видеоролики" },
    { href: "/uriel/exhibitions", label: "Выставки «Уриэль»" },
    { href: "/uriel/works/models", label: "Модели кораблей" },
    { href: "/uriel/diplomas", label: "Грамоты и достижения" },
  ];

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
        <div className="absolute inset-0 z-10 bg-slate-950/40 backdrop-blur-[2px]" />

        <div className="relative z-20 max-w-6xl mx-auto space-y-10 md:space-y-12 -mt-10">
          <div className="space-y-4 md:space-y-5">
            <span className="text-white/95 font-serif tracking-[0.2em] uppercase text-[14px] md:text-base lg:text-lg block font-bold">
              Региональная общественная организация
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg tracking-wide">
              Севастопольский городской <br className="hidden md:block" />
              фонд Рерихов
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
          className="absolute bottom-10 z-30 text-white/40 hover:text-white transition-all transform hover:scale-110 animate-bounce cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
          <div className="absolute inset-0 z-10 bg-slate-950/40 transition-all duration-700 group-hover:bg-blue-900/75" />
          <div className="relative z-20 text-center space-y-6 px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-[0.1em] text-white leading-tight">
              Севастопольский городской <br /> фонд Рерихов
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
          <div className="absolute inset-0 z-10 bg-slate-950/40 transition-all duration-700 group-hover:bg-blue-800/75" />
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

      <section className="border-t border-slate-200 bg-slate-50 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-slate-900">
              Единое пространство культуры
            </h2>
            <p className="mt-3 text-slate-600 font-sans max-w-3xl mx-auto">
              Портал объединяет деятельность Севастопольского городского фонда
              Рерихов и Центра детского творчества «Уриэль».
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6"
              >
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-serif font-bold uppercase text-slate-900 mb-8">
            Быстрые действия
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-sans font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-800 hover:shadow-sm transition-all"
              >
                <span className="inline-flex items-center justify-between w-full">
                  {action.label}
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
