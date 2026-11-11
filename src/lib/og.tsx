import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const font = (file: string) => readFile(join(process.cwd(), "assets/og", file));

// Shared 1200×630 card: eyebrow, dominant serif title, one line of
// context, lime used once (the rule under the eyebrow).
export async function renderOgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const [fraunces, inter, mono] = await Promise.all([
    font("fraunces-latin-400-normal.woff"),
    font("inter-tight-latin-400-normal.woff"),
    font("jetbrains-mono-latin-400-normal.woff"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(ellipse at top left, #161616 0%, #0a0a0a 60%)",
        color: "#f5f5f5",
        fontFamily: "Inter Tight",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            letterSpacing: 4,
            color: "#8a8a8a",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
        <div style={{ width: 64, height: 3, background: "#b4ff39" }} />
      </div>
      <div
        style={{
          fontFamily: "Fraunces",
          fontSize: title.length > 34 ? 76 : 96,
          lineHeight: 1.02,
          letterSpacing: -2,
          maxWidth: 980,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: 26, color: "#a3a3a3", maxWidth: 760 }}>{subtitle}</div>
        <div style={{ fontFamily: "JetBrains Mono", fontSize: 18, color: "#6b6b6b" }}>
          uxbureau.pro
        </div>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 400 },
        { name: "Inter Tight", data: inter, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
