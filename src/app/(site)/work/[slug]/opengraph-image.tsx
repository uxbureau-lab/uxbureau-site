import { getCase, getCases } from "@/lib/cases";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "UX Bureau engagement";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const cases = await getCases();
  return cases.filter((c) => c.slug !== "salescure").map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getCase(slug);

  return renderOgCard({
    eyebrow: item?.meta ?? "UX Bureau · Engagement",
    title: item?.title ?? "Systems built to outlive trends.",
    subtitle: item?.hook ?? "Complex digital products, designed and delivered end to end.",
  });
}
