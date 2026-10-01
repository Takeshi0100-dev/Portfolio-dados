import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Maximize2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { POWER_BI_XSALES_URL, xsalesDax, xsalesDict, xsalesTech } from "@/content/case-xsales";
import desktopImage from "@/assets/xsales-desktop.png";
import mobileImage from "@/assets/xsales-mobile.png";
import modelImage from "@/assets/xsales-model.png";
import measuresImage from "@/assets/xsales-measures.png";

export const Route = createFileRoute("/projetos/analise-vendas-xsales")({
  head: () => ({
    meta: [
      { title: "Análise de Vendas — XSales | Power BI | João Victor" },
      { name: "description", content: "Projeto de estudo em Power BI com Power Query, modelagem de dados, DAX e layouts desktop e mobile para análise de vendas." },
      { property: "og:title", content: "Análise de Vendas — XSales | João Victor" },
      { property: "og:description", content: "Power Query, modelagem, DAX e análise comercial em um dashboard Power BI com layouts desktop e mobile." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: XSalesCase,
});

function Section({ id, children }: { id?: string; children: ReactNode }) {
  return <section id={id} className="section-rule scroll-mt-24 py-20 md:py-28"><div className="section-shell">{children}</div></section>;
}
function Paragraphs({ items }: { items: string[] }) {
  return <div className="space-y-4 text-base leading-relaxed text-muted-foreground">{items.map((p) => <p key={p}>{p}</p>)}</div>;
}
function TechList({ items }: { items: string[] }) {
  return <ul className="flex flex-wrap gap-2">{items.map((tech) => <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted-foreground">{tech}</li>)}</ul>;
}
function useIsDesktop() {
  const [desktop, setDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    update(); mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

function XSalesCase() {
  const { lang } = useLanguage();
  const c = xsalesDict[lang];
  const isDesktop = useIsDesktop();
  const frameWrap = useRef<HTMLDivElement>(null);

  return <main id="main-content" className="relative overflow-x-hidden pt-24 sm:pt-28">
    <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[40rem]" />
    <header className="section-shell relative pb-12 sm:pb-16">
      <Link to="/" hash="projects" className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />{c.final.back}</Link>
      <Reveal className="mt-10"><span className="eyebrow">{c.eyebrow}</span></Reveal>
      <Reveal delay={80}><h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-6xl">{c.title}</h1></Reveal>
      <Reveal delay={140}><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{c.description}</p></Reveal>
      <Reveal delay={200} className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><TechList items={xsalesTech} /><a href="#explore" className="group inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110">{c.cta}<ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" /></a></Reveal>
      <Reveal delay={260} className="mt-12"><div className="card-surface soft-glow overflow-hidden border-primary/20"><img src={desktopImage} alt={c.coverAlt} width={1471} height={818} className="w-full object-cover" /></div></Reveal>
    </header>

    <Section><div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]"><SectionHeading eyebrow={c.context.eyebrow} title={c.context.title} /><Reveal delay={100}><Paragraphs items={c.context.paragraphs} /></Reveal></div></Section>

    <Section><SectionHeading eyebrow={c.flow.eyebrow} title={c.flow.title} /><Reveal delay={100} className="mt-12"><ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">{c.flow.steps.map((step,i)=><li key={step} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row"><div className="w-full rounded-lg border border-primary/35 bg-primary/5 px-3 py-4 text-center text-sm font-medium text-foreground">{step}</div>{i<c.flow.steps.length-1?<ArrowRight className="size-4 shrink-0 rotate-90 text-primary lg:rotate-0"/>:null}</li>)}</ol></Reveal></Section>

    <Section><div className="grid gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow={c.pq.eyebrow} title={c.pq.title} /><Reveal delay={100}><p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.pq.text}</p></Reveal></div><div><SectionHeading eyebrow={c.model.eyebrow} title={c.model.title} /><Reveal delay={100}><p className="mt-5 text-base leading-relaxed text-muted-foreground">{c.model.text}</p><div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-center font-mono text-sm text-primary">{c.model.relation}</div></Reveal></div></div><div className="mt-12 grid gap-6 lg:grid-cols-[1.7fr_0.7fr]"><Reveal><figure className="card-surface overflow-hidden"><img src={modelImage} alt={c.model.imageAlt} loading="lazy" className="w-full object-cover" /></figure></Reveal><Reveal delay={100}><figure className="card-surface overflow-hidden"><img src={measuresImage} alt={c.model.measuresAlt} loading="lazy" className="w-full object-cover" /></figure></Reveal></div></Section>

    <Section><SectionHeading eyebrow={c.dax.eyebrow} title={c.dax.title} subtitle={c.dax.text} /><div className="mt-10 grid gap-6 lg:grid-cols-3">{xsalesDax.map((ex,i)=><Reveal key={ex.code} delay={i*80}><article className="card-surface h-full overflow-hidden"><div className="border-b border-border p-5"><h3 className="font-semibold text-foreground">{ex.title[lang]}</h3></div><pre className="max-w-full overflow-x-auto border-b border-border bg-background/60 p-4 font-mono text-[0.7rem] leading-relaxed text-foreground sm:text-xs"><code>{ex.code}</code></pre><div className="p-5"><p className="font-mono text-[0.68rem] uppercase tracking-wider text-primary">{c.dax.why}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.text[lang]}</p></div></article></Reveal>)}</div></Section>

    <Section><SectionHeading eyebrow={c.analysis.eyebrow} title={c.analysis.title} /><div className="mt-10 grid gap-6 lg:grid-cols-2"><Reveal><div className="card-surface h-full p-7"><p className="font-mono text-xs uppercase tracking-wider text-primary">KPIs</p><ul className="mt-5 flex flex-wrap gap-2">{c.analysis.kpis.map(x=><li key={x} className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground">{x}</li>)}</ul></div></Reveal><Reveal delay={100}><div className="card-surface h-full p-7"><p className="font-mono text-xs uppercase tracking-wider text-primary">Views</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{c.analysis.views.map(x=><li key={x} className="text-sm text-muted-foreground">• {x}</li>)}</ul></div></Reveal></div></Section>

    <Section><SectionHeading eyebrow={c.design.eyebrow} title={c.design.title} subtitle={c.design.text} /><div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.55fr_0.75fr]"><Reveal><figure><figcaption className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">{c.design.desktop}</figcaption><div className="card-surface overflow-hidden"><img src={desktopImage} alt={c.coverAlt} loading="lazy" className="w-full" /></div></figure></Reveal><Reveal delay={120}><figure><figcaption className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">{c.design.mobile}</figcaption><div className="card-surface mx-auto max-w-md overflow-hidden"><img src={mobileImage} alt={c.design.mobileAlt} loading="lazy" className="w-full" /></div></figure></Reveal></div></Section>

    <Section id="explore"><SectionHeading eyebrow={c.embed.eyebrow} title={c.embed.title} subtitle={c.embed.text} /><Reveal delay={100} className="mt-10">{isDesktop ? <div className="card-surface p-2 md:p-3"><div className="mb-2 flex justify-end"><button type="button" onClick={()=>frameWrap.current?.requestFullscreen?.()} className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground"><Maximize2 className="size-3.5"/>{c.embed.fullscreen}</button></div><div ref={frameWrap} className="relative aspect-[16/9.4] w-full overflow-hidden rounded-md bg-background"><iframe title={c.embed.iframeTitle} src={POWER_BI_XSALES_URL} allowFullScreen loading="lazy" className="absolute inset-0 size-full border-0" /></div></div> : <div className="card-surface overflow-hidden"><img src={mobileImage} alt={c.design.mobileAlt} loading="lazy" className="mx-auto max-h-[38rem] w-full object-cover object-top"/><div className="p-5"><a href={POWER_BI_XSALES_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{c.embed.open}<ExternalLink className="size-4"/></a></div></div>}</Reveal></Section>

    <Section><div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]"><SectionHeading eyebrow={c.learning.eyebrow} title={c.learning.title} /><Reveal delay={100}><div className="border-l-2 border-primary pl-5"><Paragraphs items={c.learning.paragraphs}/></div></Reveal></div></Section>

    <Section><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.final.techLabel}</p><div className="mt-4"><TechList items={xsalesTech}/></div></div><div className="flex flex-wrap gap-3"><Link to="/" hash="projects" className="group inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/50"><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1"/>{c.final.back}</Link><Link to="/projetos/dashboard-juridico" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"><ArrowLeft className="size-4"/>{c.final.previous}: Dashboard Jurídico</Link><Link to="/projetos/$slug" params={{ slug: "acompanhamento-vendas" }} className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{lang === "pt" ? "Próximo: Acompanhamento de Vendas" : "Next: Sales Monitoring"}<ArrowRight className="size-4"/></Link></div></div></Section>
  </main>;
}
