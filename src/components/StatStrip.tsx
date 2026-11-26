// Figures from documented work history (CV project records).
const stats = [
  { value: "100+", label: "Shopify storefronts in the record" },
  { value: "12", label: "featured case studies with live URLs" },
  { value: "$10k/mo", label: "platform cost eliminated for one client" },
  { value: "2017", label: "in commerce engineering since" },
];

export default function StatStrip({ dark = false }: { dark?: boolean }) {
  return (
    <dl
      className={`grid grid-cols-2 md:grid-cols-4 ${dark ? "text-paper" : "text-ink"}`}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-2 md:py-0 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i >= 2 ? "mt-8 md:mt-0" : ""} ${
            i % 2 === 1 ? "border-l pl-6 md:pl-8" : ""
          } ${dark ? "border-line-dark" : "border-line"}`}
        >
          <dt
            className={`font-mono text-[11px] uppercase tracking-[0.15em] ${dark ? "text-paper/50" : "text-muted"}`}
          >
            {s.label}
          </dt>
          <dd className="mb-2 font-display text-5xl font-bold tracking-[-0.03em] md:text-6xl">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
