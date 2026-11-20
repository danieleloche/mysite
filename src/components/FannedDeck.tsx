"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface FannedDeckProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

const cardColorMap = {
  obsidian: {
    bg: "bg-[#18181B]",
    text: "text-zinc-100",
    border: "border-zinc-800",
    tagBg: "bg-zinc-800/80 text-zinc-300 border-zinc-700",
    badge: "bg-zinc-800 text-zinc-200",
  },
  cobalt: {
    bg: "bg-[#2563EB]",
    text: "text-white",
    border: "border-blue-500",
    tagBg: "bg-blue-700/80 text-white border-blue-400",
    badge: "bg-blue-700 text-white",
  },
  ochre: {
    bg: "bg-[#F2C94C]",
    text: "text-zinc-950",
    border: "border-[#e0b73b]",
    tagBg: "bg-amber-300/80 text-zinc-950 border-amber-400",
    badge: "bg-amber-300 text-zinc-950 font-semibold",
  },
};

const defaultRotations = [-5, 0, 5];

export function FannedDeck({ projects, onSelectProject }: FannedDeckProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full relative py-6 md:py-12">
      {/* Visual background guidance line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-paper-line/60 -z-10" />

      {/* Desktop Fanned Overlapping Deck */}
      <div className="hidden md:flex items-center justify-center min-h-[380px] relative px-4">
        <div className="flex items-center justify-center relative w-full max-w-4xl">
          {projects.map((project, idx) => {
            const styles = cardColorMap[project.folderColor];
            const isHovered = hoveredIndex === idx;
            const rotation = isHovered ? 0 : defaultRotations[idx] || 0;
            const translateY = isHovered ? -26 : 0;
            const zIndex = isHovered ? 30 : idx + 10;
            const scale = isHovered ? 1.05 : 1;

            // Lateral push for sibling cards when one is hovered
            let translateX = 0;
            if (hoveredIndex !== null) {
              if (idx < hoveredIndex) translateX = -18;
              if (idx > hoveredIndex) translateX = 18;
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  rotate: rotation,
                  y: translateY,
                  x: translateX,
                  scale: scale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                style={{
                  zIndex,
                  transformOrigin: "bottom center",
                }}
                className={`w-[280px] lg:w-[300px] h-[350px] rounded-2xl p-6 shadow-card hover:shadow-card-hover border ${styles.bg} ${styles.border} ${styles.text} cursor-pointer flex flex-col justify-between select-none relative transition-colors duration-200 group ${
                  idx > 0 ? "-ml-14 lg:-ml-16" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectProject(project)}
              >
                {/* Physical folder-like tab index top edge */}
                <div className="flex items-center justify-between border-b border-current/15 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-pixel text-[11px] tracking-wider font-semibold">
                      +{project.index}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase opacity-75">
                      /{project.id}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border border-current/20 ${styles.badge} transition-transform group-hover:scale-105`}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="my-auto py-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-2 leading-snug group-hover:translate-x-0.5 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-3 opacity-85">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 border-t border-current/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 opacity-70 group-hover:rotate-45 transition-transform duration-300" strokeWidth={1.5} />
                    <span className="text-[11px] font-mono truncate max-w-[160px]">
                      {project.techStack[0]} + {project.techStack[1]}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-current/10 flex items-center justify-center group-hover:scale-115 group-hover:bg-current/20 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Touch Carousel (Zero Horizontal Overflow, Smooth Snap) */}
      <div className="md:hidden w-full overflow-x-auto no-scrollbar px-4 py-2">
        <div className="flex gap-4 w-max mx-auto pb-2">
          {projects.map((project) => {
            const styles = cardColorMap[project.folderColor];

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`w-[270px] h-[310px] rounded-2xl p-5 shadow-card border ${styles.bg} ${styles.border} ${styles.text} flex flex-col justify-between shrink-0 active:scale-98 transition-transform`}
              >
                <div className="flex items-center justify-between border-b border-current/15 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-pixel text-[11px] tracking-wider font-semibold">
                      +{project.index}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase opacity-75">
                      /{project.id}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-current/20">
                    {project.year}
                  </span>
                </div>

                <div className="my-auto">
                  <span className="text-[10px] font-mono uppercase tracking-wider block opacity-70 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-3 opacity-85">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-current/15 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-75 truncate max-w-[160px]">
                    {project.techStack[0]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium underline underline-offset-2">
                    Dettagli
                    <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Layers className="w-3.5 h-3.5 text-ink-secondary" strokeWidth={1.5} />
          <span className="text-[11px] font-mono text-ink-secondary">
            Tocca una scheda per visualizzare il caso studio
          </span>
        </div>
      </div>
    </div>
  );
}
