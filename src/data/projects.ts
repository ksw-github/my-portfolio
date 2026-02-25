import { COLORS } from "@/constants/colors";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "APEC 2025 경비안전 관제 시스템",
    desc: "React + Next.js 기반 이커머스 플랫폼. SSR로 SEO 최적화, Stripe 결제 연동.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    color: COLORS.coral,
    emoji: "🛒",
    github: "#",
    demo: "#",
  },
  {
    title: "APEC 2025 백오피스 시스템",
    desc: "팀 프로젝트 관리 대시보드. 실시간 알림, 드래그앤드롭 칸반 보드 구현.",
    stack: ["React", "TypeScript", "Socket.io", "Node.js"],
    color: COLORS.orange,
    emoji: "🎞️",
    github: "#",
    demo: "#",
  },
  {
    title: "위치기반 백오피스 시스템",
    desc: "팀 프로젝트 관리 대시보드. 실시간 알림, 드래그앤드롭 칸반 보드 구현.",
    stack: ["React", "TypeScript", "Socket.io", "Node.js"],
    color: COLORS.sky,
    emoji: "📋",
    github: "#",
    demo: "#",
  },
  {
    title: "한국인삼공사 무인출입/안전관리 시스템",
    desc: "위치 기반 날씨 앱. OpenWeather API 연동, PWA 지원, 오프라인 캐싱.",
    stack: ["Next.js", "Tailwind", "PWA", "REST API"],
    color: COLORS.mint,
    emoji: "⛅",
    github: "#",
    demo: "#",
  },
  {
    title: "UI/UX 디자인&퍼플리싱",
    desc: "MDX 기반 블로그 CMS. Next.js App Router, Contentlayer, 다크모드 지원.",
    stack: ["HTML", "CSS", "Figma", "Photoshop", "Illustrator"],
    color: COLORS.purple,
    emoji: "✍️",
    github: "#",
    demo: "#",
  },
];
