import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { COLORS } from "@/constants/colors";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ContactForm = { name: string; email: string; message: string };

const fields: {
  key: keyof ContactForm;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  { key: "name", label: "이름", type: "text", placeholder: "홍길동" },
  {
    key: "email",
    label: "이메일",
    type: "email",
    placeholder: "hello@email.com",
  },
];

export default function ContactSection() {
  const { dark, textMain, textSub, cardBg } = useTheme();
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContactForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: `2px solid ${dark ? "#ffffff22" : "#00000015"}`,
    background: dark ? "#0f0f1a" : "#fafafa",
    color: textMain,
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border 0.2s",
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        padding: "100px 5%",
        background: dark ? "#13131f" : "#f5f5ff",
        ...animStyle,
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <SectionTitle title="Contact" accent={COLORS.purple} />
        <div
          style={{
            background: cardBg,
            borderRadius: 24,
            padding: 40,
            boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🎉</div>
              <h3 style={{ color: COLORS.mint, fontSize: 24, fontWeight: 800 }}>
                메시지가 전송되었습니다!
              </h3>
              <p style={{ color: textSub }}>빠른 시일 내에 답변드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field.key} style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: 700,
                      marginBottom: 8,
                      fontSize: 14,
                      color: textMain,
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={contactForm[field.key]}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        [field.key]: e.target.value,
                      })
                    }
                    required
                    style={inputStyle}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    marginBottom: 8,
                    fontSize: 14,
                    color: textMain,
                  }}
                >
                  메시지
                </label>
                <textarea
                  placeholder="안녕하세요, 협업 제안이 있습니다..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px 0",
                  background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.sky})`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: 800,
                  fontSize: 16,
                  cursor: "pointer",
                  boxShadow: `0 6px 24px ${COLORS.purple}55`,
                  transition: "transform 0.2s",
                }}
              >
                메시지 보내기 ✉️
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
