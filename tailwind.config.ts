import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: "#FF6B6B",
        yellow: "#FFD93D",
        mint: "#6BCB77",
        sky: "#4D96FF",
        purple: "#C77DFF",
        orange: "#FF9F1C",
        "theme-bg": "var(--theme-bg)",
        "theme-text": "var(--theme-text)",
        "theme-sub": "var(--theme-sub)",
        "theme-card": "var(--theme-card)",
        "theme-nav": "var(--theme-nav)",
      },
    },
  },
  plugins: [],
};
export default config;
