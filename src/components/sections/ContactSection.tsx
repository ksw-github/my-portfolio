"use client";

import { useState } from "react";
import { COLORS } from "@/constants/colors";
import SectionTitle from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "aydh333@naver.com",
    href: null,
    color: COLORS.purple,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+82 10-2724-7298",
    href: null,
    color: COLORS.mint,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/ksw-github",
    href: "https://github.com/ksw-github",
    color: COLORS.sky,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Seoul, South Korea",
    href: null,
    color: COLORS.coral,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

// 폼 필드
const FORM_FIELDS: {
  key: keyof ContactForm;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  { key: "name", label: "이름", type: "text", placeholder: "홍길동" },
  {
    key: "email",
    label: "회신 이메일",
    type: "email",
    placeholder: "hello@email.com",
  },
  {
    key: "subject",
    label: "제목",
    type: "text",
    placeholder: "문의 제목을 입력해주세요",
  },
];

const EMPTY_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// 이메일 전송 모달
function EmailModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "전송에 실패했습니다.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const update =
    (key: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-theme-card rounded-[24px] p-8 w-full max-w-[480px] shadow-2xl">
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-[60px] mb-4">🎉</div>
            <h3 className="text-mint text-[22px] font-extrabold">
              메일 전송이 완료되었습니다!
            </h3>
            <p className="text-theme-sub mt-2">
              빠른 시일 내 회신드리겠습니다.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-theme-text text-[20px] font-extrabold">
                메일 보내기
              </h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-theme-sub hover:text-theme-text hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-lg leading-none"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {FORM_FIELDS.map((field) => (
                <div key={field.key} className="mb-4">
                  <label className="block font-bold mb-2 text-sm text-theme-text">
                    {field.label}
                    <span className="text-coral ml-0.5">*</span>
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={update(field.key)}
                    required
                    className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-[border] duration-200 text-theme-text dark:bg-[#0f0f1a] bg-[#fafafa] border-2 border-black/[0.08] dark:border-white/[0.13] box-border"
                  />
                </div>
              ))}
              <div className="mb-6">
                <label className="block font-bold mb-2 text-sm text-theme-text">
                  메시지<span className="text-coral ml-0.5">*</span>
                </label>
                <textarea
                  placeholder="문의하실 내용을 입력해주세요."
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-[border] duration-200 resize-y font-[inherit] text-theme-text dark:bg-[#0f0f1a] bg-[#fafafa] border-2 border-black/[0.08] dark:border-white/[0.13] box-border"
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
              )}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-[14px] rounded-xl font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 text-theme-sub dark:bg-white/[0.07] bg-black/[0.06] border-none"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-[14px] text-white border-none rounded-xl font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.sky})`,
                    boxShadow: `0 6px 24px ${COLORS.purple}55`,
                  }}
                >
                  {loading ? "전송 중..." : "전송하기 ✉️"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── ContactSection ────────────────────────────────────
export default function ContactSection() {
  const { ref, animStyle } = useScrollAnimation<HTMLElement>();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className="py-[100px] px-[5%] dark:bg-[#13131f]"
        style={animStyle}
      >
        <div className="max-w-[640px] mx-auto">
          <SectionTitle title="Contact" accent={COLORS.purple} />
          <div className="bg-theme-card rounded-[24px] p-10 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
            <div
              className="h-[3px] rounded-full mb-8"
              style={{
                background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.sky})`,
              }}
            />
            <div className="grid grid-cols-2 gap-10 mb-10">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}22`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-theme-sub font-medium mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-text font-semibold text-[15px] hover:underline truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-theme-text font-semibold text-[15px]">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <p className="text-center text-theme-sub text-sm m-6">
              문의사항이 있으시다면 메일을 전송해주세요.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-[14px] text-white border-none rounded-xl font-extrabold text-base cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.sky})`,
                boxShadow: `0 6px 24px ${COLORS.purple}55`,
              }}
            >
              메일 보내기 ✉️
            </button>
          </div>
        </div>
      </section>

      {showModal && <EmailModal onClose={() => setShowModal(false)} />}
    </>
  );
}
