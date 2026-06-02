import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import PillarCard from "@/components/sections/PillarCard";
import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <Section id="services" className="bg-surface/40">
      <Reveal from="left" distance={60}>
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Three disciplines,{" "}
              <span className="text-gradient">one standard of craft.</span>
            </>
          }
        />
      </Reveal>
      <div className="mt-8 hairline" />

      <div className="mt-16 flex flex-col gap-24 lg:gap-32">
        {PILLARS.map((pillar, i) => (
          <PillarCard key={pillar.key} pillar={pillar} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
