"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { COLORS } from "@/constants/colors";

interface ThemeContextValue {
  dark: boolean;
  toggleDark: () => void;
  bg: string;
  textMain: string;
  textSub: string;
  cardBg: string;
  navBg: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  const value: ThemeContextValue = {
    dark,
    toggleDark: () => setDark((d) => !d),
    bg: dark ? "#0f0f1a" : "#fafafa",
    textMain: dark ? "#f0f0ff" : "#1a1a2e",
    textSub: dark ? "#aaaacc" : "#555",
    cardBg: dark ? "#1a1a2e" : "#fff",
    navBg: dark ? "rgba(15,15,26,0.3)" : "rgba(250,250,250,0.3)",
  };

  return (
    <ThemeContext.Provider value={value}>
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 40px ${COLORS.coral}66; }
          50% { box-shadow: 0 0 60px ${COLORS.coral}99; }
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
