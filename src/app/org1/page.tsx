import { BookOpen, Landmark, Award } from "lucide-react";

export default function FoundationPage() {
  return (
    <div className="bg-white">
      {/* Hero-секция: Адаптивные отступы и размеры текста */}
      <section className="py-12 md:py-24 bg-slate-50 border-b px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
            Региональная общественная организация
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
            Севастопольский городской <br className="hidden md:block" /> фонд Рерихов
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Хранители культурного наследия и просветительских идей семьи Рерихов в Севастополе. 
          </p>
        </div>
      </section>

      {/* Сетка преимуществ: grid-cols-1 превращается в grid-cols-3 на md (768px) */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <Landmark />, title: "Культурное наследие", desc: "Охрана и популяризация художественного наследия." },
            { icon: <BookOpen />, title: "Просвещение", desc: "Лекции, выставки и семинары в Севастополе." },
            { icon: <Award />, title: "Инициативы", desc: "Поддержка региональных проектов в области искусства." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 p-4">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}