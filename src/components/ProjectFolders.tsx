"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";
import { FolderCard } from "./FolderCard";

interface ProjectFoldersProps {
  projects: ProjectItem[];
  onOpenModal: (project: ProjectItem) => void;
}

export function ProjectFolders({ projects, onOpenModal }: ProjectFoldersProps) {
  return (
    <section id="projects" className="w-full py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-paper-line bg-paper-surface text-ink-secondary text-xs font-mono uppercase tracking-wider mb-4 shadow-2xs">
            <FolderGit2 className="w-3.5 h-3.5 text-accent-cobalt" strokeWidth={1.5} />
            <span>CASI STUDIO SELEZIONATI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-primary max-w-2xl leading-[1.15]">
            Architetture Reali, Risultati Tangibili.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            Tre progetti che dimostrano il mio percorso pratico: dall&apos;ingegneria dei dati
            per la flotta M-346 di Leonardo CAE Advanced Jet Training agli agenti vocali autonomi AI e gestionali per l&apos;hospitality.
          </p>
        </motion.div>

        {/* Stacked Physical Folder System */}
        <div className="flex flex-col relative pb-8">
          {projects.map((project, idx) => (
            <FolderCard
              key={project.id}
              project={project}
              isFirst={idx === 0}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
