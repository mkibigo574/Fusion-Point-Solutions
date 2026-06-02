import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import GlassPanel from "@/components/ui/GlassPanel";
import { cn } from "@/lib/cn";
import type { PILLARS } from "@/lib/content";

type Pillar = (typeof PILLARS)[number];

export default function PillarCard({
  pillar,
  flip,
}: {
  pillar: Pillar;
  flip?: boolean;
}) {
  // Image sits on the outer edge; copy on the inner — they converge.
  const imageFrom = flip ? "right" : "left";
  const copyFrom = flip ? "left" : "right";

  return (
    <div
      id={pillar.key}
      className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* Image — slides in from its edge, with deep internal parallax */}
      <Reveal
        className={cn("relative", flip && "lg:order-2")}
        from={imageFrom}
        distance={90}
        blur
      >
        <div
          className={cn(
            "relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]",
            // Smaller, edge-aligned within its half so it doesn't dominate.
            "mx-auto",
            flip ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"
          )}
        >
          <Parallax speed={72} className="h-[150%] -mt-[25%]">
            <Image
              src={pillar.image}
              alt={pillar.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Parallax>
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
            aria-hidden
          />
          <span className="absolute left-5 top-5 font-display text-5xl text-ink/30">
            {pillar.index}
          </span>
        </div>
      </Reveal>

      {/* Copy — slides in from the opposite edge */}
      <div className={cn(flip && "lg:order-1")}>
        <Reveal from={copyFrom} distance={70}>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[0.62rem]">
            {pillar.location}
          </span>

          <h3 className="mt-5 text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            {pillar.title}
          </h3>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            {pillar.blurb}
          </p>
        </Reveal>

        <RevealGroup
          className="mt-7 grid max-w-md grid-cols-2 gap-3"
          stagger={0.07}
          delayChildren={0.1}
        >
          {pillar.points.map((p) => (
            <RevealItem key={p} from="bottom" distance={26}>
              <GlassPanel className="flex h-full items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-ink">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-brand-red"
                  aria-hidden
                />
                {p}
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealGroup>

        {pillar.stack && (
          <RevealGroup
            className="mt-7 flex max-w-md flex-wrap gap-2"
            stagger={0.04}
          >
            {pillar.stack.map((tech) => (
              <RevealItem key={tech} from="bottom" distance={18}>
                <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
                  {tech}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        )}

        <Reveal from={copyFrom} distance={40} delay={0.05}>
          <a
            href={pillar.href}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            Explore {pillar.title.toLowerCase()}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
