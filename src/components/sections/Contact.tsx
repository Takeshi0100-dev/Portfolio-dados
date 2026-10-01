import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/language";
import { EMAIL, LINKEDIN_URL } from "@/content/site";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden section-rule py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="section-shell relative max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{t.contact.text}</p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              {t.contact.linkedin}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-surface"
            >
              <Mail className="size-4" />
              {t.contact.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-6 font-mono text-xs text-muted-foreground">{EMAIL}</p>
        </Reveal>
      </div>
    </section>
  );
}
