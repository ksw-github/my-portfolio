"use client";

import { useState } from "react";
import { COLORS } from "@/constants/colors";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

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

export default function EmailModal({ onClose }: { onClose: () => void }) {
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
