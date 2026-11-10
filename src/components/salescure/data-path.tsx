"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Row = { patient: string; id: string; doctor: string; revenue: string };

const rows: Row[] = [
  { patient: "Olena K.", id: "P-20418", doctor: "D-0112", revenue: "14,200 UAH" },
  { patient: "Andrii M.", id: "P-20419", doctor: "D-0087", revenue: "9,850 UAH" },
  { patient: "Iryna S.", id: "P-20425", doctor: "D-0112", revenue: "21,400 UAH" },
];

const stages = [
  { key: "db", label: "Database", note: "Full records" },
  { key: "anon", label: "Anonymiser", note: "Aggregates + IDs" },
  { key: "ai", label: "AI layer", note: "0 patient names" },
] as const;

type StageKey = (typeof stages)[number]["key"];

// Interactive explanation of the anonymisation boundary: step through
// the pipeline and watch what the model is — and is not — allowed to see.
// All data shown is fictional.
export function DataPath() {
  const [stage, setStage] = useState<StageKey>("db");
  const reduce = useReducedMotion();
  const showNames = stage === "db";
  const aggregated = stage === "ai";

  return (
    <div className="border-line bg-surface rounded-md border">
      <div
        role="tablist"
        aria-label="Data pipeline stage"
        className="border-line grid grid-cols-3 border-b"
      >
        {stages.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={stage === s.key}
            onClick={() => setStage(s.key)}
            className={cn(
              "border-line flex flex-col gap-1 px-4 py-5 text-left transition-colors md:px-6",
              i > 0 && "border-l",
              stage === s.key ? "bg-[#0a0e1f]" : "hover:bg-surface-raised",
            )}
          >
            <span
              className={cn(
                "font-mono text-[11px] tracking-[0.14em] uppercase",
                stage === s.key ? "text-[#80a4ff]" : "text-fg-faint",
              )}
            >
              0{i + 1} →
            </span>
            <span className="font-display text-xl md:text-2xl">{s.label}</span>
            <span className="text-fg-muted text-xs md:text-sm">{s.note}</span>
          </button>
        ))}
      </div>

      <div className="p-4 md:p-8" aria-live="polite">
        {aggregated ? (
          <motion.div
            key="agg"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {[
              { k: "Doctor D-0112", v: "35,600 UAH · 2 referrals" },
              { k: "Doctor D-0087", v: "9,850 UAH · 1 referral" },
              { k: "Network total", v: "45,450 UAH · 3 referrals" },
            ].map((x) => (
              <div key={x.k} className="border-line rounded-sm border p-4">
                <p className="text-fg-muted font-mono text-xs">{x.k}</p>
                <p className="font-display mt-2 text-xl">{x.v}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Referral records at the selected stage</caption>
            <thead>
              <tr className="text-fg-faint font-mono text-[11px] tracking-[0.12em] uppercase">
                <th className="pb-3 font-normal">Patient</th>
                <th className="pb-3 font-normal">Patient ID</th>
                <th className="pb-3 font-normal">Doctor</th>
                <th className="pb-3 text-right font-normal">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-line border-t">
                  <td className="py-3">
                    {showNames ? (
                      r.patient
                    ) : (
                      <span className="bg-line text-fg-faint rounded-sm px-2 py-0.5 font-mono text-xs">
                        removed
                      </span>
                    )}
                  </td>
                  <td className="py-3 font-mono text-xs">{r.id}</td>
                  <td className="py-3 font-mono text-xs">{r.doctor}</td>
                  <td className="py-3 text-right">{r.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="text-fg-faint mt-6 font-mono text-[11px] tracking-[0.12em] uppercase">
          Illustrative content · fictional data
        </p>
      </div>
    </div>
  );
}
