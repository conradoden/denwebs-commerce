// Confirmed client storefronts from documented engagements + portfolio.
const clients = [
  "Marc Robinson Jewelers",
  "TheJewelleryRoom",
  "Tropeaka",
  "Sixthreezero",
  "Wonderful Dental",
  "Origin Tea",
  "Pryme",
  "Sip Coco",
  "Nice Rice",
  "Prime Cuts Jerky",
  "Treasures Jeweler",
  "M Robinson Fine Jewelers",
  "…and 100+ more Shopify projects",
];

export default function LogoMarquee({ label = "Selected client storefronts" }: { label?: string }) {
  const row = [...clients, ...clients];
  return (
    <section aria-label="Client logos" className="border-b border-line bg-paper py-9">
      <p className="mb-6 text-center font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 px-8">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={`whitespace-nowrap font-display text-xl font-semibold tracking-[-0.01em] transition-colors ${
                name.startsWith("…")
                  ? "font-mono text-base font-normal text-accent-deep"
                  : "text-ink/40 hover:text-ink/70"
              }`}
              aria-hidden={i >= clients.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
