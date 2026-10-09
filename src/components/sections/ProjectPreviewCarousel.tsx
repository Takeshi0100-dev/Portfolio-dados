import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { ProjectSlug, Lang } from "@/content/site";
import { ProjectArtwork } from "@/components/sections/ProjectArtwork";
import legal1 from "@/assets/juridico-page1.png";
import legal2 from "@/assets/juridico-page2.png";
import legal3 from "@/assets/juridico-page3.png";
import legal4 from "@/assets/juridico-page4.png";
import fuel1 from "@/assets/gestao-abastecimentos.png";
import fuel2 from "@/assets/gestao-abastecimentos-model.png";
import sales1 from "@/assets/acompanhamento-vendas.png";
import sales2 from "@/assets/acompanhamento-vendas-model.png";
import sales3 from "@/assets/acompanhamento-vendas-measures.png";
import xsales1 from "@/assets/xsales-desktop.png";
import xsales2 from "@/assets/xsales-mobile.png";
import xsales3 from "@/assets/xsales-model.png";
import xsales4 from "@/assets/xsales-measures.png";

type Props = { slug: ProjectSlug; lang: Lang; title: string; featured?: boolean };

const previews: Record<ProjectSlug, string[]> = {
  "dashboard-juridico": [legal1, legal2, legal3, legal4],
  "gestao-abastecimentos": [fuel1, fuel2],
  "analise-vendas-xsales": [xsales1, xsales2, xsales3, xsales4],
  "acompanhamento-vendas": [sales1, sales2, sales3],
};

export function ProjectPreviewCarousel({ slug, lang, title, featured = false }: Props) {
  const images = previews[slug];
  // Slide 0 is the animated artwork; screenshots start at slide 1.
  const [active, setActive] = useState(0);
  const total = images.length + 1;
  const change = (direction: number) => setActive((current) => (current + direction + total) % total);
  const label = lang === "pt" ? "Prévia do dashboard" : "Dashboard preview";
  const isArtwork = active === 0;
  const currentImage = images[active - 1];

  return (
    <div className="project-cover-preview relative flex size-full min-h-48 items-center justify-center overflow-hidden bg-[#050b16] sm:min-h-56" role="group" aria-label={title}>
      {isArtwork ? (
        <ProjectArtwork slug={slug} lang={lang} title={title} />
      ) : (
        <img
          key={currentImage}
          src={currentImage}
          alt={`${label} ${active} de ${total - 1}`}
          className="project-preview-image relative z-0 size-full object-contain"
          loading="lazy"
        />
      )}
      {total > 1 && <>
        <button type="button" onClick={() => change(-1)} aria-label={lang === "pt" ? "Imagem anterior" : "Previous image"} className="project-preview-arrow left-3" title={lang === "pt" ? "Imagem anterior" : "Previous image"}><ChevronLeft className="size-5" /></button>
        <button type="button" onClick={() => change(1)} aria-label={lang === "pt" ? "Próxima imagem" : "Next image"} className="project-preview-arrow right-3" title={lang === "pt" ? "Próxima imagem" : "Next image"}><ChevronRight className="size-5" /></button>
        <div className="project-preview-counter"><Images className="size-3.5" />{active === 0 ? (lang === "pt" ? "Animação" : "Animation") : `${active} / ${total - 1}`}</div>
      </>}
      <div className="project-preview-dots" aria-label={lang === "pt" ? "Selecionar prévia" : "Select preview"}>
        {Array.from({ length: total }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={index === 0 ? (lang === "pt" ? "Ver animação" : "View animation") : (lang === "pt" ? `Ver imagem ${index} de ${images.length}` : `View image ${index} of ${images.length}`)}
            aria-current={active === index ? "true" : undefined}
            className={`project-preview-dot ${active === index ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
