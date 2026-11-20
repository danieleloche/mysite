"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { FannedDeck } from "./FannedDeck";
import { MediaFrame } from "./MediaFrame";

interface HeroProps {
  onSelectProject: (project: ProjectItem) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export function Hero({ onSelectProject }: HeroProps) {
  const { personal, projects } = portfolioData;

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-paper-line bg-paper-surface shadow-2xs hover:shadow-xs transition-shadow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span className="text-[11px] font-mono tracking-wider font-semibold text-ink-primary uppercase">
                {personal.statusBadge}
              </span>
            </div>
          </motion.div>

          {/* Bold Geometric + High-Legibility Tech Accent Headline */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink-primary leading-[1.08]">
              <span className="block">{personal.headline.regular1}</span>
              <span className="inline-block mt-2 font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent-cobalt font-bold tracking-tight px-3 py-1 bg-blue-50/60 border border-blue-200/60 rounded-xl shadow-2xs">
                {personal.headline.pixelAccent}
              </span>
              <span className="block mt-2">{personal.headline.regular2}</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-ink-secondary max-w-2xl mx-auto font-normal leading-relaxed">
              {personal.subtitle}
            </p>
          </motion.div>

          {/* Hero Quick Action CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-accent-obsidian text-paper-canvas text-xs sm:text-sm font-mono font-medium tracking-tight shadow-md hover:bg-zinc-800 transition-all active:scale-98"
              >
                <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
                <span>Esplora i 3 Casi Studio</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-paper-surface border border-paper-line text-ink-primary text-xs sm:text-sm font-mono font-medium hover:bg-paper-canvas transition-colors shadow-2xs"
              >
                <FileText className="w-4 h-4 text-ink-secondary" strokeWidth={1.5} />
                <span>Scarica Curriculum</span>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-paper-surface border border-paper-line text-ink-primary text-xs sm:text-sm font-mono font-medium hover:bg-paper-canvas transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4 text-ink-secondary" strokeWidth={1.5} />
                <span>Contattami</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Centerpiece: Interactive Fanned Card Deck */}
        <div className="mt-6 md:mt-10">
          <FannedDeck projects={projects} onSelectProject={onSelectProject} />
        </div>

        {/* Personal Touch: Bottom Anchor with Portrait & Handwritten Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-paper-line/70"
        >
          {/* Portrait + Arrow + Note */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-polaroid shrink-0 bg-paper-surface cursor-pointer"
            >
              <MediaFrame
                type="image"
                src={personal.avatar}
                alt={personal.name}
                placeholderLabel="/portrait.png"
                aspectRatio="aspect-square"
                className="w-full h-full"
              />
            </motion.div>

            <div className="flex items-center gap-3">
              {/* Minimal Hand-drawn curved arrow SVG */}
              <svg
                width="36"
                height="28"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-ink-secondary/70 -rotate-12"
              >
                <path
                  d="M4 24C12 28 26 26 34 10M34 10L26 8M34 10L36 18"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <p className="font-handwriting text-2xl text-ink-secondary leading-none">
                  {personal.handwrittenNote}
                </p>
                <p className="text-[10px] font-mono text-ink-secondary/70 mt-1 uppercase tracking-wider">
                  UniCa 28.76 / 30 &bull; Leonardo CAE Advanced Jet Training
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats / summary pill */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-ink-secondary">
            <div className="text-right">
              <span className="block font-bold text-ink-primary">3 Sistemi</span>
              <span className="text-[10px] opacity-75">Full-Stack &amp; AI</span>
            </div>
            <div className="h-6 w-px bg-paper-line" />
            <div className="text-right">
              <span className="block font-bold text-ink-primary">10.000+ Log</span>
              <span className="text-[10px] opacity-75">ETL Flotta M-346</span>
            </div>
            <div className="h-6 w-px bg-paper-line" />
            <div className="text-right">
              <span className="block font-bold text-ink-primary">28.76/30</span>
              <span className="text-[10px] opacity-75">Media Ingegneria</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
