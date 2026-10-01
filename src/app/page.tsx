import Portfolio from "@/components/Portfolio";
import { CAREER_START } from "@/constants/career";
import { getCareerYear } from "@/utils/career";

// 년차가 재배포 없이 갱신되도록 하루마다 재생성
export const revalidate = 86400;

export default function Page() {
  return <Portfolio careerYear={getCareerYear(CAREER_START)} />;
}
