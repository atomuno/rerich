"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UrielAbout() {
  return (
    <main className="min-h-screen bg-white font-serif text-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Заголовок */}
        <header className="border-b-2 border-slate-900 pb-8 mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            Уриэль
          </motion.h1>
          <p className="mt-2 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-slate-400">
            Севастопольский городской центр детского творчества им. Н.К. Рериха
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Основной текст */}
          <div className="md:col-span-8">
            <section className="space-y-6 text-lg leading-relaxed text-slate-900">
              <p>
                <span className="font-bold text-blue-900 uppercase tracking-tighter text-base block mb-2 underline decoration-2 underline-offset-4">
                  Организация
                </span>
                <span className="font-bold text-xl block mb-4">
                  {`Региональная общественная организация "Севастопольский
                  городской центр детского творчества "Уриэль" имени Н.К.
                  Рериха" (Центр)`}
                </span>
                создан по инициативе общественности г. Севастополя{" "}
                <span className="font-bold">25 августа 1994 года</span> и
                предназначен для духовного, творческого и интеллектуального
                развития детей и подростков, их воспитания и самоопределения.
              </p>

              <div className="pt-4">
                <h2 className="font-bold uppercase text-sm tracking-widest mb-6 text-blue-900 border-l-4 border-blue-900 pl-4">
                  Целью деятельности Центра является:
                </h2>
                <ul className="space-y-5 text-[17px]">
                  {[
                    "удовлетворение духовных и иных нематериальных потребностей, представление и защита общих интересов и достижение иных не противоречащих закону целей членов Центра в области детского творчества;",
                    "развитие сотрудничества на базе культурных программ с другими организациями;",
                    "укрепление идей интернационализма и подлинной дружбы между народами в соответствии с традициями этического Учения семьи Рерихов;",
                    "развитие интересов членов Центра к познанию истории и культуры народов, населяющих территорию нашего государства и зарубежных стран;",
                    "создание оптимальных условий для духовно-нравственного и интеллектуального развития членов Центра, приобщения к культуре и творческому труду, высокоэффективного воспитания и самоопределения;",
                    "привитие навыков членам Центра творческой самостоятельной деятельности в научно-производственной, управленческо-хозяйственной, культурно-воспитательной сферах, овладение новыми методами взаимоотношений;",
                    "взаимодействие со школами, профессионально-техническими училищами, внешкольными и культурно-просветительными учреждениями в создании возможностей на базе Центра проведения с молодёжью соответствующих мероприятий;",
                    "осуществление информационно-методической работы, распространение достижений культуры, философии, науки;",
                    "развитие у членов Центра способности воспринимать окружающий мир через призму высоконравственного искусства, одухотворённого высшими знаниями на основе последних достижений науки, философии и культуры;",
                    "формирование социально-зрелой индивидуальности – гражданина Родины, его самосознания, гражданской позиции.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="font-bold text-blue-900 leading-none pt-1.5">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="pt-8 font-bold border-t border-slate-100">
                Центр в своей работе опирается на широкую поддержку
                общественности.
              </p>
            </section>
          </div>

          {/* Реквизиты */}
          <div className="md:col-span-4">
            <aside className="border-2 border-slate-900 p-6 bg-white sticky top-24">
              <h3 className="text-[11px] font-sans font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-slate-900 pb-2">
                Карточка центра
              </h3>

              <div className="space-y-6 text-sm">
                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">
                    Директор
                  </span>
                  <p className="font-bold uppercase leading-tight text-slate-900">
                    Анохин Александр Михайлович
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase">
                    с 6 марта 2015 года
                  </p>
                </div>

                <div>
                  <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">
                    Юридический адрес
                  </span>
                  <p className="font-medium leading-tight text-slate-900">
                    г. Севастополь, ул. Бориса Михайлова, д. 12, кв. 96
                  </p>
                </div>

                <div className="pt-6 space-y-3 border-t border-slate-100 font-mono text-[12px]">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ОГРН:</span>
                    <span className="font-bold tracking-tighter">
                      1159204012725
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ИНН:</span>
                    <span className="font-bold tracking-tighter">
                      9201506643
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">КПП:</span>
                    <span className="font-bold tracking-tighter">
                      920101001
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-900 pt-3 mt-3">
                    <span className="text-slate-400 font-sans uppercase text-[9px]">
                      Регистрация:
                    </span>
                    <span className="font-bold text-blue-900 tracking-tighter">
                      11.03.2015
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.8em] text-slate-300">
            СГЦДТ Уриэль им. Н.К. Рериха
          </p>
        </footer>
      </div>
    </main>
  );
}
