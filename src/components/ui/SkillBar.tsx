import { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  visible: boolean;
}

export default function SkillBar({ skill, visible }: SkillBarProps) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-[6px]">
        <span className="font-semibold text-[15px] text-theme-text">
          {skill.icon} {skill.name}
        </span>
        <span className="font-bold text-[15px]" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="dark:bg-white/10 bg-[#f0f0f0] rounded-full h-[10px] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
            boxShadow: `0 0 12px ${skill.color}88`,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}
