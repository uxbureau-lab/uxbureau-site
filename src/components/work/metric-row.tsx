import type { CaseMetric } from "@/content/cases";

export function MetricRow({ metrics }: { metrics: CaseMetric[] }) {
  if (metrics.length === 0) return null;

  return (
    <dl className="border-line grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="border-line border-b py-8 pr-6">
          <dt className="font-display text-[clamp(36px,4vw,56px)] leading-none tracking-[-0.02em]">
            {m.value}
          </dt>
          <dd className="text-fg-muted mt-3 max-w-[28ch] text-sm leading-relaxed">{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}
