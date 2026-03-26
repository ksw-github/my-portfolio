"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

// 글자별 자동 색상 웨이브
function InteractiveText({
  text,
  baseDelay = 0,
}: {
  text: string;
  baseDelay?: number;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: [
              `charReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${baseDelay + i * 0.04}s both`,
              `charColorCycle 4s linear -${(baseDelay + i * 0.25).toFixed(2)}s infinite`,
            ].join(", "),
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const { dark } = useTheme();
  const techColors = [
    COLORS.coral,
    COLORS.sky,
    COLORS.purple,
    COLORS.mint,
    COLORS.orange,
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-[5%] text-center"
    >
      <div>
        {/* 프로필 사진 */}
        <div
          className="w-[120px] h-[120px] rounded-full mx-auto mb-6 overflow-hidden border-[3px] border-coral [animation:pulse_3s_infinite]"
          style={{ boxShadow: `0 0 40px ${COLORS.coral}66` }}
        >
          <Image
            src="/sw.jpg"
            alt="김서우 프로필 사진"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>

        {/* 배지 */}
        <div
          className="inline-block rounded-full px-[18px] py-1 text-[13px] font-bold text-coral mb-5 tracking-[2px] uppercase"
          style={{
            background: `linear-gradient(90deg, ${COLORS.coral}22, ${COLORS.sky}22)`,
            border: `1px solid ${COLORS.coral}44`,
          }}
        >
          Frontend Developer · 2년차
        </div>

        {/* 제목 */}
        <h1 className="text-[clamp(30px,7vw,70px)] font-black mt-0 mb-4 leading-[1.2] text-theme-text">
          <InteractiveText text="안녕하세요," baseDelay={0} />
          <br />
          <InteractiveText text="웹 프론트엔드 개발자" baseDelay={0.28} />
          <br />
          <InteractiveText text="김서우입니다" baseDelay={0.64} />
        </h1>

        {/* 부제목 */}
        <p className="text-[18px] text-theme-sub max-w-[540px] mx-auto mb-9 leading-[1.7]">
          디자인부터 개발까지, 서비스 전체를 이해하는 프론트엔드 개발자입니다.
          <br />
          기획·디자인·개발 사이의 연결고리로 완성도 높은 화면을 구현합니다.
        </p>

        {/* 버튼 */}
        <div className="flex gap-[14px] justify-center flex-wrap">
          <button
            onClick={() => onScrollTo("projects")}
            className="text-white border-none rounded-xl px-8 py-[14px] font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.orange})`,
              boxShadow: `0 6px 24px ${COLORS.coral}55`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            프로젝트 보기
          </button>
          <a
            href="/이력서_202603.pdf"
            download="이력서_김서우.pdf"
            className="text-white border-none rounded-xl px-8 py-[14px] font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 no-underline flex items-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${COLORS.sky}, ${COLORS.purple})`,
              boxShadow: `0 6px 24px ${COLORS.sky}55`,
            }}
          >
            📄 이력서 다운로드
          </a>
          <button
            onClick={() => onScrollTo("contact")}
            className="bg-transparent text-theme-text rounded-xl px-8 py-[14px] font-bold text-base cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: `2px solid ${dark ? "#ffffff33" : "#00000022"}`,
            }}
          >
            연락하기
          </button>
        </div>

        {/* 기술 태그 */}
        <div className="mt-10 sm:mt-[60px] flex gap-3 sm:gap-4 justify-center flex-wrap">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Vite",
            "Tailwind",
            "SCSS",
            "Linux",
            "Ubuntu",
            "Git",
            "Jira",
            "Notion",
            "Github",
            "Gitlab",
            "Figma",
            "Photoshop",
            "Illustrator",
          ].map((t, i) => (
            <span
              key={t}
              className="px-4 py-[6px] rounded-full font-bold text-[13px]"
              style={{
                background: techColors[i % 5] + "22",
                color: techColors[i % 5],
                border: `1px solid ${techColors[i % 5]}44`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
