import { useTheme } from "@/context/ThemeContext";

interface SectionTitleProps {
  title: string;
  accent: string;
}

export default function SectionTitle({ title, accent }: SectionTitleProps) {
  const { dark } = useTheme();
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900,
          margin: "0 0 12px",
          color: dark ? "#f0f0ff" : "#1a1a2e",
        }}
      >
        {title}
        <span style={{ color: accent }}>.</span>
      </h2>
      <div
        style={{ width: 60, height: 4, background: accent, borderRadius: 99 }}
      />
    </div>
  );
}
