"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ── 헬퍼: 레이블 + 콘텐츠 블록 ──
function SectionBlock({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[15px] font-bold text-theme-sub uppercase tracking-wider mb-1.5">
        {label}
      </div>
      {children}
    </div>
  );
}

// ── 헬퍼: 색상 태그 span ──
function ColorTag({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-bold"
      style={{
        background: `${color}18`,
        color,
        border: `1px solid ${color}33`,
      }}
    >
      {children}
    </span>
  );
}

// ── 이미지 슬라이드쇼 (라이트박스 포함) ──
function ImageSlideshow({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"right" | "left">("right");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const go = (next: number, direction: "right" | "left") => {
    setDir(direction);
    setIdx((next + total) % total);
  };

  const animStyle = {
    animation: `${dir === "right" ? "slideFromRight" : "slideFromLeft"} 0.32s ease`,
  };

  return (
    <>
      <div className="relative w-full h-[260px] bg-black/5 dark:bg-white/5 flex-shrink-0 overflow-hidden">
        <Image
          key={idx}
          src={images[idx]}
          alt={`${title} ${idx + 1}`}
          fill
          className="object-cover"
          style={animStyle}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        {/* 확대 버튼 */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute top-3 right-3 bg-black/50 text-white rounded-lg w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors border-none cursor-pointer"
          title="확대"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>

        {/* 슬라이드 컨트롤 (이미지 2장 이상) */}
        {total > 1 && (
          <>
            <button
              onClick={() => go(idx - 1, "left")}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg leading-none border-none cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={() => go(idx + 1, "right")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg leading-none border-none cursor-pointer"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > idx ? "right" : "left")}
                  className={[
                    "h-1.5 rounded-full transition-all duration-200 border-none cursor-pointer",
                    i === idx ? "bg-white w-4" : "bg-white/50 w-1.5",
                  ].join(" ")}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 라이트박스 */}
      {lightboxOpen &&
        createPortal(
          <div
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[1100] flex items-center justify-center p-5 bg-black/[0.93] backdrop-blur-[10px]"
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 border-none rounded-full w-11 h-11 text-[20px] cursor-pointer text-white flex items-center justify-center bg-white/15 hover:bg-white/25 transition-[background] duration-200"
            >
              ✕
            </button>

            {/* 이미지 */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[88vh] w-full"
            >
              <Image
                key={idx}
                src={images[idx]}
                alt={`${title} ${idx + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
                style={animStyle}
              />
            </div>

            {/* 슬라이드 컨트롤 (이미지 2장 이상) */}
            {total > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(idx - 1, "left");
                  }}
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white text-2xl flex items-center justify-center border-none cursor-pointer transition-[background] duration-200 leading-none"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    go(idx + 1, "right");
                  }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white text-2xl flex items-center justify-center border-none cursor-pointer transition-[background] duration-200 leading-none"
                >
                  ›
                </button>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        go(i, i > idx ? "right" : "left");
                      }}
                      className={[
                        "h-1.5 rounded-full transition-all duration-200 border-none cursor-pointer",
                        i === idx ? "bg-white w-4" : "bg-white/40 w-1.5",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}

// ── 프로젝트 모달 ──
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-black/[0.72] backdrop-blur-[6px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-theme-card rounded-[24px] w-full max-w-[660px] max-h-[90vh] flex flex-col shadow-[0_32px_80px_rgba(0,0,0,0.35)] overflow-hidden"
        style={{ border: `2px solid ${project.color}33` }}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between px-7 py-4 border-b border-black/[0.08] dark:border-white/[0.08] flex-shrink-0">
          <div>
            <div
              className="inline-block rounded-lg px-[10px] py-[2px] text-[12px] font-bold mb-1"
              style={{
                background: `${project.color}18`,
                color: project.color,
                letterSpacing: 0.5,
              }}
            >
              {project.company}
            </div>
            <h2 className="m-0 text-[20px] font-black text-theme-text leading-[1.3]">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 border-none rounded-[10px] w-9 h-9 text-base cursor-pointer flex items-center justify-center text-theme-text dark:bg-white/[0.09] bg-black/[0.06] ml-4"
          >
            ✕
          </button>
        </div>

        {/* 스크롤 영역 */}
        <div className="overflow-y-auto flex-1">
          <ImageSlideshow images={project.images} title={project.title} />

          <div className="px-7 py-6 space-y-5">
            {/* 메타 정보 */}
            <div className="flex items-center gap-3 text-[13px] flex-wrap">
              <span className="flex items-center gap-1.5 text-theme-sub">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 flex-shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{project.period}</span>
              </span>
              <span className="text-theme-sub">|</span>
              <span className="flex items-center gap-1.5 text-theme-sub">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-3.5 h-3.5 flex-shrink-0"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>
                  {project.memberRole} {project.members}명
                </span>
              </span>
              <span className="text-theme-sub">|</span>
              <span className="flex items-center gap-1.5 text-theme-sub">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="w-3.5 h-3.5 flex-shrink-0"
                >
                  <rect x="3" y="14" width="4" height="7" rx="1" />
                  <rect x="9.5" y="9" width="4" height="12" rx="1" />
                  <rect x="16" y="5" width="4" height="16" rx="1" />
                </svg>
                <span>기여도 {project.contribution}%</span>
              </span>
            </div>

            {/* Keywords */}
            <SectionBlock>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <ColorTag key={tag} color={project.color}>
                    {tag}
                  </ColorTag>
                ))}
              </div>
            </SectionBlock>

            {/* Description */}
            <SectionBlock label="프로젝트 설명">
              <p className="text-theme-text text-[14px] leading-[1.5] m-0">
                {project.desc}
              </p>
            </SectionBlock>

            {/* Tech Stack */}
            <SectionBlock label="기술 스택">
              <div className="flex flex-wrap gap-2">
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
            </SectionBlock>

            {/* 핵심 기능 */}
            <SectionBlock>
              <div className="space-y-4">
                {project.features.map((feature, i) => (
                  <div key={i}>
                    <div
                      className="text-[15px] font-extrabold mb-1.5"
                      style={{ color: project.color }}
                    >
                      {feature.title}
                    </div>
                    <ul className="space-y-1.5 m-0 p-0 list-none">
                      {feature.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span
                            className="text-[10px] flex-shrink-0 mt-[4px]"
                            style={{ color: project.color }}
                          >
                            ▶
                          </span>
                          <span className="text-theme-text text-[14px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </div>
        </div>

        {/* 푸터 */}
        {/* <div className="flex gap-3 px-7 py-4 border-t border-black/[0.08] dark:border-white/[0.08] flex-shrink-0">
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
        </div> */}
      </div>
    </div>,
    document.body,
  );
}

// ── ProjectCard ──
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        <div className="relative w-full h-[180px] overflow-hidden">
          <Image
            src={project.images[0]}
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
      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
