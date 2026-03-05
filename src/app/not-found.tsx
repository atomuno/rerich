"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 font-serif">
      <div className="max-w-xl w-full text-center space-y-12">
        {/* Большая цифра на фоне */}
        <div className="relative">
          <span className="text-[120px] md:text-[200px] font-black text-slate-50 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 bg-white px-4">
              Упс! Тут пока пусто
            </h1>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-sm mx-auto">
            Похоже, эта страница еще находится в разработке или была перенесена.
          </p>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-xs font-sans font-black uppercase tracking-[0.2em] hover:bg-blue-900 transition-colors duration-300 rounded-sm shadow-xl"
            >
              <ArrowLeft size={16} />
              Вернуться на главную
            </Link>
          </div>
        </div>

        {/* Декоративный элемент */}
        <div className="flex justify-center gap-2 opacity-20">
          <div className="w-1 h-1 rounded-full bg-slate-400" />
          <div className="w-1 h-1 rounded-full bg-slate-400" />
          <div className="w-1 h-1 rounded-full bg-slate-400" />
        </div>
      </div>
    </main>
  );
}
