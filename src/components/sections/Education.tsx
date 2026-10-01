import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { institutions } from "@/content/site";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="space-y-6">
          <Reveal>
            <article className="card-surface flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t.education.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.education.start}</p>
              </div>
              <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-primary">
                {t.education.status}
              </span>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <div className="border-l border-primary/35 py-2 pl-6 md:pl-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t.education.complementary}
              </p>
              <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {t.education.institutions}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {institutions.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <Link
              to="/certificacoes"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:brightness-125"
            >
              {t.education.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
