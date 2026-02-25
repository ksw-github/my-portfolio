"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Project } from "@/types";
import { useTheme } from "@/context/ThemeContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { dark, textMain, textSub, cardBg } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* 카드 */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        style={{
          background: cardBg,
          borderRadius: 20,
          overflow: "hidden",
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
        {/* 썸네일 */}
        <div style={{ position: "relative", width: "100%", height: 180, overflow: "hidden" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to bottom, transparent 50%, ${project.color}55)`,
            }}
          />
        </div>

        {/* 카드 본문 */}
        <div style={{ padding: "18px 22px 16px" }}>
          <div
            style={{
              display: "inline-block",
              background: `${project.color}18`,
              color: project.color,
              borderRadius: 8,
              padding: "2px 10px",
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: 0.5,
            }}
          >
            {project.company}
          </div>
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: 16,
              fontWeight: 800,
              color: textMain,
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              color: textSub,
              fontSize: 13,
              lineHeight: 1.7,
              margin: "0 0 12px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, alignItems: "center" }}>
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  borderRadius: 6,
                  padding: "2px 8px",
                  fontSize: 11,
                  fontWeight: 600,
                  border: `1px solid ${project.color}33`,
                }}
              >
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span style={{ fontSize: 11, color: textSub, fontWeight: 600 }}>
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 모달 */}
      {modalOpen &&
        createPortal(
          <div
            onClick={() => setModalOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.72)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: cardBg,
                borderRadius: 24,
                width: "100%",
                maxWidth: 620,
                maxHeight: "90vh",
                overflow: "auto",
                boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
                border: `2px solid ${project.color}33`,
              }}
            >
              {/* 모달 이미지 (클릭 시 라이트박스) */}
              <div
                onClick={() => setLightboxOpen(true)}
                style={{ position: "relative", width: "100%", height: 280, cursor: "zoom-in" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover", borderRadius: "22px 22px 0 0" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35))",
                    borderRadius: "22px 22px 0 0",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 14,
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "4px 10px",
                    fontSize: 12,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  🔍 클릭하여 확대
                </div>
              </div>

              {/* 모달 본문 */}
              <div style={{ padding: "28px 32px 32px" }}>
                {/* 헤더 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 16,
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-block",
                        background: `${project.color}18`,
                        color: project.color,
                        borderRadius: 8,
                        padding: "2px 10px",
                        fontSize: 12,
                        fontWeight: 700,
                        marginBottom: 8,
                        letterSpacing: 0.5,
                      }}
                    >
                      {project.company}
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 22,
                        fontWeight: 900,
                        color: textMain,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    style={{
                      flexShrink: 0,
                      background: dark ? "#ffffff18" : "#00000010",
                      border: "none",
                      borderRadius: 10,
                      width: 36,
                      height: 36,
                      fontSize: 16,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: textMain,
                    }}
                  >
                    ✕
                  </button>
                </div>

                <p
                  style={{
                    color: textSub,
                    fontSize: 15,
                    lineHeight: 1.85,
                    margin: "0 0 20px",
                  }}
                >
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}>
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        borderRadius: 6,
                        padding: "4px 12px",
                        fontSize: 13,
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
                      padding: "11px 0",
                      borderRadius: 10,
                      border: `2px solid ${project.color}`,
                      color: project.color,
                      fontWeight: 700,
                      fontSize: 14,
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
                      padding: "11px 0",
                      borderRadius: 10,
                      background: project.color,
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 14,
                      textDecoration: "none",
                      boxShadow: `0 4px 14px ${project.color}55`,
                      transition: "all 0.2s",
                    }}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {/* 라이트박스 */}
      {lightboxOpen &&
        createPortal(
          <div
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.93)",
              zIndex: 1100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              backdropFilter: "blur(10px)",
            }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                fontSize: 20,
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              ✕
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "88vh",
                width: "100%",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "88vh",
                  objectFit: "contain",
                  borderRadius: 12,
                }}
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
