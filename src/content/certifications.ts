import type { Lang } from "@/content/site";

export type CertificationCategory = "power-bi" | "data" | "automation" | "ai" | "other";

export type Certification = {
  id: string;
  title: string;
  institution: string;
  category: CertificationCategory;
  date: string;
  hours: number;
  certificateUrl: string;
};

export const certifications: Certification[] = [
  {
    id: "fundamentos-analytics-preditiva",
    title: "Fundamentos de Analytics",
    institution: "Preditiva.ai",
    category: "data",
    date: "2026-02-25",
    hours: 80,
    certificateUrl: "/certificados/fundamentos-de-analytics-preditiva.pdf",
  },
  {
    id: "excel-analise-dados-preditiva",
    title: "Excel para Análise de Dados",
    institution: "Preditiva.ai",
    category: "data",
    date: "2026-01-24",
    hours: 12,
    certificateUrl: "/certificados/excel-para-analise-de-dados-preditiva.pdf",
  },

  {
    id: "power-bi-service",
    title: "Power BI Service",
    institution: "Daxus",
    category: "power-bi",
    date: "2026-09-25",
    hours: 8,
    certificateUrl: "/certificados/power-bi-service.pdf",
  },
  {
    id: "power-query-modelagem",
    title: "Dominando Power Query e Modelagem de Dados",
    institution: "Daxus",
    category: "data",
    date: "2026-09-09",
    hours: 8,
    certificateUrl: "/certificados/power-query-modelagem-de-dados.pdf",
  },
  {
    id: "automacoes-agentes-ia",
    title: "Automações e Agentes de IA",
    institution: "Daxus",
    category: "automation",
    date: "2026-08-28",
    hours: 9,
    certificateUrl: "/certificados/automacoes-e-agentes-de-ia.pdf",
  },
  {
    id: "design-dashboards",
    title: "Design de Dashboards",
    institution: "Daxus",
    category: "power-bi",
    date: "2026-06-14",
    hours: 5,
    certificateUrl: "/certificados/design-de-dashboards.pdf",
  },
  {
    id: "primeiros-passos-ia",
    title: "Primeiros passos na Inteligência Artificial",
    institution: "Daxus",
    category: "ai",
    date: "2026-06-08",
    hours: 5,
    certificateUrl: "/certificados/primeiros-passos-inteligencia-artificial.pdf",
  },
  {
    id: "aplicacoes-ferramentas-ia",
    title: "Aplicações e Ferramentas de IA",
    institution: "Daxus",
    category: "ai",
    date: "2026-03-19",
    hours: 7,
    certificateUrl: "/certificados/aplicacoes-e-ferramentas-de-ia.pdf",
  },
  {
    id: "fundamentos-dax",
    title: "Fundamentos de DAX",
    institution: "Daxus",
    category: "power-bi",
    date: "2026-03-11",
    hours: 8,
    certificateUrl: "/certificados/fundamentos-de-dax.pdf",
  },
  {
    id: "fundamentos-power-bi",
    title: "Fundamentos de Power BI",
    institution: "Daxus",
    category: "power-bi",
    date: "2026-02-22",
    hours: 12,
    certificateUrl: "/certificados/fundamentos-de-power-bi.pdf",
  },
];

export const certificationCategoryLabels: Record<Lang, Record<CertificationCategory | "all", string>> = {
  pt: {
    all: "Todas",
    "power-bi": "Power BI",
    data: "Dados",
    automation: "Automação",
    ai: "IA",
    other: "Outros",
  },
  en: {
    all: "All",
    "power-bi": "Power BI",
    data: "Data",
    automation: "Automation",
    ai: "AI",
    other: "Other",
  },
};
