import { createFileRoute } from "@tanstack/react-router";
import { SectionNav } from "@/components/case-study/SectionNav";
import { SectionHeading } from "@/components/case-study/SectionHeading";
import { ScreenFrame } from "@/components/case-study/ScreenFrame";
import { ScoreTable } from "@/components/case-study/ScoreTable";
import {
  competitive,
  empathy,
  images,
  problemsSolutions,
  processCopy,
  project,
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

function CaseStudy() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SectionNav />
      <Hero />
      <Overview />
      <UserExperience />
      <DesignSystem />
      <VisualDesign />
      <Closing />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
        <div className="rise-in flex flex-col items-center text-center">
          <img src={images.logo} alt="" aria-hidden className="mb-6 size-20 md:size-24" />
          <p className="eyebrow">Case Study · eCommerce Redesign</p>
          <h1 className="display mt-6 text-6xl uppercase tracking-[0.06em] sm:text-7xl md:text-[8.5rem]">
            The Lirio
          </h1>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {project.intro}
          </p>
        </div>

        <dl className="rise-in mt-16 grid grid-cols-2 border-y border-border md:grid-cols-4">
          {project.meta.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-2 border-border px-2 py-6 odd:border-r md:border-r md:px-6 md:last:border-r-0"
            >
              <dt className="eyebrow">{m.label}</dt>
              <dd className="display text-xl md:text-2xl">
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noreferrer" className="link-underline">
                    {m.value}
                  </a>
                ) : (
                  m.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rise-in mx-auto max-w-[1600px] px-4 md:px-10">
        <img
          src={images.banner}
          alt="The Lirio mobile site shown across a grid of phones"
          className="w-full rounded-lg object-cover shadow-[var(--shadow-frame)]"
        />
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="01 — Project" title="Overview" />
        </div>
        <div className="reveal flex flex-col gap-10 lg:col-span-7">
          <p className="display text-xl leading-relaxed md:text-[1.65rem] md:leading-[1.45]">{project.overview}</p>
          <div>
            <p className="eyebrow mb-5">Technologies Used</p>
            <ul className="flex flex-wrap gap-3">
              {project.tools.map((t) => (
                <li
                  key={t.name}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 text-sm"
                >
                  <img src={t.icon} alt="" aria-hidden className="h-5 w-5 object-contain" />
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-28">
        <p className="eyebrow reveal mb-10">Scope of Work</p>
        <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {scope.map((s, i) => (
            <li key={s.title} className="reveal group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-card">
              <span className="display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UserExperience() {
  return (
    <section id="ux" className="bg-card py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="02 — UX" title="Design Process" align="center">
          {processCopy}
        </SectionHeading>
        <img
          src={images.process}
          alt="Design process from discovery through design to delivery"
          loading="lazy"
          className="reveal mx-auto mt-16 w-full max-w-5xl"
        />

        {/* Problems → Solutions */}
        <div className="mt-32">
          <div className="reveal mb-12 grid gap-6 md:grid-cols-2">
            <h3 className="display text-3xl uppercase md:text-4xl">Pain Points</h3>
            <h3 className="display hidden text-3xl uppercase md:block md:text-4xl">Solutions</h3>
          </div>
          <div className="flex flex-col">
            {problemsSolutions.map((p, i) => (
              <div
                key={p.problem}
                className="reveal grid gap-6 border-t border-border py-10 md:grid-cols-2 md:gap-16"
              >
                <div className="flex gap-6">
                  <span className="display w-10 shrink-0 text-2xl text-muted-foreground">0{i + 1}</span>
                  <div>
                    <h4 className="text-lg font-medium">{p.problem}</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.problemBody}</p>
                  </div>
                </div>
                <div className="relative flex gap-6 md:pl-10">
                  <span aria-hidden className="hidden text-gold md:absolute md:-left-6 md:top-0 md:block">
                    →
                  </span>
                  <span className="eyebrow pt-1.5 md:hidden">Solution</span>
                  <div>
                    <h4 className="display text-2xl">{p.solution}</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.solutionBody}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive analysis */}
        <div className="mt-32 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Research" title="Competitive Analysis" />
            <div className="reveal mt-8">
              <p className="eyebrow mb-3">Brands analyzed</p>
              <div className="flex flex-wrap gap-2">
                {competitive.brands.map((b) => (
                  <span key={b} className="display rounded-full border border-border px-4 py-1.5 text-lg">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal flex flex-col gap-5 leading-relaxed text-muted-foreground lg:col-span-8">
            {competitive.findings.map((f, i) => (
              <p key={i} className={i === 2 ? "border-l-2 border-gold pl-5 text-foreground" : ""}>
                {f}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <ScoreTable />
          <p className="mt-3 text-xs text-muted-foreground">Scored out of 10.</p>
        </div>

        {/* Empathy map */}
        <div className="mt-32">
          <SectionHeading eyebrow="Research" title="Empathy Map" align="center" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {empathy.map((q) => (
              <div key={q.title} className="reveal bg-background p-8 md:p-10">
                <h4 className="display text-3xl">{q.title}</h4>
                <span className="gold-rule mt-4" />
                <ul className="mt-6 flex flex-col gap-4">
                  {q.items.map((it) => (
                    <li key={it} className="leading-relaxed text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div className="mt-32">
          <SectionHeading eyebrow="Architecture" title="Site Map" align="center" />
          <div className="reveal frame mt-14 rounded-lg p-4 md:p-10">
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

function DesignSystem() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow="03 — Design System" title="Styles">
        {styles.intro}
      </SectionHeading>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow mb-4">Typography</p>
          <div className="flex flex-col gap-4">
            <img src={images.type01} alt="Heading typeface: Ninna" loading="lazy" className="w-full rounded-lg" />
            <img src={images.type02} alt="Body typeface: DM Sans" loading="lazy" className="w-full rounded-lg" />
          </div>
        </div>
        <div className="reveal flex flex-col">
          <p className="eyebrow mb-4">Colour</p>
          <div className="flex flex-1 flex-col gap-4">
            {styles.colours.map((c) => (
              <div
                key={c.hex}
                className={`${c.swatch} ${c.text} flex flex-1 items-end justify-between rounded-lg border border-border p-6 min-h-28`}
              >
                <span className="display text-2xl">{c.name}</span>
                <span className="text-sm tracking-[0.2em] uppercase">{c.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <SectionHeading eyebrow="Design System" title="UI Elements">
          {uiElements.intro}
        </SectionHeading>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uiElements.items.map((u) => (
            <figure
              key={u.title}
              className={`reveal flex flex-col gap-4 rounded-lg border border-border bg-card p-6 ${
                u.wide ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <figcaption className="eyebrow">{u.title}</figcaption>
              <div className="flex flex-1 items-center justify-center">
                <img src={u.src} alt={u.title} loading="lazy" className="max-w-full" />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <SectionHeading eyebrow="Design System" title="Grid Structure" />
        <div className="mt-14 grid items-end gap-6 lg:grid-cols-[3fr_1fr]">
          <figure className="reveal">
            <img src={images.gridDesktop} alt="Desktop grid" loading="lazy" className="frame w-full rounded-lg" />
            <figcaption className="eyebrow mt-4">Desktop</figcaption>
          </figure>
          <figure className="reveal">
            <img src={images.gridMobile} alt="Mobile grid" loading="lazy" className="frame mx-auto w-full max-w-xs rounded-lg" />
            <figcaption className="eyebrow mt-4">Mobile</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function VisualDesign() {
  return (
    <section id="visual" className="bg-ink py-28 text-ink-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal flex flex-col items-center gap-5 text-center">
          <p className="eyebrow text-gold">04 — UI Design</p>
          <h2 className="display text-5xl uppercase md:text-7xl">Visual Design</h2>
          <span className="gold-rule" />
        </div>
        <img
          src={images.home}
          alt="The Lirio shop page on desktop and mobile, with a product card detail"
          loading="lazy"
          className="reveal mx-auto mt-16 w-full max-w-5xl rounded-lg"
        />
      </div>

      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-28 px-6 md:px-10">
        {screens.map((s, i) => (
          <article
            key={s.title}
            className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <div
              className={`reveal flex flex-col gap-5 lg:sticky lg:top-28 lg:col-span-4 ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <span className="display text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display text-4xl uppercase">{s.title}</h3>
              {s.body.map((b) => (
                <p key={b} className="leading-relaxed opacity-75">
                  {b}
                </p>
              ))}
              {s.features.length ? (
                <div className="mt-2">
                  <p className="eyebrow mb-3 text-gold">Key Features</p>
                  <ul className="flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className="size-1.5 rotate-45 bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
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

function Closing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 text-center md:px-10 md:py-36">
      <div className="reveal flex flex-col items-center gap-8">
        <img src={images.logo} alt="" aria-hidden className="size-16" />
        <p className="display max-w-3xl text-3xl leading-snug md:text-5xl">
          A streamlined shopping journey that balances aesthetic sophistication with functional clarity.
        </p>
        <a
          href="https://thelirio.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold hover:text-ink"
        >
          Visit thelirio.com ↗
        </a>
      </div>
      <footer className="mt-28 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex-row">
        <span>Carly Liczyk — UI/UX &amp; Web Development</span>
        <a href="#top" className="link-underline">Back to top ↑</a>
      </footer>
    </section>
  );
}
