"use client";

import React from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";
import {
  Clock,
  MapPin,
  Users,
  Target,
  Anchor,
  Calendar,
  Award,
} from "lucide-react";

const PHOTOS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `/techmodel/0${i + 1}.jpg`,
  width: 900,
  height: i % 2 === 0 ? 1000 : 700,
}));

export default function ShipModelingContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Шапка страницы */}
      <header className="pt-20 pb-16 text-center border-b border-slate-50 px-4">
        <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-3xl mb-6 text-white">
          <Anchor size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-serif text-slate-900 mb-4 leading-none">
          Техническое моделирование
        </h1>
        <p className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold">
          Судомодельная лаборатория центра «Уриэль»
        </p>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-16">
        {/* Блок с историей и руководителем */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 font-serif">
              История и традиции
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-4">
              <p>
                Кружок был организован в <strong>1994 году</strong> художником и
                педагогом Владимиром Васильевичем Кирилловым. За десятилетия
                работы он объединил ребят из множества школ Севастополя, став
                настоящим центром технического творчества.
              </p>
              <p>
                С 2014 года лабораторией руководит{" "}
                <strong>Галина Михайловна Васильцова</strong>. В обучении
                гармонично сочетаются классическая музыка, изучение морской
                истории и практическое конструирование моделей судов.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-blue-900">
              <Award size={28} />
              <h3 className="font-black uppercase tracking-widest text-sm">
                Заслуги руководителя
              </h3>
            </div>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li className="flex gap-2">
                <span>•</span> Медаль «За возвращение Крыма»
              </li>
              <li className="flex gap-2">
                <span>•</span> Медаль «За третью оборону Севастополя»
              </li>
              <li className="flex gap-2">
                <span>•</span> Медаль «10 лет возвращения Севастополя в Россию»
              </li>
              <li className="flex gap-2">
                <span>•</span> Медаль «За служение медицине»
              </li>
              <li className="flex gap-2">
                <span>•</span> Медаль им. Екатерины Бакуниной
              </li>
            </ul>
          </div>
        </div>

        {/* ТРИ БЛОКА В РЯД */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl flex flex-col transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <Target size={28} className="text-slate-400" />
              <h3 className="font-black uppercase tracking-widest text-sm">
                Чему научимся
              </h3>
            </div>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li>• Создание моделей из дерева и металла</li>
              <li>• Работа с профессиональным инструментом</li>
              <li>• Радость творчества на Общее Благо</li>
              <li>• Любовь к истории родного города</li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6 text-slate-900">
              <Users size={28} className="text-slate-500" />
              <h3 className="font-black uppercase tracking-widest text-sm">
                Возраст детей
              </h3>
            </div>
            <div className="mt-4">
              <span className="text-4xl font-black text-slate-900">7 – 17</span>
              <span className="ml-2 text-slate-500 uppercase font-bold text-xs tracking-widest">
                лет
              </span>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Группы формируются с учетом возраста: от первых бумажных макетов
                до сложных копий кораблей.
              </p>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl shadow-slate-100 flex flex-col transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6 text-slate-900">
              <Calendar size={28} />
              <h3 className="font-black uppercase tracking-widest text-sm">
                Когда и где
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 italic">
                <Clock size={18} className="text-slate-400 mt-1" />
                <div className="font-bold text-slate-800 uppercase tracking-tight text-sm">
                  <p>Сб: 12:00 — 14:00</p>
                  <p>Вс: 13:00 — 15:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-400 mt-1" />
                <p className="text-sm text-slate-500 font-medium leading-snug">
                  Севастополь, <br /> ул. Б. Михайлова, 17-А
                </p>
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

        {/* ГАЛЕРЕЯ */}
        <section>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 font-serif leading-none">
              Мастерская моделей
            </h2>
            <div className="h-1.5 w-24 bg-slate-900 mt-6 rounded-full"></div>
          </div>

          <PhotoAlbum
            layout="masonry"
            photos={PHOTOS}
            spacing={4} // Как в Озарении — минимальный отступ между колонками
            columns={(containerWidth) => {
              if (containerWidth < 640) return 1;
              if (containerWidth < 1024) return 2;
              return 3;
            }}
            renderPhoto={({ photo, wrapperStyle }) => (
              <div
                style={{
                  ...wrapperStyle,
                  margin: 0,
                  marginBottom: "32px", // Вертикальный отступ как в Озарении
                }}
                className="relative overflow-hidden rounded-[3rem] shadow-lg group bg-slate-50 transition-all duration-500 hover:shadow-2xl border border-transparent"
              >
                <div className="relative w-full h-full min-h-[300px]">
                  {/* Фиксируем минимальную высоту, чтобы fill работал корректно */}
                  <Image
                    src={photo.src}
                    alt="Техническое моделирование"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}
          />
        </section>
      </main>

      <footer className="py-20 text-center opacity-30 border-t border-slate-50 mt-12">
        <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-slate-400">
          ЦЕНТР ДЕТСКОГО ТВОРЧЕСТВА • 2026
        </p>
      </footer>
    </div>
  );
}
