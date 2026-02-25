"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

const SECTIONS = [
  "home",
  "about",
  "experience",
  "projects",
  "education",
  "github",
  "contact",
];

interface NavbarProps {
  activeSection: string;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ activeSection, onScrollTo }: NavbarProps) {
  const { dark, toggleDark, textMain, textSub, navBg } = useTheme();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes logoHover {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${dark ? "#ffffff15" : "#00000010"}`,
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          animation: "navSlideDown 0.4s cubic-bezier(0.4,0,0.2,1) both",
        }}
      >
        {/* 로고 */}
        <div
          onClick={() => window.location.reload()}
          style={{
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: -1,
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
        >
          <span style={{ color: COLORS.coral }}>{"<"}</span>
          <span style={{ color: textMain }}>SW</span>
          <span style={{ color: COLORS.mint }}>{"/"}</span>
          <span style={{ color: COLORS.sky }}>{">"}</span>
        </div>

        {/* 네비게이션 버튼 */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {SECTIONS.map((s) => {
            const isActive = activeSection === s;
            const isHovered = hovered === s;
            return (
              <button
                key={s}
                onClick={() => onScrollTo(s)}
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  background: isActive
                    ? COLORS.coral
                    : isHovered
                      ? dark
                        ? "#ffffff12"
                        : "#00000008"
                      : "transparent",
                  color: isActive ? "#fff" : isHovered ? textMain : textSub,
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s, transform 0.15s",
                  textTransform: "capitalize",
                  transform:
                    isHovered && !isActive ? "translateY(-1px)" : "none",
                }}
              >
                {s}
                {/* 활성 섹션 하단 점 표시 (비활성 상태일 때 대비용) */}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: COLORS.coral,
                    }}
                  />
                )}
              </button>
            );
          })}

          {/* 다크모드 토글 */}
          <button
            onClick={toggleDark}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1) rotate(15deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
            }
            style={{
              background: dark ? COLORS.yellow : "#1a1a2e",
              color: dark ? "#1a1a2e" : "#fff",
              border: "none",
              borderRadius: 50,
              width: 36,
              height: 36,
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 8,
              transition: "transform 0.2s, background 0.3s",
            }}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
}
