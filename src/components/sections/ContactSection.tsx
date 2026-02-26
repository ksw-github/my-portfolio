"use client";

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
  const { dark } = useTheme();
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

  const inputBorder = `2px solid ${dark ? "#ffffff22" : "#00000015"}`;

  return (
    <section
      ref={ref}
      id="contact"
      className="py-[100px] px-[5%] dark:bg-[#13131f]"
      style={animStyle}
    >
      <div className="max-w-[640px] mx-auto">
        <SectionTitle title="Contact" accent={COLORS.purple} />
        <div className="bg-theme-card rounded-[24px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-[60px] mb-4">🎉</div>
              <h3 className="text-mint text-[24px] font-extrabold">
                메시지가 전송되었습니다!
              </h3>
              <p className="text-theme-sub">빠른 시일 내에 답변드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field.key} className="mb-5">
                  <label className="block font-bold mb-2 text-sm text-theme-text">
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
                    className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-[border] duration-200 text-theme-text dark:bg-[#0f0f1a] bg-[#fafafa] box-border"
                    style={{ border: inputBorder }}
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="block font-bold mb-2 text-sm text-theme-text">
                  메시지
                </label>
                <textarea
                  placeholder="안녕하세요, 협업 제안이 있습니다..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      message: e.target.value,
                    })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-[border] duration-200 resize-y font-[inherit] text-theme-text dark:bg-[#0f0f1a] bg-[#fafafa] box-border"
                  style={{ border: inputBorder }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-[14px] text-white border-none rounded-xl font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.sky})`,
                  boxShadow: `0 6px 24px ${COLORS.purple}55`,
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
