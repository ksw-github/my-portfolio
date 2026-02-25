"use client";

import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { experiences } from "@/data/experiences";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ExperienceSection() {
  const { dark, textMain, textSub, cardBg } = useTheme();
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      style={{ padding: "100px 5%", maxWidth: 1100, margin: "0 auto", ...animStyle }}
    >
      <SectionTitle title="Experience" accent={COLORS.coral} />
      <div style={{ position: "relative" }}>
        {/* 타임라인 세로선 */}
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(to bottom, ${COLORS.coral}, ${COLORS.sky})`,
            borderRadius: 99,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: 32, alignItems: "flex-start" }}
            >
              {/* 타임라인 아이콘 */}
              <div
                style={{
                  flexShrink: 0,
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: exp.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  boxShadow: `0 0 16px ${exp.color}66`,
                  zIndex: 1,
                }}
              >
                {exp.icon}
              </div>
              {/* 카드 */}
              <div
                style={{
                  flex: 1,
                  background: cardBg,
                  borderRadius: 20,
                  padding: "28px 32px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                  border: `2px solid ${exp.color}22`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 20,
                        fontWeight: 800,
                        color: textMain,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 0,
                        marginTop: 4,
                      }}
                    >
                      {[
                        exp.company.trim(),
                        exp.department,
                        exp.position,
                        exp.level,
                      ]
                        .filter(Boolean)
                        .map((item, idx, arr) => (
                          <span
                            key={idx}
                            style={{ display: "flex", alignItems: "center" }}
                          >
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
                                style={{
                                  margin: "0 6px",
                                  color: dark ? "#8888aa" : "#999",
                                  fontWeight: 400,
                                  fontSize: 15,
                                }}
                              >
                                |
                              </span>
                            )}
                          </span>
                        ))}
                    </div>
                  </div>
                  <span
                    style={{
                      background: `${exp.color}18`,
                      color: exp.color,
                      borderRadius: 8,
                      padding: "4px 12px",
                      fontSize: 13,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  style={{
                    margin: "0 0 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {exp.desc.map((d, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 2,
                          fontSize: 13,
                          fontWeight: 700,
                          color: exp.color,
                          lineHeight: 1.7,
                        }}
                      >
                        ▶
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: textSub,
                          lineHeight: 1.7,
                        }}
                      >
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        background: dark ? "#ffffff12" : "#f0f0f8",
                        color: textMain,
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
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
