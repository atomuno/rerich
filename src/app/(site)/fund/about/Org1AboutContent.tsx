"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FundAboutContent() {
  return (
    <main className="min-h-screen bg-white font-serif text-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Заголовок в строгом стиле */}
        <header className="border-b-2 border-slate-900 pb-8 mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            О нас
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Основной текстовый блок */}
          <div className="md:col-span-8">
            <section className="space-y-6 text-lg leading-relaxed text-slate-900">
              <p>
                <span className="font-bold">
                  {`Региональная общественная организация "Севастопольский
                  городской фонд Рерихов" (Фонд)`}
                </span>{" "}
                создан по инициативе общественности г. Севастополя{" "}
                <span className="font-bold">17 ноября 1990 года</span> и в
                соответствии с волей, выраженной в письме (газета «Советская
                культура» от 3 июня 1989 года) единственного владельца и
                хранителя художественно-научного наследия семьи Рерихов –{" "}
                <span className="font-bold uppercase tracking-tight">
                  Святослава Николаевича Рериха
                </span>
                .
              </p>

              <div>
                <h2 className="font-bold uppercase text-sm tracking-widest mb-4 mt-8 text-blue-900">
                  Целью деятельности Фонда является:
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>
                      удовлетворение духовных и иных нематериальных
                      потребностей, представление и защита общих интересов,
                      достижение иных не противоречащих закону целей своих
                      членов;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>
                      возрождение нравственных ценностей народа на основе
                      использования гуманистических идей семьи Рерихов, а также
                      вовлечение общественности в активное участие в культурном
                      возрождении;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>
                      развитие сотрудничества в г. Севастополе на базе
                      культурных и экологических движений, развертывающихся во
                      всем мире;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>
                      укрепление в г. Севастополе идей интернационализма и
                      подлинной дружбы между народами всего мира в соответствии
                      с традициями этического учения семьи Рерихов;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>
                      развитие интереса членов Фонда к познанию истории и
                      культуры народов, населяющих территорию нашего государства
                      и зарубежных стран и его удовлетворение в просветительских
                      формах деятельности.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="pt-4 font-bold">
                Фонд в своей работе опирается на широкую поддержку
                общественности.
              </p>
            </section>
          </div>

          {/* Боковая панель с реквизитами */}
          <div className="md:col-span-4">
            <aside className="border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-[10px] font-sans font-black uppercase tracking-[0.2em] mb-6 text-slate-400 border-b pb-2">
                Юридические сведения
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block">
                    Адрес
                  </span>
                  <p className="leading-tight">
                    Севастополь, ул. Бориса Михайлова, д. 12, кв. 96
                  </p>
                </div>

                <div className="pt-4 space-y-2 border-t border-slate-200 font-mono text-[12px]">
                  <div className="flex justify-between">
                    <span>ОГРН:</span>
                    <span className="font-bold">1159204013320</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ИНН:</span>
                    <span className="font-bold">9201506788</span>
                  </div>
                  <div className="flex justify-between">
                    <span>КПП:</span>
                    <span className="font-bold">920101001</span>
                  </div>
                  <div className="flex justify-between border-t border-dotted pt-2 mt-2">
                    <span>ЗАРЕГ.:</span>
                    <span className="font-bold text-blue-900">11.03.2015</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.8em] text-slate-300">
            Севастопольский городской фонд Рерихов
          </p>
        </footer>
      </div>
    </main>
  );
}
