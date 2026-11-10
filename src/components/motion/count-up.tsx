"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

// Animates the numeric part of a value like "2,500+" or "10+".
// Values without a leading number ("7 → 1", "Live") render as-is.
const pattern = /^([\d,]+)(.*)$/;

export function CountUp({ value }: { value: string }) {
  const match = pattern.exec(value);
  if (!match) return <>{value}</>;
  return <Counter value={value} target={Number(match[1].replaceAll(",", ""))} suffix={match[2]} />;
}

function Counter({ value, target, suffix }: { value: string; target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  // A motion value drives the text directly, so counting never
  // re-renders React. Server and no-JS output show the final figure.
  const count = useMotionValue(target);
  const text = useTransform(count, (v) => `${Math.round(v).toLocaleString("en-GB")}${suffix}`);

  useEffect(() => {
    if (reduce) return;
    if (!inView) {
      count.set(0);
      return;
    }
    const controls = animate(count, target, { duration: 1.2, ease: [0.2, 0.8, 0.3, 1] });
    return () => controls.stop();
  }, [count, inView, reduce, target]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <motion.span aria-hidden>{text}</motion.span>
    </span>
  );
}
