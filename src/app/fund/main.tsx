"use client";

export default function FoundationHero() {
  return (
    <div className="bg-white">
      <section className="relative h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-white">
        <div className="relative z-20 max-w-6xl mx-auto space-y-6 md:space-y-10">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Региональная общественная организация
            </h2>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Севастопольский городской
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-blue-900 leading-none uppercase drop-shadow-sm py-4">
              Фонд Рерихов
            </h1>
          </div>
        </div>
        {/* Декоративная сетка на фоне */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      </section>
    </div>
  );
}
