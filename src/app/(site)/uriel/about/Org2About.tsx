"use client";

import { motion } from "framer-motion";

import AboutSidebar from "@/components/AboutSidebar";
import type { UrielAboutView } from "@/lib/cms/payload-queries";
import { renderFormattedText } from "@/lib/format-text";

export default function UrielAbout({ data }: { data: UrielAboutView }) {
  return (
    <main className="min-h-screen bg-white font-serif text-slate-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <header className="border-b-2 border-slate-900 pb-8 mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            {data.pageTitle}
          </motion.h1>
          <p className="mt-2 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-slate-400">
            {data.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <section className="space-y-6 text-lg leading-relaxed text-slate-900">
              <p>
                <span className="font-bold text-blue-900 uppercase tracking-tighter text-base block mb-2 underline decoration-2 underline-offset-4">
                  {data.introLabel}
                </span>
                <span className="font-bold text-xl block mb-4">
                  {data.orgFullName}
                </span>
                {renderFormattedText(data.introText)}
              </p>

              <div className="pt-4">
                <h2 className="font-bold uppercase text-sm tracking-widest mb-6 text-blue-900 border-l-4 border-blue-900 pl-4">
                  {data.goalsHeading}
                </h2>
                <ul className="space-y-5 text-[17px]">
                  {data.goals.map((item) => (
                    <li key={item} className="flex gap-4 items-start">
                      <span className="font-bold text-blue-900 leading-none pt-1.5">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="pt-8 font-bold border-t border-slate-100">
                {data.closingText}
              </p>
            </section>
          </div>

          <div className="md:col-span-4">
            <AboutSidebar data={data} variant="uriel" />
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.8em] text-slate-300">
            {data.footerText}
          </p>
        </footer>
      </div>
    </main>
  );
}
