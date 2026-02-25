import { useState } from "react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "28px 28px 22px",
        boxShadow: hovered
          ? `0 12px 40px ${project.color}44, 0 2px 8px rgba(0,0,0,0.08)`
          : "0 2px 16px rgba(0,0,0,0.07)",
        border: `2px solid ${hovered ? project.color : "transparent"}`,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-6px)" : "none",
        cursor: "pointer",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div style={{ fontSize: 38, marginBottom: 12 }}>{project.emoji}</div>
      <div
        style={{
          display: "inline-block",
          background: `${project.color}18`,
          color: project.color,
          borderRadius: 8,
          padding: "2px 10px",
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 10,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Project
      </div>
      <h3
        style={{
          margin: "0 0 8px",
          fontSize: 22,
          fontWeight: 800,
          color: "#1a1a2e",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          color: "#555",
          fontSize: 14,
          lineHeight: 1.7,
          margin: "0 0 16px",
        }}
      >
        {project.desc}
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}
      >
        {project.stack.map((s) => (
          <span
            key={s}
            style={{
              background: `${project.color}15`,
              color: project.color,
              borderRadius: 6,
              padding: "3px 10px",
              fontSize: 12,
              fontWeight: 600,
              border: `1px solid ${project.color}33`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <a
          href={project.github}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "8px 0",
            borderRadius: 10,
            border: `2px solid ${project.color}`,
            color: project.color,
            fontWeight: 700,
            fontSize: 13,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          GitHub
        </a>
        <a
          href={project.demo}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "8px 0",
            borderRadius: 10,
            background: project.color,
            color: "#fff",
            fontWeight: 700,
            fontSize: 13,
            textDecoration: "none",
            transition: "all 0.2s",
            boxShadow: `0 4px 14px ${project.color}55`,
          }}
        >
          Live Demo ↗
        </a>
      </div>
    </div>
  );
}
