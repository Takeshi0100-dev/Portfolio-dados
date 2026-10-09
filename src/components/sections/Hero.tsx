import { ArrowDown, ArrowUpRight, ChartNoAxesCombined } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { LINKEDIN_URL } from "@/content/site";
import { InteractiveWordmark } from "@/components/sections/InteractiveWordmark";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[88svh] items-center overflow-hidden pb-16 pt-24 sm:min-h-[92vh] sm:pb-20 sm:pt-28 md:min-h-screen md:pt-32"
    >
      <div aria-hidden className="grid-backdrop hero-grid-motion pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="hero-ambient-motion pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <InteractiveWordmark />

            <p
              className="eyebrow mt-5 animate-fade-in"
              style={{ animationDelay: "40ms", animationFillMode: "backwards" }}
            >
              {t.hero.role}
            </p>

            <h1 className="mt-5 text-[2.15rem] font-semibold leading-[1.06] text-foreground min-[375px]:text-4xl sm:text-5xl lg:text-7xl">
              {t.hero.headline.map((line, i) => (
                <span
                  key={line}
                  className="block animate-fade-in"
                  style={{
                    animationDelay: `${180 + i * 180}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  {i === 2 ? <span className="text-primary">{line}</span> : line}
                </span>
              ))}
            </h1>

            <p
              className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-in sm:text-lg"
              style={{ animationDelay: "760ms", animationFillMode: "backwards" }}
            >
              {t.hero.text}
            </p>

            <div
              className="mt-9 flex flex-col gap-3 animate-fade-in sm:flex-row"
              style={{ animationDelay: "880ms", animationFillMode: "backwards" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:brightness-110"
              >
                {t.hero.ctaProjects}
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-surface"
              >
                {t.hero.ctaLinkedin}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const { lang } = useLanguage();
  const bars = [38, 56, 44, 72, 60, 88, 76];

  return (
    <div
      aria-hidden
      className="relative hidden animate-fade-in lg:block"
      style={{ animationDelay: "520ms", animationFillMode: "backwards" }}
    >
      <div className="card-surface hero-panel-motion soft-glow p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            pipeline
          </span>
          <div className="flex gap-1.5">
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-border-strong" />
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        </div>

        <div className="mt-6 flex h-36 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/25"
              style={{
                height: `${h}%`,
                background:
                  i === bars.length - 2
                    ? "color-mix(in oklab, var(--primary) 80%, transparent)"
                    : undefined,
              }}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {["problema", "dados", "solução"].map((label, i) => (
            <div key={label}>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                0{i + 1}
              </p>
              <p className="mt-1 text-sm text-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-surface hero-lower-card mt-4 flex items-center gap-4 p-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          <ChartNoAxesCombined className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary">
            {lang === "pt" ? "Do dado à decisão" : "From data to decisions"}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {lang === "pt"
              ? "Indicadores claros, soluções práticas"
              : "Clear metrics, practical solutions"}
          </p>
        </div>
        <span className="hidden rounded-full border border-border px-2 py-1 font-mono text-[0.55rem] tracking-wider text-muted-foreground sm:inline">
          BI / DATA
        </span>
      </div>
    </div>
  );
}
