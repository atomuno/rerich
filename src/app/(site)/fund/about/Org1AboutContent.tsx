"use client";

import { motion } from "framer-motion";

import AboutSidebar from "@/components/AboutSidebar";
import type { FundAboutView } from "@/lib/cms/payload-queries";
import { renderFormattedText } from "@/lib/format-text";

export default function FundAboutContent({ data }: { data: FundAboutView }) {
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
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <section className="space-y-6 text-lg leading-relaxed text-slate-900">
              <p>{renderFormattedText(data.introText)}</p>

              <div>
                <h2 className="font-bold uppercase text-sm tracking-widest mb-4 mt-8 text-blue-900">
                  {data.goalsHeading}
                </h2>
                <ul className="space-y-4">
                  {data.goals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span className="font-bold">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="pt-4 font-bold">{data.closingText}</p>
            </section>
          </div>

          <div className="md:col-span-4">
            <AboutSidebar data={data} variant="fund" />
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
