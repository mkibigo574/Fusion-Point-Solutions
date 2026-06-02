import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  return (
    <Section id="intro">
      <Reveal>
        <span className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
          Under one roof
        </span>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7" from="bottom" distance={50} blur delay={0.05}>
          <p className="text-balance font-display text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
            Most brands juggle a photographer, a film crew and a web agency.
            Fusion Point is <span className="text-gradient">all three</span> —
            one team that shoots the story and builds the place it lives.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:pt-3" from="right" distance={70} delay={0.15}>
          <p className="text-lg leading-relaxed text-ink-muted">
            We started behind the lens in Darwin, then kept going — into
            motion, then into the web and the systems that run it. The result
            is rare coherence: the same eye directing your campaign also ships
            the site, the app and the automation behind it.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Photo and video are based in Darwin, Australia. Web and IT we
            deliver anywhere in the world.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
