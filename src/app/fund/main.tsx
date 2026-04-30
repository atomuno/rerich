"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fundSections = [
  {
    href: "/fund/about",
    label: "О нас",
    desc: "История, миссия и направления деятельности фонда.",
  },
  {
    href: "/fund/exhibitions",
    label: "Выставки",
    desc: "Архив культурных и международных выставочных проектов.",
  },
  {
    href: "/fund/gallery",
    label: "Галерея",
    desc: "Художественные работы Людмилы Кирилловой.",
  },
  {
    href: "/fund/videos",
    label: "Видеоролики",
    desc: "Подборка видеоматериалов и тематических клипов.",
  },
  {
    href: "/fund/library",
    label: "Библиотека",
    desc: "Каталоги и фонд общественно-массовой библиотеки.",
  },
  {
    href: "/fund/books",
    label: "Книги",
    desc: "Издания сотрудников и друзей фонда.",
  },
  {
    href: "/fund/museum",
    label: "Музей",
    desc: "Историко-технический музей в моделях морских судов.",
  },
  {
    href: "/fund/science/conferences",
    label: "Конференции",
    desc: "Материалы международных научных конференций.",
  },
  {
    href: "/fund/science/lectures",
    label: "Лекторий",
    desc: "Видеоархив научных докладов и выступлений.",
  },
];

export default function FoundationHero() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[38vh] md:min-h-[44vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-white pt-10 md:pt-14 border-b border-slate-100">
        <div className="relative z-20 max-w-5xl mx-auto space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-sm md:text-base lg:text-lg font-serif text-slate-700 leading-tight uppercase tracking-wide">
              Региональная общественная организация
            </h2>
            <h2 className="text-base md:text-2xl lg:text-3xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Севастопольский городской
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-blue-900 leading-none uppercase drop-shadow-sm py-2">
              Фонд Рерихов
            </h1>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Культурно-просветительская деятельность, сохранение наследия и
              развитие гуманитарных проектов в Севастополе.
            </p>
          </div>
        </div>
        {/* Декоративная сетка на фоне */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="text-center mb-6 md:mb-7">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 uppercase">
            Разделы фонда
          </h2>
          <p className="mt-2 text-slate-600 font-sans text-sm">
            Выберите направление и перейдите к материалам.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
          {fundSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-2xl border border-slate-200 p-4 md:p-5 bg-white hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-sans text-sm md:text-[15px] font-semibold text-slate-800">
                    {section.label}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm font-sans text-slate-500 leading-relaxed">
                    {section.desc}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-slate-400 group-hover:text-blue-700 transition-colors shrink-0 mt-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
