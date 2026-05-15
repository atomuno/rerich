"use client";
import Image from "next/image";
import { Sparkles, Brush, MapPin } from "lucide-react";
import type { CraftView } from "@/lib/cms/payload-queries";

export default function CraftsContent({ crafts }: { crafts: CraftView[] }) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="pt-24 pb-16 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full text-amber-700 border border-amber-100 mb-6">
          <Sparkles size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            Экспозиция
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter font-serif text-slate-900 mb-6">
          Поделки
        </h1>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-slate-600 leading-relaxed italic font-serif text-lg">
            В разделе представлены работы Кирилловой Л.Л. — декоративная роспись
            по дереву в петриковском стиле из коллекций в г. Севастополь.
          </p>
          <div className="flex justify-center items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-1">
              <Brush size={14} /> Ручная работа
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Севастополь
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {crafts.map((item) => (
            <div key={item.id} className="group space-y-6">
              {/* Фото */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    № {item.id}
                  </span>
                </div>
              </div>

              {/* Описание */}
              <div className="px-4 border-l-2 border-amber-200 ml-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center border-t border-slate-100 opacity-40">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold">
          Уриэль • Мастерская Кирилловой
        </p>
      </footer>
    </div>
  );
}
