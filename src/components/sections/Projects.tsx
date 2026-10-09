import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Workflow, Database, ChartNoAxesCombined } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { projects } from "@/content/site";
import coverDashboardJuridico from "@/assets/dashboard-juridico-home.png";
import coverXSales from "@/assets/xsales-desktop.png";
import coverSales from "@/assets/acompanhamento-vendas.png";
import coverFuel from "@/assets/gestao-abastecimentos.png";

const covers: Record<string, string> = {
  "dashboard-juridico": coverDashboardJuridico,
  "analise-vendas-xsales": coverXSales,
  "acompanhamento-vendas": coverSales,
  "gestao-abastecimentos": coverFuel,
};

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
                  <img src={covers[featured.slug]} alt={`${featured.name[lang]} — ${t.projects.title}`} loading="lazy" decoding="async" width={1280} height={800} className="project-cover size-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" />
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
                    <article className="project-card card-surface flex h-full min-h-64 flex-col justify-between overflow-hidden border-primary/20 p-6 sm:p-8">
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">{lang === "pt" ? "Minha abordagem" : "My approach"}</p>
                        <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-foreground">{lang === "pt" ? "Do problema à solução." : "From problem to solution."}</h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{lang === "pt" ? "Cada projeto começa entendendo a necessidade, organizando os dados e criando indicadores que ajudam a tomar decisões." : "Every project starts by understanding the need, organizing data, and building metrics that support better decisions."}</p>
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
                    <img src={covers[project.slug]} alt={`${project.name[lang]} — ${t.projects.title}`} loading="lazy" decoding="async" width={1280} height={800} className="project-cover size-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" />
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
