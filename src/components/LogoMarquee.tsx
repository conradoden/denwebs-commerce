import Image from "next/image";
import { clientLogos } from "@/content/clients";

export default function LogoMarquee({
  label = "Brands we've shipped for",
}: {
  label?: string;
}) {
  const logos = clientLogos.filter((c) => Boolean(c.logo));
  if (!logos.length) return null;
  const row = [...logos, ...logos];

  return (
    <section aria-label="Client logos" className="border-b border-line bg-paper py-12 md:py-14">
      <p className="mb-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-14 px-8 md:gap-20">
          {row.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-80"
              aria-label={client.name}
              aria-hidden={i >= logos.length}
              tabIndex={i >= logos.length ? -1 : undefined}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.wide ? 168 : 72}
                height={56}
                className="h-12 w-auto max-w-[168px] object-contain md:h-14"
                unoptimized={client.logo.endsWith(".svg")}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
