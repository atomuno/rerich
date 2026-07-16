import Image from "next/image";
import { Download } from "lucide-react";
import type { BookView } from "@/lib/cms/payload-queries";

export default function BooksContent({ books }: { books: BookView[] }) {
  // Массив годов для генерации ссылок на PDF-сборники конференции, добавил 2026 год
  const conferenceYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 font-serif text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">Книги и Сборники</h1>
        <p className="text-slate-700 leading-relaxed text-lg">
          Здесь представлены книги, изданные сотрудниками и друзьями
          Севастопольского городского фонда Рерихов. Все эти издания
          объединяются в едином поле Культуры и посвящены задачам
          распространения и сохранения культурного наследия стран и народов.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-24">
        
        {/* Блок с конференцией */}
        <article className="flex flex-col md:flex-row gap-10 items-start">
          {/* Обложка конференции */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative aspect-[3/4] shadow-xl border border-slate-100 mb-6">
              <Image
                src="/conference/cover.jpg"
                alt="Обложка сборника материалов конференции"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Контент конференции */}
          <div className="flex-1">
            <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase mb-4 leading-tight">
              Сборники материалов конференции "Перспективы развития современного общества"
            </h2>

            {/* Характеристики сборника в стиле остальных книг */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm border-b border-slate-100 pb-6">
              <p>
                <span className="text-slate-400 uppercase text-[10px] block mb-1">
                  Составители
                </span>
                <span className="font-bold">Головин В.В., Косцова М.В.</span>
              </p>
              <p>
                <span className="text-slate-400 uppercase text-[10px] block mb-1">
                  Годы издания
                </span>
                <span className="font-bold">2019-2026</span>
              </p>
              
              <p>
                <span className="text-slate-400 uppercase text-[10px] block mb-1">
                  Тираж
                </span>
                <span className="font-bold">по 50 экз.</span>
              </p>
            </div>

            <div className="text-slate-700 leading-relaxed text-base font-sans antialiased space-y-4 mb-8">
              <p>
                Севастопольский государственный университет, Гуманитарно-педагогический институт, 
                кафедра «Радиоэлектроника и телекоммуникации» и РОО «Севастопольский городской 
                фонд Рерихов» регулярно проводят Всероссийскую научно-практическую конференцию 
                «Перспективы развития современного общества».
              </p>
              <p>
                Конференция посвящается годовщине подписания 15 апреля 1935 г. первого 
                многостороннего международного соглашения об охране культурных ценностей, 
                известного как Пакт Рериха. Сборники представляют интерес для научных 
                работников, преподавателей, аспирантов и студентов высших учебных заведений.
              </p>
            </div>

            {/* Сетка кнопок для скачивания PDF */}
            <div>
              <h3 className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-3">
                Скачать сборники в PDF
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {conferenceYears.map((year) => (
                  <a
                    key={year}
                    href={`/conference/PDMS_${year}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-slate-200 text-slate-700 rounded text-xs font-bold hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-colors uppercase tracking-widest"
                  >
                    <Download size={14} />
                    {year}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Разделитель между конференцией и остальными книгами */}
        <div className="border-t border-slate-100" />

        {/* Рендер списка остальных книг */}
        {books.map((book) => (
          <article
            key={book.id}
            className="flex flex-col md:flex-row gap-10 items-start pt-12"
          >
            {/* Обложка и кнопка */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] shadow-xl border border-slate-100 mb-6">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded text-xs font-bold hover:bg-slate-700 transition-colors uppercase tracking-widest"
              >
                <Download size={14} />
                Скачать PDF
              </a>
            </div>

            {/* Контент */}
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold text-slate-900 uppercase mb-4 leading-tight">
                {book.title}
              </h2>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
                <p>
                  <span className="text-slate-400 uppercase text-[10px] block mb-1">
                    Автор
                  </span>
                  <span className="font-bold">{book.author}</span>
                </p>
                <p>
                  <span className="text-slate-400 uppercase text-[10px] block mb-1">
                    Год издания
                  </span>
                  <span className="font-bold">{book.year}</span>
                </p>
                <p>
                  <span className="text-slate-400 uppercase text-[10px] block mb-1">
                    Объем
                  </span>
                  <span className="font-bold">{book.pages}</span>
                </p>
                <p>
                  <span className="text-slate-400 uppercase text-[10px] block mb-1">
                    Тираж
                  </span>
                  <span className="font-bold">{book.circulation}</span>
                </p>
              </div>

              <div className="text-slate-700 leading-relaxed text-base font-sans antialiased space-y-4">
                {/* Разбивка на абзацы для удобства чтения длинных текстов */}
                {book.description.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}