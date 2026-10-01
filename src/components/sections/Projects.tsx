import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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

  return (
    <section id="projects" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <article className="card-surface soft-glow group overflow-hidden border-primary/20">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border lg:aspect-auto lg:min-h-[26rem] lg:border-b-0 lg:border-r">
                    <img
                      src={covers[project.slug]}
                      alt={`${project.name[lang]} — ${t.projects.title}`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-6 p-5 min-[375px]:p-6 sm:p-7 md:p-12">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground min-[375px]:text-3xl sm:text-4xl">
                        {project.name[lang]}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {project.description[lang]}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] tracking-wide text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/projetos/$slug"
                      params={{ slug: project.slug }}
                      className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110"
                    >
                      {t.projects.cta}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
