export default function Footer() {
  return (
    <footer className="text-center px-[5%] py-10 border-t dark:border-white/[0.06] border-black/[0.06] text-theme-sub text-sm">
      <div className="mb-4">
        <span className="font-black text-[18px]">
          <span className="text-coral">{"<"}</span>
          SW
          <span className="text-mint">{"/"}</span>
          <span className="text-sky">{">"}</span>
        </span>
      </div>
      <p>© 2026 김서우 Built with Next.js & All rights reserved💙</p>
      <div className="flex justify-center gap-4 mt-3">
        {["GitHub", "LinkedIn", "Email"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-coral no-underline font-semibold text-[13px]"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
