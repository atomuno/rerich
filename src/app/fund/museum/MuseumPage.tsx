"use client";

import {
  MapPin,
  Clock,
  User,
  Anchor,
  Palette,
  Camera,
  Navigation,
  History,
  Ship,
  Waves,
} from "lucide-react";

export default function MuseumPage() {
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-[#1e293b] font-serif py-12 px-4 selection:bg-blue-100">
      <div className="max-w-5xl mx-auto">
        {/* ЗАГОЛОВОК С АКЦЕНТОМ */}
        <header className="mb-12 border-b-2 border-slate-900 pb-10">
          <h1 className="text-2xl md:text-5xl font-black mb-8 tracking-tighter text-center uppercase leading-[0.9] text-slate-900">
            Историко-технический музей в моделях морских судов
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 justify-center font-sans text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <address className="not-italic flex items-center font-bold gap-2">
                <MapPin size={16} className="text-blue-900" />
                <span>ул. Бориса Михайлова, 17-А</span>
              </address>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <Navigation size={14} />
              <span>Вход свободный</span>
            </div>
          </div>
        </header>

        {/* ГЛАВНАЯ ГАЛЕРЕЯ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="aspect-[3/2] md:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl group relative cursor-zoom-in">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white transition-colors">
              <Camera size={48} strokeWidth={1} />
            </div>
            <img
              src="/museum-photo-1.jpg"
              alt="Крупный план модели морского судна"
              className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-700"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-slate-900/80 backdrop-blur px-4 py-2 text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Экспозиция судов
            </div>
          </div>

          <div className="aspect-[3/2] md:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl group relative cursor-zoom-in">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white transition-colors">
              <Camera size={48} strokeWidth={1} />
            </div>
            <img
              src="/museum-photo-2.jpg"
              alt="Выставка Петриковской росписи"
              className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-700"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-slate-900/80 backdrop-blur px-4 py-2 text-white text-[12px] font-bold uppercase tracking-[0.2em]">
              Петриковская роспись
            </div>
          </div>
        </section>

        {/* ИНФОРМАЦИОННЫЕ БЛОКИ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-center">
            <h2 className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-blue-900 mb-4 flex items-center gap-2">
              <Clock size={16} /> Режим работы
            </h2>
            <p className="text-xl font-black text-blue-900 leading-tight font-sans mb-2">
              Суббота - Воскресенье
            </p>
            <p className="text-2xl font-mono font-black text-blue-900">
              11:00 – 16:00
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg shadow-2xl lg:col-span-2 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Anchor size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs">
                    Морская тематика
                  </h3>
                </div>
                <p className="text-sm leading-relaxed font-sans text-slate-300">
                  Детальные историко-технические модели судов, воссоздающие
                  историю мореплавания от античности до наших дней.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Palette size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs">
                    Петриковская роспись
                  </h3>
                </div>
                <p className="text-sm leading-relaxed font-sans text-slate-300">
                  Уникальные экспонаты народной декоративной живописи и работы
                  известных мастеров.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* НОВЫЙ РАЗДЕЛ: ПОЛНЫЙ ТЕКСТ ИСТОРИИ */}
        <section className="mb-16 bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <History className="text-blue-900" size={32} />
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-slate-900">
              История морского музея
            </h2>
          </div>

          <div className="prose prose-slate max-w-none font-sans text-slate-700 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="mb-4">
                  Историко-технический музей моделей морских судов
                  Севастопольского городского фонда Рерихов был создан
                  <span className="font-bold text-slate-900">
                    {" "}
                    10 сентября 1999 года
                  </span>{" "}
                  в Средней общеобразовательной школе № 60 имени Героя
                  Советского Союза В.С. Пилипенко. Основателем выступил художник
                  и руководитель кружка{" "}
                  <span className="italic">
                    Кириллов Владимир Васильевич (1941-2013)
                  </span>
                  .
                </p>
                <p className="mb-4">
                  В 2004 году Музей перебазирован в помещения Севастопольского
                  городского центра детского творчества «Уриэль» им. Н.К. Рериха
                  по адресу ул. Бориса Михайлова д. 17-А. Со времени переезда
                  музей существенно преобразился, пополнившись большим
                  количеством новых моделей и значительно повысив качество
                  созданных копий.
                </p>
                <p>
                  Сейчас в музее представлено около{" "}
                  <span className="font-bold text-blue-900">
                    90 моделей судов и кораблей
                  </span>
                  , изготовленных руками ребят, посещавших судомодельные кружки
                  в школах № 60 и № 49 города Севастополя, а также детские клубы
                  «Лотос» и «Плеяды». Среди экспонатов выставлены и работы
                  руководителей кружков и мастеров-любителей.
                </p>
              </div>
              <div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900 mb-6">
                  <h4 className="font-black uppercase text-xs mb-3 flex items-center gap-2">
                    <Ship size={14} /> География эпох
                  </h4>
                  <p className="text-sm">
                    Экспонаты охватывают времена от древней Атлантиды (100 тыс.
                    лет до н.э.), египетских, греческих и римских судов до
                    современных военных кораблей России и Европы.
                  </p>
                </div>
                <p>
                  Особую ценность представляют подлинные морские экспонаты с
                  советского транспортного рефрижератора
                  <span className="font-bold"> «Матрос Кошка» (1964–1995)</span>
                  : иллюминаторы, штурвал, письменный стол, конторка,
                  спасательный плот, бортовые фонари и другие элементы
                  корабельного быта.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                  <Waves size={20} className="text-blue-900" /> Действующие
                  экспонаты
                </h3>
                <p className="mb-4">
                  В музее можно увидеть в действии: пелорус, сигнальный фонарь,
                  электрический тифон, телеграф и судовой колокол.
                  Представленные детали и штормтрап изготовлены детьми и их
                  руководителями по всем правилам морского дела.
                </p>
                <p>
                  В витринах выставлены марки на морскую тематику, награды и
                  мелкие судовые предметы. Под витринами разместились пожарные
                  шланги, якоря и черепки древних амфор.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-black uppercase text-xs mb-3 text-blue-900">
                  Художественный зал
                </h4>
                <p className="text-sm">
                  Здесь выставлены работы Петриковской росписи художницы{" "}
                  <span className="font-bold">
                    Кирилловой Людмилы Леонидовны
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="mt-10 bg-slate-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-black uppercase mb-6 text-blue-400">
                Живописное наследие
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">
                    Наряду с работами художников Л.Л. Кирилловой и А.В. Евтушка
                    (1960–2026), экспонируется монументальное полотно
                    <span className="italic text-blue-200">
                      {" "}
                      «Севастополь, Севастополь, ты разгромлен, ты утоплен…»
                    </span>{" "}
                    Заслуженного художника УССР
                    <span className="font-bold text-white">
                      {" "}
                      Коваленко Виктора Карповича (1930–2017)
                    </span>
                    .
                  </p>
                </div>
                <div className="flex-1 border-l border-slate-700 pl-0 md:pl-8">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    О сюжете картины:
                  </p>
                  <p className="text-sm text-slate-300">
                    Запечатлен эпизод Первой обороны Севастополя 1854-1855 гг.
                    На картине изображена Даша Севастопольская, сопровождающая
                    раненого офицера, и мачты затопленных кораблей, преградивших
                    путь врагу в бухту.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ПЕРСОНАЛИИ */}
        <section className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-slate-100 rounded-lg gap-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
              <User size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-1">
                Руководитель и экскурсовод
              </p>
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight font-sans">
                Васильцова Галина Михайловна
              </h4>
            </div>
          </div>
          <div className="w-full md:w-px h-px md:h-12 bg-slate-200"></div>
          <p className="text-sm text-slate-800 max-w-xs text-center md:text-left font-sans">
            Для записи на групповые экскурсии, пожалуйста, посетите музей в
            рабочее время.
          </p>
        </section>

        {/* НИЖНИЙ КОЛОНТИТУЛ */}
        <footer className="mt-24 text-center">
          <div className="h-1 w-12 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-slate-400">
            Севастопольский городской фонд Рерихов
          </p>
        </footer>
      </div>
    </article>
  );
}
