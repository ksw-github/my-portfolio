import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
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
        <h1
          className="text-[clamp(40px,7vw,80px)] font-black mt-0 mb-4 leading-[1.1]"
          style={{
            background: dark
              ? `linear-gradient(135deg, #fff, ${COLORS.sky})`
              : `linear-gradient(135deg, #1a1a2e, ${COLORS.coral})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          안녕하세요,
          <br />
          웹 프론트엔드 개발자
          <br />
          김서우입니다
        </h1>

        {/* 부제목 */}
        <p className="text-[18px] text-theme-sub max-w-[540px] mx-auto mb-9 leading-[1.7]">
          사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.
          <br />
          React와 Next.js로 빠르고 편리한 웹을 만듭니다.
        </p>

        {/* 버튼 */}
        <div className="flex gap-[14px] justify-center flex-wrap">
          <button
            onClick={() => onScrollTo("projects")}
            className="text-white border-none rounded-xl px-8 py-[14px] font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.orange})`,
              boxShadow: `0 6px 24px ${COLORS.coral}55`,
            }}
          >
            프로젝트 보기 →
          </button>
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
        <div className="mt-[60px] flex gap-4 justify-center flex-wrap">
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
