import { COLORS } from "@/constants/colors";
import { GithubStat } from "@/types";

export const githubStats: GithubStat[] = [
  { label: "Total Commits", value: "1,240", icon: "💾", color: COLORS.coral },
  { label: "Pull Requests", value: "183", icon: "🔀", color: COLORS.sky },
  { label: "Repositories", value: "42", icon: "📁", color: COLORS.mint },
  { label: "Contributions", value: "892", icon: "🌱", color: COLORS.yellow },
];
