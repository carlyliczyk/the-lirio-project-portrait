export function ScreenFrame({
  src,
  alt,
  scroll = true,
}: {
  src: string;
  alt: string;
  scroll?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-inverse-border bg-card shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-accent ring-1 ring-foreground/20" />
        <span className="pill ml-3 truncate">thelirio.com</span>
        {scroll ? <span className="eyebrow ml-auto hidden sm:inline">Scroll ↓</span> : null}
      </div>
      <div className={scroll ? "scroll-frame max-h-[620px]" : ""}>
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </figure>
  );
}
