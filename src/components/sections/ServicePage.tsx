import Image from "next/image";
import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import GlassPanel from "@/components/ui/GlassPanel";
import MagneticButton from "@/components/ui/MagneticButton";
import ServiceHeader from "@/components/sections/ServiceHeader";
import WorkGrid from "@/components/sections/WorkGrid";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import {
  PILLARS,
  SERVICE_DETAIL,
  type ServiceKey,
  type WorkCategory,
} from "@/lib/content";

const CATEGORY: Record<ServiceKey, WorkCategory> = {
  photography: "photo",
  videography: "video",
  "it-web": "web",
};

export default function ServicePage({ service }: { service: ServiceKey }) {
  const d = SERVICE_DETAIL[service];
  const pillar = PILLARS.find((p) => p.key === service)!;

  return (
    <>
      <ServiceHeader active={service} />

      <main>
        {/* ---- Hero (dark image zone) ---- */}
        <section className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Parallax speed={80} className="h-[125%] -mt-[12%]">
              <Image
                src={d.heroImage}
                alt={d.heroAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 photo-scrim" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent"
              aria-hidden
            />
          </div>

          <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">
            <Reveal from="bottom" distance={30}>
              <span
                className="eyebrow flex items-center gap-3"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
                {d.eyebrow}
              </span>
            </Reveal>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,9vw,7.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.02em] text-white">
              {d.heroLead}{" "}
              <span className="text-brand-red">{d.heroAccent}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              {d.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contact" variant="primary">
                Start a project
              </MagneticButton>
              <MagneticButton href="#work" variant="outline-light">
                See the work
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* ---- What's included ---- */}
        <Section id="capabilities">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal from="left" distance={60}>
                <SectionHeader
                  eyebrow="What's included"
                  title={
                    <>
                      {pillar.title},{" "}
                      <span className="text-gradient">end to end.</span>
                    </>
                  }
                />
              </Reveal>
              {d.intro.map((p, i) => (
                <Reveal key={i} from="left" distance={60} delay={0.05 + i * 0.05}>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <RevealGroup
              className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
              stagger={0.08}
            >
              {d.offerings.map((o, i) => (
                <RevealItem key={o.title} from="bottom" distance={50}>
                  <GlassPanel className="group h-full p-6">
                    <span className="font-display text-2xl text-gradient">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg text-ink">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {o.body}
                    </p>
                  </GlassPanel>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>

        {/* ---- What you get + stack ---- */}
        <Section id="deliverables" className="bg-surface/40">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal from="left" distance={60}>
                <SectionHeader
                  eyebrow="What you get"
                  title={
                    <>
                      Delivered with{" "}
                      <span className="text-gradient">care.</span>
                    </>
                  }
                />
              </Reveal>

              {pillar.stack && (
                <RevealGroup
                  className="mt-8 flex max-w-md flex-wrap gap-2"
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
            </div>

            <RevealGroup
              className="flex flex-col gap-3 lg:col-span-7"
              stagger={0.08}
            >
              {d.deliverables.map((item) => (
                <RevealItem key={item} from="right" distance={50}>
                  <GlassPanel className="flex items-center gap-4 p-5">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-brand-red text-sm text-bg"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-ink">{item}</span>
                  </GlassPanel>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>

        {/* ---- Work in this discipline ---- */}
        <WorkGrid
          lockCategory={CATEGORY[service]}
          eyebrow="Selected work"
          title={
            <>
              {pillar.title} <span className="text-gradient">in the wild.</span>
            </>
          }
        />

        {/* ---- CTA band ---- */}
        <Section>
          <Reveal from="bottom" distance={50} blur>
            <GlassPanel className="relative overflow-hidden p-10 text-center sm:p-14">
              <div
                className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                aria-hidden
              />
              <h2 className="relative text-3xl uppercase leading-[0.95] sm:text-4xl">
                {d.ctaTitle}
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-ink-muted">
                {d.ctaBody}
              </p>
              <div className="relative mt-8 flex justify-center">
                <MagneticButton href="#contact" variant="primary">
                  Start a project
                </MagneticButton>
              </div>
            </GlassPanel>
          </Reveal>
        </Section>

        {/* ---- Enquiry ---- */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
