export default function SectionHeading({
  eyebrow,
  index,
  title,
  copy,
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  index?: string;
  title: string;
  copy?: string;
  dark?: boolean;
  className?: string;
}) {
  const label = index ? `${index}. ${eyebrow ?? ""}` : eyebrow;
  return (
    <div className={`max-w-3xl ${className}`}>
      {label && (
        <p className="eyebrow" data-dark={dark}>
          {label}
        </p>
      )}
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-[1.06] tracking-[-0.02em] md:text-5xl lg:text-[3.25rem] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            dark ? "text-paper/65" : "text-muted"
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
