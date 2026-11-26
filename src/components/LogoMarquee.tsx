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
    <section aria-label="Client logos" className="border-b border-line bg-paper py-14 md:py-16">
      <p className="mb-12 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted md:text-sm">
        {label}
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 px-10 md:gap-24">
          {row.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-16 shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-80"
              aria-label={client.name}
              aria-hidden={i >= logos.length}
              tabIndex={i >= logos.length ? -1 : undefined}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.wide ? 200 : 88}
                height={64}
                className="h-14 w-auto max-w-[200px] object-contain md:h-16"
                unoptimized={client.logo.endsWith(".svg")}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
