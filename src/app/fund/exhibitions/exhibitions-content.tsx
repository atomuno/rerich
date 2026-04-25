"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExhibitionMasonryGallery from "@/components/ExhibitionMasonryGallery";
import {
  ArrowRight,
  Calendar,
  ImageIcon,
  MapPin,
  PlayCircle,
  X,
} from "lucide-react";
import { fundExhibitions, FundExhibition } from "./exhibitionsData";

export default function FundExhibitionsContent() {
  const [selectedExhibition, setSelectedExhibition] =
    useState<FundExhibition | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedExhibition ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedExhibition]);

  return (
    <div className="min-h-screen bg-white pb-32">
      <header className="pt-24 pb-20 px-4 text-center border-b border-slate-50 bg-slate-50/30 font-serif">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-slate-900 mb-8 leading-none text-center">
              Выставки фонда
            </h1>
            <p className="text-slate-500 font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-8 text-center">
              Архив выставочных проектов СГФР
            </p>
            <div className="h-px w-20 bg-slate-200 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto text-center">
              Раздел объединяет проекты Севастопольского городского фонда
              Рерихов: персональные и международные выставки, а также фотоархив
              ключевых событий.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {fundExhibitions.map((exhibition) => {
            const hasPhotos = exhibition.photos.length > 0;
            return (
              <div
                key={exhibition.id}
                onClick={() => hasPhotos && setSelectedExhibition(exhibition)}
                className={`
                  h-full flex flex-col justify-between
                  group p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500
                  ${
                    hasPhotos
                      ? "bg-white border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-50/50 cursor-pointer active:scale-[0.98]"
                      : "bg-slate-50/40 border-blue-100"
                  }
                `}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-xl ${hasPhotos ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}
                      >
                        <Calendar size={14} />
                      </div>
                      <span className="font-sans font-bold text-slate-900 tracking-tight text-sm md:text-base">
                        {exhibition.date}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {hasPhotos && (
                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full animate-pulse">
                          <ImageIcon size={12} />
                          <span className="text-[10px] font-black uppercase tracking-wider">
                            Галерея
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={12} className="shrink-0" />
                        <span className="text-[9px] uppercase font-sans font-bold tracking-[0.1em]">
                          {exhibition.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3
                    className={`text-lg md:text-xl font-serif font-bold leading-snug transition-colors duration-300 ${hasPhotos ? "group-hover:text-blue-700 text-black" : "text-slate-700"}`}
                  >
                    {exhibition.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {exhibition.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {hasPhotos ? (
                    <div className="flex items-center gap-2 text-blue-600 font-sans font-black text-[10px] uppercase tracking-widest transition-all group-hover:gap-3">
                      <ImageIcon size={14} />
                      <span>Открыть фотографии</span>
                      <ArrowRight size={14} />
                    </div>
                  ) : (
                    <span className="text-[9px] uppercase font-sans font-black text-slate-300 tracking-[0.2em]">
                      Архивная запись
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-300">
                    №{exhibition.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <AnimatePresence>
        {selectedExhibition && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExhibition(null)}
              className="absolute inset-0 bg-white/60 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative flex max-h-[98vh] w-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl z-10 md:rounded-[3rem] ${
                selectedExhibition.photos.length <= 2
                  ? "max-w-[min(96vw,1540px)]"
                  : "max-w-7xl"
              }`}
            >
              <button
                onClick={() => setSelectedExhibition(null)}
                className="absolute top-5 right-5 z-[120] w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur border border-slate-100 rounded-full shadow-lg text-slate-900 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8 border-b border-slate-100 shrink-0 font-serif bg-white">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Calendar size={14} />
                  <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                    {selectedExhibition.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-black leading-tight tracking-tight max-w-5xl">
                  {selectedExhibition.title}
                </h2>
                <div className="flex items-center gap-2 text-slate-400 mt-2 font-sans">
                  <MapPin size={12} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">
                    {selectedExhibition.location}
                  </span>
                </div>
                <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
                  {selectedExhibition.description}
                </p>
              </div>

              <div
                className={`flex-grow overflow-y-auto bg-white ${
                  selectedExhibition.photos.length <= 2
                    ? "p-1 sm:p-2"
                    : "p-3 md:p-6"
                }`}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div
                  className={`mx-auto w-full ${
                    selectedExhibition.photos.length <= 2
                      ? "max-w-none"
                      : "max-w-[min(100%,80rem)]"
                  }`}
                >
                  <ExhibitionMasonryGallery photos={selectedExhibition.photos} />
                </div>

                {selectedExhibition.videos?.length ? (
                  <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-slate-100">
                    <h3 className="text-sm md:text-base font-bold uppercase tracking-wide text-slate-900 mb-4">
                      Видеоматериалы
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedExhibition.videos.map((video) => (
                        <a
                          key={video.url}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                        >
                          <span className="text-sm text-slate-700 font-medium leading-snug">
                            {video.title}
                          </span>
                          <PlayCircle
                            size={18}
                            className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="p-4 text-center text-[9px] font-sans font-bold text-slate-300 uppercase tracking-[0.3em] border-t border-slate-50 shrink-0 bg-white">
                Архив СГФР • {selectedExhibition.date}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
