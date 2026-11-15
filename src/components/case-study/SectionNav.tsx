import { useEffect, useState } from "react";
import { sections } from "@/content/lirio";

export function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-medium tracking-tight">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-primary font-mono text-caption text-accent"
          >
            CL
          </span>
          <span className="text-body">Carly Liczyk</span>
        </a>
        <nav
          aria-label="Case study sections"
          className="hidden items-center gap-1 rounded-full border border-border bg-card p-1 md:flex"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-nav={s.id}
              aria-current={active === s.id ? "true" : undefined}
              className={`rounded-full px-4 py-1.5 text-caption transition-colors ${
                active === s.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="https://thelirio.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-caption font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Live site <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
