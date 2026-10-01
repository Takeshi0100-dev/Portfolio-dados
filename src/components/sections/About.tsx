import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import profilePhoto from "@/assets/about-profile.jpg";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 section-rule py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="space-y-8">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <Reveal delay={80}>
            <div className="max-w-sm overflow-hidden rounded-2xl border border-border/70 bg-card/30">
              <img
                src={profilePhoto}
                alt="João Victor"
                className="aspect-[3/4] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
        <div className="space-y-5 lg:pt-1">
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
