import { useState, useEffect } from "react";
import { GithubStat } from "@/types";

interface StatCardProps {
  stat: GithubStat;
}

export default function StatCard({ stat }: StatCardProps) {
  const [count, setCount] = useState(0);
  const target = parseInt(stat.value.replace(/,/g, ""));

  useEffect(() => {
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "24px 20px",
        textAlign: "center",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        border: `2px solid ${stat.color}22`,
        transition: "transform 0.2s",
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 900,
          color: stat.color,
          fontFamily: "monospace",
        }}
      >
        {count.toLocaleString()}
      </div>
      <div
        style={{ color: "#888", fontSize: 13, fontWeight: 600, marginTop: 4 }}
      >
        {stat.label}
      </div>
    </div>
  );
}
