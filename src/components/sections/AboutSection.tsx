import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { skills } from "@/data/skills";
import SkillBar from "@/components/ui/SkillBar";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSection() {
  const { textSub, cardBg } = useTheme();
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "경력", value: "2년" },
    { label: "프로젝트", value: "12+" },
    { label: "커밋", value: "1,200+" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "100px 5%", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionTitle title="About Me" accent={COLORS.sky} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 16,
              color: textSub,
              lineHeight: 1.9,
              marginBottom: 24,
            }}
          >
            2년간 스타트업과 에이전시에서 다양한 웹 서비스를 개발해왔습니다.
            사용자가 불편함을 느끼지 않는 인터페이스를 만드는 것을 목표로
            합니다.
          </p>
          <p
            style={{
              fontSize: 16,
              color: textSub,
              lineHeight: 1.9,
              marginBottom: 32,
            }}
          >
            Next.js App Router와 TypeScript를 주로 사용하며, 성능 최적화와
            접근성에 관심이 많습니다. 최근에는 디자인 시스템 구축 경험을 쌓고
            있습니다.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  background: cardBg,
                  borderRadius: 14,
                  padding: "16px 24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 24,
                    color: COLORS.coral,
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: 12, color: textSub, fontWeight: 600 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={skillsRef}>
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} visible={skillsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
