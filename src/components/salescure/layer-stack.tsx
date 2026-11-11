"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { layers } from "./content";

type LayerId = (typeof layers)[number]["id"];

// Four layers as stacked plates. Selecting a layer lifts it and shows
// what it does — the product's architecture told as one interaction.
export function LayerStack() {
  const [active, setActive] = useState<LayerId>("intelligence");
  const reduce = useReducedMotion();
  const current = layers.find((l) => l.id === active)!;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      <div
        role="tablist"
        aria-label="SalesCure layers"
        className="flex flex-col gap-3 lg:col-span-6"
      >
        {layers.map((layer, i) => {
          const selected = layer.id === active;
          return (
            <motion.button
              key={layer.id}
              type="button"
              role="tab"
              id={`layer-${layer.id}`}
              aria-selected={selected}
              aria-controls="layer-panel"
              onClick={() => setActive(layer.id)}
              animate={reduce ? undefined : { x: selected ? 24 : 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.3, 1] }}
              className={cn(
                "group flex items-center justify-between rounded-md border px-6 py-5 text-left transition-colors duration-200",
                selected
                  ? "border-[#4a7dff] bg-[#0a0e1f]"
                  : "border-line bg-surface hover:border-line-strong",
              )}
              style={{ marginLeft: reduce ? 0 : i * 12 }}
            >
              <span className="flex items-baseline gap-4">
                <span className="text-fg-faint font-mono text-xs">{layer.index}</span>
                <span className="font-display text-2xl">{layer.name}</span>
              </span>
              <span
                className={cn(
                  "font-mono text-xs tracking-[0.12em] uppercase",
                  selected ? "text-[#80a4ff]" : "text-fg-muted",
                )}
              >
                {layer.product}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div
        id="layer-panel"
        role="tabpanel"
        aria-labelledby={`layer-${current.id}`}
        className="min-h-48 lg:col-span-5 lg:col-start-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.14em] text-[#80a4ff] uppercase">
              Layer {current.index} · {current.product}
            </p>
            <p className="font-display mt-6 text-[clamp(26px,2.6vw,36px)] leading-snug">
              {current.body}
            </p>
          </motion.div>
        </AnimatePresence>
        <p className="text-fg-muted mt-10 text-sm leading-relaxed">
          Each layer runs on its own and switches on with the rest. A network can start with the ERP
          core and add AI or mobile later — without rewriting its processes.
        </p>
      </div>
    </div>
  );
}
