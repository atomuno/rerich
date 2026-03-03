'use client';

import React from 'react';

export default function FoundationPage() {
  return (
    <div className="bg-white">
      {/* Секция на всю высоту экрана за вычетом высоты хедера (h-14 = 56px) */}
      <section className="relative h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-white">
        
        <div className="relative z-20 max-w-6xl mx-auto space-y-6 md:space-y-10">
          
          <div className="space-y-4 md:space-y-6">
            {/* Верхний заголовок — теперь такой же крупный и красивый */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Региональная общественная организация
            </h2>
            
            {/* Основное название — монументальный стиль */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-blue-900 leading-none uppercase drop-shadow-sm py-4">
              Фонд Рерихов
            </h1>
            
            {/* Нижняя подпись */}
            <span className="text-slate-500 font-serif font-semibold tracking-[0.3em] uppercase text-[12px] md:text-xl block">
              Севастопольский городской
            </span>
          </div>

          {/* Декоративная линия */}
          <div className="h-px w-32 md:w-64 bg-blue-900/20 mx-auto mt-12"></div>
          
          <p className="text-slate-400 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
            Хранители культурного наследия
          </p>
        </div>

        {/* Фоновый элемент (тот же паттерн, что и в org2 для единства стиля) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      </section>
    </div>
  );
}