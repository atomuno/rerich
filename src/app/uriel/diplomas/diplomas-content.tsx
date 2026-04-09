"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { diplomasData } from "./data";

export default function DiplomasPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* --- ШАПКА В СТИЛЕ ВЫСТАВОК --- */}
      <header className="pt-24 pb-20 px-4 text-center border-b border-slate-50 bg-slate-50/30 font-serif">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-slate-900 mb-8 leading-none">
              Благодарности и дипломы
            </h1>

            <div className="h-px w-20 bg-slate-200 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              В данном разделе представлены награды и признания, полученные
              коллективом за более чем 20 лет культурно-просветительской
              деятельности.
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- СЕТКА ДИПЛОМОВ --- */}
      <main className="max-w-[1400px] mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {diplomasData.map((group) => {
            return Array.from({ length: group.count }).map((_, i) => {
              const fileSuffix = i === 0 ? "" : `_${i + 1}`;
              const extension = group.year === 2010 ? "JPG" : "jpg";
              const fileName = `${group.year}${fileSuffix}.${extension}`;
              const filePath = `/diplomas/${fileName}`;

              return (
                <motion.div
                  key={`${group.year}-${i}`}
                  variants={itemVariants}
                  className="group flex flex-col"
                >
                  {/* Карточка диплома со скруглениями и эффектами как в выставках */}
                  <div className="relative aspect-[3/4] bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-50 group-hover:-translate-y-2">
                    <Image
                      src={filePath}
                      alt={`Диплом ${group.year}`}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />

                    {/* ДАТА В УГЛУ — в стиле тегов из выставок */}
                    <div className="absolute bottom-6 right-6 z-10">
                      <div className="bg-white/90 backdrop-blur border border-slate-100 px-4 py-1.5 rounded-full shadow-sm">
                        <span className="text-[11px] font-sans font-black tracking-widest text-slate-900 uppercase">
                          {group.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            });
          })}
        </motion.div>
      </main>
    </div>
  );
}
