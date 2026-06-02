"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layered parallax: background drifts slowest, content fastest.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "45%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-26%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Background layer */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        {/* TODO: replace with real hero asset (image or poster frame) */}
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2600&auto=format&fit=crop"
          alt="Fusion Point — cinematic studio scene"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 photo-scrim" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent"
          aria-hidden
        />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:px-8 lg:px-12"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow flex items-center gap-3"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
          Photography · Videography · IT &amp; Web
        </motion.span>

        <h1 className="mt-7 max-w-5xl text-[clamp(3rem,11vw,9.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.02em] text-white">
          <Line delay={0.12}>One studio.</Line>
          <Line delay={0.22}>
            <span className="text-brand-red">Three crafts.</span>
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-lg leading-relaxed text-white/75"
        >
          Australian-based photo &amp; video.
          <br className="hidden sm:block" /> Web &amp; IT delivered worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#work" variant="primary">
            See our work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline-light">
            Start a project
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#intro"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="eyebrow text-[0.6rem]" style={{ color: "rgba(255,255,255,0.6)" }}>Scroll</span>
        <span className="relative flex h-10 w-px overflow-hidden bg-white/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-white"
            animate={reduced ? {} : { y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
