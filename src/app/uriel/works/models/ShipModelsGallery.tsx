"use client";

import React, { useMemo } from "react";
import PhotoAlbum from "react-photo-album";
import Image from "next/image";
import { Anchor, Ship, Rocket } from "lucide-react";
import { junior, middle, senior } from "@/data/shipsData";
// Импортируем переменные из твоего файла

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GroupGallery({ group, icon: Icon }: { group: any; icon: any }) {
  const photos = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      group.models.map((m: any) => ({
        src: m.src || `${group.url}/${m.id}.jpg`,
        width: 800,
        height: 600,
        title: m.title,
      })),
    [group],
  );

  return (
    <section className="relative w-full py-12 md:py-16 border-b border-slate-100 last:border-0 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={group.background.replace("/public", "")}
          alt={group.name}
          fill
          className="object-cover opacity-10 grayscale brightness-50 fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Заголовок группы */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-slate-50 text-blue-800">
            <Icon size={28} />
          </div>
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 mb-2 font-serif">
            {group.name}
          </h2>
          <div className="h-1 w-16 bg-blue-700 rounded-full"></div>
        </div>

        {/* Сетка PhotoAlbum */}
        <PhotoAlbum
          layout="rows"
          photos={photos}
          spacing={12}
          targetRowHeight={(containerWidth) => {
            if (containerWidth < 640) return 250; // Высота ряда на мобилках
            if (containerWidth < 1024) return 350; // На планшетах
            return 400; // На десктопе
          }}
          renderPhoto={({ photo, wrapperStyle }) => (
            <div
              style={{ ...wrapperStyle, margin: 0 }}
              className="relative group overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200 transition-all duration-500 hover:shadow-xl"
            >
              <Image
                src={photo.src.replace("/public", "")}
                alt={photo.title || ""}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              {/* Overlay: убрана надпись экспонат, оставлен заголовок */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 pt-12">
                <p className="text-white text-sm md:text-base font-serif font-bold leading-tight uppercase tracking-wide">
                  {photo.title}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default function ShipModelsGallery() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="pt-16 pb-10 text-center bg-white">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight font-serif text-slate-900 px-4 mb-3 leading-none">
          Модели кораблей
        </h1>
        <p className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em]">
          Историко-технический музей в моделях морских судов
        </p>
      </header>

      <main>
        <GroupGallery group={junior} icon={Anchor} />
        <GroupGallery group={middle} icon={Ship} />
        <GroupGallery group={senior} icon={Rocket} />
      </main>

      <footer className="py-12 text-center opacity-30">
        <p className="text-[10px] font-sans uppercase tracking-[0.5em]">
          Севастопольский городской фонд Рерихов
        </p>
      </footer>
    </div>
  );
}
