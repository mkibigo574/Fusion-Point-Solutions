import Image from "next/image";
import { NAV_LINKS, PILLARS, STUDIO } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/brand/fusionpoint-lockup.png"
              alt="FusionPoint Solutions"
              width={180}
              height={48}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              A creative-technical studio. Australian-based photo &amp; video,
              with web &amp; IT delivered worldwide.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-[0.6rem]">Explore</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="eyebrow text-[0.6rem]">Services</h3>
            <ul className="mt-4 space-y-2">
              {PILLARS.map((p) => (
                <li key={p.key}>
                  <a
                    href={p.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="eyebrow text-[0.6rem]">Social</h3>
            <ul className="mt-4 space-y-2">
              {STUDIO.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 hairline" />
        <div className="mt-5 flex flex-col items-start justify-between gap-3 text-xs text-ink-faint sm:flex-row sm:items-center">
          <span>© {year} Fusion Point. All rights reserved.</span>
          <span>
            Photography &amp; videography in Australia · Web &amp; IT worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}
