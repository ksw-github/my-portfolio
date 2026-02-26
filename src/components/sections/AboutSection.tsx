"use client";

import { useState, useEffect, useRef } from "react";
import { COLORS } from "@/constants/colors";
import { skills } from "@/data/skills";
import SkillBar from "@/components/ui/SkillBar";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
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
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
      style={animStyle}
    >
      <SectionTitle title="About Me" accent={COLORS.sky} />
      <div className="grid grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-base text-theme-sub leading-[1.9] mb-6">
            웹 디자이너로 커리어를 시작하며 UI/UX 완성도에 대한 감각을 키웠고,
            이를 실제 화면으로 구현하고 싶다는 생각에 웹퍼블리싱으로 영역을
            확장했습니다. 이후 단순 구현을 넘어 서비스의 동작 구조와 로직까지
            이해하고 싶어 프론트엔드 개발자로 전환했습니다.
          </p>
          <p className="text-base text-theme-sub leading-[1.9] mb-8">
            디자인과 마크업에 대한 높은 이해도를 기반으로, React/Next.js 중심의
            컴포넌트설계와 유지보수 가능한 코드 구조를 고민하며 성장해왔습니다.
            기획·디자인·개발 사이의 연결을 잘 이해하는 것이 저의 강점입니다.
          </p>
          <div className="flex gap-3 flex-wrap">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-theme-card rounded-[14px] px-6 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-center"
              >
                <div className="font-black text-2xl text-coral">{item.value}</div>
                <div className="text-xs text-theme-sub font-semibold">{item.label}</div>
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
