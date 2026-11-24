import Link from "next/link";

export default function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { label: string; href?: string }[];
  dark?: boolean;
}) {
  const linkCls = dark ? "hover:text-paper" : "hover:text-ink";
  const currentCls = dark ? "text-paper" : "text-ink";
  const sepCls = dark ? "text-paper/30" : "text-line-dark";
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol
        className={`flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] ${
          dark ? "text-paper/50" : "text-muted"
        }`}
      >
        <li>
          <Link href="/" className={linkCls}>
            Denwebs
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2.5">
            <span aria-hidden="true" className={sepCls}>/</span>
            {item.href ? (
              <Link href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <span className={currentCls} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
