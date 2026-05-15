"use client";

import React from "react";
import { Clock, MapPin, Users, Target, Palette, Calendar } from "lucide-react";

import ClubMasonryGallery from "@/components/ClubMasonryGallery";
import type { ClubPhotoView } from "@/lib/cms/payload-queries";

export default function ArtClubContent({
  photos,
}: {
  photos: ClubPhotoView[];
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Шапка страницы */}
      <header className="pt-20 pb-16 text-center border-b border-slate-50 px-4">
        <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-3xl mb-6 text-blue-700">
          <Palette size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-serif text-slate-900 mb-4 leading-none">
          Кружок «Озарение»
        </h1>
        <p className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
          Художественная лаборатория центра «Уриэль»
        </p>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-16">
        {/* Основной текст */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="text-xl md:text-xl text-slate-700 leading-relaxed font-serif">
            Дети младшего возраста осваивают навыки изобразительного искусства,
            которые включает в себя самые разные художественные и
            декоративно-прикладные техники. Подростки и ребята старшего
            школьного возраста осваивают объёмные работы с большим количеством
            алгоритмов. На каждом занятии изучается новый навык. Последовательно
            выполняя задания преподавателя, дети создают собственное
            произведение искусства. Занятия направлены на развитие творческих
            способностей учащихся, формирование знаний и навыков в области
            изобразительного искусства. Дети осваивают разные техники рисования,
            а ещё учатся доводить дело до конца, исправлять ошибки и прилагать
            усилия для достижения цели. Занятия длятся два часа.
          </p>
          <div className="mt-8 text-slate-600 space-y-4 text-lg">
            <p>
              Основанный в 1999 году, кружок под руководством{" "}
              <strong>Людмилы Леонидовны Кирилловой</strong> стал местом, где
              классическая живопись встречается с народными промыслами и
              современным дизайном.
            </p>
          </div>
        </div>

        {/* ТРИ БЛОКА В РЯД */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Блок 1: Цели */}
          <div className="p-8 bg-blue-900 text-white rounded-[2.5rem] shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target size={28} className="text-blue-300" />
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Цели занятий
                </h3>
              </div>
              <ul className="space-y-4 text-blue-100/80 text-sm font-medium">
                <li className="flex gap-2">
                  <span>•</span> Развитие цветоощущения и фантазии
                </li>
                <li className="flex gap-2">
                  <span>•</span> Мастерство работы с материалами
                </li>
                <li className="flex gap-2">
                  <span>•</span> Изучение национальных традиций
                </li>
              </ul>
            </div>
          </div>

          {/* Блок 2: Возраст */}
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Users size={28} className="text-blue-700" />
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Возраст детей
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase text-slate-400 font-bold">
                    Младшие
                  </span>
                  <span className="font-bold text-slate-800">6 – 11 лет</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase text-slate-400 font-bold">
                    Средние
                  </span>
                  <span className="font-bold text-slate-800">11 – 15 лет</span>
                </div>
                <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase text-slate-400 font-bold">
                    Старшие
                  </span>
                  <span className="font-bold text-slate-800">15 – 17 лет</span>
                </div>
              </div>
            </div>
          </div>

          {/* Блок 3: Когда (Дата и адрес) */}
          <div className="p-8 bg-white border border-blue-100 rounded-[2.5rem] shadow-2xl shadow-blue-100/50 flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <div className="flex items-center gap-3 mb-6 text-blue-800">
                <Calendar size={28} />
                <h3 className="font-black uppercase tracking-widest text-sm">
                  Когда и где
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-blue-600" />
                  <p className="font-bold text-slate-800 text-lg uppercase tracking-tight">
                    Вс: 10:00 — 12:00
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-600 mt-1" />
                  <p className="text-sm text-slate-500 font-medium leading-snug">
                    Севастополь, <br /> ул. Б. Михайлова, 17-А
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-green-600">
                Бесплатно
              </span>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* СЕКЦИЯ ГАЛЕРЕИ */}
        <section>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 font-serif leading-none">
              Будни кружка
            </h2>
            <div className="h-1.5 w-24 bg-blue-700 mt-6 rounded-full"></div>
          </div>

          <ClubMasonryGallery photos={photos} />
        </section>
      </main>

      <footer className="py-20 text-center opacity-30 border-t border-slate-50 mt-12">
        <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-slate-400">
          Севастопольский городской фонд Рерихов • 2026
        </p>
      </footer>
    </div>
  );
}
