import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const sections = ["about", "tech", "projects", "education", "contact"] as const;

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border bg-background/78 shadow-[0_10px_40px_-30px_rgba(0,0,0,.9)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-2 sm:gap-4 md:h-20 md:gap-6">
        <Link
          to="/"
          className="shrink-0 font-display text-[0.72rem] font-semibold tracking-[0.12em] text-foreground transition-colors hover:text-primary sm:text-sm sm:tracking-[0.18em]"
        >
          JOÃO VICTOR
        </Link>

        <nav aria-label={t.nav.home} className="hidden items-center gap-8 md:flex">
          {sections.map((id) => (
            <a
              key={id}
              href={hrefFor(id)}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div
            role="group"
            aria-label="Idioma / Language"
            className="flex items-center gap-0.5 rounded-full border border-border p-0.5 text-[0.65rem] sm:gap-1 sm:p-1 sm:text-xs"
          >
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cn(
                  "rounded-full px-2 py-1 font-mono uppercase tracking-wider transition-colors sm:px-2.5",
                  lang === code
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="min-h-9 min-w-9 rounded-md border border-border p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label={t.nav.home}
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="section-shell flex flex-col py-2">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={hrefFor(id)}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
