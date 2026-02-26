import { CSSProperties } from "react";

interface BlobProps {
  style: CSSProperties;
}

export default function Blob({ style }: BlobProps) {
  return (
    <div
      className="absolute rounded-full blur-[60px] opacity-[0.18] pointer-events-none"
      style={style}
    />
  );
}
