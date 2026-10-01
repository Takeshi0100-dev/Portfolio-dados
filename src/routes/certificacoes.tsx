import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ExternalLink, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { certifications, certificationCategoryLabels, type CertificationCategory } from "@/content/certifications";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/certificacoes")({
  head: () => ({
    meta: [
      { title: "Certificações — João Victor" },
      {
        name: "description",
        content: "Formações e certificações de João Victor em Dados, Business Intelligence, Automação e Inteligência Artificial.",
      },
      { property: "og:title", content: "Certificações — João Victor" },
      {
        property: "og:description",
        content: "Evolução contínua em Dados, Business Intelligence, Automação e Inteligência Artificial.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:alt", content: "João Victor — portfólio de Dados e Business Intelligence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Certificacoes,
});

type Filter = CertificationCategory | "all";
const filters: Filter[] = ["all", "power-bi", "data", "automation", "ai", "other"];

function Certificacoes() {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const labels = certificationCategoryLabels[lang];

  const copy = lang === "pt" ? {
    eyebrow: "Formação contínua",
    title: "Certificações",
    description: "Formações e certificações que fazem parte da minha evolução contínua em Dados, Business Intelligence, Automação, Inteligência Artificial e tecnologia.",
    back: "Voltar para a Home",
    filterLabel: "Filtrar certificações",
    hours: "h",
    view: "Ver certificado",
    empty: "Nenhuma certificação nesta categoria ainda.",
    count: (n: number) => `${n} ${n === 1 ? "certificação" : "certificações"}`,
  } : {
    eyebrow: "Continuous learning",
    title: "Certifications",
    description: "Courses and certifications that are part of my continuous development in Data, Business Intelligence, Automation, Artificial Intelligence and technology.",
    back: "Back to Home",
    filterLabel: "Filter certifications",
    hours: "h",
    view: "View certificate",
    empty: "No certifications in this category yet.",
    count: (n: number) => `${n} ${n === 1 ? "certification" : "certifications"}`,
  };

  const visible = useMemo(
    () => activeFilter === "all" ? certifications : certifications.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  const formatDate = (date: string) => new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));

  return (
    <main id="main-content" className="min-h-screen pt-24 md:pt-32">
      <section className="section-shell pb-10 md:pb-14">
        <Reveal>
          <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-4" /> {copy.back}
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">{copy.eyebrow}</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground min-[375px]:text-4xl sm:text-5xl md:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{copy.description}</p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-24 md:pb-32">
        <Reveal delay={80}>
          <div className="mb-8 flex flex-col gap-4 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="mobile-scroll flex max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label={copy.filterLabel}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-300",
                    activeFilter === filter
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {labels[filter]}
                </button>
              ))}
            </div>
            <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted-foreground">{copy.count(visible.length)}</p>
          </div>
        </Reveal>

        {visible.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((certificate, index) => (
              <Reveal key={certificate.id} delay={Math.min(index * 45, 220)}>
                <article className="group flex h-full min-h-60 flex-col rounded-xl border border-border/80 bg-card/20 p-5 min-[375px]:p-6 md:min-h-64 md:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-card/45">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                      {labels[certificate.category]}
                    </span>
                    <GraduationCap className="size-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                  </div>

                  <h2 className="font-display text-xl font-semibold leading-snug text-foreground">{certificate.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{certificate.institution}</p>

                  <div className="mt-auto pt-8">
                    <div className="mb-5 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                      <span>{formatDate(certificate.date)}</span>
                      <span aria-hidden="true">•</span>
                      <span>{certificate.hours}{copy.hours}</span>
                    </div>
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    >
                      {copy.view} <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">{copy.empty}</div>
        )}
      </section>
    </main>
  );
}
