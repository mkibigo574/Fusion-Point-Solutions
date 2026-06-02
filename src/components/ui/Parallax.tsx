"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Drifts its children along an axis as the element passes through the
 * viewport, creating a layered parallax feel. `speed` is the total drift in px
 * across the scroll range (larger = more movement). Disabled under
 * prefers-reduced-motion.
 */
export default function Parallax({
  children,
  className,
  speed = 100,
  axis = "y",
}: {
  children: React.ReactNode;
  className?: string;
  /** Total drift distance in px across the scroll range. */
  speed?: number;
  /** Drift direction. */
  axis?: "x" | "y";
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [speed, -speed]
  );

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        style={axis === "x" ? { x: drift } : { y: drift }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
