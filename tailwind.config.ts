import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          canvas: "var(--paper-canvas)",
          surface: "var(--paper-surface)",
          line: "var(--paper-line)",
        },
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
        },
        accent: {
          cobalt: {
            DEFAULT: "var(--accent-cobalt)",
            hover: "var(--accent-cobalt-hover)",
          },
          obsidian: "var(--accent-obsidian)",
          ochre: "var(--accent-ochre)",
          green: "var(--accent-green)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        pixel: ["var(--font-pixel)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        pill: "0 8px 30px rgba(0, 0, 0, 0.06)",
        card: "0 4px 20px -2px rgba(24, 24, 27, 0.08)",
        "card-hover": "0 20px 40px -4px rgba(24, 24, 27, 0.14)",
        polaroid: "0 6px 18px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
