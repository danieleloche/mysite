"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Play,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";
import { GithubIcon } from "./icons";

interface FolderCardProps {
  project: ProjectItem;
  isFirst?: boolean;
  onOpenModal: (project: ProjectItem) => void;
}

const folderStyles = {
  obsidian: {
    folderBg: "bg-[#18181B]",
    folderText: "text-zinc-100",
    border: "border-zinc-800",
    tabBg: "bg-[#18181B] text-zinc-100 border-zinc-800 border-b-transparent",
    problemBg: "bg-zinc-900/90 border-zinc-800 text-zinc-300",
    solutionBg: "bg-zinc-900/90 border-zinc-800 text-zinc-300",
    nodeBg: "bg-zinc-800 border-zinc-700 text-zinc-200",
    tagBg: "bg-zinc-800/80 text-zinc-300 border-zinc-700",
    btnPrimary: "bg-white text-zinc-950 hover:bg-zinc-200",
    btnSecondary: "bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700",
    badge: "bg-zinc-800 text-zinc-300 border-zinc-700",
    accentGlow: "text-zinc-400",
  },
  cobalt: {
    folderBg: "bg-[#2563EB]",
    folderText: "text-white",
    border: "border-blue-500",
    tabBg: "bg-[#2563EB] text-white border-blue-500 border-b-transparent",
    problemBg: "bg-blue-700/60 border-blue-400/40 text-blue-50",
    solutionBg: "bg-blue-700/60 border-blue-400/40 text-blue-50",
    nodeBg: "bg-blue-600/80 border-blue-400/50 text-white",
    tagBg: "bg-blue-700/80 text-white border-blue-400/50",
    btnPrimary: "bg-white text-blue-900 hover:bg-blue-50",
    btnSecondary: "bg-blue-700 text-white border-blue-400/60 hover:bg-blue-600",
    badge: "bg-blue-700 text-white border-blue-400/60",
    accentGlow: "text-blue-200",
  },
  ochre: {
    folderBg: "bg-[#F2C94C]",
    folderText: "text-zinc-950",
    border: "border-[#e0b73b]",
    tabBg: "bg-[#F2C94C] text-zinc-950 border-[#e0b73b] border-b-transparent",
    problemBg: "bg-amber-300/60 border-amber-400 text-zinc-900",
    solutionBg: "bg-amber-300/60 border-amber-400 text-zinc-900",
    nodeBg: "bg-amber-200/90 border-amber-400 text-zinc-950 font-medium",
    tagBg: "bg-amber-300/80 text-zinc-950 border-amber-400",
    btnPrimary: "bg-zinc-950 text-amber-300 hover:bg-zinc-850",
    btnSecondary: "bg-amber-300/90 text-zinc-950 border-amber-500 hover:bg-amber-400",
    badge: "bg-amber-300 text-zinc-950 border-amber-500 font-semibold",
    accentGlow: "text-zinc-700",
  },
};

const tabOffsets = {
  left: "left-4 md:left-8",
  center: "left-4 md:left-1/2 md:-translate-x-1/2",
  right: "left-4 md:left-auto md:right-8",
};

export function FolderCard({
  project,
  isFirst = false,
  onOpenModal,
}: FolderCardProps) {
  const styles = folderStyles[project.folderColor];
  const tabPositionClass = tabOffsets[project.tabPosition];

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative w-full transition-all duration-300 group scroll-mt-28 ${
        !isFirst ? "-mt-8 md:-mt-12" : ""
      }`}
    >
      {/* Physical Folder Staggered Tab (Top Edge) */}
      <div className="relative w-full h-11 overflow-hidden pointer-events-none">
        <div
          className={`absolute bottom-0 h-11 px-5 md:px-7 rounded-t-xl border-t border-l border-r ${styles.tabBg} flex items-center gap-2 pointer-events-auto shadow-xs ${tabPositionClass} transition-transform group-hover:-translate-y-0.5`}
        >
          <span className="font-pixel text-[11px] tracking-wider font-semibold">
            +{project.index}
          </span>
          <span className="text-xs font-mono font-bold tracking-wider uppercase">
            /{project.title.toUpperCase()}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 ml-1" />
        </div>
      </div>

      {/* Main Folder Body */}
      <div
        className={`w-full rounded-2xl md:rounded-3xl border ${styles.border} ${styles.folderBg} ${styles.folderText} shadow-card p-6 sm:p-8 md:p-12 relative z-10 transition-all duration-300 hover:shadow-card-hover`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Narrative, Architecture Pipeline, Tech Stack */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Year Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${styles.badge} transition-transform group-hover:scale-102`}
                >
                  {project.category}
                </span>
                <span className="text-[10px] font-mono opacity-60">
                  Anno {project.year}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg font-medium opacity-90 leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* Problem & Solution Doublets */}
            <div className="space-y-3">
              <div className={`p-4 rounded-xl border ${styles.problemBg} transition-colors hover:border-current/40`}>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75">
                    [ 01 / IL PROBLEMA REALE ]
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  {project.problem}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${styles.solutionBg} transition-colors hover:border-current/40`}>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75">
                    [ 02 / LA SOLUZIONE ARCHITETTURALE ]
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Flow Pipeline */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Layers className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold opacity-75">
                  PIPELINE ARCHITETTURALE
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.architectureFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono flex flex-col shadow-2xs hover:scale-105 hover:border-current/60 transition-all ${styles.nodeBg}`}
                    >
                      <span className="font-semibold leading-tight text-[11px]">
                        {step.label}
                      </span>
                      {step.sublabel && (
                        <span className="text-[9px] opacity-65 leading-tight">
                          {step.sublabel}
                        </span>
                      )}
                    </div>
                    {idx < project.architectureFlow.length - 1 && (
                      <ArrowRight
                        className="w-3 h-3 opacity-50 shrink-0 group-hover:translate-x-0.5 transition-transform"
                        strokeWidth={1.5}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="space-y-1.5 pt-1">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs opacity-90">
                  <CheckCircle2
                    className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-70"
                    strokeWidth={1.5}
                  />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 mb-2">
                <Cpu className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
                <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                  STACK TECNOLOGICO
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${styles.tagBg} hover:scale-103 transition-transform`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenModal(project)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-tight shadow-sm ${styles.btnPrimary}`}
              >
                <Play className="w-3.5 h-3.5 fill-current" strokeWidth={1.5} />
                <span>Guarda Demo & Architettura</span>
              </motion.button>

              {project.links.github && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono border transition-colors ${styles.btnSecondary}`}
                >
                  <GithubIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>GitHub</span>
                </motion.a>
              )}

              {project.links.live && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono border transition-colors ${styles.btnSecondary}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span>Live App</span>
                </motion.a>
              )}
            </div>
          </div>

          {/* Right Column: Media Preview Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group/media">
              <MediaFrame
                type={project.media.demoVideo ? "video" : "image"}
                src={project.media.demoVideo || project.media.cover}
                alt={`Anteprima del progetto ${project.title}`}
                placeholderLabel={project.media.placeholderLabel}
                aspectRatio="aspect-[4/3]"
                className="w-full shadow-md rounded-2xl cursor-pointer hover:shadow-xl transition-shadow"
                showPlayOverlay={true}
                onPlayClick={() => onOpenModal(project)}
              />

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[10px] font-mono opacity-70">
                  {project.media.demoVideo ? "Video Demo & Screencast" : "Schema & UI"}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenModal(project)}
                  className="text-[11px] font-mono underline underline-offset-4 opacity-80 hover:opacity-100 flex items-center gap-1"
                >
                  <span>Espandi a tutto schermo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
