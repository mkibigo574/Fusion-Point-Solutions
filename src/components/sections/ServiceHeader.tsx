import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { PILLARS, type ServiceKey } from "@/lib/content";
import { cn } from "@/lib/cn";

/** Sticky header for the dedicated service pages, with cross-navigation. */
export default function ServiceHeader({ active }: { active: ServiceKey }) {
  return (
    <header className="glass-strong sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center"
          aria-label="FusionPoint Solutions — home"
        >
          <Image
            src="/brand/fusionpoint-lockup.png"
            alt="FusionPoint Solutions"
            width={150}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Services"
        >
          {PILLARS.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              aria-current={p.key === active ? "page" : undefined}
              className={cn(
                "text-sm transition-colors duration-300",
                p.key === active
                  ? "font-medium text-accent"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              {p.title}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            ← Home
          </Link>
          <MagneticButton href="#contact" variant="primary" className="px-5 py-2.5 text-xs">
            Start a Project
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
