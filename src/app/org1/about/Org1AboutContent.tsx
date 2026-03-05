"use client";

export default function Org1AboutContent() {
  return (
    <main className="min-h-screen bg-white font-serif text-slate-900 pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
            О Фонде
          </h1>
          <div className="h-2 w-16 bg-blue-900" />
        </header>

        <div className="space-y-16 md:space-y-24">
          <section className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-slate-400">
                Организация
              </span>
            </div>
            <div className="text-xl md:text-2xl leading-relaxed font-medium text-slate-800">
              <p className="mb-6">
                <span className="font-black text-slate-900">
                  Региональная общественная организация
                </span>{" "}
                «Севастопольский городской фонд Рериха» (РОО «СГФР») действует в
                Севастополе с 1990 года.
              </p>
              <p>
                Руководит фондом председатель{" "}
                <span className="text-blue-900 font-black">
                  Александр Михайлович Анохин
                </span>
                , возглавляющий организацию с 2015 года.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-12 border-t-2 border-slate-900">
            <div>
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-slate-400">
                Локация и данные
              </span>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight mb-10">
                Севастополь, <br />
                ул. Бориса Михайлова, <br />
                д. 12, кв. 96
              </p>

              <div className="space-y-4 font-sans text-lg md:text-xl font-bold">
                <p className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400 uppercase text-[9px] tracking-widest pt-1">
                    ОГРН
                  </span>
                  <span>1159204013320</span>
                </p>
                <p className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400 uppercase text-[9px] tracking-widest pt-1">
                    ИНН
                  </span>
                  <span>9201506788</span>
                </p>
                <p className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-400 uppercase text-[9px] tracking-widest pt-1">
                    КПП
                  </span>
                  <span>920101001</span>
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-12 border-t-2 border-slate-900">
            <div>
              <span className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-slate-400">
                Регистрация
              </span>
            </div>
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <span className="text-[9px] font-sans font-black uppercase text-slate-400 block mb-1">
                    № в ПФР/ФСС
                  </span>
                  <p className="text-xl md:text-2xl font-black font-sans">
                    1023150632
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-sans font-black uppercase text-slate-400 block mb-1">
                    Дата регистрации
                  </span>
                  <p className="text-xl md:text-2xl font-black font-sans">
                    11 марта 2015
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-100 opacity-40 text-[9px] font-sans font-black uppercase tracking-[1em] text-center">
          Севастопольский городской фонд Рериха
        </footer>
      </div>
    </main>
  );
}
