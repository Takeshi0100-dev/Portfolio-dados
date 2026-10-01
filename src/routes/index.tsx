import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technologies } from "@/components/sections/Technologies";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Victor — Analista de Business Intelligence" },
      {
        name: "description",
        content:
          "Portfólio de João Victor, Analista de Dados e Business Intelligence: soluções em Power BI, SQL e automação para problemas reais de negócio.",
      },
      { property: "og:title", content: "João Victor — Analista de Business Intelligence" },
      {
        property: "og:description",
        content:
          "Entendo o problema. Estruturo os dados. Construo a solução. Portfólio de Dados, BI e automação.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:alt", content: "João Victor — portfólio de Dados e Business Intelligence" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
