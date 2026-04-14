"use client";

import { Play, Calendar, User, ArrowRight } from "lucide-react";

export default function LecturesClient() {
  const lectures = [
    // --- НОВЫЕ ЛЕКЦИИ (ПРСО-2026) ---
    {
      id: 1,
      title: "Открытие конференции. Приветственное слово программного комитета",
      speaker: "Лебеденко А.А., Расулова Т.С., Головин В.В.",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/c556a95fd40bc7bb7ecbb2750afb6fc3/?p=JMr4DGmf5nRfaKTXqZDLKQ",
      tag: "Открытие",
    },
    {
      id: 2,
      title: "Презентация монографии: Севастопольские летописи (1783-2024)",
      speaker: "Головина Н.М., Головин В.В.",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/f9540b724c2ef6447a77d0e052da9b62/?p=5M2eM6aIenejVPI8GTpf5w",
      tag: "Монография",
    },
    {
      id: 3,
      title: "Идеи Пакта Рериха в социалистической Болгарии",
      speaker: "Лебеденко Анатолий Андреевич",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/19e69784aa5cc838563836a1db791ea1/?p=yWItpeQA4EEvXu4KdVMJuQ",
      tag: "Доклад 1",
    },
    {
      id: 4,
      title: "Культура как Знамя Мира и Победы!",
      speaker: "Расулова Татьяна Салиховна",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/ff2c7cb86d631b71e648a2054a72c630/?p=Z9FPwSTtQyEIFyENiSsiQQ",
      tag: "Доклад 2",
    },
    {
      id: 5,
      title:
        "Проблематика воспитания и созидания истинных людей в трудах Е.И. Рерих",
      speaker: "Головина Наталья Михайловна",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/19e021e7dc28128aacc129214bd8fce2/?p=voeBEf298LbDc8FaZtfsVg",
      tag: "Доклад 3",
    },
    {
      id: 6,
      title: "Метаморфозы ответственности в современную эпоху",
      speaker: "Тупиленко Анастасия Бахтиеровна",
      date: "10 апреля 2026",
      url: "https://rutube.ru/video/private/fb1633bf33e30a3fc4b32942b100d0bf/?p=o0RMAge3ao8KFBtWUo4UXA",
      tag: "Доклад 4",
    },
    {
      id: 7,
      title: "Общезначное время как онтологическая мера реальности",
      speaker: "Григорьев Павел Евгеньевич",
      date: "11 апреля 2026",
      url: "https://rutube.ru/video/private/447531b2556bb41b3bbedaa3f8229ce0/?p=TS_7nVpH3HJ83HPKnXSxBQ",
      tag: "Доклад 5",
    },
    {
      id: 8,
      title:
        "Ретропричинность как эффект физико-семантической связности событий",
      speaker: "Григорьев Павел Евгеньевич",
      date: "11 апреля 2026",
      url: "https://rutube.ru/video/private/5bc0a9d74ba09d7585f513e345c26656/?p=kAXdruaFj_I6TIGwwwgunQ",
      tag: "Доклад 6",
    },
    {
      id: 9,
      title:
        "Формирование консорций при помощи ИИ как перспективная социальная технология",
      speaker: "Сулейменов Ибрагим Эсенович",
      date: "11 апреля 2026",
      url: "https://rutube.ru/video/private/15aeb821e3b4465934531a79c4a3170b/?p=F5U5axyQMV55SwLfqSvkZg",
      tag: "Доклад 7",
    },
    {
      id: 10,
      title:
        "Значение наследия Н.К. Рериха при обсуждении новой модели развития России",
      speaker: "Головин Владислав Викторович",
      date: "11 апреля 2026",
      url: "https://rutube.ru/video/private/4d55752f8f52c52987415ee64830c2d1/?p=pH_W52Py-aSkaakk31dGOw",
      tag: "Доклад 8",
    },
    // --- ПРЕДЫДУЩИЕ ЛЕКЦИИ ---
    {
      id: 11,
      title: "Идеи космизма Рериха в социалистической Болгарии",
      speaker: "Лебеденко А.А.",
      date: "07 февраля 2026",
      url: "https://rutube.ru/video/private/97fda97b6aa1586efc8cfef211441b56/?p=7nMdP1Y5pEEAb-jZaNXMtA",
    },
    {
      id: 12,
      title: "Понятие 'Карма': возможность рациональной интерпретации",
      speaker: "Сулейменов И.Э.",
      date: "09 апреля 2025",
      url: "https://rutube.ru/video/private/806c58dbd64e01b45764be2ed2ba4fea/?p=oz7uokrT3gJ6at5dBzplew",
    },
    {
      id: 13,
      title: "Знамя Мира в творчестве Рерихов",
      speaker: "Захарова Т.С.",
      date: "06 апреля 2025",
      url: "https://rutube.ru/video/private/bc4bc037c15a040cbf7fc533049b0a04/?p=N-TSlEu7ch5WJ5wHrjer1g",
    },
    {
      id: 14,
      title: "С.Н. Рерих об основах воспитания красотой: Бангалорский период",
      speaker: "Лебеденко А.А.",
      date: "21 апреля 2024",
      url: "https://rutube.ru/video/private/380f14d7a3fc9b58f61e7fd6cd65a5aa/?p=OnTvpkEnG6tjMWo3P3N80g",
    },
    {
      id: 15,
      title: "Экранная культура: альтернативные формы познания",
      speaker: "Сулейменов И.Э.",
      date: "10 апреля 2024",
      url: "https://rutube.ru/video/private/39414878d086f390ec3ea193849fb9eb/?p=Bc1QZc5u03eRzDHU6uNQIQ",
    },
    {
      id: 16,
      title:
        "Искусство Людмилы Кирилловой как способ познания творчества Рерихов",
      speaker: "Захарова Т.С.",
      date: "10 апреля 2024",
      url: "https://rutube.ru/video/private/1da08cde788b575be2f6a9c45e4e8f4e/?p=83ARXt0lCyTthvvptwGxog",
    },
    {
      id: 17,
      title:
        "Николай Рерих и Валентин Булгаков: добротворчество во благо культуры России",
      speaker: "Кулакова Е.С.",
      date: "10 апреля 2024",
      url: "https://rutube.ru/video/private/5b7d35b221f24740c010a108156c60f8/?p=WgC5V3bj1nlOfnNvPF6Atw",
    },
    {
      id: 18,
      title: "Подвиг героя духа земли русской",
      speaker: "Лебеденко А.А.",
      date: "01 апреля 2023",
      url: "https://rutube.ru/video/private/948b41eaa03b709d0cb1b4ca159ca596/?p=oecL08Ag37fWHLGKr6lMmg",
    },
    {
      id: 19,
      title:
        "Философия космической реальности о духовных задачах России на пути в будущее",
      speaker: "Лебеденко А.А.",
      date: "03 ноября 2023",
      url: "https://rutube.ru/video/private/c5afd6c2808aab1c3ac3700e55e4dc96/?p=q3UlZp0MfgLBnquzcGqmCg",
    },
    {
      id: 20,
      title: "Древнерусская культура в монументальной живописи Н.К. Рериха",
      speaker: "Лебеденко А.А.",
      date: "03 ноября 2023",
      url: "https://rutube.ru/video/private/62ee9d6e7d7d48f61b75ed457a69a859/?p=iWhYYhDfOCdaL46Wuf7vFg",
    },
    {
      id: 21,
      title:
        "Синтез Философских концептов Востока и Запада: Дионисийство серебряного века",
      speaker: "Сулейменов И.Э.",
      date: "13 апреля 2023",
      url: "https://rutube.ru/video/private/1e9a7e90ce3bbeebca2aabefe2849e26/?p=fKcH36ErkfHiaDCBx3biDg",
    },
    {
      id: 22,
      title: "Светочи человечества: Ю.Н. Рериху и Б.Н. Абрамову посвящается",
      speaker: "Лебеденко А.А.",
      date: "06 августа 2022",
      url: "https://rutube.ru/video/private/141adeee618fc0ce559f14250fac0806/?p=imi3pTzQp7hUes2PYsnMPg",
    },
    {
      id: 23,
      title: "The Roerichs founders of the 'Urusvati' Institute",
      speaker: "Lebedenko A.A., Lenia E.N.",
      date: "August 27, 2022",
      url: "https://rutube.ru/video/private/c178ce4a7ac2fab4f96db225d6d1fb4a/?p=203N-4R1NXyIDKBa4zp_kA",
    },
    {
      id: 24,
      title: "Институт 'Урусвати': история и современность",
      speaker: "Лебеденко А.А.",
      date: "01 октября 2022",
      url: "https://rutube.ru/video/private/eb99e074a8e6ad7d956efc227a08985d/?p=TiQ0VHfNHcX20J8n1tdx9Q",
    },
    {
      id: 25,
      title: "Святослав Рерих – вестник Красоты",
      speaker: "Головина Н.М.",
      date: "17 апреля 2022",
      url: "https://rutube.ru/video/private/ef60a929d3eaa75c477eecb666938b09/?p=c5Qz99s7gPp0BwjiUcUokQ",
    },
    {
      id: 26,
      title: "Сердце культуры: современные аспекты кардиогносии",
      speaker: "Лебеденко А.А.",
      date: "09 октября 2021",
      url: "https://rutube.ru/video/private/c23d3a7b3a89ed1f739a0b9298ab79a2/?p=sDeGcJffrtkh4rjtDj_2Pg",
    },
    {
      id: 27,
      title: "Основы сотрудничества и Общины",
      speaker: "Лебеденко А.А.",
      date: "23 января 2021",
      url: "https://rutube.ru/video/private/dacb63bd167c72a669fec267c88c9de5/?p=aHb2zv7b1lySOhbI2LevPA",
    },
    {
      id: 28,
      title: "Идея Общины в творчестве Н.К. Рериха и Е.И. Рерих",
      speaker: "Лебеденко А.А.",
      date: "23.01.2021",
      url: "https://rutube.ru/video/private/f4abd161638f89a194c61a1d2ae7b70b/?p=UFHBBWgTQzniDQQkQIUp7Q",
    },
    {
      id: 29,
      title:
        "Идея русского странничества и работы Л.В Шапошниковой 'Град Светлый'",
      speaker: "Лебеденко А.А.",
      date: "26.07.2021",
      url: "https://rutube.ru/video/private/540cf22758c3f6c2e207cab4b082bcbb/?p=NqRuGm9I-pTfkEPmnyD3vA",
    },
    {
      id: 30,
      title: "Знамя Мира: объединяющая идея Знака Триединства",
      speaker: "Лебеденко А.А.",
      date: "10 апреля 2020",
      url: "https://rutube.ru/video/private/5e0425a7424c7580ae352af63bb22121/?p=C1qazTbK-Xd6Gph8Uc9o8A",
    },
    {
      id: 31,
      title: "Образ Ленина в работах Л.В. Шапошниковой",
      speaker: "Лебеденко А.А.",
      date: "26 июля 2020",
      url: "https://rutube.ru/video/private/466e6da81f6b0c55cfdbab5aaeed0c8b/?p=5r46ffjsKDIXtdhnTMIlXg",
    },
    {
      id: 32,
      title: "Живая Этика о внутренней природе человека",
      speaker: "Лебеденко А.А.",
      date: "19 ноября 2020",
      url: "https://rutube.ru/video/private/9a88b9328a0101944f79eae83ee8ead9/?p=VDhiOIhdRqkbiIEubPIrRg",
    },
    {
      id: 33,
      title:
        "Гималайский институт научных исследований 'Урусвати': история и современность",
      speaker: "Лебеденко А.А.",
      date: "27 ноября 2020",
      url: "https://rutube.ru/video/private/2e22b6a88906c5a66e891254a7a4d9ba/?p=-MVNDHQIk9G89gw_C0PEtA",
    },
    {
      id: 34,
      title: "Новейшая история Севастополя и Крыма — 'Русская весна' 2014 года",
      speaker: "Головина Н.М.",
      date: "10.04.2020",
      url: "https://rutube.ru/video/private/b222ad248c3bb1bf4d143587bc2bc8ce/?p=grTtZUJD_v1nwjiJ34vDeA",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-serif pb-20 overflow-x-hidden">
      {/* КОМПАКТНАЯ ШАПКА */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-900" />
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">
              Научный архив фонда
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[48px] md:text-[80px] font-black uppercase tracking-tighter leading-[0.8] mb-6 text-slate-900">
            Лекторий СГФР
          </h1>

          <p className="max-w-3xl text-sm md:text-base text-slate-800 leading-relaxed border-l-2 border-blue-900/30 pl-6">
            Доклады ученых России, Белоруссии и Казахстана в рамках
            Международной научно-практической конференции «Перспективы развития
            современного общества» и других проектов, cвязанных с изучением и
            популяризацией культурного наследия семьи Рерихов.
          </p>
        </div>
      </section>

      {/* ПЛОТНАЯ СЕТКА КАРТОЧЕК */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lectures.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-1 flex flex-col"
            >
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  {/* Показываем тег, если он есть, иначе номер по порядку */}
                  <span className="font-sans text-[10px] font-black text-slate-300 group-hover:text-blue-900/30 transition-colors duration-500 uppercase tracking-widest">
                    {item.tag ? item.tag : String(item.id).padStart(2, "0")}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center ring-1 ring-slate-100 hover:bg-blue-900 hover:scale-110 hover:ring-blue-900 transition-all duration-300 shadow-sm"
                    title="Смотреть видео"
                  >
                    <Play
                      size={14}
                      className="text-slate-400 group-hover:text-white transition-colors duration-500 translate-x-0.5"
                    />
                  </a>
                </div>

                <h2 className="text-base font-bold leading-tight mb-4 text-slate-800 uppercase not-italic tracking-tight select-text">
                  {item.title}
                </h2>

                <div className="mt-auto space-y-2 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-500">
                    <User size={12} className="text-blue-900/40 shrink-0" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest leading-tight">
                      {item.speaker}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={12} className="shrink-0" />
                    <span className="font-sans text-[10px] uppercase tracking-widest leading-none">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-slate-50 group-hover:bg-blue-900 p-3 text-center transition-all duration-500 border-t border-slate-100"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

                <span className="relative z-10 font-sans text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white flex items-center justify-center gap-2 transition-colors duration-500">
                  Смотреть запись <ArrowRight size={10} />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center pb-10">
        <p className="font-sans text-[10px] text-slate-300 uppercase tracking-[0.5em] font-medium">
          СГФР • 2026
        </p>
      </footer>
    </main>
  );
}
