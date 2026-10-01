// 한국식 년차 계산: 시작월 기준 12개월마다 1년차씩 증가
export function getCareerYear(
  start: { year: number; month: number },
  now: Date = new Date(),
) {
  const months =
    (now.getFullYear() - start.year) * 12 + (now.getMonth() + 1 - start.month);
  return Math.max(1, Math.floor(months / 12) + 1);
}
