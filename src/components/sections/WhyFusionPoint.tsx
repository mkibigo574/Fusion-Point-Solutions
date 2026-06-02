import Section from "@/components/ui/Section";
import GlassPanel from "@/components/ui/GlassPanel";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const REASONS = [
  {
    title: "One team, three disciplines",
    body: "No vendor wrangling. The people shooting your story also build and run the platform it lives on.",
  },
  {
    title: "Australian roots",
    body: "Photo and video produced on the ground in Australia — real locations, real light, real direction.",
  },
  {
    title: "Global web delivery",
    body: "Web, AI and IT delivered to clients anywhere, on any timezone, with support that doesn't sleep.",
  },
];

const STATS = [
  { value: "3-in-1", label: "Crafts under one roof" },
  { value: "100%", label: "In-house, no outsourcing" },
  { value: "AU", label: "Based · global for web" },
  { value: "24/7", label: "Web support worldwide" },
];

export default function WhyFusionPoint() {
  return (
    <Section id="why" className="bg-surface/40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal from="left" distance={60}>
            <span className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
              Why Fusion Point
            </span>
          </Reveal>
          <Reveal from="left" distance={60} delay={0.05}>
            <h2 className="mt-6 text-4xl uppercase leading-[0.95] sm:text-5xl">
              The advantage is{" "}
              <span className="text-gradient">coherence.</span>
            </h2>
          </Reveal>
          <Reveal from="left" distance={60} delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              When the same studio holds the camera, the colour grade and the
              codebase, nothing gets lost between vendors. The story stays
              intact from first frame to live site.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-2 gap-4" stagger={0.09}>
            {STATS.map((s) => (
              <RevealItem key={s.label} from="bottom" distance={40}>
                <GlassPanel className="p-5">
                  <div className="font-display text-3xl text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-muted">{s.label}</div>
                </GlassPanel>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="flex flex-col gap-4 lg:col-span-7 lg:justify-center" stagger={0.12}>
          {REASONS.map((r, i) => (
            <RevealItem key={r.title} from="right" distance={70}>
              <GlassPanel className="flex items-start gap-5 p-7">
                <span className="font-display text-3xl text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-ink">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {r.body}
                  </p>
                </div>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
