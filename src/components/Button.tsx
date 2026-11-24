import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "dark" | "accent" | "outlineDark" | "outlineLight";

const styles: Record<Variant, string> = {
  dark: "bg-ink text-paper hover:bg-ink-soft border border-ink",
  accent: "bg-accent-deep text-paper hover:bg-accent border border-accent-deep hover:border-accent",
  outlineDark:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  outlineLight:
    "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "dark",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-[3px] px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.08em] transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <span className="arrow-slide" aria-hidden="true">
          →
        </span>
      )}
    </Link>
  );
}
