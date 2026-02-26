"use client";

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
  const { dark, toggleDark } = useTheme();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-theme-nav backdrop-blur-[12px] px-[5%] flex items-center justify-between h-16 border-b dark:border-white/[0.08] border-black/[0.06] [animation:navSlideDown_0.4s_cubic-bezier(0.4,0,0.2,1)_both]"
    >
      {/* 로고 */}
      <div
        onClick={() => window.location.reload()}
        className="font-black text-[22px] tracking-[-1px] cursor-pointer hover:scale-[1.08] transition-transform duration-200"
      >
        <span className="text-coral">{"<"}</span>
        <span className="text-theme-text">SW</span>
        <span className="text-mint">{"/"}</span>
        <span className="text-sky">{">"}</span>
      </div>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-1 items-center">
        {SECTIONS.map((s) => {
          const isActive = activeSection === s;
          return (
            <button
              key={s}
              onClick={() => onScrollTo(s)}
              className={[
                "relative border-none rounded-lg px-[14px] py-[6px] text-sm capitalize cursor-pointer",
                "transition-[background,color,transform] duration-200",
                isActive
                  ? "bg-coral text-white font-bold"
                  : "bg-transparent text-theme-sub font-semibold dark:hover:bg-white/[0.07] hover:bg-black/[0.03] hover:text-theme-text hover:-translate-y-px",
              ].join(" ")}
            >
              {s}
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coral" />
              )}
            </button>
          );
        })}

        {/* 다크모드 토글 */}
        <button
          onClick={toggleDark}
          className="flex items-center justify-center w-9 h-9 rounded-full ml-2 text-base border-none cursor-pointer transition-[transform,background] duration-200 hover:scale-110 hover:rotate-[15deg]"
          style={{
            background: dark ? COLORS.yellow : "#1a1a2e",
            color: dark ? "#1a1a2e" : "#fff",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
