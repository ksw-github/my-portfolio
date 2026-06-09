import { COLORS } from "@/constants/colors";
import { Education, Certification, Activity } from "@/types";

export const educations: Education[] = [
  {
    school: "총신대학교",
    degree: "아동학전공",
    period: "2019.02 ~ 2023.02 (졸업)",
    gpa: "3.74/4.5",
    color: COLORS.mint,
    icon: "🎓",
  },
];

export const activities: Activity[] = [
  {
    institution: "하이미디어아카데미",
    course: "Figma를 활용한 UI/UX 웹디자인 & 웹퍼블리셔 과정 수료",
    period: "2023.03 ~ 2023.08",
    color: COLORS.coral,
    icon: "🎨",
  },
  {
    institution: "그린컴퓨터아카데미",
    course: "UI/UX 웹디자인 및 웹퍼블리셔, 프론트엔드 과정 수료",
    period: "2016.09 ~ 2017.02",
    color: COLORS.sky,
    icon: "💻",
  },
];

export const certifications: Certification[] = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2026.05",
    color: COLORS.mint,
    icon: "📜",
  },
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023.08",
    color: COLORS.orange,
    icon: "☁️",
  },
  {
    name: "SQLD",
    issuer: "한국데이터산업진흥원",
    date: "2022.06",
    color: COLORS.sky,
    icon: "🗃️",
  },
];
