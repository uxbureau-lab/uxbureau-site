import { SectionHeader } from "@/components/layout/section-header";
import { services } from "@/content/home";

export function Services() {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="shell">
        <SectionHeader
          id="services-title"
          index={services.index}
          label={services.label}
          title={services.title}
        />
        <ol className="border-line mt-20 grid border-t md:grid-cols-12">
          {services.items.map((item, i) => (
            <li
              key={item.title}
              className="border-line grid gap-4 border-b py-10 md:col-span-12 md:grid-cols-12"
            >
              <span className="text-fg-faint font-mono text-xs md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl tracking-[-0.01em] md:col-span-4 md:text-[32px] md:leading-tight">
                {item.title}
              </h3>
              <p className="text-fg-secondary max-w-[52ch] leading-relaxed md:col-span-6 md:col-start-7">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
