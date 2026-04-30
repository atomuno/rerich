"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const urielSections = [
  {
    href: "/uriel/about",
    label: "О центре",
    desc: "История организации и основные сведения.",
  },
  {
    href: "/uriel/clubs/ships",
    label: "Судомодельный кружок",
    desc: "Практика, макеты и инженерное творчество.",
  },
  {
    href: "/uriel/clubs/art",
    label: "Художественный кружок",
    desc: "Рисунок, композиция и развитие художественного вкуса.",
  },
  {
    href: "/uriel/works/models",
    label: "Модели кораблей",
    desc: "Галерея работ воспитанников и преподавателей.",
  },
  {
    href: "/uriel/works/crafts",
    label: "Поделки",
    desc: "Творческие работы детей в разных техниках.",
  },
  {
    href: "/uriel/exhibitions",
    label: "Выставки",
    desc: "Архив городских и тематических выставок центра.",
  },
  {
    href: "/uriel/diplomas",
    label: "Грамоты",
    desc: "Награды, дипломы и результаты участия в конкурсах.",
  },
];

export default function CenterHero() {
  return (
    <div className="bg-white">
      <section className="relative py-10 md:py-14 flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-white border-b border-slate-100">
        <div className="relative z-20 max-w-5xl mx-auto space-y-4 md:space-y-6">
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-sm md:text-base lg:text-lg font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Севастопольский городской центр <br className="hidden md:block" />{" "}
              детского творчества
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-blue-900 leading-tight uppercase drop-shadow-sm py-2">
              «УРИЭЛЬ»
            </h1>

            <span className="text-sm md:text-base lg:text-lg font-serif text-slate-800 leading-tight uppercase tracking-wide">
              имени Н.К. Рериха
            </span>
            <p className="font-sans text-slate-600 max-w-2xl mx-auto text-sm md:text-base mt-2">
              Пространство детского развития, творчества и культурного
              воспитания для школьников Севастополя.
            </p>
          </div>

          <div className="h-px w-28 md:w-40 bg-blue-900/20 mx-auto mt-6"></div>
        </div>

        {/* Декоративный элемент фона для стиля */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-12">
        <div className="text-center mb-6 md:mb-7">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 uppercase">
            Разделы центра
          </h2>
          <p className="mt-2 text-slate-600 font-sans text-sm">
            Быстрые переходы по основным направлениям «Уриэль».
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
          {urielSections.map((section) => (
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
