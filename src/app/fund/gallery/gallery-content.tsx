"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, PlayCircle } from "lucide-react";
import { galleryData, GalleryItem } from "@/data/gallery";
import PhotoAlbum from "react-photo-album";

// Определяем тип для фото в альбоме, чтобы избежать any
interface CustomPhoto {
  src: string;
  width: number;
  height: number;
  itemData: GalleryItem;
  alt: string;
}

export default function GalleryPage() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "unset";
  }, [selected]);

  const photos = useMemo(
    () =>
      galleryData.map((item) => ({
        src: item.image,
        width: item.width || 600,
        height: item.height || 800,
        itemData: item,
        alt: item.title,
      })),
    [],
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-slate-900 px-1 md:px-2 py-12">
      {/* --- HEADER --- */}
      <header className="max-w-5xl mx-auto pt-16 pb-20 px-4 font-serif text-slate-900">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight uppercase leading-tight mb-2">
              Галерея картин Л.Л. Кирилловой
            </h1>
            <h2 className="text-base  text-slate-500 uppercase font-light">
              Из коллекции СГФР
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative py-6 mb-8 border-y border-slate-100"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-slate-200 text-6xl select-none">
            “
          </div>
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-slate-800 mb-8">
              «…Искусство во всех его проявлениях и во всех условных формах
              всегда будет началом духовным, будящим устремление к красоте, к
              Высшему, и в этом его главное и величайшее значение. &lt;…&gt;
              Ибо, действительно, истинное устремление к красоте приведёт нас к
              пониманию высшей красоты законов, управляющих Вселенной,
              выраженных в Совершенном Разуме и Совершенном Сердце.»
            </p>
            <footer className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-slate-300"></div>
              <span className="text-slate-700 font-bold uppercase tracking-[0.2em] text-xs">
                Елена Ивановна Рерих
              </span>
              <div className="h-px w-8 bg-slate-300"></div>
            </footer>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-base"
        >
          <p>
            В экспозиции представлены работы Кирилловой Людмилы Леонидовны —
            члена Профессионального Союза Независимых Художников, Союза
            дизайнеров России, Ассоциации народных художественных промыслов
            Крыма, сотрудник СГФР. За 23 года творческой деятельности провела
            более 50 выставок. Творчество Людмилы Леонидовны неразрывно связано
            с философией Живой Этики, где художественные образы становятся
            инструментом познания красоты мироздания и духовного
            совершенствования.
          </p>
        </motion.div>
      </header>

      {/* --- GRID --- */}
      <main className="max-w-full mx-auto px-4">
        <PhotoAlbum
          layout="rows"
          photos={photos}
          spacing={20}
          targetRowHeight={600}
          rowConstraints={{ maxPhotos: 3 }}
          renderPhoto={({ photo, wrapperStyle }) => (
            <div
              style={{ ...wrapperStyle, margin: 0 }}
              onClick={() => setSelected((photo as CustomPhoto).itemData)}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt || ""}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover will-change-transform transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-end pointer-events-none">
                <p className="text-white text-sm font-bold font-serif leading-tight">
                  {(photo as CustomPhoto).itemData.title}
                </p>
              </div>
            </div>
          )}
        />
      </main>

      {/* --- VIDEO MATERIALS --- */}
      <section className="max-w-5xl mx-auto mt-32 mb-20 px-4 font-serif">
        <div className="flex flex-col items-center mb-12">
          <div className="h-px w-16 bg-slate-200 mb-8"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-center">
            Видеоматериалы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              title:
                "Искусство Людмилы Кирилловой как способ познания творчества Рерихов",
              desc: "Доклад Захарова Т.С. на Международной конференции «Перспективы развития современного общества» 10 апреля 2024 г.",
              link: "https://rutube.ru/video/private/1da08cde788b575be2f6a9c45e4e8f4e/?p=83ARXt0lCyTthvvptwGxog",
            },
            {
              title: "Разные техники мастерства",
              desc: "Музыкальная слайд-программа художественных работ Кирилловой Л.Л.",
              link: "https://rutube.ru/video/private/12e376106f68a3cdc447d3fd92c68f20/?p=dgjgUandEU5tF3lce_gL7A",
            },
            {
              title: "Без творческого вдохновения не рождаются шедевры",
              desc: "Музыкально-художественная композиция работ Кирилловой Л.Л.",
              link: "https://rutube.ru/video/private/a5efd6d4ffc7427972c877ea08965349/?p=hiPUQIL7PD9gAJ6ijzkdbA",
            },
            {
              title: "Иероглифы красоты",
              desc: "Художественные работы Кирилловой Л.Л. с персональной выставки",
              link: "https://rutube.ru/video/private/a2164adff2166392a571fd5ea23b6e80/?p=DgqdWJG_r5Q6v6u0Zwm_sw",
            },
          ].map((video, idx) => (
            <a
              key={idx}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col space-y-3 p-6 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold leading-snug group-hover:text-slate-600 transition-colors">
                  {video.title}
                </h3>
                <PlayCircle
                  className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0 ml-4"
                  size={24}
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-sans">
                {video.desc}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans font-bold pt-2 group-hover:text-slate-900 transition-colors">
                Смотреть на Rutube →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* --- LIGHT MODAL --- */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-white/40 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              // ИСПРАВЛЕНО: overflow-y-auto на мобилках для прокрутки ВСЕЙ модалки
              className="relative bg-white w-full md:w-fit max-w-[95vw] h-full md:h-auto md:max-h-[95vh] rounded-[2rem] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-[120] w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md border border-slate-100 rounded-full shadow-lg text-slate-900 hover:scale-110 transition-transform cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Секция с картинкой */}
              <div className="bg-slate-50 flex items-center justify-center p-0 shrink-0 md:shrink">
                <img
                  src={selected.image}
                  alt={selected.title}
                  // ИСПРАВЛЕНО: на мобилках высота h-auto, чтобы она не ограничивала скролл всей модалки
                  className="w-full h-auto md:max-h-[95vh] object-contain"
                />
              </div>

              {/* Секция с текстом */}
              {/* ИСПРАВЛЕНО: md:overflow-y-auto — на десктопе скроллим только тут, на мобилке скроллится вся модалка выше */}
              <div className="w-full md:w-[450px] lg:w-[500px] flex flex-col bg-white border-t md:border-t-0 md:border-l border-slate-50 md:overflow-y-auto hide-scrollbar">
                <div className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-black mb-2 leading-tight">
                      {selected.title}
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600 font-bold">
                      {selected.year} • {selected.material}
                    </p>
                  </div>

                  {selected.description && (
                    <p className="text-slate-900 text-sm leading-relaxed mb-8 font-serif">
                      {selected.description}
                    </p>
                  )}

                  <div className="space-y-8">
                    {selected.quotes?.map((q, i) => (
                      <div key={i} className="space-y-3">
                        <p className="text-black font-serif text-[14px] leading-relaxed italic">
                          «{q.text}»
                        </p>
                        <cite className="block text-[8px] text-slate-400 not-italic uppercase font-bold text-end">
                          — {q.author}
                        </cite>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
