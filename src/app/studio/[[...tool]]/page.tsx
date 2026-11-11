import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export { metadata, viewport } from "next-sanity/studio";

// Embedded Sanity Studio: case studies are edited here and published
// to the site through tag-based revalidation (see /api/revalidate).
export default function StudioPage() {
  return <NextStudio config={config} />;
}
