"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextValue {
  dark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [dark]);

  const value: ThemeContextValue = {
    dark,
    toggleDark: () => setDark((d) => !d),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
