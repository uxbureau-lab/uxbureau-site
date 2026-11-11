import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "SalesCure — an operating system for medical referral networks";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: "Product · Healthcare · ERP + AI + mobile",
    title: "One contour instead of ten spreadsheets.",
    subtitle: "SalesCure — the AI reads, never writes, and never sees a patient name.",
  });
}
