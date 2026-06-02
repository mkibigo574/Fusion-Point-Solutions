import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Themed shell for the deeper service routes that aren't built out yet.
 * A deliberately "dark" image zone (light text over a photo) that signals
 * "content coming soon".
 */
export default function ComingSoon({
  eyebrow,
  title,
  blurb,
  image,
  imageAlt,
  contactHash = "/#contact",
}: {
  eyebrow: string;
  title: React.ReactNode;
  blurb: string;
  image: string;
  imageAlt: string;
  contactHash?: string;
}) {
  return (
    <main className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      {/* TODO: replace with real asset for this service */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 photo-scrim" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-transparent"
        aria-hidden
      />

      {/* Minimal top bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center" aria-label="FusionPoint Solutions — home">
          <Image
            src="/brand/fusionpoint-lockup-white.png"
            alt="FusionPoint Solutions"
            width={150}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <Link
          href="/"
          className="text-sm text-white/70 transition-colors hover:text-white"
        >
          ← Back to home
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
        <Reveal>
          <span className="eyebrow flex items-center gap-3" style={{ color: "rgba(255,255,255,0.85)" }}>
            <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.9] tracking-[-0.02em] text-white">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            {blurb}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/75">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
              Full page coming soon
            </span>
            <MagneticButton href={contactHash} variant="outline-light">
              Start a project
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
