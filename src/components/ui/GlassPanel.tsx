import { cn } from "@/lib/cn";

type GlassPanelProps = React.HTMLAttributes<HTMLElement> & {
  /** Heavier, darker frost for sticky chrome like the nav. */
  variant?: "default" | "strong";
  as?: "div" | "article" | "aside" | "form" | "nav";
};

/**
 * Frosted glass surface. Always place imagery or a gradient behind it so
 * the blur is actually visible — never glass-on-flat-black.
 */
export default function GlassPanel({
  variant = "default",
  as = "div",
  className,
  children,
  ...props
}: GlassPanelProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn(
        variant === "strong" ? "glass-strong" : "glass",
        "rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
