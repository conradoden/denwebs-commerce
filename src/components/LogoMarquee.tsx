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
      <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.18em] text-muted md:text-sm">
        {label}
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 px-8 md:gap-16">
          {row.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 shrink-0 items-center justify-center md:h-14"
              aria-label={client.name}
              aria-hidden={i >= logos.length}
              tabIndex={i >= logos.length ? -1 : undefined}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.wide ? 160 : 64}
                height={56}
                className="h-10 w-auto max-w-[160px] object-contain object-center md:h-12 md:max-w-[180px]"
                unoptimized={client.logo.endsWith(".svg")}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
