'use client';

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  
  // Функция для плавного скролла, которая работает всегда
  const scrollToSections = () => {
    const element = document.getElementById('sections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col font-sans">
      
      {/* БЛОК 1: HERO - Высота ровно под хедер */}
      <section className="relative h-[calc(100vh-10px)] min-h-[500px] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./hero-bg.jpg')" }}
        />
        
        {/* Оверлей для читаемости */}
        <div className="absolute inset-0 z-10 bg-slate-950/60 backdrop-blur-[1px]" />

        {/* Контент */}
        <div className="relative z-20 max-w-5xl mx-auto space-y-10 md:space-y-12 -mt-10">
          <div className="space-y-4 md:space-y-6">
            <span className="text-white font-semibold tracking-[0.2em] uppercase text-[10px] md:text-sm block">
              Региональная общественная организация
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-xl">
              Севастопольский городской <br className="hidden md:block" /> фонд Рерихов
            </h1>
          </div>

          <div className="h-px w-20 md:w-24 bg-white/30 mx-auto"></div>

          <div className="space-y-4 md:space-y-6">
            <span className="text-white font-semibold tracking-[0.2em] uppercase text-[10px] md:text-sm block">
              Центр детского творчества "Уриэль"
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-xl">
              имени Н.К. Рериха
            </h1>
          </div>
        </div>

        {/* ПРЫГАЮЩАЯ СТРЕЛКА - Исправленная для TypeScript */}
        <button 
          onClick={scrollToSections}
          className="absolute bottom-10 z-30 text-white/50 hover:text-white transition-all transform hover:scale-110 animate-bounce cursor-pointer focus:outline-none flex items-center justify-center"
          aria-label="Прокрутить вниз"
        >
          <ChevronDown 
            className="w-10 h-10 md:w-14 md:h-14" 
            strokeWidth={1} 
          />
        </button>
      </section>

      {/* БЛОК 2: СЕКЦИИ ВЫБОРА */}
      <section 
        id="sections" 
        className="flex flex-col md:flex-row min-h-screen overflow-hidden scroll-mt-16 bg-white"
      >
        
        {/* Левая сторона: Фонд */}
        <Link 
          href="/org1" 
          className="relative flex-1 group flex items-center justify-center p-8 overflow-hidden border-b md:border-b-0 md:border-r border-slate-200 transition-all duration-700 min-h-[50vh] md:min-h-0"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
            style={{ backgroundImage: "url('./fond-bg.jpg')" }}
          />

          <div className="absolute inset-0 z-10 bg-blue-900/50 group-hover:bg-blue-900/80 transition-colors duration-700" />
          
          <div className="relative z-20 text-center space-y-4 px-4">
            <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.2em] text-white drop-shadow-lg">
              Севастопольский городской <br /> фонд Рерихов
            </h2>
            <div className="inline-flex items-center text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase text-[10px] tracking-[0.3em] border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
              Подробнее <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Правая сторона: Центр творчества */}
        <Link 
          href="/org2" 
          className="relative flex-1 group flex items-center justify-center p-8 overflow-hidden transition-all duration-700 min-h-[50vh] md:min-h-0"
        >
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
            style={{ backgroundImage: "url('./uriel-bg.jpg')" }}
          />


          <div className="absolute inset-0 z-10 bg-slate-900/50 group-hover:bg-blue-800/80 transition-colors duration-700" />
          
          <div className="relative z-20 text-center space-y-4 px-4">
            <h2 className="text-xl md:text-3xl font-serif font-bold uppercase tracking-[0.2em] text-white drop-shadow-lg">
              Центр "Уриэль" <br /> имени Н.К. Рериха
            </h2>
            <div className="inline-flex items-center text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 uppercase text-[10px] tracking-[0.3em] border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
              Подробнее <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}