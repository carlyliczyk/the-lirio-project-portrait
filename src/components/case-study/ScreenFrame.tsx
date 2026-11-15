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
    <figure className="frame overflow-hidden rounded-lg">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
        <span className="size-2.5 rounded-full bg-hairline" />
        <span className="size-2.5 rounded-full bg-hairline" />
        <span className="size-2.5 rounded-full bg-gold" />
        <span className="ml-3 truncate text-xs tracking-wide text-muted-foreground">
          thelirio.com
        </span>
        {scroll ? (
          <span className="ml-auto hidden text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Scroll to explore
          </span>
        ) : null}
      </div>
      <div className={scroll ? "scroll-frame max-h-[640px]" : ""}>
        <img src={src} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </figure>
  );
}
