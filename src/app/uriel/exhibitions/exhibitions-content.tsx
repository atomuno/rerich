"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ImageIcon, ArrowRight, MapPin, X } from "lucide-react";
import { exhibitions } from "./exhibitionsData";

export default function ExhibitionsContent() {
  const [selectedEx, setSelectedEx] = useState<(typeof exhibitions)[0] | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = selectedEx ? "hidden" : "unset";
  }, [selectedEx]);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* --- ШАПКА СТРАНИЦЫ --- */}
      <header className="pt-24 pb-20 px-4 text-center border-b border-slate-50 bg-slate-50/30 font-serif">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-slate-900 mb-8 leading-none text-center">
              Городские выставки
            </h1>
            <p className="text-slate-500 font-sans text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-8 text-center">
              Архив мероприятий СГЦДТ «Уриэль»
            </p>
            <div className="h-px w-20 bg-slate-200 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto  text-center">
              В разделе представлен перечень выставок, в которых принимали
              участие творческие коллективы «Уриэль» за более чем 20 лет
              деятельности.
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- СЕТКА КАРТОЧЕК --- */}
      <main className="max-w-[1400px] mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {exhibitions.map((ex) => (
            <div
              key={ex.id}
              onClick={() => ex.hasPhotos && setSelectedEx(ex)}
              className={`
                h-full flex flex-col justify-between
                group p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500
                ${
                  ex.hasPhotos
                    ? "bg-white border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-50/50 cursor-pointer active:scale-[0.98]"
                    : "bg-slate-50/40 border-blue-100"
                }
              `}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-xl ${ex.hasPhotos ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}
                    >
                      <Calendar size={14} />
                    </div>
                    <span className="font-sans font-bold text-slate-900 tracking-tight text-base">
                      {ex.date}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {ex.hasPhotos && (
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
                        {ex.location}
                      </span>
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-lg md:text-xl font-serif font-bold leading-snug transition-colors duration-300 ${ex.hasPhotos ? "group-hover:text-blue-700 text-black" : "text-slate-700"}`}
                >
                  {ex.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                {ex.hasPhotos ? (
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
                  №{ex.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- МОДАЛЬНОЕ ОКНО --- */}
      <AnimatePresence>
        {selectedEx && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEx(null)}
              className="absolute inset-0 bg-white/60 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-6xl max-h-[98vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col z-10 border border-slate-100"
            >
              {/* Кнопка закрытия (чуть меньше и аккуратнее) */}
              <button
                onClick={() => setSelectedEx(null)}
                className="absolute top-5 right-5 z-[120] w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur border border-slate-100 rounded-full shadow-lg text-slate-900 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* ХЕДЕР МОДАЛКИ (КОМПАКТНЫЙ) */}
              <div className="p-6 md:p-8 border-b border-slate-100 shrink-0 font-serif bg-white">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Calendar size={14} />
                  <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                    {selectedEx.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-black leading-tight tracking-tight max-w-3xl">
                  {selectedEx.title}
                </h2>
                <div className="flex items-center gap-2 text-slate-400 mt-2 font-sans">
                  <MapPin size={12} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">
                    {selectedEx.location}
                  </span>
                </div>
              </div>

              {/* СЕТКА ФОТО (КРУПНО) */}
              <div
                className="flex-grow overflow-y-auto p-4 md:p-8 bg-slate-50/30"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                  {Array.from({ length: selectedEx.photoCount || 0 }).map(
                    (_, i) => {
                      const photoFileName = (i + 1).toString().padStart(2, "0");
                      return (
                        <div
                          key={i}
                          className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-md group border border-slate-200/50"
                        >
                          <Image
                            src={`/exhibitions/${selectedEx.slug}/${photoFileName}.jpg`}
                            alt={`Фото ${photoFileName}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={i < 4}
                          />
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              <div className="p-4 text-center text-[9px] font-sans font-bold text-slate-300 uppercase tracking-[0.3em] border-t border-slate-50 shrink-0 bg-white">
                Архив СГЦДТ «Уриэль» • {selectedEx.date}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
