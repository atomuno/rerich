import { Palette, Music, Sparkles } from "lucide-react";

export default function CenterPage() {
  return (
    <div className="bg-white">
      {/* Hero: Инвертированная тема */}
      <section className="py-16 md:py-28 bg-blue-950 text-white px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-blue-400 font-semibold tracking-widest uppercase text-xs">
            Детское творчество
          </span>
          <h1 className="text-3xl md:text-6xl font-serif leading-tight">
            Центр "Уриэль" <br className="hidden md:block" /> имени Н.К. Рериха
          </h1>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light">
            Раскрываем потенциал через синтез искусства и красоты.
          </p>
        </div>
      </section>

      {/* Карточки: Одинаковая высота через h-full */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">Направления</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Palette size={32} />, title: "Живопись", text: "Классические и современные техники." },
            { icon: <Music size={32} />, title: "Музыка", text: "Развитие слуха и обучение в атмосфере красоты." },
            { icon: <Sparkles size={32} />, title: "Этика", text: "Духовно-нравственное воспитание детей." }
          ].map((card, i) => (
            <div key={i} className="group p-8 border border-slate-100 rounded-[2rem] bg-slate-50 hover:bg-white hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 h-full">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}