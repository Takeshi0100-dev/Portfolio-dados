import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  FileText,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import {
  caseDict,
  caseTech,
  dataStructures,
  daxExamples,
  nextProject,
  POWER_BI_URL,
} from "@/content/case-dashboard-juridico";
import cover from "@/assets/juridico-page1.png";
import juridicoPage2 from "@/assets/juridico-page2.png";
import juridicoPage3 from "@/assets/juridico-page3.png";
import juridicoPage4 from "@/assets/juridico-page4.png";

const dashboardScreens = [cover, juridicoPage2, juridicoPage3, juridicoPage4];

export const Route = createFileRoute("/projetos/dashboard-juridico")({
  head: () => ({
    meta: [
      { title: "Dashboard Jurídico — Case de Business Intelligence | João Victor" },
      {
        name: "description",
        content:
          "Case study: do registro jurídico em Word a uma solução em Excel, SharePoint, Power Query, DAX e Power BI usada em cenário real.",
      },
      { property: "og:title", content: "Dashboard Jurídico — Case de Business Intelligence" },
      {
        property: "og:description",
        content:
          "Requisitos, estruturação de dados, regras de negócio, DAX e Power BI em um case real.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:alt", content: "João Victor — portfólio de Dados e Business Intelligence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: CasePage,
});

function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="section-rule scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted-foreground"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function useIsDesktop() {
  const [desktop, setDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

function CasePage() {
  const { lang } = useLanguage();
  const c = caseDict[lang];
  const isDesktop = useIsDesktop();
  const frameWrap = useRef<HTMLDivElement>(null);

  return (
    <main id="main-content" className="relative overflow-x-hidden pt-24 sm:pt-28">
      {/* HERO */}
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[40rem]" />
      <header className="section-shell relative pb-12 sm:pb-16">
        <Link
          to="/"
          hash="projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          {c.final.back}
        </Link>
        <Reveal className="mt-10">
          <span className="eyebrow">{c.eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-6xl">{c.title}</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {c.description}
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <TechList items={caseTech} />
          <a
            href="#explore"
            className="group inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            {c.cta}
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </Reveal>
        <Reveal delay={260} className="mt-12">
          <div className="card-surface soft-glow overflow-hidden border-primary/20">
            <img
              src={cover}
              alt={c.coverAlt}
              width={1280}
              height={800}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* CONFIDENCIALIDADE */}
        <Reveal delay={100} className="mt-10">
          <aside className="flex gap-4 rounded-lg border border-primary/25 bg-primary/5 p-5 md:p-6">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">{c.conf.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.conf.text}</p>
            </div>
          </aside>
        </Reveal>
      </header>

      {/* CONTEXTO */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow={c.context.eyebrow} title={c.context.title} />
          <Reveal delay={100}>
            <Paragraphs items={c.context.paragraphs} />
          </Reveal>
        </div>
      </Section>

      {/* PROBLEMA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow={c.problem.eyebrow} title={c.problem.title} />
            <Reveal delay={120} className="mt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {c.problem.topicsLabel}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {c.problem.topics.map((t) => (
                  <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <Paragraphs items={c.problem.paragraphs} />
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-12">
          <ol className="grid gap-3 md:grid-cols-5">
            {c.problem.flow.map((step, i) => (
              <li key={step} className="relative">
                <div className="card-surface flex h-full items-center gap-3 p-4">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {i < c.problem.flow.length - 1 ? (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-4 -translate-y-1/2 text-primary md:block" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      {/* ANTES X DEPOIS */}
      <Section>
        <SectionHeading eyebrow={c.beforeAfter.eyebrow} title={c.beforeAfter.title} />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <div className="card-surface h-full p-7 opacity-90">
              <div className="flex items-center gap-3">
                <FileText className="size-5 text-muted-foreground" />
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {c.beforeAfter.before}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {c.beforeAfter.beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
              <ArrowRight className="size-5 rotate-90 lg:rotate-0" />
            </span>
          </div>
          <Reveal delay={120}>
            <div className="card-surface h-full border-primary/40 p-7 ring-1 ring-primary/20">
              <div className="flex items-center gap-3">
                <Check className="size-5 text-primary" />
                <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                  {c.beforeAfter.after}
                </h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.beforeAfter.afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ARQUITETURA */}
      <Section>
        <SectionHeading eyebrow={c.architecture.eyebrow} title={c.architecture.title} />
        <Reveal delay={100} className="mt-12">
          <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
            {c.architecture.steps.map((step, i) => {
              const core = i >= 1 && i <= 4;
              return (
                <li key={step} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
                  <div
                    className={`w-full rounded-lg border px-3 py-4 text-center text-sm font-medium ${
                      core
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  {i < c.architecture.steps.length - 1 ? (
                    <ArrowRight className="size-4 shrink-0 rotate-90 text-primary lg:rotate-0" />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Section>

      {/* ESTRUTURA DOS DADOS */}
      <Section>
        <SectionHeading eyebrow={c.data.eyebrow} title={c.data.title} subtitle={c.data.text} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataStructures.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="card-surface h-full p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-mono text-sm text-primary">{s.name}</h3>
                  <span className="font-mono text-[0.68rem] text-muted-foreground">
                    {s.fields[lang].length} {c.data.fieldsLabel}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.fields[lang].map((f) => (
                    <li key={f} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* POWER QUERY + MODELO */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={c.pq.eyebrow} title={c.pq.title} />
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.pq.text}</p>
            </Reveal>
            <Reveal delay={160}>
              <ol className="mt-8 space-y-3">
                {c.pq.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-4 text-sm text-foreground">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow={c.model.eyebrow} title={c.model.title} />
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.model.text}</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {dataStructures.map((s) => (
                  <div key={s.name} className="rounded-md border border-border bg-card px-3 py-3 font-mono text-[0.7rem] text-muted-foreground">
                    {s.name}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* DAX */}
      <Section>
        <SectionHeading eyebrow={c.dax.eyebrow} title={c.dax.title} subtitle={c.dax.text} />
        <Reveal delay={100}>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.dax.uses.map((u) => (
              <li key={u} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary">
                {u}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {daxExamples.map((ex, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-surface h-full overflow-hidden">
                <pre className="max-w-full overflow-x-auto border-b border-border bg-background/60 p-4 font-mono text-[0.7rem] leading-relaxed text-foreground sm:p-5 sm:text-xs">
                  <code>{ex.code}</code>
                </pre>
                <div className="p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-wider text-primary">{c.dax.whyLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.text[lang]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* PROVEITO ECONÔMICO */}
        <Reveal delay={100} className="mt-10">
          <div className="card-surface grid gap-8 p-7 md:grid-cols-2 md:p-10">
            <div>
              <span className="eyebrow">{c.benefit.eyebrow}</span>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{c.benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.benefit.text}</p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">{c.benefit.example}</p>
              <dl className="mt-3 divide-y divide-border rounded-lg border border-border">
                {c.benefit.rows.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex items-center justify-between px-4 py-3 text-sm ${
                      i === c.benefit.rows.length - 1 ? "bg-primary/10 font-semibold text-primary" : "text-foreground"
                    }`}
                  >
                    <dt>{k}</dt>
                    <dd className="font-mono">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* DASHBOARD PAGES */}
      <Section>
        <SectionHeading eyebrow={c.dashboard.eyebrow} title={c.dashboard.title} subtitle={c.dashboard.note} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {c.dashboard.pages.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <article className="card-surface h-full overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden border-b border-border bg-background/50">
                  <img src={dashboardScreens[i]} alt={`${c.dashboard.pageLabel} ${i + 1} — ${p.title}`} loading="lazy" className="size-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs text-primary">
                    {c.dashboard.pageLabel} {i + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.items.map((it) => (
                      <li key={it} className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EMBED */}
      <Section id="explore">
        <SectionHeading eyebrow={c.embed.eyebrow} title={c.embed.title} subtitle={c.embed.text} />
        <Reveal delay={100} className="mt-10">
          {isDesktop ? (
            <div className="card-surface p-2 md:p-3">
              <div className="mb-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => frameWrap.current?.requestFullscreen?.()}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                >
                  <Maximize2 className="size-3.5" />
                  {c.embed.fullscreen}
                </button>
              </div>
              <div ref={frameWrap} className="relative aspect-[16/9.4] w-full overflow-hidden rounded-md bg-background">
                <iframe
                  title={c.embed.iframeTitle}
                  src={POWER_BI_URL}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 size-full border-0"
                />
              </div>
            </div>
          ) : (
            <div className="card-surface overflow-hidden">
              <img src={cover} alt={c.coverAlt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <a
                  href={POWER_BI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                >
                  {c.embed.open}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </Section>

      {/* RESULTADO + APRENDIZADO */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow={c.result.eyebrow} title={c.result.title} />
            <Reveal delay={100} className="mt-6">
              <Paragraphs items={c.result.paragraphs} />
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow={c.learning.eyebrow} title={c.learning.title} />
            <Reveal delay={100} className="mt-6">
              <div className="border-l-2 border-primary pl-5">
                <Paragraphs items={c.learning.paragraphs} />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FINAL */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.final.techLabel}</p>
            <div className="mt-4">
              <TechList items={caseTech} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              hash="projects"
              className="group inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              {c.final.back}
            </Link>
            {nextProject ? (
              <Link
                to="/projetos/analise-vendas-xsales"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                {c.final.next}: {nextProject.name[lang]}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
          </div>
        </div>
      </Section>
    </main>
  );
}
