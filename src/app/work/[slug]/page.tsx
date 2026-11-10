import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { MetricRow } from "@/components/work/metric-row";
import { getCase, getCases } from "@/lib/cases";

export async function generateStaticParams() {
  const cases = await getCases();
  // SalesCure has a dedicated promo page at /work/salescure.
  return cases.filter((c) => c.slug !== "salescure").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCase(slug);
  if (!item) return {};
  return { title: item.title, description: item.hook };
}

export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const [item, all] = await Promise.all([getCase(slug), getCases()]);
  if (!item) notFound();

  const index = all.findIndex((c) => c.slug === item.slug);
  const next = all[(index + 1) % all.length];

  return (
    <>
      <SiteNav />
      <main>
        <article>
          <header className="hero-gradient">
            <div className="shell pt-[clamp(96px,12vw,180px)] pb-0">
              <Link href="/work" className="eyebrow hover:text-accent transition-colors">
                ← Engagements
              </Link>
              <p className="eyebrow mt-12">{item.meta}</p>
              <h1 className="font-display mt-8 max-w-[16ch] text-[clamp(52px,7vw,120px)] leading-[0.98] tracking-[-0.03em]">
                {item.title}
              </h1>
              <p className="text-fg-secondary mt-8 max-w-[52ch] text-lg leading-relaxed md:text-xl">
                {item.hook}
              </p>
              <div className="mt-[clamp(56px,6vw,96px)]">
                <MetricRow metrics={item.metrics} animate={item.slug === "medical"} />
              </div>
            </div>
          </header>

          <div className="shell">
            <div className="grid gap-10 py-[clamp(64px,8vw,120px)] md:grid-cols-12">
              <p className="eyebrow md:col-span-3">The engagement</p>
              <p className="font-display text-[clamp(24px,2.4vw,34px)] leading-snug md:col-span-8 md:col-start-5">
                {item.summary}
              </p>
            </div>

            <ol className="border-line border-t">
              {item.sections.map((section, i) => (
                <li
                  key={section.heading}
                  className="border-line grid gap-6 border-b py-12 md:grid-cols-12"
                >
                  <span className="text-accent font-mono text-xs md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl leading-tight md:col-span-3 md:text-[30px]">
                    {section.heading}
                  </h2>
                  <p className="text-fg-secondary max-w-[56ch] leading-relaxed md:col-span-7 md:col-start-6">
                    {section.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="grid gap-6 py-[clamp(64px,8vw,120px)] md:grid-cols-12">
              <p className="eyebrow md:col-span-3">Outcome</p>
              <div className="md:col-span-8 md:col-start-5">
                <p className="text-fg text-xl leading-relaxed md:text-2xl">{item.outcome}</p>
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    className="text-fg-secondary hover:text-accent mt-8 inline-block underline-offset-4 hover:underline"
                    rel="noopener"
                  >
                    Live: {item.liveUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </article>

        {next && next.slug !== item.slug ? (
          <nav aria-label="Next engagement" className="border-line border-t">
            <Link href={`/work/${next.slug}`} className="group shell block py-16">
              <p className="eyebrow">Next engagement</p>
              <p className="font-display group-hover:text-accent mt-4 text-[clamp(32px,4vw,64px)] leading-tight tracking-[-0.02em] transition-colors">
                {next.title} →
              </p>
            </Link>
          </nav>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
