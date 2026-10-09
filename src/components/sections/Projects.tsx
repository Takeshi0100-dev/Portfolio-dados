import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Workflow, Database, ChartNoAxesCombined } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { projects } from "@/content/site";
import { ProjectPreviewCarousel } from "@/components/sections/ProjectPreviewCarousel";

export function Projects() {
  const { lang, t } = useLanguage();
  const featured = projects[0];
  const secondary = projects.slice(1);
  const realProjects = ["dashboard-juridico", "gestao-abastecimentos"];

  const projectType = (slug: string) => {
    const isReal = realProjects.includes(slug);
    if (lang === "pt") return isReal ? "Projeto real" : "Projeto de estudo";
    return isReal ? "Real-world project" : "Study project";
  };

  const projectTypeIcon = (slug: string) =>
    realProjects.includes(slug) ? BriefcaseBusiness : GraduationCap;

  return (
    <section id="projects" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="projects-overview mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-foreground">04</span>
            <span className="max-w-20 text-xs leading-snug text-muted-foreground">{lang === "pt" ? "cases selecionados" : "selected cases"}</span>
          </div>
          <span aria-hidden className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><BriefcaseBusiness className="size-4 text-primary" />{lang === "pt" ? "Experiência aplicada" : "Applied experience"}</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><GraduationCap className="size-4 text-primary" />{lang === "pt" ? "Estudos e evolução técnica" : "Learning and technical growth"}</div>
        </div>

        {featured && (
          <Reveal key={featured.slug} delay={0}>
            <article className="project-card project-card-featured card-surface group mt-8 overflow-hidden border-primary/25">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                <div className="project-cover-frame project-cover-featured relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[25rem] lg:border-b-0 lg:border-r">
                  <ProjectPreviewCarousel slug={featured.slug} lang={lang} title={`${featured.name[lang]} — ${t.projects.title}`} featured />
                  <span className="project-image-label">{lang === "pt" ? "CASE EM DESTAQUE" : "FEATURED CASE"}</span>
                </div>

                <div className="flex flex-col justify-center gap-5 p-5 min-[375px]:p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
                    {(() => { const TypeIcon = projectTypeIcon(featured.slug); return <TypeIcon className="size-4" />; })()}
                    {projectType(featured.slug)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground min-[375px]:text-3xl sm:text-4xl">{featured.name[lang]}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{featured.description[lang]}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {featured.tech.map((tech) => <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] tracking-wide text-muted-foreground">{tech}</li>)}
                  </ul>

                  <div className="project-highlights grid grid-cols-3 gap-2 border-y border-border py-4">
                    <div className="space-y-2"><Database className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Dados" : "Data"}</p><p className="text-[0.68rem] leading-snug text-muted-foreground">{lang === "pt" ? "Fonte estruturada" : "Structured source"}</p></div>
                    <div className="space-y-2"><ChartNoAxesCombined className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Indicadores" : "Metrics"}</p><p className="text-[0.68rem] leading-snug text-muted-foreground">{lang === "pt" ? "Visão gerencial" : "Management view"}</p></div>
                    <div className="space-y-2"><Workflow className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Processo" : "Process"}</p><p className="text-[0.68rem] leading-snug text-muted-foreground">{lang === "pt" ? "Fluxo otimizado" : "Improved workflow"}</p></div>
                  </div>

                  <Link to="/projetos/$slug" params={{ slug: featured.slug }} className="group/link inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110">
                    {t.projects.cta}<ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2">
          {secondary.map((project, index) => {
            const TypeIcon = projectTypeIcon(project.slug);
            return (
              <Fragment key={project.slug}>
                {project.slug === "acompanhamento-vendas" && (
                  <Reveal delay={index * 90}>
                    <article className="project-card card-surface flex h-full min-h-64 flex-col justify-between gap-5 overflow-hidden border-primary/20 p-6 sm:p-8">
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">{lang === "pt" ? "Minha abordagem" : "My approach"}</p>
                        <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-foreground">{lang === "pt" ? "Do problema à solução." : "From problem to solution."}</h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{lang === "pt"
                            ? "Cada projeto começa com uma pergunta: qual problema precisa ser resolvido? A partir daí, organizo e preparo os dados, estruturo as informações relevantes e desenvolvo indicadores que tornam os resultados mais claros. O objetivo é transformar dados dispersos em uma visão confiável do negócio, facilitar a identificação de padrões e apoiar decisões mais conscientes."
                            : "Every project starts with a question: what problem needs to be solved? From there, I organize and prepare the data, structure relevant information, and develop metrics that make results clearer. The goal is to turn scattered data into a reliable view of the business, reveal useful patterns, and support more informed decisions."}</p>
                      </div>
                      <div className="approach-animation relative overflow-hidden rounded-xl border border-primary/20 bg-slate-950/70 p-3 sm:p-4" role="img" aria-label={lang === "pt" ? "Animação do fluxo de dados: dados brutos, tratamento, dashboard e automação" : "Animated data workflow: raw data, transformation, dashboard, and automation"}>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.14),transparent_70%)]" aria-hidden="true" />
                        <svg viewBox="0 0 600 150" className="relative z-10 w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <defs>
                            <linearGradient id="approachLine" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#2563eb" /><stop offset="1" stopColor="#38bdf8" /></linearGradient>
                          </defs>
                          <path d="M95 65 H505" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="5 7" />
                          <path d="M95 65 H505" stroke="url(#approachLine)" strokeWidth="2" strokeDasharray="32 380" className="approach-flow-line" />
                          {[95, 265, 435, 505].map((x, i) => <g key={x}>
                            <rect x={x - 34} y="30" width="68" height="68" rx="14" fill="#07172e" stroke="#1d4ed8" strokeOpacity=".8" />
                            {i === 0 && <g stroke="#60a5fa" strokeWidth="2"><ellipse cx={x} cy="52" rx="14" ry="5" /><path d="M81 52 V73 C81 80 109 80 109 73 V52 M81 62 C81 69 109 69 109 62" /></g>}
                            {i === 1 && <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"><path d={`M${x-14} 76 L${x-14} 59 L${x-4} 59 L${x-4} 76 M${x+2} 76 L${x+2} 48 L${x+12} 48 L${x+12} 76`} /></g>}
                            {i === 2 && <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={`M${x-17} 76 V48 H${x+17} V76 Z M${x-12} 69 L${x-4} 61 L${x+3} 66 L${x+12} 54`} /><circle cx={x+12} cy="54" r="2" fill="#38bdf8" /></g>}
                            {i === 3 && <g stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"><circle cx={x} cy="64" r="15" /><circle cx={x} cy="64" r="5" /><path d={`M${x} 43 V48 M${x} 80 V85 M${x-21} 64 H${x-16} M${x+16} 64 H${x+21}`} /></g>}
                          </g>)}
                          <circle r="4" fill="#7dd3fc"><animateMotion dur="3.2s" repeatCount="indefinite" path="M95 65 H505" /></circle>
                          <circle r="3" fill="#60a5fa"><animateMotion dur="3.2s" begin="1.1s" repeatCount="indefinite" path="M95 65 H505" /></circle>
                          <g fill="#93c5fd" fontSize="11" fontFamily="ui-monospace, monospace" textAnchor="middle">
                            <text x="95" y="120">{lang === "pt" ? "DADOS" : "DATA"}</text><text x="265" y="120">{lang === "pt" ? "TRATAMENTO" : "CLEANING"}</text><text x="435" y="120">BI</text><text x="505" y="139">{lang === "pt" ? "AUTOMAÇÃO" : "AUTOMATION"}</text>
                          </g>
                        </svg>
                      </div>
                      <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border pt-5">
                        <div className="space-y-2"><Database className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Estruturar" : "Structure"}</p></div>
                        <div className="space-y-2"><ChartNoAxesCombined className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Analisar" : "Analyze"}</p></div>
                        <div className="space-y-2"><Workflow className="size-4 text-primary" /><p className="text-xs font-medium text-foreground">{lang === "pt" ? "Otimizar" : "Optimize"}</p></div>
                      </div>
                    </article>
                  </Reveal>
                )}
                <Reveal key={project.slug} delay={index * 90}>
                <article className="project-card project-card-secondary card-surface group h-full overflow-hidden">
                  <div className="project-cover-frame project-cover-secondary relative aspect-[16/9] overflow-hidden border-b border-border">
                    <ProjectPreviewCarousel slug={project.slug} lang={lang} title={`${project.name[lang]} — ${t.projects.title}`} />
                    <span className="project-image-label">{projectType(project.slug)}</span>
                  </div>
                  <div className="flex h-full flex-col gap-4 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-primary"><TypeIcon className="size-3.5" />{projectType(project.slug)}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{project.name[lang]}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description[lang]}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => <li key={tech} className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-muted-foreground">{tech}</li>)}
                    </ul>
                    <div className="mt-auto pt-1">
                      <Link to="/projetos/$slug" params={{ slug: project.slug }} className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
                        {t.projects.cta}<ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
              </Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
