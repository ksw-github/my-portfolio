import { COLORS } from "@/constants/colors";
import { Education, Certification } from "@/types";

export const educations: Education[] = [
  {
    school: "총신대학교",
    degree: "아동학전공",
    period: "2019.02 ~ 2023.02 (졸업)",
    gpa: "3.74/4.5",
    color: COLORS.purple,
    icon: "🎓",
  },
];

export const certifications: Certification[] = [
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2025.05",
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
