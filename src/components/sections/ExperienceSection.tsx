"use client";

import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { experiences } from "@/data/experiences";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const { dark } = useTheme();
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className="py-[100px] px-[5%] max-w-[1100px] mx-auto"
      style={animStyle}
    >
      <SectionTitle title="Experience" accent={COLORS.coral} />
      <div className="relative">
        {/* 타임라인 세로선 */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 rounded-full bg-gradient-to-b from-coral to-sky" />
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-8 items-start">
              {/* 타임라인 아이콘 */}
              <div
                className="shrink-0 w-[42px] h-[42px] rounded-full flex items-center justify-center text-[20px] z-10"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 16px ${exp.color}66`,
                }}
              >
                {exp.icon}
              </div>

              {/* 카드 */}
              <div
                className="flex-1 bg-theme-card rounded-[20px] px-8 py-7 shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
                style={{ border: `2px solid ${exp.color}22` }}
              >
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="m-0 text-[20px] font-extrabold text-theme-text">
                      {exp.role}
                    </h3>
                    <div className="flex items-center flex-wrap mt-1">
                      {[
                        exp.company.trim(),
                        exp.department,
                        exp.position,
                        exp.level,
                      ]
                        .filter(Boolean)
                        .map((item, idx, arr) => (
                          <span key={idx} className="flex items-center">
                            <span
                              style={{
                                fontSize: idx === 0 ? 15 : 13,
                                fontWeight: idx === 0 ? 700 : 500,
                                color:
                                  idx === 0
                                    ? exp.color
                                    : dark
                                      ? "#8888aa"
                                      : "#999",
                              }}
                            >
                              {item}
                            </span>
                            {idx < arr.length - 1 && (
                              <span
                                className="mx-[6px] text-[15px] font-normal"
                                style={{ color: dark ? "#8888aa" : "#999" }}
                              >
                                |
                              </span>
                            )}
                          </span>
                        ))}
                    </div>
                  </div>
                  <span
                    className="rounded-lg px-3 py-1 text-[13px] font-bold whitespace-nowrap"
                    style={{
                      background: `${exp.color}18`,
                      color: exp.color,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4 flex flex-col gap-2">
                  {exp.desc.map((d, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span
                        className="shrink-0 mt-0.5 text-[13px] font-bold leading-[1.7]"
                        style={{ color: exp.color }}
                      >
                        ▶
                      </span>
                      <span className="text-sm text-theme-sub leading-[1.7]">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-[6px]">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[6px] px-[10px] py-[3px] text-[12px] font-semibold text-theme-text dark:bg-white/[0.07] bg-[#f0f0f8]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
