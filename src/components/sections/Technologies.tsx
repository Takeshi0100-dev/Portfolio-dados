import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { technologies, techLabel } from "@/content/site";

export function Technologies() {
  const { lang, t } = useLanguage();
  const featured = technologies.find((tech) => tech.featured)!;
  const rest = technologies.filter((tech) => !tech.featured);

  return (
    <section id="tech" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal className="md:row-span-2">
            <article className="card-surface flex h-full flex-col justify-between gap-8 p-7">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                {t.tech.main}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{featured.name}</h3>
                <div className="mt-5 flex h-16 items-end gap-1.5">
                  {[30, 48, 40, 66, 82, 58].map((h, i) => (
                    <span
                      key={i}
                      aria-hidden
                      className="flex-1 rounded-sm bg-primary/30"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {rest.map((tech, i) => (
            <Reveal key={tech.name} delay={60 + i * 50}>
              <article className="card-surface flex h-full items-center gap-3 p-5">
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-primary" />
                <h3 className="text-sm font-medium text-foreground">
                  {techLabel(tech.name, lang)}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
