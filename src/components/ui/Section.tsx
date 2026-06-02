import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Constrain inner content width. */
  container?: boolean;
};

/** Vertical rhythm + optional centered container for page sections. */
export default function Section({
  id,
  children,
  className,
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 sm:py-32 lg:py-40", className)}
    >
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

/** Eyebrow + oversized heading pairing used at the top of most sections. */
export function SectionHeader({
  eyebrow,
  title,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="eyebrow flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-brand-red" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
