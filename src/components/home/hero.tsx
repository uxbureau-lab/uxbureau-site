import { ButtonLink } from "@/components/ui/button";
import { hero, proof } from "@/content/home";

export function Hero() {
  return (
    <section className="hero-gradient relative" aria-labelledby="hero-title">
      <div className="shell pt-[clamp(96px,14vw,200px)] pb-[clamp(64px,8vw,120px)]">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1
          id="hero-title"
          className="font-display mt-10 max-w-[11ch] text-[clamp(64px,10vw,180px)] leading-[0.95] font-normal tracking-[-0.03em] md:pl-[4%]"
        >
          {hero.tagline.before}
          <span className="accent-underline">{hero.tagline.keyword}</span>
          {hero.tagline.after}
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:pl-[4%]">
          <p className="text-fg-secondary text-lg leading-relaxed md:col-span-7 md:text-xl">
            {hero.supporting}
          </p>
          <div className="md:col-span-4 md:col-start-9 md:self-end md:justify-self-end">
            <ButtonLink href={hero.cta.href} size="lg">
              {hero.cta.label} →
            </ButtonLink>
          </div>
        </div>

        <dl className="border-line mt-[clamp(72px,9vw,140px)] grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.value} className="border-line border-b py-6 pr-6 lg:border-b-0">
              <dt className="font-display text-3xl tracking-[-0.01em]">{item.value}</dt>
              <dd className="text-fg-muted mt-2 text-sm leading-relaxed">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
