"use client";

import { Play, Calendar, User, ArrowRight } from "lucide-react";

export type LectureCard = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  url: string;
  tag?: string;
};

export default function LecturesClient({ lectures }: { lectures: LectureCard[] }) {
  return (
    <main className="min-h-screen bg-slate-50 font-serif pb-20 overflow-x-hidden">
      {/* КОМПАКТНАЯ ШАПКА */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-900" />
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">
              Научный архив фонда
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[48px] md:text-[80px] font-black uppercase tracking-tighter leading-[0.8] mb-6 text-slate-900">
            Лекторий СГФР
          </h1>

          <p className="max-w-3xl text-sm md:text-base text-slate-800 leading-relaxed border-l-2 border-blue-900/30 pl-6">
            Доклады ученых России, Белоруссии и Казахстана в рамках
            Международной научно-практической конференции «Перспективы развития
            современного общества» и других проектов, cвязанных с изучением и
            популяризацией культурного наследия семьи Рерихов.
          </p>
        </div>
      </section>

      {/* ПЛОТНАЯ СЕТКА КАРТОЧЕК */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lectures.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-1 flex flex-col"
            >
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  {/* Показываем тег, если он есть, иначе номер по порядку */}
                  <span className="font-sans text-[10px] font-black text-slate-300 group-hover:text-blue-900/30 transition-colors duration-500 uppercase tracking-widest">
                    {item.tag ? item.tag : String(item.id).padStart(2, "0")}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center ring-1 ring-slate-100 hover:bg-blue-900 hover:scale-110 hover:ring-blue-900 transition-all duration-300 shadow-sm"
                    title="Смотреть видео"
                  >
                    <Play
                      size={14}
                      className="text-slate-400 group-hover:text-white transition-colors duration-500 translate-x-0.5"
                    />
                  </a>
                </div>

                <h2 className="text-base font-bold leading-tight mb-4 text-slate-800 uppercase not-italic tracking-tight select-text">
                  {item.title}
                </h2>

                <div className="mt-auto space-y-2 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500">
                    <User size={12} className="text-blue-900/40 shrink-0" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest leading-tight">
                      {item.speaker}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={12} className="shrink-0" />
                    <span className="font-sans text-[10px] uppercase tracking-widest leading-none">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-slate-50 group-hover:bg-blue-900 p-3 text-center transition-all duration-500 border-t border-slate-100"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

                <span className="relative z-10 font-sans text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white flex items-center justify-center gap-2 transition-colors duration-500">
                  Смотреть запись <ArrowRight size={10} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center pb-10">
        <p className="font-sans text-[10px] text-slate-300 uppercase tracking-[0.5em] font-medium">
          СГФР • 2026
        </p>
      </footer>
    </main>
  );
}
