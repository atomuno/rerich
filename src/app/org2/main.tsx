"use client";

export default function CenterHero() {
  return (
    <div className="bg-white">
      <section className="relative py-16 md:py-28 flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-white border-b border-slate-100">
        <div className="relative z-20 max-w-6xl mx-auto space-y-6 md:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              Севастопольский городской центр <br className="hidden md:block" />{" "}
              детского творчества
            </h2>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-blue-900 leading-tight uppercase drop-shadow-sm py-2">
              «УРИЭЛЬ»
            </h1>

            <span className="text-xl md:text-3xl lg:text-4xl font-serif text-slate-800 leading-tight uppercase tracking-wide">
              имени Н.К. Рериха
            </span>
          </div>

          <div className="h-px w-32 md:w-48 bg-blue-900/20 mx-auto mt-8"></div>
        </div>

        {/* Декоративный элемент фона для стиля */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      </section>
    </div>
  );
}
