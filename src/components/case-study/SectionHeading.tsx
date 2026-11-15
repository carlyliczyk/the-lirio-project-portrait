import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={`reveal flex flex-col gap-5 ${centered ? "items-center text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display text-4xl uppercase md:text-6xl">{title}</h2>
      <span className="gold-rule" />
      {children ? (
        <div
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
