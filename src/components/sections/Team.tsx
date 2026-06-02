import Section, { SectionHeader } from "@/components/ui/Section";
import GlassPanel from "@/components/ui/GlassPanel";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TEAM } from "@/lib/content";

export default function Team() {
  return (
    <Section id="team">
      <Reveal from="left" distance={60}>
        <SectionHeader
          eyebrow="The people"
          title={
            <>
              Three people, <span className="text-gradient">three crafts.</span>
            </>
          }
        />
      </Reveal>
      <div className="mt-8 hairline" />

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.12}>
        {TEAM.map((m) => (
          <RevealItem key={m.name} from="bottom" distance={64} blur>
            <GlassPanel className="group relative h-full overflow-hidden p-7">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />

              {/* Monogram portrait — TODO: swap for a real headshot (next/image) */}
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white/[0.06] to-transparent">
                <span className="font-display text-4xl text-gradient">
                  {m.initials}
                </span>
              </div>

              <span className="eyebrow mt-6 block text-[0.6rem] text-accent-2">
                {m.discipline}
              </span>
              <h3 className="mt-2 text-2xl text-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{m.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {m.bio}
              </p>
            </GlassPanel>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
