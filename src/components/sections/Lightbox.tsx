"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { WORK } from "@/lib/content";

type Item = (typeof WORK)[number];

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const open = index !== null;
  const item = open ? items[index] : null;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onNavigate((index + dir + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, go]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — ${item.tag}`}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-xl text-ink"
          >
            ×
          </button>

          {/* Prev / Next */}
          <NavBtn side="left" onClick={() => go(-1)} />
          <NavBtn side="right" onClick={() => go(1)} />

          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[1] w-full max-w-5xl"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-2xl text-white">
                {item.title}
              </span>
              <span className="flex items-center gap-4">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>{item.tag}</span>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-1.5 text-sm text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Visit live site ↗
                  </a>
                )}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavBtn({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass-strong text-ink ${
        side === "left" ? "left-4 sm:left-8" : "right-4 sm:right-8"
      }`}
    >
      {side === "left" ? "←" : "→"}
    </button>
  );
}
