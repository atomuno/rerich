"use client";

import { Download, ExternalLink, Globe } from "lucide-react";

export default function ConferenceClient() {
  const archiveData = [
    { year: "2025", id: "83208929" },
    { year: "2024", id: "72651687" },
    { year: "2023", id: "54736373" },
    { year: "2022", id: "49331480" },
    { year: "2021", id: "47470839" },
    { year: "2020", id: "43973032" },
    { year: "2019", id: "38598909" },
  ];

  const files = [
    {
      name: "Информационное письмо по конференции",
      path: "/downloads/inform_letter.pdf",
    },
    {
      name: "Анкета участника ПРСО_2026 (DOCX)",
      path: "/downloads/anketa_2026.docx",
    },
    {
      name: "Анкета участника ПРСО_2026 (RTF)",
      path: "/downloads/anketa_2026.rtf",
    },
    {
      name: "Образец оформления тезисов (DOCX)",
      path: "/downloads/sample_abstracts.docx",
    },
    {
      name: "Образец оформления тезисов (RTF)",
      path: "/downloads/sample_abstracts.rtf",
    },
    {
      name: "Оформление списка литературы (PDF)",
      path: "/downloads/references_style.pdf",
    },
  ];

  const sections = [
    "Творчество и мировоззрение Рерихов в современном пространстве отечественной культуры: потенциал для развития этики российского общества.",
    "Формы государственно-гражданского взаимодействия в современном обществе: проблемы развития и практической реализации.",
    "Отношения «Восток – Запад» как актуальная перспектива развития российского социума.",
    "Современное российское общество: перспективы и задачи развития.",
    "Социально-культурные новации и их вклад в развитие общества.",
    "Личность. Виртуальная личность. ИИ: проблемы и перспективы исследования.",
  ];

  return (
    <main className="relative min-h-screen bg-white font-serif text-slate-900 pt-20 md:pt-32 pb-24 selection:bg-blue-50 selection:text-blue-900 overflow-hidden">
      {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ ИНСТИТУТА */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-[500px] md:h-[800px] z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white z-10" />
        <img
          src="/university-bg.jpg"
          alt="Институт"
          className="w-full h-full object-cover object-right-top grayscale hover:grayscale-0 transition-all duration-1000 opacity-100"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-blue-900 bg-blue-50/80 backdrop-blur-sm px-3 py-1 w-fit">
              27 Всероссийская научно-практическая конференция
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight max-w-4xl not-italic">
            Перспективы развития <br className="hidden md:block" /> современного
            общества
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="space-y-0 text-lg md:text-xl leading-relaxed text-slate-800">
                <p>
                  Севастопольский государственный университет,
                  Гуманитарно-педагогический институт, кафедра «Радиоэлектроника
                  и телекоммуникации» и РОО «Севастопольский городской фонд
                  Рерихов»{" "}
                  <span className="font-bold">10 – 11 апреля 2026 года</span>{" "}
                  проводят 27-ю Всероссийскую научно-практическую конференцию.
                </p>
                <p className="mt-4">
                  Встреча проходит в рамках постоянно действующего цикла
                  <span className="font-bold">
                    {" "}
                    «Осознание Культуры – залог обновления общества»{" "}
                  </span>
                  и посвящается годовщине подписания 15 апреля 1935 г. первого
                  многостороннего международного соглашения об охране культурных
                  ценностей – Договора «О защите учреждений науки и искусства, а
                  также исторических памятников», известного во всем мире как{" "}
                  <span className="font-bold">Пакт Рериха</span>.
                </p>

                {/* ТЕКСТ ВМЕСТО ЧЕРНОГО БЛОКА */}
                <p className="mt-8 pt-8 border-t border-slate-100 text-slate-700">
                  В рамках конференции 10 апреля 2026 года проводится телемост
                  Севастополь – «Артек» – Волгоград — Казахстан – Курск – Рязань
                  — Херсон на тему: «Личность. Виртуальная личность. ИИ:
                  проблемы и перспективы исследования», благодаря которому будет
                  предоставлена онлайн площадка для презентаций и обсуждения
                  заданной темы.
                </p>

                <p className="text-slate-800 border-l-2 border-slate-300 pl-6 py-2 my-8 font-bold">
                  Задача конференции – апробация результатов исследований,
                  связанных с основными тенденциями развития современного
                  социума и сохранением культурного наследия в цифровую эпоху.
                </p>
              </div>

              {/* СЕКЦИИ КОНФЕРЕНЦИИ */}
              <div className="pt-10 space-y-6">
                <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-blue-900">
                  Секции конференции
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-slate-800 list-none">
                  {sections.map((section, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-blue-900 font-bold tracking-tighter">
                        —
                      </span>
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div className="space-y-6 font-sans border-l-2 border-blue-900 pl-6 md:pl-8 bg-white/40 backdrop-blur-md p-4 -ml-4 md:-ml-8 rounded-r-lg">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Дата проведения
                  </p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 uppercase not-italic">
                    10 – 11 апреля 2026
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Место проведения
                  </p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 uppercase not-italic">
                    Севастополь, СевГУ
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
                  Документация
                </h3>
                <div className="grid grid-cols-1 gap-2 font-sans">
                  {files.map((file, idx) => (
                    <a
                      key={idx}
                      href={file.path}
                      download
                      className="group flex items-center justify-between p-4 border border-slate-100 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-blue-900 transition-all duration-300 shadow-sm"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-tight group-hover:text-blue-900 not-italic leading-none">
                        {file.name}
                      </span>
                      <Download
                        size={14}
                        className="text-slate-300 group-hover:text-blue-900 flex-shrink-0 ml-4"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* АРХИВ */}
        <section className="relative z-10 border-t-4 border-slate-900 pt-16 md:pt-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter not-italic mb-12">
            Архив РИНЦ
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {archiveData.map((item) => (
              <a
                key={item.year}
                href={`https://www.elibrary.ru/item.asp?id=${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white p-6 md:p-12 hover:bg-slate-950 transition-all duration-500 overflow-hidden min-h-[160px] md:min-h-[240px]"
              >
                <div className="relative z-10">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-400 transition-colors">
                    Сборник ПРСО
                  </span>
                  <p className="text-3xl md:text-5xl font-black mt-2 md:mt-4 font-sans text-slate-900 group-hover:text-white transition-colors tracking-tighter not-italic">
                    {item.year}
                  </p>
                  <div className="font-sans mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-900 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 italic-none">
                    eLibrary <ExternalLink size={10} />
                  </div>
                </div>
                <span className="absolute -bottom-4 -right-2 text-7xl md:text-9xl font-sans font-black text-slate-50 group-hover:text-white/5 pointer-events-none not-italic">
                  {item.year.slice(-2)}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
