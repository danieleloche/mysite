"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  MapPin,
  Clock,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";

export function ContactFooter() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer id="contact" className="w-full py-16 md:py-24 relative bg-paper-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* High-Contrast Dark Obsidian Container */}
        <div className="bg-[#18181B] text-paper-canvas rounded-3xl p-8 sm:p-10 md:p-14 border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative grid overlay */}
          <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

          {/* Top Edge Archive Index Badge */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-8 relative z-10">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-xs text-accent-ochre font-bold">
                +05
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                / CONTATTI & COLLABORAZIONI
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              <span className="hidden sm:inline">Disponibile per colloqui</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left: Bold Editorial Heading & Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Costruiamo qualcosa di concreto insieme.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
                Cerchi un laureando in Ingegneria Informatica con passione per l&apos;automazione
                AI, pipeline di dati e sviluppo web full-stack per un tirocinio o un progetto mirato?
                Scrivimi pure per una chiacchierata tecnica o conoscitiva.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-300" strokeWidth={1.5} />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-300" strokeWidth={1.5} />
                  <span>Risposta garantita entro 24h</span>
                </div>
              </div>
            </div>

            {/* Right: Retro-Modern Tactile Contact Card */}
            <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-inner">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1.5">
                  CANALE DIRETTO EMAIL
                </span>
                <p className="font-mono text-sm sm:text-base text-zinc-100 font-semibold select-all break-all">
                  {personal.email}
                </p>
              </div>

              {/* Action Buttons: Copy Email & Mailto */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-zinc-950 font-mono text-xs font-bold hover:bg-zinc-200 transition-colors shadow-xs active:scale-98"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-accent-green" strokeWidth={2} />
                      <span>Email Copiata!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-900" strokeWidth={1.5} />
                      <span>Copia Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}?subject=Richiesta%20di%20Contatto%20-%20Portfolio`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs hover:bg-zinc-700 transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  <span>Apri Client</span>
                </a>
              </div>

              {/* Social & Document Links */}
              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  LINK & RISORSE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="flex items-center gap-1.5">
                      <LinkedinIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white" strokeWidth={1.5} />
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="flex items-center gap-1.5">
                      <GithubIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white" strokeWidth={1.5} />
                  </a>

                  <a
                    href={personal.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700/60 text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>Curriculum</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Colophon */}
          <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-300 relative z-10">
            <span>
              &copy; {new Date().getFullYear()} {personal.name} — Tutti i diritti riservati.
            </span>
            <span className="text-zinc-400">
              Progettato con Next.js 15, Tailwind &amp; Framer Motion. Zero Emojis.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
