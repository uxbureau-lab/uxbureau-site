import type { MetadataRoute } from "next";
import { getCases } from "@/lib/cases";

const base = "https://lab.uxbureau.pro";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cases = await getCases();
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    ...cases.map((c) => ({ url: `${base}/work/${c.slug}`, priority: 0.7 })),
  ];
}
