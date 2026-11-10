import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export { viewport } from "next-sanity/studio";

export const metadata: Metadata = {
  title: "Studio",
  robots: { index: false, follow: false },
};

// Prerender the Studio shell; sub-routes are handled client-side.
export function generateStaticParams() {
  return [{ tool: [] }];
}

// Embedded Sanity Studio: case studies are edited here and published
// to the site through tag-based revalidation (see /api/revalidate).
export default function StudioPage() {
  return <NextStudio config={config} />;
}
