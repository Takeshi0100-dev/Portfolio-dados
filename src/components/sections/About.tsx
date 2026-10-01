import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        <div className="space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 110}>
              <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
