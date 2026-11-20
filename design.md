# Design System & Visual Guidelines — Tactile Neo-Editorial

## 1. Core Aesthetic Direction
A blend of Swiss/editorial clarity and tactile desktop-stationery craft. It must feel unmistakably human-crafted, warm, and engineered—never like a generic dark-mode SaaS template or AI-generated portfolio.
- Strict Prohibition: ZERO emojis anywhere in UI copy, headings, badges, or buttons. Use only crisp Lucide icons (1.5px stroke) or custom minimal geometric SVGs.
- Strict Prohibition: ZERO neon purple/blue glow gradients, ZERO generic stock illustrations, ZERO filler marketing copy.

## 2. Color Palette (CSS Variables)
- Canvas Background (Warm Paper): #F8F7F4
- Subtle Surface (Elevated Paper): #FFFFFF
- Notebook Line / Hairline Border: #E5E2DC
- Primary Ink (Deep Charcoal): #141413
- Secondary Ink (Muted Graphite): #5C5B57
- Accent 1 — Cobalt Blue (Primary CTA & Folder 02): #2563EB (Hover: #1D4ED8)
- Accent 2 — Obsidian Folder (Folder 01 & Contact Card): #18181B (Text on dark: #F8F7F4)
- Accent 3 — Editorial Ochre/Mustard (Folder 03): #EAB308 or #F2C94C (Text on ochre: #141413)
- Status Active Green: #16A34A

## 3. Typography (via next/font/google)
- Primary Sans (UI, Body, Subheadings): Plus Jakarta Sans or Bricolage Grotesque (weights 400, 500, 600, 700; tight tracking -0.02em on headings).
- Pixel Display Accent (Hero emphasis word & small badges): Silkscreen or Press Start 2P (used sparingly: ONLY on 1-2 hero words and tiny folder tab indexes to echo tactile retro-tech).
- Editorial Monospace (Architecture pipelines, dates, tech tags, status pill): JetBrains Mono (11px-13px, uppercase tracking 0.06em for labels).
- Handwritten Note Accent (Only for the tiny arrow caption next to the Hero portrait): Caveat (18px-20px, #5C5B57).

## 4. Tactile Surfaces & Structural Details
- Paper Texture: Very subtle CSS linear-gradient horizontal notebook lines (opacity 0.35, 32px spacing) on the About section or full canvas, keeping readability effortless.
- Floating Pill Navbar: bg-white/85 backdrop-blur-md, border 1px solid #E5E2DC, rounded-full, subtle soft shadow (0 8px 30px rgba(0,0,0,0.06)).
- Fanned Card Deck (Hero):
  - 4 cards (aspect ratio 4/3 or 16/11), rounded-2xl, crisp 1px border, layered shadows.
  - Default state: slightly overlapped horizontally with subtle alternating rotations (-6deg, -2deg, 2deg, 6deg).
  - Hover state: hovered card lifts (translateY -16px, scale 1.04, rotation 0deg, z-index 30) while neighboring cards gently separate using Framer Motion spring (stiffness 260, damping 24).
- Physical Folder Cards (Projects):
  - Each folder sits inside a vertical stack with negative top margin overlap (-mt-6 on desktop) so they look like real stacked archival folders.
  - Top Tab: Custom trapezoid/chamfered tab on the top edge (using CSS clip-path or clean rounded-t-xl div) positioned at staggered horizontal offsets (Folder 01 left-aligned, Folder 02 shifted right, Folder 03 centered, Folder 04 left-aligned).
  - Tab Label: Monospace index + project title (e.g., "+ 01 / QUT").
  - Corner Radius: rounded-2xl (except where the tab meets the top edge).
  - Internal padding: generous p-8 md:p-12.
- Polaroid / Taped Photo Frame (About):
  - White frame (p-3 pb-8 bg-white shadow-md border border-[#E5E2DC]), slight rotation (-2deg), with two small translucent masking-tape rectangles (bg-[#E5E2DC]/70) angled across the top corners.

## 5. Responsive Behavior
- Mobile (< 768px):
  - Navbar stays floating pill, collapses middle links cleanly or uses compact horizontal links.
  - FannedDeck transitions into a clean horizontal snap-scroll carousel or compact 2x2 grid so cards never overflow horizontally.
  - Folder tabs stack cleanly with readable padding and full-width MediaFrames.
  - Hero portrait badge repositions neatly above or below the deck without overlapping text.

## 6. Motion & Micro-interactions
- Keep animations snappy and physical (no sluggish fades).
- Use Framer Motion springs for interactive elements (FannedDeck, Modal open/close, Folder hover lift).
- Architecture flow pills should subtly highlight on folder hover to draw attention to how the system connects APIs and AI models.