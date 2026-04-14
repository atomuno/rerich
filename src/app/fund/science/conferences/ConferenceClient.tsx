"use client";

import { Play, Calendar, User, ArrowRight, ExternalLink } from "lucide-react";

export default function ConferenceClient() {
  const archiveData = [
    { year: "2026", id: "pending" },
    { year: "2025", id: "83208929" },
    { year: "2024", id: "72651687" },
    { year: "2023", id: "54736373" },
    { year: "2022", id: "49331480" },
    { year: "2021", id: "47470839" },
    { year: "2020", id: "43973032" },
    { year: "2019", id: "38598909" },
  ];

  const reports = [
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
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-serif pb-20 overflow-x-hidden">
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-blue-900" />
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-blue-900">
              Научная деятельность • ПРСО-2026
            </span>
            <div className="flex gap-4 font-sans">
              <div className="bg-blue-50 px-4 py-2 border border-blue-100 rounded-lg">
                <p className="text-[11px] font-black text-blue-900 uppercase tracking-widest leading-none">
                  Конференция завершена
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-black uppercase tracking-tighter leading-[0.9] mb-8 text-slate-900">
            Перспективы развития <br /> современного общества
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="max-w-xl text-sm md:text-base text-slate-800 leading-relaxed border-l-2 border-blue-900/30 pl-6">
              Материалы 27-й Всероссийской научно-практической конференции.
              Севастопольский государственный университет, 10–11 апреля 2026
              года. Видеозаписи докладов и архив публикаций.
            </p>
          </div>
        </div>
      </section>

      {/* ВИДЕОМАТЕРИАЛЫ - СЕТКА В СТИЛЕ ЛЕКТОРИЯ */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
            Видеоматериалы конференции
          </h2>
          <div className="h-px flex-grow bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((item) => (
            <article
              key={item.id}
              className="group relative bg-white border border-slate-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-sans text-[10px] font-black text-slate-200 group-hover:text-blue-900/30 transition-colors duration-500 uppercase tracking-widest">
                    {item.tag}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center ring-1 ring-slate-100 hover:bg-blue-900 hover:scale-110 hover:ring-blue-900 transition-all duration-300 shadow-sm"
                  >
                    <Play
                      size={14}
                      className="text-slate-400 group-hover:text-white transition-colors duration-500 translate-x-0.5"
                    />
                  </a>
                </div>

                <h2 className="text-[17px] font-bold leading-snug mb-5 text-slate-800 uppercase not-italic tracking-tight">
                  {item.title}
                </h2>

                <div className="mt-auto space-y-3 pt-5 border-t border-slate-50">
                  <div className="flex items-start gap-2 text-slate-600">
                    <User
                      size={12}
                      className="text-blue-900/40 mt-0.5 shrink-0"
                    />
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
                className="relative overflow-hidden bg-slate-50 group-hover:bg-blue-900 p-4 text-center transition-all duration-500 border-t border-slate-100"
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

      {/* АРХИВ РИНЦ - ОСТАВЛЯЕМ СТРОГИЙ СТИЛЬ */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
            Архив публикации eLibrary / РИНЦ
          </h2>
          <div className="h-px flex-grow bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {archiveData.map((item) => (
            <a
              key={item.year}
              href={
                item.id !== "pending"
                  ? `https://www.elibrary.ru/item.asp?id=${item.id}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white p-8 hover:bg-slate-950 transition-all duration-500 overflow-hidden min-h-[180px] ${item.id === "pending" ? "cursor-default" : ""}`}
            >
              <div className="relative z-10">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-400 transition-colors">
                  Сборник ПРСО
                </span>
                <p className="text-4xl font-black mt-3 font-sans text-slate-900 group-hover:text-white transition-colors tracking-tighter">
                  {item.year}
                </p>
                <div className="font-sans mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-900 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  {item.id === "pending" ? "В обработке" : "Перейти"}{" "}
                  <ExternalLink size={10} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center pb-10 border-t border-slate-200 pt-10">
        <p className="font-sans text-[10px] text-slate-300 uppercase tracking-[0.5em] font-medium">
          СГФР • Севастополь • 2026
        </p>
      </footer>
    </main>
  );
}
