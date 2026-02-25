"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

export default function ScrollTopButton() {
  const { dark } = useTheme();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="맨 위로 이동"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 200,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "none",
        background: hovered
          ? COLORS.coral
          : dark
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,107,107,0.15)",
        color: hovered ? "#fff" : COLORS.coral,
        fontSize: 20,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: hovered
          ? `0 8px 28px ${COLORS.coral}66`
          : "0 4px 16px rgba(0,0,0,0.12)",
        backdropFilter: "blur(8px)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.8)",
        transition: "opacity 0.3s ease, transform 0.3s ease, background 0.2s, color 0.2s, box-shadow 0.2s",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      ↑
    </button>
  );
}
