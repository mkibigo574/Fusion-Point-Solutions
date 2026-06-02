import Section, { SectionHeader } from "@/components/ui/Section";
import GlassPanel from "@/components/ui/GlassPanel";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <Section id="process">
      <Reveal from="left" distance={60}>
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              One team, <span className="text-gradient">camera to deploy.</span>
            </>
          }
        />
      </Reveal>
      <div className="mt-8 hairline" />

      <RevealGroup
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
        stagger={0.12}
      >
        {PROCESS.map((p) => (
          <RevealItem
            key={p.step}
            from="bottom"
            distance={64}
            className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-auto"
          >
            <GlassPanel className="group relative h-full overflow-hidden p-7">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                aria-hidden
              />
              <span className="font-display text-5xl text-gradient">
                {p.step}
              </span>
              <h3 className="mt-5 text-xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </GlassPanel>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
