"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const fundSubLinks = [
  { href: "/fund/library", label: "Библиотека", bgImage: "/backgrounds/04.jpg" },
  { href: "/fund/museum", label: "Музей", bgImage: "/backgrounds/07.jpg" },
  { href: "/fund/exhibitions", label: "Выставки", bgImage: "/backgrounds/05.jpg" },
  { href: "/fund/science/conferences", label: "Конференции", bgImage: "/backgrounds/08.jpg" },
  { href: "/fund/science/lectures", label: "Лекторий", bgImage: "/backgrounds/06.jpg" },
  { href: "/fund/gallery", label: "Галерея", bgImage: "/backgrounds/09.jpg" },
];

const urielSubLinks = [
  { href: "/uriel/clubs/ships", label: "Судомодельный кружок", bgImage: "/backgrounds/10.jpg" },
  { href: "/uriel/clubs/art", label: "Художественный кружок", bgImage: "/backgrounds/13.jpg" },
  { href: "/uriel/works/models", label: "Модели кораблей", bgImage: "/backgrounds/11.jpg" },
  { href: "/uriel/works/crafts", label: "Поделки", bgImage: "/backgrounds/14.jpg" },
  { href: "/uriel/exhibitions", label: "Выставки", bgImage: "/backgrounds/12.jpg" },
  { href: "/uriel/diplomas", label: "Грамоты", bgImage: "/backgrounds/15.jpg" },
];

function SubsectionTile({
  href,
  label,
  bgImage,
  overlayHoverClass,
  variant,
}: {
  href: string;
  label: string;
  bgImage: string;
  overlayHoverClass: string;
  variant: "fund" | "uriel";
}) {
  const borderClass =
    variant === "fund"
      ? "border-b border-slate-200/30 md:border-r"
      : "border-b border-slate-200/30 md:border-r md:[&:nth-child(even)]:border-r-0";

  return (
    <Link
      href={href}
      className={`relative group flex items-center justify-center px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-6 overflow-hidden min-h-[4.25rem] sm:min-h-[5rem] md:aspect-[25/16] md:min-h-0 md:w-full transition-all duration-700 ${borderClass}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 blur-[0px] transition-transform duration-[1.5s] group-hover:scale-110"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      </div>
      <div
        className={`absolute inset-0 z-10 bg-slate-950/30 transition-all duration-700 ${overlayHoverClass}`}
      />
      <h3 className="relative z-20 text-center px-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif font-bold uppercase tracking-[0.08em] text-white leading-tight">
        {label}
      </h3>
    </Link>
  );
}

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
          style={{ backgroundImage: "url('/backgrounds/01.jpg')" }}
        />
        <div className="absolute inset-0 z-10 bg-slate-950/40 backdrop-blur-[2px]" />

        <div className="relative z-20 max-w-6xl mx-auto space-y-10 md:space-y-12 -mt-10">
          <div className="space-y-4 md:space-y-5">
            <span className="text-white/95 font-serif tracking-[0.2em] text-[14px] md:text-base lg:text-2xl block font-bold">
              Региональная общественная организация
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight drop-shadow-lg uppercase tracking-[0.1em]">
              Севастопольский городской <br className="hidden md:block" />
              фонд Рерихов
            </h2>
          </div>

          <div className="h-px w-20 md:w-32 bg-white/30 mx-auto shadow-sm"></div>

          <div className="space-y-4 md:space-y-5">
            <span className="text-white/95 font-serif tracking-[0.2em] text-[14px] md:text-base lg:text-2xl block font-bold">
              Региональная общественная организация
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-tight drop-shadow-lg uppercase tracking-[0.1em]">
              Севастопольский городской центр детского творчества «УРИЭЛЬ»{" "}
              <br /> имени Н.К. Рериха
            </h2>
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
            style={{ backgroundImage: "url('/backgrounds/02.jpg')" }}
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
            style={{ backgroundImage: "url('/backgrounds/03.jpg')" }}
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

      <section className="flex flex-col md:flex-row border-t border-slate-200 overflow-hidden font-serif">
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {fundSubLinks.map((item) => (
            <SubsectionTile
              key={item.href}
              href={item.href}
              label={item.label}
              bgImage={item.bgImage}
              overlayHoverClass="group-hover:bg-blue-900/75"
              variant="fund"
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
          {urielSubLinks.map((item) => (
            <SubsectionTile
              key={item.href}
              href={item.href}
              label={item.label}
              bgImage={item.bgImage}
              overlayHoverClass="group-hover:bg-blue-800/75"
              variant="uriel"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
