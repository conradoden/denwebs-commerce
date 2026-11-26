import Link from "next/link";

/** Same mark as denwebs.com, hexagonal DEN badge with brand gradient. */
function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id="denwebsMarkGrad"
          x1="10"
          y1="4"
          x2="90"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff7a95" />
          <stop offset="0.5" stopColor="#ff2e63" />
          <stop offset="1" stopColor="#e0144c" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="46.5"
        fill="none"
        stroke="url(#denwebsMarkGrad)"
        strokeWidth="3"
      />
      <polygon
        points="50.00,25.00 71.65,37.50 71.65,62.50 50.00,75.00 28.35,62.50 28.35,37.50"
        fill="none"
        stroke="url(#denwebsMarkGrad)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <polygon points="50.00,24.50 52.70,20.50 50.00,6.00 47.30,20.50" fill="url(#denwebsMarkGrad)" />
      <polygon points="72.08,37.25 76.90,37.59 88.11,28.00 74.20,32.91" fill="url(#denwebsMarkGrad)" />
      <polygon points="72.08,62.75 74.20,67.09 88.11,72.00 76.90,62.41" fill="url(#denwebsMarkGrad)" />
      <polygon points="50.00,75.50 47.30,79.50 50.00,94.00 52.70,79.50" fill="url(#denwebsMarkGrad)" />
      <polygon points="27.92,62.75 23.10,62.41 11.89,72.00 25.80,67.09" fill="url(#denwebsMarkGrad)" />
      <polygon points="27.92,37.25 25.80,32.91 11.89,28.00 23.10,37.59" fill="url(#denwebsMarkGrad)" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill="url(#denwebsMarkGrad)"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.6"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        DEN
      </text>
    </svg>
  );
}

export default function DenwebsLogo({
  href = "/",
  dark = false,
}: {
  href?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 ${dark ? "text-paper" : "text-ink"}`}
      aria-label="Denwebs home"
    >
      <Mark className="h-9 w-9 shrink-0 md:h-8 md:w-8" />
      <span className="font-display text-[1.2rem] font-bold tracking-[-0.03em] md:text-[1.25rem]">
        Denwebs
        <span className={dark ? "text-accent" : "text-accent-deep"}>.</span>
      </span>
    </Link>
  );
}
