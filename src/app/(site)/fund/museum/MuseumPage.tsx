"use client";

import Image from "next/image";
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

import type { FundMuseumView } from "@/lib/cms/payload-queries";
import { renderFormattedText } from "@/lib/format-text";

function MuseumPhoto({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="aspect-[3/2] md:aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xl group relative cursor-zoom-in">
      <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-white transition-colors">
        <Camera size={48} strokeWidth={1} />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover relative z-10 hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute bottom-6 left-6 z-20 bg-slate-900/80 backdrop-blur px-4 py-2 text-white text-[12px] font-bold uppercase tracking-[0.2em]">
        {caption}
      </div>
    </div>
  );
}

export default function MuseumPage({ data }: { data: FundMuseumView }) {
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-[#1e293b] font-serif py-12 px-4 selection:bg-blue-100">
      <div className="max-w-5xl mx-auto">
        {/* ЗАГОЛОВОК С АКЦЕНТОМ */}
        <header className="mb-12 border-b-2 border-slate-900 pb-10">
          <h1 className="text-2xl md:text-5xl font-black mb-8 tracking-tighter text-center uppercase leading-[0.9] text-slate-900">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 justify-center font-sans text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <address className="not-italic flex items-center font-bold gap-2">
                <MapPin size={16} className="text-blue-900" />
                <span>{data.address}</span>
              </address>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded text-blue-900 font-bold border border-blue-100">
              <Navigation size={14} />
              <span>{data.entryNote}</span>
            </div>
          </div>
        </header>

        {/* ГЛАВНАЯ ГАЛЕРЕЯ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <MuseumPhoto
            src={data.photo1}
            alt={data.photo1Caption}
            caption={data.photo1Caption}
          />
          <MuseumPhoto
            src={data.photo2}
            alt={data.photo2Caption}
            caption={data.photo2Caption}
          />
        </section>

        {/* ИНФОРМАЦИОННЫЕ БЛОКИ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-lg flex flex-col justify-center">
            <h2 className="text-[10px] font-sans font-black uppercase tracking-[0.3em] text-blue-900 mb-4 flex items-center gap-2">
              <Clock size={16} /> Режим работы
            </h2>
            <p className="text-xl font-black text-blue-900 leading-tight font-sans mb-2">
              {data.scheduleDays}
            </p>
            <p className="text-2xl font-mono font-black text-blue-900">
              {data.scheduleHours}
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg shadow-2xl lg:col-span-2 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Anchor size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs">
                    {data.marineTitle}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed font-sans text-slate-300">
                  {data.marineText}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-400">
                  <Palette size={28} />
                  <h3 className="font-sans font-black uppercase tracking-widest text-xs">
                    {data.artTitle}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed font-sans text-slate-300">
                  {data.artText}
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
              {data.historyTitle}
            </h2>
          </div>

          <div className="prose prose-slate max-w-none font-sans text-slate-700 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                {data.historyLeft.map((para) => (
                  <p key={para} className="mb-4">
                    {renderFormattedText(para)}
                  </p>
                ))}
              </div>
              <div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900 mb-6">
                  <h4 className="font-black uppercase text-xs mb-3 flex items-center gap-2">
                    <Ship size={14} /> {data.historyHighlightTitle}
                  </h4>
                  <p className="text-sm">{data.historyHighlightText}</p>
                </div>
                {data.historyRight.map((para) => (
                  <p key={para}>{renderFormattedText(para)}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                  <Waves size={20} className="text-blue-900" /> {data.exhibitsTitle}
                </h3>
                {data.exhibitsParagraphs.map((para) => (
                  <p key={para} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-black uppercase text-xs mb-3 text-blue-900">
                  {data.artSectionTitle}
                </h4>
                <p className="text-sm">{renderFormattedText(data.artSectionText)}</p>
              </div>
            </div>

            <div className="mt-10 bg-slate-200 text-white p-8 rounded-xl">
              <h3 className="text-xl font-black uppercase mb-6 text-blue-400">
                {data.heritageTitle}
              </h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-black">
                    {renderFormattedText(data.heritageMain)}
                  </p>
                </div>
                <div className="flex-1 border-l border-slate-700 pl-0 md:pl-8">
                  <p className="text-xs text-slate-700 uppercase tracking-wider mb-2">
                    {data.heritageAsideLabel}
                  </p>
                  <p className="text-sm text-slate-700">{data.heritageAside}</p>
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
                {data.curatorLabel}
              </p>
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight font-sans">
                {data.curatorName}
              </h4>
            </div>
          </div>
          <div className="w-full md:w-px h-px md:h-12 bg-slate-200"></div>
          <p className="text-sm text-slate-800 max-w-xs text-center md:text-left font-sans">
            {data.curatorNote}
          </p>
        </section>

        {/* НИЖНИЙ КОЛОНТИТУЛ */}
        <footer className="mt-24 text-center">
          <div className="h-1 w-12 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-slate-400">
            {data.footerText}
          </p>
        </footer>
      </div>
    </article>
  );
}
