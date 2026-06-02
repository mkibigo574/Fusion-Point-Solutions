"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

/** Side a piece travels in FROM. "bottom" is the calm default. */
export type RevealDir = "bottom" | "top" | "left" | "right" | "none";

const EASE = [0.16, 1, 0.3, 1] as const; // ease-out-expo

/** Resolve a direction + distance into an initial x/y offset. */
function offsetFor(
  from: RevealDir | undefined,
  distance: number,
  x: number,
  y: number
): { x: number; y: number } {
  switch (from) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "top":
      return { x: 0, y: -distance };
    case "bottom":
      return { x: 0, y: distance };
    case "none":
      return { x: 0, y: 0 };
    default:
      return { x, y };
  }
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in seconds (e.g. index * 0.08). */
  delay?: number;
  /** Direction the content slides in from. Overrides x/y when set. */
  from?: RevealDir;
  /** Travel distance in px when using `from`. */
  distance?: number;
  /** Explicit travel (used when `from` is omitted). */
  x?: number;
  y?: number;
  /** Add a soft focus-in for a premium, cinematic feel. */
  blur?: boolean;
  /** Override the settle duration. */
  duration?: number;
  /** Render as a different element if needed. */
  as?: "div" | "li" | "span" | "section";
  once?: boolean;
};

/**
 * Scroll-reveal wrapper. Slides + fades content into view from any side with
 * a calm, non-bouncy ease. Collapses to an instant fade when the user prefers
 * reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  from,
  distance = 64,
  x = 0,
  y = 28,
  blur = false,
  duration,
  as = "div",
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const off = reduced ? { x: 0, y: 0 } : offsetFor(from, distance, x, y);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: off.x,
      y: off.y,
      ...(blur && !reduced ? { filter: "blur(12px)" } : {}),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(blur && !reduced ? { filter: "blur(0px)" } : {}),
      transition: {
        duration: reduced ? 0.2 : duration ?? 0.95,
        delay: reduced ? 0 : delay,
        ease: EASE,
      },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Container that staggers Reveal-like children. Use with <RevealItem>.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  from,
  distance = 56,
  x = 0,
  y = 28,
  blur = false,
}: {
  children: React.ReactNode;
  className?: string;
  from?: RevealDir;
  distance?: number;
  x?: number;
  y?: number;
  blur?: boolean;
}) {
  const reduced = useReducedMotion();
  const off = reduced ? { x: 0, y: 0 } : offsetFor(from, distance, x, y);
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: {
          opacity: 0,
          x: off.x,
          y: off.y,
          ...(blur && !reduced ? { filter: "blur(10px)" } : {}),
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur && !reduced ? { filter: "blur(0px)" } : {}),
          transition: { duration: reduced ? 0.2 : 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
