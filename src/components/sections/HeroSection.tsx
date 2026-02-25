import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  const { dark, textMain, textSub } = useTheme();
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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 5%",
        textAlign: "center",
      }}
    >
      <div>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            margin: "0 auto 24px",
            boxShadow: `0 0 40px ${COLORS.coral}66`,
            animation: "pulse 3s infinite",
            overflow: "hidden",
            border: `3px solid ${COLORS.coral}`,
          }}
        >
          <Image
            src="/sw.jpg"
            alt="김서우 프로필 사진"
            width={120}
            height={120}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            display: "inline-block",
            background: `linear-gradient(90deg, ${COLORS.coral}22, ${COLORS.sky}22)`,
            border: `1px solid ${COLORS.coral}44`,
            borderRadius: 99,
            padding: "4px 18px",
            fontSize: 13,
            fontWeight: 700,
            color: COLORS.coral,
            marginBottom: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Frontend Developer · 2년차
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 900,
            margin: "0 0 16px",
            lineHeight: 1.1,
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
        <p
          style={{
            fontSize: 18,
            color: textSub,
            maxWidth: 540,
            margin: "0 auto 36px",
            lineHeight: 1.7,
          }}
        >
          사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.
          <br />
          React와 Next.js로 빠르고 편리한 웹을 만듭니다.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => onScrollTo("projects")}
            style={{
              background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.orange})`,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "14px 32px",
              fontWeight: 800,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: `0 6px 24px ${COLORS.coral}55`,
              transition: "transform 0.2s",
            }}
          >
            프로젝트 보기 →
          </button>
          <button
            onClick={() => onScrollTo("contact")}
            style={{
              background: "transparent",
              color: textMain,
              border: `2px solid ${dark ? "#ffffff33" : "#00000022"}`,
              borderRadius: 12,
              padding: "14px 32px",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            연락하기
          </button>
        </div>
        <div
          style={{
            marginTop: 60,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
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
              style={{
                padding: "6px 16px",
                borderRadius: 99,
                background: techColors[i % 5] + "22",
                color: techColors[i % 5],
                fontWeight: 700,
                fontSize: 13,
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
