import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "UX Bureau — Systems built to outlive trends.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: "UX Bureau · Est. 2010 · Based in Ukraine",
    title: "Systems built to outlive trends.",
    subtitle: "Complex digital products, designed and delivered end to end.",
  });
}
