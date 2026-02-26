"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
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
        className="bg-theme-card rounded-[20px] overflow-hidden cursor-pointer"
        style={{
          boxShadow: hovered
            ? `0 12px 40px ${project.color}44, 0 2px 8px rgba(0,0,0,0.08)`
            : "0 2px 16px rgba(0,0,0,0.07)",
          border: `2px solid ${hovered ? project.color : "transparent"}`,
          transform: hovered ? "translateY(-6px)" : "none",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* 썸네일 */}
        <div className="relative w-full h-[180px] overflow-hidden">
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
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 50%, ${project.color}55)`,
            }}
          />
        </div>

        {/* 카드 본문 */}
        <div className="px-[22px] pt-[18px] pb-4">
          <div
            className="inline-block rounded-lg px-[10px] py-[2px] text-[11px] font-bold mb-2"
            style={{
              background: `${project.color}18`,
              color: project.color,
              letterSpacing: 0.5,
            }}
          >
            {project.company}
          </div>
          <h3 className="m-0 mb-2 text-base font-extrabold text-theme-text leading-[1.4]">
            {project.title}
          </h3>
          <p className="text-theme-sub text-[13px] leading-[1.7] mb-3 line-clamp-2">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-[5px] items-center">
            {project.stack.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-[6px] px-2 py-[2px] text-[11px] font-semibold"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}33`,
                }}
              >
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[11px] text-theme-sub font-semibold">
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
            className="fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-black/[0.72] backdrop-blur-[6px]"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-theme-card rounded-[24px] w-full max-w-[620px] max-h-[90vh] overflow-auto shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
              style={{ border: `2px solid ${project.color}33` }}
            >
              {/* 모달 이미지 (클릭 시 라이트박스) */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative w-full h-[280px] cursor-zoom-in"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-[22px]"
                />
                <div
                  className="absolute inset-0 rounded-t-[22px] bg-gradient-to-b from-transparent to-black/35"
                />
                <div className="absolute bottom-3 right-[14px] bg-black/55 text-white rounded-lg px-[10px] py-1 text-xs font-semibold flex items-center gap-1">
                  🔍 클릭하여 확대
                </div>
              </div>

              {/* 모달 본문 */}
              <div className="px-8 pt-7 pb-8">
                {/* 헤더 */}
                <div className="flex justify-between items-start mb-4 gap-3">
                  <div>
                    <div
                      className="inline-block rounded-lg px-[10px] py-[2px] text-[12px] font-bold mb-2"
                      style={{
                        background: `${project.color}18`,
                        color: project.color,
                        letterSpacing: 0.5,
                      }}
                    >
                      {project.company}
                    </div>
                    <h2 className="m-0 text-[22px] font-black text-theme-text leading-[1.3]">
                      {project.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="shrink-0 border-none rounded-[10px] w-9 h-9 text-base cursor-pointer flex items-center justify-center text-theme-text dark:bg-white/[0.09] bg-black/[0.06]"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-theme-sub text-[15px] leading-[1.85] mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-[7px] mb-7">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[6px] px-3 py-1 text-[13px] font-semibold"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}33`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-[10px]">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-[11px] rounded-[10px] font-bold text-sm no-underline transition-all duration-200"
                    style={{
                      border: `2px solid ${project.color}`,
                      color: project.color,
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center py-[11px] rounded-[10px] text-white font-bold text-sm no-underline transition-all duration-200"
                    style={{
                      background: project.color,
                      boxShadow: `0 4px 14px ${project.color}55`,
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
            className="fixed inset-0 z-[1100] flex items-center justify-center p-5 bg-black/[0.93] backdrop-blur-[10px]"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 border-none rounded-full w-11 h-11 text-[20px] cursor-pointer text-white flex items-center justify-center bg-white/15 hover:bg-white/25 transition-[background] duration-200"
            >
              ✕
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[88vh] w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
