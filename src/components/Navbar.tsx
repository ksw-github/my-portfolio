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
  const { mode, setMode } = useTheme();

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

        {/* 테마 세그먼트 컨트롤 */}
        <div className="flex items-center ml-2 rounded-full p-[3px] dark:bg-white/[0.08] bg-black/[0.06]">
          {(
            [
              { m: "light", icon: "☀️", title: "라이트 모드" },
              { m: "dark", icon: "🌙", title: "다크 모드" },
              { m: "system", icon: "💻", title: "시스템 설정" },
            ] as const
          ).map(({ m, icon, title }) => {
            const isActive = mode === m;
            const activeStyle = {
              light: { background: COLORS.yellow, color: "#1a1a2e" },
              dark: { background: "#1a1a2e", color: "#fff" },
              system: { background: COLORS.sky, color: "#fff" },
            }[m];
            return (
              <button
                key={m}
                onClick={() => setMode(m)}
                title={title}
                className={[
                  "w-8 h-8 rounded-full border-none cursor-pointer text-sm transition-[background,transform,opacity] duration-200",
                  isActive
                    ? "scale-100"
                    : "bg-transparent opacity-50 hover:opacity-80 hover:scale-105",
                ].join(" ")}
                style={isActive ? activeStyle : undefined}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
