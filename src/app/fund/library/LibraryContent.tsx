"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Info,
  BookOpen,
  History,
  Library,
  GraduationCap,
  ScrollText,
  Palette,
  FileText,
  Calculator,
} from "lucide-react";
import {
  lib_fund,
  litle_rerich,
  pereodic,
  sba,
} from "../../../../public/library";
import Image from "next/image"; // Импортируем компонент Image

export default function LibraryContent() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#1a1a1a] font-serif py-12 px-4 selection:bg-blue-100">
      <div className="max-w-4xl mx-auto">
        {/* ХЕДЕР */}
        <header className="text-center mb-16 border-b-2 border-slate-900 pb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">
            Общественно-массовая <br /> библиотека
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[11px] font-sans uppercase tracking-[0.2em] text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-900" />
              <span className="border-b border-transparent hover:border-slate-300 transition-colors cursor-default">
                ул. Бориса Михайлова 17-А
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-900" />
              <span>пн — сб: 10.00 – 15.00</span>
            </div>
          </div>
        </header>

        {/* ГЛАВНОЕ ФОТО БИБЛИОТЕКИ */}
        <div className="mb-16 relative w-full aspect-[1181/531] overflow-hidden rounded-xl shadow-2xl border border-slate-200">
          <Image
            src="/biblio.jpg"
            alt="Интерьер общественно-массовой библиотеки"
            fill
            priority
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          {/* Легкий градиент поверх для премиальности */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* ИСТОРИЧЕСКАЯ СПРАВКА */}
        <section className="mb-12 bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-900"></div>
          <h2 className="text-[12px] font-sans font-black uppercase tracking-[0.2em] text-blue-900 mb-6 flex items-center gap-3">
            <History size={18} /> Историческая справка
          </h2>
          <div className="space-y-6 leading-relaxed text-md text-slate-800">
            <p className="font-sans">
              Библиотека основана 12 июля 1994 г., зарегистрирована как
              общественно-массовая библиотека Севастопольского городского фонда
              Рерихов 10 июля 2003 г. в Управлении Культуры Севастопольской
              городской государственной администрации. Регистрационная карточка
              № 1. На 10 июля 2008 г. библиотечный фонд содержит{" "}
              <span className="text-blue-900 font-bold">
                11 250 экземпляров
              </span>{" "}
              книг по десяти отделам библиотечной классификации из многих
              отраслей знания.
            </p>
          </div>
        </section>

        <div className="space-y-4">
          <h3 className="font-sans font-black text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-6 ml-2">
            Каталоги и фонды
          </h3>

          {/* СБА */}
          <LibrarySection
            id="sba"
            title="Справочно-библиографический аппарат (СБА)"
            icon={BookOpen}
            isOpen={openSection === "sba"}
            onToggle={toggle}
          >
            <p className="text-slate-500 mb-8 border-b border-slate-100 pb-4 text-sm font-sans uppercase tracking-wider">
              Систематический каталог и справочная литература:
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[13px] font-sans leading-relaxed">
              {sba.map((text, index) => (
                <li key={index} className="flex gap-4 group items-start">
                  <span className="font-bold text-blue-900 tabular-nums">
                    {index + 1}.
                  </span>
                  <span className="text-slate-800 group-hover:text-black transition-colors">
                    {text}
                  </span>
                </li>
              ))}
            </ol>
          </LibrarySection>

          {/* БИБЛИОТЕЧНЫЙ ФОНД */}
          <LibrarySection
            id="fond-mira"
            title="Отдел Мира и Духовного совершенствования"
            icon={Library}
            isOpen={openSection === "fond-mira"}
            onToggle={toggle}
          >
            <div className="bg-slate-50 p-6 rounded mb-8 border border-slate-100">
              <p className="leading-relaxed text-slate-800 font-medium">
                В библиотечном фонде находится более двух тысяч книг по этике,
                философии, религии и культуре.
              </p>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 text-[12px] font-sans leading-snug">
              {lib_fund.map((book, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 border-b border-slate-100 pb-2 last:border-0 hover:border-blue-200 transition-colors"
                >
                  <span className="text-blue-900 font-bold opacity-50 tabular-nums">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-slate-700">{book}</span>
                </li>
              ))}
            </ul>
          </LibrarySection>

          {/* РЕРИХОВСКИЕ СЕРИИ */}
          <LibrarySection
            id="roerich-series"
            title="Специальные Рериховские серии"
            icon={ScrollText}
            isOpen={openSection === "roerich-series"}
            onToggle={toggle}
          >
            <div className="space-y-10">
              <section>
                <h4 className="text-[10px] font-sans font-black uppercase tracking-widest text-blue-900 mb-4 border-b pb-2">
                  Большая Рериховская библиотека
                </h4>
                <ul className="space-y-2 text-[13px]">
                  {[
                    "Знамя Мира: сборник. – М.: МЦР, 2005.",
                    "Рерих Е.И. У Порога Нового мира. – М.: МЦР, 2000.",
                    "Рерих Н.К. Листы дневника. – М.: МЦР, 1995-1996.",
                    "Рерих Н.К. Шамбала. – М.: МЦР, 1994.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-[10px] font-sans font-black uppercase tracking-widest text-blue-900 mb-4 border-b pb-2">
                  Малая Рериховская библиотека
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-[12px] font-sans">
                  {litle_rerich.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 text-slate-700 py-1 border-b border-slate-50"
                    >
                      <span className="text-blue-900">/</span> {item}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </LibrarySection>

          {/* ИСКУССТВО */}
          <LibrarySection
            id="art-dept"
            title="Отдел Искусства"
            icon={Palette}
            isOpen={openSection === "art-dept"}
            onToggle={toggle}
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-blue-50 p-4 rounded text-blue-900">
                  <Info size={24} />
                </div>
                <div>
                  <h5 className="font-bold uppercase text-xs tracking-widest mb-2">
                    Редкое библиографическое издание
                  </h5>
                  <p className="text-lg text-slate-900 font-black">
                    А.Н. Бенуа «История живописи всех времен и народов»
                  </p>
                  <p className="text-sm text-slate-500">
                    Фундаментальный труд в 4-х томах
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Леонардо да Винчи",
                  "Андрей Рублев",
                  "Виктор Серов",
                  "Николай Рерих",
                ].map((artist) => (
                  <div
                    key={artist}
                    className="p-3 border border-slate-100 text-[11px] font-sans uppercase tracking-tighter text-center bg-slate-50"
                  >
                    {artist}
                  </div>
                ))}
              </div>
            </div>
          </LibrarySection>

          {/* ПЕДАГОГИКА */}
          <LibrarySection
            id="pedagogy"
            title="Педагогическая литература"
            icon={GraduationCap}
            isOpen={openSection === "pedagogy"}
            onToggle={toggle}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Антология гуманной педагогики — 52 тома",
                "Амонашвили Ш.А. — 12 книг",
                "Макаренко А.С. — 3 тома",
                "Сухомлинский В.А. — 5 томов",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 border border-slate-100 rounded-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </LibrarySection>

          {/* ПЕРИОДИКА */}
          <LibrarySection
            id="periodicals"
            title="Периодические издания"
            icon={FileText}
            isOpen={openSection === "periodicals"}
            onToggle={toggle}
          >
            <div className="overflow-hidden border border-slate-200 rounded">
              <table className="w-full text-sm font-sans">
                <thead className="bg-blue-900 text-white text-[10px] uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-6 py-3 text-left">Наименование</th>
                    <th className="px-6 py-3 text-right">Экземпляры</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pereodic.map(([title, qty], idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-6 py-3 text-slate-800 font-medium">
                        «{title}»
                      </td>
                      <td className="px-6 py-3 text-right font-bold text-blue-900">
                        {qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </LibrarySection>
        </div>

        {/* ИТОГОВАЯ ТАБЛИЦА */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <Calculator className="text-blue-900" size={32} />
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Статистика фонда
            </h2>
          </div>

          <div className="bg-white border-t-4 border-slate-900 shadow-xl overflow-hidden">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-widest border-b">
                  <th className="p-6 text-left">Категория знания</th>
                  <th className="p-6 text-right">Фонд (экз)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Философия, этика и культура", "2098"],
                  ["Детская литература", "500"],
                  ["Научный сектор (История, Техника, Военное дело)", "6274"],
                  ["Искусство", "605"],
                  ["Педагогика", "695"],
                  ["Медицинская литература", "243"],
                  ["Школьная и мировая классика", "700"],
                ].map(([title, count], idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="p-6 font-bold text-slate-800 uppercase text-[11px] tracking-tight">
                      {title}
                    </td>
                    <td className="p-6 text-right font-mono font-bold text-lg">
                      {count}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-blue-900 text-white">
                  <td className="p-4 text-start font-sans text-slate-100 uppercase tracking-[0.1em] text-[14px] font-bold">
                    Всего в наличии:
                  </td>
                  <td className="p-4 text-end font-mono font-bold font-white text-2xl text-white">
                    11 250 книг
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* ФУТЕР */}
        <footer className="mt-32 text-center space-y-4 pb-12">
          <div className="w-12 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-slate-400 text-[10px] font-sans uppercase tracking-[0.4em]">
            Севастопольский городской фонд Рерихов
          </p>
          <p className="text-slate-300 text-[9px] font-sans uppercase">
            Учет ведется в семи инвентарных книгах
          </p>
        </footer>
      </div>
    </div>
  );
}

// Компонент секции
function LibrarySection({
  id,
  title,
  icon: Icon,
  isOpen,
  onToggle,
  children,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div
      className={`border transition-all duration-500 ${isOpen ? "border-slate-400 shadow-lg" : "border-slate-200 shadow-sm"} bg-white rounded-lg overflow-hidden`}
    >
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div
            className={`${isOpen ? "text-blue-900" : "text-slate-400"} transition-colors`}
          >
            {Icon && <Icon size={20} />}
          </div>
          <span
            className={`font-black uppercase text-[12px] tracking-widest ${isOpen ? "text-slate-900" : "text-slate-600"}`}
          >
            {title}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-blue-900" />
        ) : (
          <ChevronDown size={20} className="text-slate-300" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-12 pt-4 border-t border-slate-50 animate-in fade-in slide-in-from-top-4 duration-500">
          {children}
        </div>
      )}
    </div>
  );
}
