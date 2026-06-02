"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/sections/Lightbox";
import { WORK, type WorkCategory } from "@/lib/content";
import { cn } from "@/lib/cn";

const FILTERS: { label: string; value: "all" | WorkCategory }[] = [
  { label: "All", value: "all" },
  { label: "Photo", value: "photo" },
  { label: "Video", value: "video" },
  { label: "Web", value: "web" },
];

export default function WorkGrid({
  lockCategory,
  eyebrow = "Selected work",
  title,
}: {
  /** Lock to a single category and hide the filter tabs (service pages). */
  lockCategory?: WorkCategory;
  eyebrow?: string;
  title?: React.ReactNode;
} = {}) {
  const [filter, setFilter] = useState<"all" | WorkCategory>(
    lockCategory ?? "all"
  );
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(() => {
    if (lockCategory) return WORK.filter((w) => w.category === lockCategory);
    return filter === "all" ? WORK : WORK.filter((w) => w.category === filter);
  }, [filter, lockCategory]);

  const heading = title ?? (
    <>
      A few things <span className="text-gradient">we made.</span>
    </>
  );

  return (
    <Section id="work">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <Reveal from="left" distance={60}>
          <SectionHeader eyebrow={eyebrow} title={heading} />
        </Reveal>

        {/* Filters — only on the full archive, not category-locked pages */}
        {!lockCategory && (
          <Reveal from="right" distance={60} delay={0.1}>
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter work by category"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  role="tab"
                  aria-selected={filter === f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm transition-all duration-300",
                    filter === f.value
                      ? "border-transparent bg-gradient-to-r from-accent to-brand-red text-bg"
                      : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-8 hairline" />

      <LayoutGroup>
        <motion.div
          layout
          className="mt-12 grid auto-rows-[260px] grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 64, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl",
                  item.span === "tall" && "row-span-2",
                  item.span === "wide" && "col-span-2"
                )}
                aria-label={`View ${item.title} — ${item.tag}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="25vw"
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                    // Website screenshots read best anchored to the top
                    // (header/hero in view) rather than centre-cropped.
                    item.category === "web" && "object-top"
                  )}
                />
                {/* hover scrim + reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-accent-2">{item.tag}</span>
                  <h3 className="mt-1 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                </div>
                {/* corner glyph */}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  ↗
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <Lightbox
        items={items}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </Section>
  );
}
