// Partner ecosystem names, capability row, not a certification claim.
// Do not add badges/tiers (e.g. Shopify Platinum) unless verified.
const partners = [
  "Shopify",
  "Shopify Plus",
  "Klaviyo",
  "Recharge",
  "Gorgias",
  "Yotpo",
  "Algolia",
  "NetSuite",
  "ShipBob",
];

export default function PartnerLogos({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div>
      <p
        className={`mb-6 font-mono text-[11px] uppercase tracking-widest ${dark ? "text-paper/50" : "text-muted"}`}
      >
        {label}
      </p>
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
        {partners.map((p) => (
          <li
            key={p}
            className={`font-display text-lg font-semibold tracking-tight ${dark ? "text-paper/55" : "text-ink/45"}`}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
