import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={140}>
          <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
