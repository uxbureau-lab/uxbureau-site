import localFont from "next/font/local";

// Self-hosted variable fonts (Fontsource latin subsets).
// Local files keep builds deterministic and avoid a runtime
// dependency on Google Fonts.

export const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-opsz-normal.woff2", style: "normal" },
    { path: "./fonts/fraunces-latin-opsz-italic.woff2", style: "italic" },
  ],
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
});

export const interTight = localFont({
  src: "./fonts/inter-tight-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

// Wordmark-only dependency.
export const bigShoulders = localFont({
  src: "./fonts/big-shoulders-display-latin-500-normal.woff2",
  weight: "500",
  variable: "--font-big-shoulders",
  display: "swap",
  preload: false,
});
