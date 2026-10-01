import { useLanguage } from "@/lib/language";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
            JOÃO VICTOR
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {year} João Victor. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
