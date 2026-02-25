"use client";

import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { educations, certifications } from "@/data/educations";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EducationSection() {
  const { dark, textMain, textSub, cardBg } = useTheme();
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="education"
      style={{
        padding: "100px 5%",
        background: dark ? "#13131f" : "#f5f5ff",
        ...animStyle,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle
          title="Education & Certifications"
          accent={COLORS.purple}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Education */}
          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: COLORS.purple,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              🎓 학력
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {educations.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    borderRadius: 18,
                    padding: "24px 28px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                    border: `2px solid ${edu.color}22`,
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 12 }}>
                    {edu.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: textMain,
                      marginBottom: 4,
                    }}
                  >
                    {edu.school}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: edu.color,
                      marginBottom: 8,
                    }}
                  >
                    {edu.degree}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: `${edu.color}18`,
                        color: edu.color,
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span
                        style={{
                          background: dark ? "#ffffff12" : "#f0f0f8",
                          color: textSub,
                          borderRadius: 6,
                          padding: "3px 10px",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
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
            <h3
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: COLORS.mint,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              📜 자격증
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    background: cardBg,
                    borderRadius: 16,
                    padding: "20px 24px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    border: `2px solid ${cert.color}22`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `${cert.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: textMain,
                        marginBottom: 3,
                      }}
                    >
                      {cert.name}
                    </div>
                    <div
                      style={{ fontSize: 13, color: textSub, fontWeight: 500 }}
                    >
                      {cert.issuer}
                    </div>
                  </div>
                  <span
                    style={{
                      background: `${cert.color}18`,
                      color: cert.color,
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: 12,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
