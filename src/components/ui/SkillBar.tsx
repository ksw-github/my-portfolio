import { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  visible: boolean;
}

export default function SkillBar({ skill, visible }: SkillBarProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, color: "#1a1a2e" }}>
          {skill.icon} {skill.name}
        </span>
        <span style={{ fontWeight: 700, color: skill.color, fontSize: 15 }}>
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          background: "#f0f0f0",
          borderRadius: 99,
          height: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: visible ? `${skill.level}%` : "0%",
            height: "100%",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
            borderRadius: 99,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: `0 0 12px ${skill.color}88`,
          }}
        />
      </div>
    </div>
  );
}
