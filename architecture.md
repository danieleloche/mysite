# Architecture Specification — Daniele Personal Portfolio

## 1. Tech Stack
- Framework: Next.js 15+ (App Router, TypeScript strict mode)
- Styling: Tailwind CSS with custom CSS variables for design tokens
- Animations: Framer Motion (spring physics for card fan, smooth folder hover/expand, scroll reveals)
- Icons: lucide-react (1.5px stroke weight, monochrome, zero emojis anywhere)
- Deployment: Vercel (static-first / SSG for instant page loads)

## 2. Directory Structure
- public/
  - media/
    - profile/
      - portrait.png          (User cutout or framed portrait for Hero & About)
    - qut/
      - cover.png             (Hero deck & folder preview)
      - demo.mp4              (Optional walkthrough video)
      - screen-1.png          (App screenshot)
    - domo/
      - cover.png             (Hero deck & folder preview)
      - demo.mp4              (Screencast walkthrough video)
    - leonardo/
      - cover.png             (Abstract architecture diagram / clean visual)
    - ledgr/
      - cover.png             (Dashboard screenshot)
- src/
  - app/
    - layout.tsx              (next/font setup, SEO metadata, warm paper canvas)
    - page.tsx                (Main single-page layout assembling all sections)
    - globals.css             (Design tokens, subtle paper grain / notebook line utilities)
  - data/
    - portfolio.ts            (SINGLE SOURCE OF TRUTH for bio, projects, stack, links, media paths)
  - components/
    - Navbar.tsx              (Floating glassmorphic pill navigation bar)
    - Hero.tsx                (Editorial + pixel-accent headline, interactive fanned deck, corner portrait)
    - FannedDeck.tsx          (Interactive 4-card overlapping fan that spreads on hover and scrolls to project)
    - ProjectFolders.tsx      (Stacked physical folder-tab container for case studies)
    - FolderCard.tsx          (Individual folder with angled tab, architecture pipeline pills, media preview)
    - MediaFrame.tsx          (Smart media component: renders video/image or clean blueprint placeholder)
    - ProjectModal.tsx        (Clean modal/drawer to play full demo video and inspect system architecture)
    - AboutSection.tsx        (Editorial bio, Polaroid-style taped photo frame, Engineering & Tech Stack bento)
    - ContactFooter.tsx       (High-contrast dark contact card + bold typography CTA + copy-to-clipboard email)

## 3. Data-Driven Media Drop-In System (src/data/portfolio.ts)
All copy, architecture steps, tech tags, links, and media paths MUST live inside src/data/portfolio.ts.
- MediaFrame.tsx must accept: type ("image" | "video"), src (string), alt (string), and placeholderLabel (string).
- Graceful Fallback Rule: Because the user will drop real media files into public/media/ AFTER the initial build, MediaFrame.tsx must detect load errors (onError) or empty paths and render an intentional, high-craft technical wireframe placeholder showing the expected file path (e.g., "Drop /public/media/domo/demo.mp4"). Zero broken image icons or empty black boxes.
- Video Support: Videos inside ProjectModal and FolderCard must render with native controls, muted autoplay preview (playsInline, loop) when hovered or opened, and clean rounded corners.

## 4. Section Architecture & Content Mapping
1. Navbar (Navbar.tsx):
   - Sticky floating pill centered at top.
   - Left: Minimal circular avatar thumbnail or geometric monogram "D."
   - Center links: Progetti, Chi sono, Stack.
   - Right CTA: Solid Cobalt Blue or Obsidian pill button "Contattami" scrolling smoothly to #contact.

2. Hero Section (Hero.tsx):
   - Compact status badge: green dot + monospace label "AVAILABLE FOR INTERNSHIPS & AI AUTOMATION".
   - Bold two-line headline mixing geometric sans + crisp pixel display font for the key noun (e.g., "AI AUTOMATION & / SOFTWARE BUILDER").
   - Concise 1-sentence subtitle: Computer Engineering student building AI agents, workflow automations, and full-stack web apps.
   - Centerpiece (FannedDeck.tsx): 4 slightly rotated, overlapping cards representing Qut, Domo, Leonardo ETL, and Ledgr. Hovering fans them out smoothly; clicking scrolls to the corresponding folder or opens the modal.
   - Personal Touch: Bottom-left corner anchor with the user's portrait (MediaFrame) and a minimal hand-drawn SVG curved arrow pointing to it with a subtle handwritten caption ("Ciao, sono Daniele").

3. Selected Projects — Stacked Folder System (ProjectFolders.tsx):
   - Physical overlapping file folders with angled top-left/top-center tabs ("01 / QUT", "02 / DOMO", "03 / LEONARDO ETL", "04 / LEDGR").
   - Each folder card includes:
     - Problem statement (1-2 sharp sentences).
     - Architecture Flow bar (horizontal monospace pipeline nodes, e.g., WhatsApp Voice -> Webhook -> Gemini API -> Google Calendar -> Supabase).
     - Tech stack pills.
     - Right-side MediaFrame (screenshot or video preview with play button overlay opening ProjectModal).
     - Action links (Live Demo / Watch Video / GitHub).
   - Pre-populated projects in src/data/portfolio.ts:
     - 01 Qut (Charcoal Dark Folder): AI WhatsApp booking assistant & SaaS for barbershops/salons. Stack: Next.js, WhatsApp Cloud API, Gemini AI, Google Calendar, Supabase, Vercel.
     - 02 Domo (Cobalt Blue Folder): AI Concierge & Bento QR digital guestbook for short-term rentals & hospitality. Stack: Next.js, Prisma, Supabase, Gemini AI, Vercel.
     - 03 Fleet Analytics ETL (Warm Ochre/Mustard Folder): Curricular internship at Leonardo CAE (Decimomannu). Automated Power Query ETL & Power Pivot models for 10,000+ M-346 maintenance logs.
     - 04 Ledgr (Off-White / Bordered Paper Folder): Full-stack web app for tracking private tutoring sessions, balances, and payments. Stack: Next.js, Prisma, PostgreSQL, Vercel.

4. About & Stack Section (AboutSection.tsx):
   - Clean 2-column editorial layout on subtle lined-paper background.
   - Left: Brief, grounded bio (B.Sc. Computer Engineering at UniCa, GPA 28.76/30, Leonardo CAE PMO/Data intern, builder mindset) + Polaroid-framed photo slot with subtle translucent tape strips at top corners.
   - Right: Categorized Tech Stack matrix (AI & Automation, Full-Stack Web, Systems & Hardware, Data & Tools) rendered as crisp tactile tags.

5. Contact Footer (ContactFooter.tsx):
   - Bold left-aligned display heading ("Costruiamo qualcosa insieme.").
   - Right-aligned dark charcoal card (inspired by retro-modern contact cards) with:
     - One-click Copy Email button (with "Copiato" state feedback).
     - Direct links to LinkedIn, GitHub, and Download CV (PDF placeholder).