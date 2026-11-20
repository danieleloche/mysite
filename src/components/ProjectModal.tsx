"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolio";
import { MediaFrame } from "./MediaFrame";
import { GithubIcon } from "./icons";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-primary/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-paper-surface rounded-2xl md:rounded-3xl border border-paper-line shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Top Bar with Archive Badge and Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-paper-line bg-paper-canvas/70">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs text-accent-cobalt font-bold">
                  +{project.index}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-ink-secondary">
                  / ARCHIVIO CASO STUDIO / {project.id}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-paper-line bg-paper-surface hover:bg-paper-canvas flex items-center justify-center text-ink-secondary hover:text-ink-primary transition-colors focus:outline-none"
                aria-label="Chiudi finestra"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Media Section: Video Walkthrough or Cover Preview */}
              <div>
                <MediaFrame
                  type={project.media.demoVideo ? "video" : "image"}
                  src={project.media.demoVideo || project.media.cover}
                  alt={`Demo completa del progetto ${project.title}`}
                  placeholderLabel={project.media.placeholderLabel}
                  aspectRatio="aspect-video"
                  controls={true}
                  autoPlay={true}
                  muted={false}
                  className="w-full shadow-sm rounded-xl"
                />
              </div>

              {/* Title & Category Info */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border border-paper-line bg-paper-canvas text-ink-secondary">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-ink-secondary">
                    <Calendar className="w-3 h-3" strokeWidth={1.5} />
                    <span>Anno {project.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-base text-ink-secondary font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Problem vs Solution Editorial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-paper-line bg-paper-canvas/60">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-ink-secondary block mb-2">
                    01 / ANALISI DEL PROBLEMA
                  </span>
                  <p className="text-sm text-ink-primary leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-accent-cobalt/30 bg-blue-50/30">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-accent-cobalt block mb-2">
                    02 / ARCHITETTURA DI RISOLUZIONE
                  </span>
                  <p className="text-sm text-ink-primary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Complete Architecture Pipeline Breakdown */}
              <div className="p-6 rounded-2xl border border-paper-line bg-paper-surface">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-accent-cobalt" strokeWidth={1.5} />
                  <h4 className="text-sm font-mono uppercase font-bold tracking-wider text-ink-primary">
                    FLUSSO ARCHITETTURALE END-TO-END
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {project.architectureFlow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-paper-line bg-paper-canvas flex flex-col justify-between relative"
                    >
                      <span className="text-[9px] font-mono text-accent-cobalt font-bold mb-1">
                        STEP 0{idx + 1}
                      </span>
                      <p className="text-xs font-mono font-semibold text-ink-primary">
                        {step.label}
                      </p>
                      {step.sublabel && (
                        <p className="text-[10px] font-mono text-ink-secondary mt-1">
                          {step.sublabel}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Results & Tech Stack Bento */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6 p-5 rounded-xl border border-paper-line bg-paper-canvas/60 space-y-2">
                  <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-ink-secondary block mb-2">
                    RISULTATI & METRICHE CHIAVE
                  </span>
                  {project.keyMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink-primary">
                      <CheckCircle2
                        className="w-4 h-4 text-accent-green mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-6 p-5 rounded-xl border border-paper-line bg-paper-canvas/60">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Cpu className="w-4 h-4 text-ink-secondary" strokeWidth={1.5} />
                    <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-ink-secondary">
                      TECNOLOGIE ADOTTATE
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono border border-paper-line bg-paper-surface text-ink-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-paper-line bg-paper-canvas/70">
              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-paper-line bg-paper-surface text-xs font-mono font-medium text-ink-primary hover:bg-paper-canvas transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" strokeWidth={1.5} />
                    <span>Visualizza Repository</span>
                  </a>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-cobalt text-white text-xs font-mono font-medium hover:bg-accent-cobalt-hover transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                    <span>Visita Applicazione Live</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono text-ink-secondary hover:text-ink-primary underline underline-offset-4"
              >
                Chiudi anteprima
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
