import Image from "next/image";
import { clientLogos } from "@/content/clients";

export default function LogoMarquee({
  label = "Brands we've shipped for",
}: {
  label?: string;
}) {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section aria-label="Client logos" className="border-b border-line bg-paper py-10 md:py-12">
      <p className="mb-8 text-center font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 px-8 md:gap-16">
          {row.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-11 shrink-0 items-center justify-center opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              aria-label={client.name}
              aria-hidden={i >= clientLogos.length}
              tabIndex={i >= clientLogos.length ? -1 : undefined}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.wide ? 140 : 44}
                height={40}
                className={`h-9 w-auto max-w-[140px] object-contain ${
                  client.wide ? "md:h-8" : "md:h-10"
                }`}
                unoptimized={client.logo.endsWith(".svg")}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
