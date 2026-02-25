import { CSSProperties } from "react";

interface BlobProps {
  style: CSSProperties;
}

export default function Blob({ style }: BlobProps) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(60px)",
        opacity: 0.18,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
