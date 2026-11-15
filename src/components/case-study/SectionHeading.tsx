import type { ReactNode } from "react";
import { Pill } from "./Pill";

/** Section header: index pill + label, headline and optional lead copy. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  inverse = false,
  id,
}: {
  id?: string;
  index?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="flex flex-col gap-5 lg:col-span-6">
        <div className="flex flex-wrap items-center gap-2">
          {index ? <Pill variant="accent">{index}</Pill> : null}
          <Pill variant={inverse ? "inverse" : "default"}>{eyebrow}</Pill>
        </div>
        <h2 id={id} className="headline text-heading">{title}</h2>
      </div>
      {children ? (
        <div
          className={`text-lead lg:col-span-6 ${inverse ? "text-inverse-muted" : "text-muted-foreground"}`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

/** Small heading used inside a section to introduce a group of cards. */
export function GroupHeading({ label, title, inverse = false }: { label: string; title: string; inverse?: boolean }) {
  return (
    <div className="reveal flex flex-col gap-3">
      <p className={`eyebrow ${inverse ? "text-inverse-muted" : ""}`}>{label}</p>
      <h3 className="headline text-subheading">{title}</h3>
    </div>
  );
}
