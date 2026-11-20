"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { personal } = portfolioData;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto w-full max-w-2xl bg-white/85 backdrop-blur-md border border-paper-line rounded-full shadow-pill px-3 sm:px-4 py-2 flex items-center justify-between transition-all duration-300">
        {/* Monogram / Identity */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cobalt rounded-full px-1"
          aria-label="Torna all'inizio"
        >
          <div className="w-8 h-8 rounded-full bg-accent-obsidian text-paper-canvas flex items-center justify-center font-bold text-sm tracking-tighter border border-zinc-700 shadow-xs group-hover:scale-110 transition-transform">
            D.
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold text-ink-primary tracking-tight leading-none">
              {personal.name}
            </span>
            <span className="text-[10px] font-mono text-ink-secondary tracking-wider uppercase mt-0.5">
              Eng. & AI Builder
            </span>
          </div>
        </Link>

        {/* Navigation Anchor Links */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs font-medium text-ink-secondary">
          <Link
            href="#projects"
            className="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-ink-primary hover:bg-paper-line/40 transition-colors"
          >
            Progetti
          </Link>
          <Link
            href="#about"
            className="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-ink-primary hover:bg-paper-line/40 transition-colors"
          >
            Chi sono
          </Link>
          <Link
            href="#stack"
            className="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-ink-primary hover:bg-paper-line/40 transition-colors"
          >
            Competenze
          </Link>
        </div>

        {/* Direct Contact Action Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-full bg-accent-obsidian text-paper-canvas text-xs font-mono font-medium tracking-tight shadow-xs hover:bg-zinc-800 transition-colors group"
          >
            <span>Contattami</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              strokeWidth={1.5}
            />
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}
