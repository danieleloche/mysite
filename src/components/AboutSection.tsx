"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, Check, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";

export function AboutSection() {
  const { personal, techCategories } = portfolioData;

  return (
    <section id="about" className="w-full py-16 md:py-24 relative notebook-lines border-t border-b border-paper-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-paper-line bg-paper-surface text-ink-secondary text-xs font-mono uppercase tracking-wider mb-4 shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-accent-cobalt" strokeWidth={1.5} />
            <span>PROFILO & FILOSOFIA DI SVILUPPO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-primary leading-tight">
            Ingegneria di precisione, mentalità da builder.
          </h2>
        </motion.div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Polaroid Photo Frame + Biography */}
          <div className="lg:col-span-5 space-y-8">
            {/* Polaroid-style taped photo frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative max-w-sm mx-auto lg:mx-0"
            >
              {/* Semi-translucent masking tape strip top-left */}
              <div className="absolute -top-3 left-6 z-20 w-16 h-6 bg-[#E5E2DC]/80 backdrop-blur-xs -rotate-6 border-l border-r border-paper-line/50 shadow-2xs select-none" />
              {/* Semi-translucent masking tape strip top-right */}
              <div className="absolute -top-3 right-6 z-20 w-16 h-6 bg-[#E5E2DC]/80 backdrop-blur-xs rotate-6 border-l border-r border-paper-line/50 shadow-2xs select-none" />

              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="bg-white p-3.5 pb-8 rounded-lg shadow-polaroid border border-paper-line -rotate-1 cursor-pointer transition-shadow hover:shadow-xl"
              >
                <MediaFrame
                  type="image"
                  src={personal.avatar}
                  alt={`Ritratto di ${personal.name}`}
                  placeholderLabel="Drop /public/media/profile/portrait.png"
                  aspectRatio="aspect-square"
                  className="rounded-md"
                />
                <div className="mt-4 px-2 text-center">
                  <p className="font-handwriting text-xl text-ink-secondary tracking-wide">
                    {personal.name} — Cagliari / Decimomannu
                  </p>
                  <p className="text-[10px] font-mono text-ink-secondary/70 uppercase tracking-widest mt-0.5">
                    UniCa Computer Engineering
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Academic & Professional Credentials Bento */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-4 rounded-xl border border-paper-line bg-paper-surface shadow-2xs flex items-start gap-3 hover:shadow-xs transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-paper-canvas border border-paper-line flex items-center justify-center shrink-0 text-accent-cobalt">
                  <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-ink-primary">
                      {personal.degree}
                    </span>
                  </div>
                  <p className="text-xs text-ink-secondary mt-0.5">
                    {personal.university}
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-semibold">
                    {personal.gpa}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-4 rounded-xl border border-paper-line bg-paper-surface shadow-2xs flex items-start gap-3 hover:shadow-xs transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-paper-canvas border border-paper-line flex items-center justify-center shrink-0 text-amber-600">
                  <Briefcase className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-bold text-ink-primary">
                    Leonardo CAE Advanced Jet Training (Base Aerea Decimomannu)
                  </span>
                  <p className="text-xs text-ink-secondary mt-0.5">
                    PMO & Fleet Analytics Intern — Flotta Velivoli M-346
                  </p>
                  <p className="text-[11px] text-ink-secondary/80 mt-1 leading-relaxed">
                    Automazione pipeline dati complesse e normalizzazione di 10.000+ log tecnici per la flotta addestratori avanzati M-346.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bio Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4 text-sm text-ink-secondary leading-relaxed bg-paper-surface p-6 rounded-2xl border border-paper-line shadow-2xs"
            >
              {personal.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Categorized Tech Stack Matrix */}
          <div id="stack" className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-paper-line">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-accent-cobalt" strokeWidth={1.5} />
                <h3 className="text-base font-mono uppercase font-bold tracking-wider text-ink-primary">
                  MATRICE DELLE COMPETENZE TECNICHE
                </h3>
              </div>
              <span className="text-[11px] font-mono text-ink-secondary">
                Rigore & Strumenti Moderni
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4, borderColor: "#18181B" }}
                  className="p-5 rounded-2xl border border-paper-line bg-paper-surface shadow-2xs flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-paper-line/70">
                      <h4 className="text-sm font-bold text-ink-primary">
                        {category.title}
                      </h4>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-paper-canvas text-ink-secondary border border-paper-line">
                        {category.tag}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {category.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex flex-col text-xs">
                          <span className="font-semibold text-ink-primary font-mono text-[11px]">
                            {skill.name}
                          </span>
                          {skill.context && (
                            <span className="text-[10px] text-ink-secondary font-mono opacity-80">
                              {skill.context}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-2 border-t border-paper-line/50 flex items-center gap-1.5 text-[10px] font-mono text-ink-secondary/70">
                    <Check className="w-3 h-3 text-accent-green" strokeWidth={1.5} />
                    <span>Verificato su progetti reali</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
