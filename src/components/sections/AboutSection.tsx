import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { skills } from "@/data/skills";
import SkillBar from "@/components/ui/SkillBar";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { textSub, cardBg } = useTheme();
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, animStyle } = useScrollAnimation<HTMLElement>();

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
    { label: "프로젝트", value: "4+" },
    { label: "커밋", value: "1,200+" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ padding: "100px 5%", maxWidth: 1100, margin: "0 auto", ...animStyle }}
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
            웹 디자이너로 커리어를 시작하며 UI/UX 완성도에 대한 감각을 키웠고,
            이를 실제 화면으로 구현하고 싶다는 생각에 웹퍼블리싱으로 영역을
            확장했습니다. 이후 단순 구현을 넘어 서비스의 동작 구조와 로직까지
            이해하고 싶어 프론트엔드 개발자로 전환했습니다.
          </p>
          <p
            style={{
              fontSize: 16,
              color: textSub,
              lineHeight: 1.9,
              marginBottom: 32,
            }}
          >
            디자인과 마크업에 대한 높은 이해도를 기반으로, React/Next.js 중심의
            컴포넌트설계와 유지보수 가능한 코드 구조를 고민하며 성장해왔습니다.
            기획·디자인·개발 사이의 연결을 잘 이해하는 것이 저의 강점입니다.
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
