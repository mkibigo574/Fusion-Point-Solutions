"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/cn";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center"
      aria-label="FusionPoint Solutions — home"
    >
      <Image
        src={light ? "/brand/fusionpoint-lockup-white.png" : "/brand/fusionpoint-lockup.png"}
        alt="FusionPoint Solutions"
        width={150}
        height={40}
        priority
        className="h-8 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + ESC to close when the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Legibility scrim over the hero before the bar solidifies. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent transition-opacity duration-500",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      />
      <div
        className={cn(
          "relative mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "my-3" : "my-5"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass-strong"
              : "border border-transparent bg-transparent"
          )}
        >
          <Wordmark light={!scrolled} />

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-sm transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-ink-muted hover:text-ink"
                    : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton href="#contact" variant="primary" className="px-5 py-2.5 text-xs">
                Start a Project
              </MagneticButton>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
                scrolled ? "border-line text-ink" : "border-white/35 text-white"
              )}
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1.5">
                <span className={cn("block h-px w-5", scrolled ? "bg-ink" : "bg-white")} />
                <span className={cn("block h-px w-5", scrolled ? "bg-ink" : "bg-white")} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="glass-strong absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink text-xl"
                >
                  ×
                </button>
              </div>
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-line py-4 font-display text-2xl text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8">
                <MagneticButton
                  href="#contact"
                  variant="primary"
                  className="w-full"
                >
                  Start a Project
                </MagneticButton>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
