import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";

export default function Footer() {
  const { dark, textSub } = useTheme();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "40px 5%",
        borderTop: `1px solid ${dark ? "#ffffff10" : "#00000010"}`,
        color: textSub,
        fontSize: 14,
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 900, fontSize: 18 }}>
          <span style={{ color: COLORS.coral }}>{"<"}</span>
          SW
          <span style={{ color: COLORS.mint }}>{"/"}</span>
          <span style={{ color: COLORS.sky }}>{">"}</span>
        </span>
      </div>
      <p>© 2026 김서우 All rights reserved. Built with Next.js & 💙</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 12,
        }}
      >
        {["GitHub", "LinkedIn", "Email"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              color: COLORS.coral,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
