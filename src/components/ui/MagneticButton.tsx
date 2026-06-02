"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "ghost";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-brand-red text-bg hover:shadow-[0_14px_44px_-10px_rgba(197,40,39,0.55)]",
  outline:
    "border border-line-strong text-ink hover:border-accent/70 hover:text-accent",
  "outline-light":
    "border border-white/45 text-white hover:border-white hover:bg-white/10",
  ghost: "text-ink-muted hover:text-ink",
};

/**
 * Button/link with a subtle magnetic pull toward the cursor plus a lift on
 * hover. The magnet is disabled under prefers-reduced-motion.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHover(false);
  };

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );

  const sharedProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: reset,
    onClick,
    style: { x: sx, y: sy },
    className: cn(base, variants[variant], className),
    animate: { scale: reduced ? 1 : hover ? 1.04 : 1 },
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  };

  if (href) {
    return (
      <motion.a href={href} aria-label={ariaLabel} {...sharedProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} aria-label={ariaLabel} {...sharedProps}>
      {content}
    </motion.button>
  );
}
