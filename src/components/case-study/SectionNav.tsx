import { useEffect, useState } from "react";
import { sections } from "@/content/lirio";

export function SectionNav() {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <a href="#top" className="display text-lg tracking-[0.2em] uppercase">
          Carly Liczyk
        </a>
        <nav aria-label="Case study sections" className="hidden gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-xs uppercase tracking-[0.22em] transition-colors ${
                active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={active === s.id ? "border-b border-gold pb-1" : "pb-1"}>
                {s.label}
              </span>
            </a>
          ))}
        </nav>
        <a
          href="https://thelirio.com/"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.22em] link-underline"
        >
          Live site ↗
        </a>
      </div>
    </header>
  );
}
