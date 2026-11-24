import Reveal from "./Reveal";

export default function ProcessSteps({
  steps,
  dark = false,
}: {
  steps: { title: string; body: string }[];
  dark?: boolean;
}) {
  return (
    <ol className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 90} className="h-full">
          <li
            className={`h-full border-t-2 pt-6 ${dark ? "border-accent" : "border-ink"}`}
          >
            <span
              className={`font-mono text-[11px] tracking-[0.15em] ${dark ? "text-accent" : "text-muted"}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              className={`mt-3 font-display text-xl font-bold tracking-[-0.01em] ${dark ? "text-paper" : "text-ink"}`}
            >
              {step.title}
            </h3>
            <p className={`mt-3 text-[15px] leading-relaxed ${dark ? "text-paper/60" : "text-muted"}`}>
              {step.body}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
