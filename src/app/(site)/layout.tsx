import type { Metadata } from "next";

// Public site metadata. Kept out of the root layout so the embedded
// Studio (/studio) does not inherit social cards or a canonical URL.
export const metadata: Metadata = {
  openGraph: { type: "website", siteName: "UX Bureau", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return children;
}
