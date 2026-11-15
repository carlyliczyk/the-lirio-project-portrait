import { createFileRoute } from "@tanstack/react-router";
import { SectionNav } from "@/components/case-study/SectionNav";
import { GroupHeading, SectionHeading } from "@/components/case-study/SectionHeading";
import { ScreenFrame } from "@/components/case-study/ScreenFrame";
import { ScoreTable } from "@/components/case-study/ScoreTable";
import { Pill } from "@/components/case-study/Pill";
import {
  competitive,
  empathy,
  images,
  problemsSolutions,
  processCopy,
  project,
  results,
  scope,
  screens,
  styles,
  uiElements,
} from "@/content/lirio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Lirio — eCommerce Case Study | Carly Liczyk" },
      {
        name: "description",
        content:
          "How Carly Liczyk redesigned The Lirio's luxury jewelry store: UX research, design system and a mobile-first WordPress build.",
      },
      { property: "og:title", content: "The Lirio — eCommerce Case Study | Carly Liczyk" },
      {
        property: "og:description",
        content:
          "UX research, competitive analysis, design system and visual design for a modern luxury jewelry brand.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

const container = "mx-auto max-w-[1240px] px-5 md:px-8";

function CaseStudy() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SectionNav />
      <main>
        <Hero />
        <Overview />
        <Process />
        <Details />
        <VisualDesign />
        <Results />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  const [client, services, date, website] = project.meta;
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div aria-hidden className="grid-paper absolute inset-x-0 top-0 h-[520px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className={`${container} relative pt-16 pb-10 md:pt-24`}>
        <div className="rise-in flex flex-wrap items-center gap-2">
          {project.tags.map((t, i) => (
            <Pill key={t} variant={i === 0 ? "solid" : "default"} dot={i === 0}>
              {t}
            </Pill>
          ))}
          <Pill>{date.value}</Pill>
        </div>

        <div className="rise-in mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 id="hero-title" className="headline text-display lg:col-span-7">
            The Lirio
            <span className="block text-muted-foreground">eCommerce redesign</span>
          </h1>
          <p className="text-lead text-muted-foreground lg:col-span-5">{project.intro}</p>
        </div>

        {/* Key facts */}
        <dl className="rise-in mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Fact label={client.label}>
            <span className="text-subheading font-medium tracking-tight">{client.value}</span>
          </Fact>
          <Fact label={services.label}>
            <div className="flex flex-wrap gap-1.5">
              <Pill>UI/UX Design</Pill>
              <Pill>Web Development</Pill>
            </div>
          </Fact>
          <Fact label={date.label}>
            <span className="text-subheading font-medium tracking-tight tabular-nums">{date.value}</span>
          </Fact>
          <Fact label={website.label}>
            <a
              href={website.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-subheading font-medium tracking-tight"
            >
              {website.value}
              <span
                aria-hidden
                className="grid size-7 place-items-center rounded-full bg-accent text-caption text-accent-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </Fact>
        </dl>
      </div>

      <div className={`${container} rise-in`}>
        <div className="module overflow-hidden p-2">
          <img
            src={images.banner}
            alt="The Lirio mobile site shown across a grid of phones"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="module flex min-h-28 flex-col justify-between gap-4 p-4 sm:min-h-32 sm:gap-6 sm:p-5">
      <dt className="eyebrow">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

/* -------------------------------------------------------------- Overview */

function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className={`${container} py-24 md:py-32`}>
      <SectionHeading id="overview-title" index="01" eyebrow="Overview" title="Project Overview" />

      <div className="mt-12 grid gap-3 lg:grid-cols-12">
        <article className="module reveal flex flex-col gap-6 p-7 md:p-10 lg:col-span-8">
          <div className="flex flex-wrap gap-2">
            <Pill variant="accent">Brief</Pill>
            <Pill>Redesign</Pill>
          </div>
          <p className="text-lead text-foreground">{project.overview}</p>
          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
            <span className="eyebrow">Technologies used</span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <Pill key={t.name}>
                  <img src={t.icon} alt="" aria-hidden className="size-4 object-contain" />
                  {t.name}
                </Pill>
              ))}
            </div>
          </div>
        </article>

        <aside className="module reveal flex flex-col gap-6 p-7 lg:col-span-4" aria-label="Project at a glance">
          <p className="eyebrow">At a glance</p>
          <Glance label="Category">
            <Pill>eCommerce</Pill>
            <Pill>Luxury Jewelry</Pill>
          </Glance>
          <Glance label="Role">
            <Pill>UI/UX</Pill>
            <Pill>Web Development</Pill>
          </Glance>
          <Glance label="Stack">
            {project.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </Glance>
        </aside>
      </div>

      <div className="mt-20">
        <GroupHeading label="Scope of work" title="Eight workstreams, discovery to launch" />
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scope.map((s, i) => (
            <li
              key={s.title}
              className="module reveal group flex flex-col gap-4 p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-caption text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Pill>{s.phase}</Pill>
              </div>
              <h4 className="text-body font-semibold tracking-tight">{s.title}</h4>
              <p className="text-caption text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Glance({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5 border-t border-border pt-4">
      <span className="text-caption font-medium">{label}</span>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

/* --------------------------------------------------------------- Process */

function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-y border-border bg-card">
      <div className={`${container} py-24 md:py-32`}>
        <SectionHeading id="process-title" index="02" eyebrow="Process" title="Design Process">
          {processCopy}
        </SectionHeading>

        <div className="module reveal mt-12 bg-background p-6 md:p-12">
          <img
            src={images.process}
            alt="Design process from discovery through design to delivery"
            loading="lazy"
            className="mx-auto w-full max-w-5xl"
          />
        </div>

        {/* Problems → Solutions */}
        <div className="mt-20">
          <GroupHeading label="Research findings" title="Pain points and solutions" />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {problemsSolutions.map((p, i) => (
              <article key={p.problem} className="module reveal flex flex-col overflow-hidden bg-background">
                <div className="flex flex-col gap-3 p-6 md:p-7">
                  <Pill className="self-start">Problem {String(i + 1).padStart(2, "0")}</Pill>
                  <h4 className="text-body font-semibold tracking-tight">{p.problem}</h4>
                  <p className="text-caption text-muted-foreground">{p.problemBody}</p>
                </div>
                <div className="mt-auto flex flex-col gap-3 border-t border-border bg-card p-6 md:p-7">
                  <Pill variant="accent" className="self-start">
                    Solution →
                  </Pill>
                  <h4 className="text-subheading font-semibold tracking-tight">{p.solution}</h4>
                  <p className="text-caption text-muted-foreground">{p.solutionBody}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Competitive analysis */}
        <div className="mt-20">
          <GroupHeading label="Research" title="Competitive analysis" />
          <div className="mt-8 grid gap-3 lg:grid-cols-12">
            <article className="module reveal flex flex-col gap-5 bg-background p-7 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow mr-1">Brands analyzed</span>
                {competitive.brands.map((b) => (
                  <Pill key={b}>{b}</Pill>
                ))}
              </div>
              {competitive.findings.slice(0, 2).map((f) => (
                <p key={f} className="text-muted-foreground">
                  {f}
                </p>
              ))}
            </article>
            <article className="module-inverse reveal flex flex-col gap-5 p-7 text-inverse-foreground lg:col-span-5">
              <Pill variant="accent" className="self-start">
                Opportunity
              </Pill>
              <p className="text-lead">{competitive.findings[2]}</p>
            </article>
            <div className="module reveal overflow-hidden bg-background lg:col-span-12">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                <span className="text-body font-semibold tracking-tight">Feature scorecard</span>
                <Pill>Scored out of 10</Pill>
              </div>
              <ScoreTable />
            </div>
          </div>
        </div>

        {/* Empathy map */}
        <div className="mt-20">
          <GroupHeading label="Research" title="Empathy map" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {empathy.map((q) => (
              <article key={q.title} className="module reveal flex flex-col gap-5 bg-background p-6">
                <Pill variant="solid" className="self-start">
                  {q.title}
                </Pill>
                <ul className="flex flex-col gap-4">
                  {q.items.map((it) => (
                    <li key={it} className="flex gap-3 text-caption text-muted-foreground">
                      <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div className="mt-20">
          <GroupHeading label="Information architecture" title="Site map" />
          <div className="module reveal mt-8 bg-background p-4 md:p-10">
            <img
              src={images.sitemap}
              alt="Site map of The Lirio showing every page and section"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Details */

function Details() {
  return (
    <section id="details" aria-labelledby="details-title" className={`${container} py-24 md:py-32`}>
      <SectionHeading id="details-title" index="03" eyebrow="Details" title="Design System">
        {styles.intro}
      </SectionHeading>

      <div className="mt-12 grid gap-3 lg:grid-cols-12">
        <article className="module reveal flex flex-col gap-5 p-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-body font-semibold tracking-tight">Typography</span>
            <div className="flex gap-1.5">
              <Pill>Ninna · Headings</Pill>
              <Pill>DM Sans · Body</Pill>
            </div>
          </div>
          <img src={images.type01} alt="Heading typeface: Ninna" loading="lazy" className="w-full rounded-xl" />
          <img src={images.type02} alt="Body typeface: DM Sans" loading="lazy" className="w-full rounded-xl" />
        </article>

        <article className="module reveal flex flex-col gap-5 p-6 lg:col-span-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-body font-semibold tracking-tight">Brand colour</span>
            <Pill>3 swatches</Pill>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {styles.colours.map((c) => (
              <div key={c.hex} className="flex flex-1 items-stretch gap-4 rounded-xl border border-border p-2">
                {/* Client brand colour rendered as content data */}
                <span
                  aria-hidden
                  className="min-h-20 w-24 shrink-0 rounded-lg border border-border"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="flex flex-col justify-center gap-2">
                  <span className="text-body font-medium">{c.name}</span>
                  <div className="flex flex-wrap gap-1.5">
                    <Pill>{c.hex}</Pill>
                    <Pill>{c.role}</Pill>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <GroupHeading label="Components" title="UI elements" />
        </div>
        <p className="reveal text-muted-foreground lg:col-span-6">{uiElements.intro}</p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {uiElements.items.map((u) => (
          <figure
            key={u.title}
            className={`module reveal flex flex-col gap-5 p-6 ${u.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            <figcaption>
              <Pill>{u.title}</Pill>
            </figcaption>
            <div className="flex flex-1 items-center justify-center rounded-xl bg-background p-4">
              <img src={u.src} alt={u.title} loading="lazy" className="max-w-full" />
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-20">
        <GroupHeading label="Layout" title="Grid structure" />
        <div className="mt-8 grid gap-3 lg:grid-cols-12">
          <figure className="module reveal flex flex-col gap-5 p-6 lg:col-span-9">
            <figcaption className="flex gap-1.5">
              <Pill>Desktop</Pill>
            </figcaption>
            <img src={images.gridDesktop} alt="Desktop grid" loading="lazy" className="w-full rounded-xl" />
          </figure>
          <figure className="module reveal flex flex-col gap-5 p-6 lg:col-span-3">
            <figcaption className="flex gap-1.5">
              <Pill>Mobile</Pill>
            </figcaption>
            <img
              src={images.gridMobile}
              alt="Mobile grid"
              loading="lazy"
              className="mx-auto w-full max-w-xs rounded-xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Visual design */

function VisualDesign() {
  return (
    <section aria-labelledby="visual-title" className="bg-inverse py-24 text-inverse-foreground md:py-32">
      <div className={container}>
        <SectionHeading id="visual-title" inverse eyebrow="Visual design" title="Key screens">
          Five core templates designed and built for the new store, from first impression to checkout.
        </SectionHeading>
        <div className="module-inverse reveal mt-12 overflow-hidden p-2">
          <img
            src={images.home}
            alt="The Lirio shop page on desktop and mobile, with a product card detail"
            loading="lazy"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      <div className={`${container} mt-16 flex flex-col gap-3`}>
        {screens.map((s, i) => (
          <article key={s.title} className="grid items-start gap-3 lg:grid-cols-12">
            <div
              className={`module-inverse reveal flex flex-col gap-5 p-7 lg:sticky lg:top-24 lg:col-span-4 ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <Pill variant="accent">{String(i + 1).padStart(2, "0")}</Pill>
                <Pill variant="inverse">Template</Pill>
              </div>
              <h3 className="headline text-subheading">{s.title}</h3>
              {s.body.map((b) => (
                <p key={b} className="text-caption text-inverse-muted">
                  {b}
                </p>
              ))}
              {s.features.length ? (
                <div className="flex flex-col gap-2.5 border-t border-inverse-border pt-5">
                  <span className="eyebrow text-inverse-muted">Key features</span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.features.map((f) => (
                      <Pill key={f} variant="inverse" dot>
                        {f}
                      </Pill>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className={`reveal text-foreground lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <ScreenFrame src={s.src} alt={`The Lirio ${s.title.toLowerCase()} design`} scroll={!s.short} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Results */

function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className={`${container} py-24 md:py-32`}>
      <SectionHeading id="results-title" index="04" eyebrow="Results" title="Outcome">
        {results.statement}
      </SectionHeading>

      <div className="mt-12 grid gap-3 lg:grid-cols-12">
        <article className="module reveal flex flex-col gap-5 p-7 lg:col-span-6">
          <Pill variant="accent" className="self-start">
            Delivered
          </Pill>
          <ul className="flex flex-col">
            {results.delivered.map((d) => (
              <li key={d} className="flex items-center gap-3 border-t border-border py-3.5 first:border-0">
                <span aria-hidden className="grid size-5 place-items-center rounded-full bg-primary text-caption text-accent">
                  ✓
                </span>
                <span className="text-body">{d}</span>
              </li>
            ))}
          </ul>
        </article>

        <figure className="module-placeholder reveal flex flex-col justify-between gap-8 p-7 lg:col-span-6">
          <Pill className="self-start">Placeholder · Client quote</Pill>
          <blockquote className="text-subheading font-medium tracking-tight text-muted-foreground">
            “{results.quote.text}”
          </blockquote>
          <figcaption className="text-caption text-muted-foreground">{results.quote.author}</figcaption>
        </figure>

        {results.metrics.map((m) => (
          <article key={m.label} className="module-placeholder reveal flex flex-col gap-4 p-7 lg:col-span-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Pill>Placeholder</Pill>
              <span className="eyebrow">{m.label}</span>
            </div>
            <span className="headline text-heading tabular-nums text-muted-foreground">{m.value}</span>
            <p className="text-caption text-muted-foreground">{m.note}</p>
          </article>
        ))}
      </div>

      <div className="module-inverse reveal mt-3 flex flex-col items-start justify-between gap-8 p-8 text-inverse-foreground md:flex-row md:items-center md:p-12">
        <div className="flex flex-col gap-3">
          <Pill variant="inverse" dot className="self-start">
            Live
          </Pill>
          <p className="headline max-w-xl text-subheading">See the finished store in action.</p>
        </div>
        <a
          href="https://thelirio.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-body font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Visit thelirio.com <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className={`${container} flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center`}>
        <span className="text-caption text-muted-foreground">Carly Liczyk — UI/UX Design &amp; Web Development</span>
        <a href="#top" className="pill">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
