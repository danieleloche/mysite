import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Chakra_Petch, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  weight: ["600", "700"],
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Daniele Loche — Ingegneria Informatica, AI Automation & Full-Stack",
  description:
    "Portfolio di Daniele Loche: studente di Ingegneria Informatica, ideatore di agenti AI, automazioni di processo e architetture full-stack orientate al prodotto.",
  keywords: [
    "Daniele Loche",
    "Ingegneria Informatica",
    "AI Automation",
    "Full-Stack Developer",
    "Next.js",
    "Gemini API",
    "Leonardo CAE Advanced Jet Training",
  ],
  authors: [{ name: "Daniele Loche" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${sans.variable} ${mono.variable} ${chakra.variable} ${handwriting.variable} font-sans bg-paper-canvas text-ink-primary antialiased min-h-screen relative overflow-x-hidden selection:bg-accent-obsidian selection:text-paper-canvas`}
      >
        {children}
      </body>
    </html>
  );
}
