import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "모든 필드를 입력해주세요." },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aydh333@gmail.com",
    subject: `[포트폴리오 문의] ${subject}`,
    text: `보내는 분: ${name}\n회신 이메일: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
