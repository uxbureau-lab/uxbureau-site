import Link from "next/link";
import { SectionHeader } from "@/components/layout/section-header";
import type { CaseStudy } from "@/content/cases";

export function FeaturedWork({ cases }: { cases: CaseStudy[] }) {
  return (
    <section id="work" className="section scroll-mt-16" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeader
          id="work-title"
          index="02"
          label="Selected work"
          title="Selected work."
          intro="Engagements that stayed in production for years — measured in releases, not launches."
        />
        <ul className="border-line mt-20 border-t">
          {cases.map((item) => (
            <li key={item.slug} className="border-line border-b">
              <Link
                href={`/work/${item.slug}`}
                className="group grid gap-6 py-12 md:grid-cols-12 md:gap-8"
              >
                <p className="eyebrow md:col-span-3">{item.meta}</p>
                <div className="md:col-span-6">
                  <h3 className="font-display group-hover:text-accent text-[clamp(32px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-fg-secondary mt-4 max-w-[52ch] leading-relaxed">{item.hook}</p>
                </div>
                <dl className="grid content-start gap-4 md:col-span-3">
                  {item.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <dt className="font-display text-2xl">{m.value}</dt>
                      <dd className="text-fg-muted text-sm">{m.label}</dd>
                    </div>
                  ))}
                </dl>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/work"
          className="text-fg-secondary hover:text-accent mt-10 inline-block underline-offset-4 transition-colors hover:underline"
        >
          All engagements →
        </Link>
      </div>
    </section>
  );
}
