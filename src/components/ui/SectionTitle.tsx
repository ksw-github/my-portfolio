interface SectionTitleProps {
  title: string;
  accent: string;
}

export default function SectionTitle({ title, accent }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-[clamp(28px,4vw,44px)] font-black mt-0 mb-3 text-theme-text">
        {title}
        <span style={{ color: accent }}>.</span>
      </h2>
      <div
        className="w-[60px] h-1 rounded-full"
        style={{ background: accent }}
      />
    </div>
  );
}
