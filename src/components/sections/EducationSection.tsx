"use client";

import { COLORS } from "@/constants/colors";
import { educations } from "@/data/educations";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EducationSection() {
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="education"
      className="py-[100px] px-[5%] dark:bg-[#13131f] bg-[#f5f5ff]"
      style={animStyle}
    >
      <div className="max-w-[1100px] mx-auto">
        <SectionTitle
          title="Education & Certifications"
          accent={COLORS.purple}
        />
        <div className="grid grid-cols-2 gap-10 items-start">
          {/* Education */}
          <div>
            <h3 className="text-base font-extrabold text-purple tracking-[1px] uppercase mb-5">
              🎓 학력
            </h3>
            <div className="flex flex-col gap-4">
              {educations.map((edu, i) => (
                <div
                  key={i}
                  className="bg-theme-card rounded-[18px] px-7 py-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                  style={{ border: `2px solid ${edu.color}22` }}
                >
                  <div className="text-[32px] mb-3">{edu.icon}</div>
                  <div className="text-[18px] font-extrabold text-theme-text mb-1">
                    {edu.school}
                  </div>
                  <div
                    className="text-[15px] font-semibold mb-2"
                    style={{ color: edu.color }}
                  >
                    {edu.degree}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <span
                      className="rounded-[6px] px-[10px] py-[3px] text-[13px] font-bold"
                      style={{
                        background: `${edu.color}18`,
                        color: edu.color,
                      }}
                    >
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="dark:bg-white/[0.07] bg-[#f0f0f8] text-theme-sub rounded-[6px] px-[10px] py-[3px] text-[13px] font-semibold">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base font-extrabold text-mint tracking-[1px] uppercase mb-5">
              📜 자격증
            </h3>
            {/* certifications 비활성 */}
          </div>
        </div>
      </div>
    </section>
  );
}
