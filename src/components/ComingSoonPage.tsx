import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language";

export function ComingSoonPage({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0" />
      <div className="section-shell relative max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{text}</p>
        <Link
          to="/"
          className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:brightness-125"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {t.nav.backHome}
        </Link>
      </div>
    </main>
  );
}
