import type { ReactNode } from "react";

type Variant = "default" | "accent" | "solid" | "inverse";

const variants: Record<Variant, string> = {
  default: "",
  accent: "pill-accent",
  solid: "pill-solid",
  inverse: "pill-inverse",
};

/** Pill-shaped metadata label (category, tools, role, year, outcome…). */
export function Pill({
  children,
  variant = "default",
  dot = false,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  dot?: boolean;
  className?: string;
}) {
  return <span className={`pill ${variants[variant]} ${dot ? "pill-dot" : ""} ${className}`}>{children}</span>;
}
