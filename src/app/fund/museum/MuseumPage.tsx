"use client";

import {
  MapPin,
  Clock,
  User,
  Anchor,
  Palette,
  Camera,
  Navigation,
} from "lucide-react";

export default function MuseumPage() {
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-[#1e293b] font-serif py-12 px-4 selection:bg-blue-100">
      <div className="max-w-5xl mx-auto">
        {/* ЗАГОЛОВОК С АКЦЕНТОМ */}
        <header className="mb-12 border-b-2 border-slate-900 pb-10">
          <h1 className="text-2xl md:text-5xl font-black mb-8 tracking-tighter text-center uppercase leading-[0.9] text-slate-900">
            Историко-технический музей в моделях морских судов
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 justify-center font-sans text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <address className="not-italic flex items-center font-bold gap-2">
                <MapPin size={16} className="text-blue-900" />
                <span>ул. Бориса Михайлова, 17-А</span>
              </address>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <Navigation size={14} />
              <span>Вход свободный</span>
            </div>
          </div>
        </header>

        {/* ГЛАВНАЯ ГАЛЕРЕЯ (БОЛЬШИЕ ФОТО) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="aspect-[3/2] md:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl group relative cursor-zoom-in">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white transition-colors">
              <Camera size={48} strokeWidth={1} />
            </div>
            <img
              src="/museum-photo-1.jpg"
              alt="Крупный план модели морского судна"
              className="w-full h-full object-cover relative z-10 hover:scale-120 transition-transform duration-700"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-slate-900/80 backdrop-blur px-4 py-2 text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Экспозиция судов
            </div>
          </div>

          <div className="aspect-[3/2] md:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl group relative cursor-zoom-in">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white transition-colors">
              <Camera size={48} strokeWidth={1} />
            </div>
            <img
              src="/museum-photo-2.jpg"
              alt="Выставка Петриковской росписи"
              className="w-full h-full object-cover relative z-10 hover:scale-120 transition-transform duration-700"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-slate-900/80 backdrop-blur px-4 py-2 text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Петриковская роспись
            </div>
          </div>
        </section>

        {/* ИНФОРМАЦИОННЫЕ БЛОКИ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Время работы */}
          <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-center">
            <h2 className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-blue-900 mb-4 flex items-center gap-2">
              <Clock size={16} /> Режим работы
            </h2>
            <p className="text-xl font-black text-blue-900 leading-tight font-sans mb-2">
              Суббота - Воскресенье
            </p>
            <p className="text-2xl font-mono  font-black font-bold text-blue-900">
              11:00 – 16:00
            </p>
          </div>

          {/* Разделы музея */}
          <div className="bg-slate-200 p-8 rounded-lg shadow-2xl lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-900">
                  <Anchor size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs text-blue-900">
                    Морская тематика
                  </h3>
                </div>
                <p className=" text-sm leading-relaxed font-sans text-blue-900">
                  Детальные историко-технические модели судов, воссоздающие
                  историю мореплавания.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-900">
                  <Palette size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs text-blue-900">
                    Петриковская роспись
                  </h3>
                </div>
                <p className=" text-sm leading-relaxed font-sans text-blue-900">
                  Уникальные экспонаты народной декоративной живописи в
                  интерьере музея.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ПЕРСОНАЛИИ */}
        <section className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-slate-100 rounded-lg gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
              <User size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-1">
                Руководитель и экскурсовод
              </p>
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight font-sans">
                Васильцова Галина Михайловна
              </h4>
            </div>
          </div>
          <div className="w-full md:w-px h-px md:h-12 bg-slate-200"></div>
          <p className="text-sm text-slate-800 max-w-xs text-center md:text-left font-sans">
            Для записи на групповые экскурсии, пожалуйста, посетите музей в
            рабочее время.
          </p>
        </section>

        {/* НИЖНИЙ КОЛОНТИТУЛ */}
        <footer className="mt-24 text-center">
          <div className="h-1 w-12 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-slate-400">
            Севастопольский городской фонд Рерихов
          </p>
        </footer>
      </div>
    </article>
  );
}
