"use client";

import { useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/Section";
import GlassPanel from "@/components/ui/GlassPanel";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <GlassPanel className="flex w-[88vw] shrink-0 flex-col justify-between gap-6 p-8 sm:w-[440px]">
      <p className="text-lg leading-relaxed text-ink">
        <span className="mr-1 font-display text-3xl text-gradient">“</span>
        {t.quote}
      </p>
      <div>
        <div className="hairline mb-4 w-12" />
        <div className="font-display text-lg text-ink">{t.name}</div>
        <div className="text-sm text-ink-muted">{t.role}</div>
      </div>
    </GlassPanel>
  );
}

export default function Testimonials() {
  const reduced = useReducedMotion();
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal from="left" distance={60}>
          <SectionHeader
            eyebrow="Kind words"
            title={
              <>
                Trusted across <span className="text-gradient">crafts.</span>
              </>
            }
          />
        </Reveal>
      </div>

      <Reveal from="bottom" distance={50} className="mt-14">
        {reduced ? (
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-6 sm:grid-cols-2 sm:px-8 lg:px-12">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <Card t={t} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
            <div
              className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]"
            >
              {loop.map((t, i) => (
                <Card key={`${t.name}-${i}`} t={t} />
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
}
