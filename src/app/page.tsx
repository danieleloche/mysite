"use client";

import React, { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectFolders } from "@/components/ProjectFolders";
import { AboutSection } from "@/components/AboutSection";
import { ContactFooter } from "@/components/ContactFooter";
import { ProjectModal } from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectFromDeck = (project: ProjectItem) => {
    // Scroll smoothly to the project folder card
    const element = document.getElementById(project.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      handleOpenModal(project);
    }
  };

  return (
    <main className="min-h-screen bg-paper-canvas text-ink-primary relative selection:bg-accent-obsidian selection:text-paper-canvas">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Hero Section with Interactive Fanned Deck */}
      <Hero onSelectProject={handleSelectFromDeck} />

      {/* Stacked Physical Folder System (Selected Projects) */}
      <ProjectFolders
        projects={portfolioData.projects}
        onOpenModal={handleOpenModal}
      />

      {/* About & Tech Stack Editorial Section */}
      <AboutSection />

      {/* High-Contrast Obsidian Contact Footer */}
      <ContactFooter />

      {/* Case Study & Video Walkthrough Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
