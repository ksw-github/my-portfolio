import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import { githubStats } from "@/data/githubStats";
import StatCard from "@/components/ui/StatCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function GithubSection() {
  const { dark, textMain, textSub } = useTheme();
  return (
    <section
      id="github"
      style={{ padding: "100px 5%", maxWidth: 1100, margin: "0 auto" }}
    >
      <SectionTitle title="GitHub Stats" accent={COLORS.mint} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 20,
          marginBottom: 40,
        }}
      >
        {githubStats.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </div>
      <div
        style={{
          background: dark ? "#1a1a2e" : "#fff",
          borderRadius: 20,
          padding: 32,
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 6px",
              fontSize: 20,
              fontWeight: 800,
              color: textMain,
            }}
          >
            GitHub 프로필
          </h3>
          <p style={{ margin: 0, color: textSub, fontSize: 14 }}>
            더 많은 프로젝트와 코드를 확인하세요
          </p>
        </div>
        <a
          href="https://github.com/ksw-github"
          target="_blank"
          rel="noreferrer"
          style={{
            background: dark ? "#fff" : "#1a1a2e",
            color: dark ? "#1a1a2e" : "#fff",
            borderRadius: 12,
            padding: "12px 28px",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          <span>⚡</span> GitHub 방문하기
        </a>
      </div>
    </section>
  );
}
