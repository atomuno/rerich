import Image from "next/image";
import { Download } from "lucide-react";
import { booksData } from "@/data/books";

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 font-serif text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">Книги</h1>
        <p className="text-slate-700 leading-relaxed text-lg">
          Здесь представлены книги, изданные сотрудниками и друзьями
          Севастопольского городского фонда Рерихов. Все эти издания
          объединяются в едином поле Культуры и посвящены задачам
          распространения и сохранения культурного наследия стран и народов.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-24">
        {booksData.map((book) => (
          <article
            key={book.id}
            className="flex flex-col md:flex-row gap-10 items-start border-t border-slate-100 pt-12"
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
