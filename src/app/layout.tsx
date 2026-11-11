import type { Metadata } from "next";
import { BackgroundLayers } from "@/components/brand/background-layers";
import { bigShoulders, fraunces, interTight, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lab.uxbureau.pro"),
  title: {
    default: "UX Bureau — Complex digital products, designed and delivered end to end",
    template: "%s — UX Bureau",
  },
  description:
    "Senior product studio leading complex platforms from the first workshop to the last edge case — with AI built in where it earns its place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} ${bigShoulders.variable}`}
    >
      <body className="min-h-dvh">
        <BackgroundLayers />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
