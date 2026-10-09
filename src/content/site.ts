export type Lang = "pt" | "en";

export const LINKEDIN_URL = "https://www.linkedin.com/in/joaovictoro/";
export const EMAIL = "victordraco2002@gmail.com";

export type ProjectSlug = "dashboard-juridico" | "analise-vendas-xsales" | "acompanhamento-vendas" | "gestao-abastecimentos";

export type Project = {
  slug: ProjectSlug;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "dashboard-juridico",
    name: { pt: "Dashboard Jurídico", en: "Legal Dashboard" },
    description: {
      pt: "Solução de Business Intelligence desenvolvida a partir de uma necessidade real do setor jurídico, envolvendo desde a reestruturação da fonte de dados até a construção de indicadores e visualizações no Power BI.",
      en: "A Business Intelligence solution built from a real need in the legal department, covering everything from restructuring the data source to building indicators and visualizations in Power BI.",
    },
    tech: ["Power BI", "Power Query", "DAX", "Excel", "SharePoint"],
  },
  {
    slug: "gestao-abastecimentos",
    name: { pt: "Gestão de Abastecimentos — Frota Leve", en: "Fuel Management — Light Fleet" },
    description: {
      pt: "Projeto real desenvolvido para transformar mais de 6 mil registros de abastecimento em uma visão gerencial de custos por estado, cidade, placa e período, apoiando decisões de redução de gastos.",
      en: "Real project that transformed more than 6,000 fueling records into a management view of costs by state, city, vehicle, and period to support cost-reduction decisions.",
    },
    tech: ["Power BI", "Power Query", "DAX", "Excel"],
  },
  {
    slug: "analise-vendas-xsales",
    name: { pt: "Análise de Vendas — XSales", en: "Sales Analysis — XSales" },
    description: {
      pt: "Projeto de estudo desenvolvido para aprofundar conhecimentos em Business Intelligence, envolvendo Power Query, modelagem de dados, medidas DAX e layouts específicos para desktop e mobile.",
      en: "A study project built to deepen Business Intelligence skills, covering Power Query, data modeling, DAX measures, and dedicated desktop and mobile layouts.",
    },
    tech: ["Power BI", "Power Query", "DAX"],
  },
  {
    slug: "acompanhamento-vendas",
    name: { pt: "Dashboard de Acompanhamento de Vendas", en: "Sales Monitoring Dashboard" },
    description: {
      pt: "Projeto de estudo com base pública do Kaggle, focado em modelagem, relacionamentos, DAX e acompanhamento de indicadores comerciais por categoria, cliente, região e entrega.",
      en: "Study project using a public Kaggle dataset, focused on modeling, relationships, DAX, and sales indicators by category, customer, region, and delivery method.",
    },
    tech: ["Power BI", "Power Query", "DAX", "Kaggle"],
  },
];

export const technologies = [
  { name: "Power BI", featured: true },
  { name: "Power BI Service", featured: false },
  { name: "Power Query", featured: false },
  { name: "DAX", featured: false },
  { name: "SQL", featured: false },
  { name: "Excel", featured: false },
  { name: "Power Automate", featured: false },
  { name: "n8n", featured: false },
  { name: "pt:Automações com IA|en:AI automations", featured: false },
  { name: "Python", featured: false },
  { name: "Azure", featured: false },
];

export const dict = {
  pt: {
    nav: {
      about: "Sobre",
      tech: "Tecnologias",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
      menu: "Abrir menu",
      close: "Fechar menu",
      home: "Início",
      backHome: "Voltar para a Home",
    },
    hero: {
      role: "Analista de Business Intelligence",
      headline: ["Entendo o problema.", "Estruturo os dados.", "Construo a solução."],
      text: "Desenvolvo soluções de Business Intelligence e automação com foco em resolver problemas reais, buscando compreender primeiro o processo para então transformar dados em soluções úteis para o negócio.",
      ctaProjects: "Explorar projetos",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      eyebrow: "01 — Sobre",
      title: "Sobre mim",
      paragraphs: [
        "Sou Analista de Dados com foco em Business Intelligence e gosto principalmente de transformar problemas de negócio em soluções práticas utilizando dados e automação.",
        "Meu interesse pela área surgiu justamente da vontade de ajudar a resolver problemas reais. A partir das primeiras experiências estruturando dados e desenvolvendo soluções para necessidades do dia a dia, comecei a aprofundar meus conhecimentos em Power BI e no ecossistema de dados.",
        "Tenho um perfil autodidata e procuro entender o problema antes de escolher a ferramenta ou construir a solução. Atualmente, além de continuar evoluindo em Business Intelligence, venho ampliando meus conhecimentos em automação, Inteligência Artificial e desenvolvimento backend, principalmente com Java.",
      ],
    },
    tech: {
      eyebrow: "02 — Stack",
      title: "Tecnologias",
      subtitle: "Ferramentas que uso para estruturar dados e construir soluções.",
      main: "Principal ferramenta",
    },
    projects: {
      eyebrow: "03 — Trabalho",
      title: "Projetos",
      subtitle: "Projetos que demonstram resolução de problemas, análise e desenvolvimento técnico em Business Intelligence.",
      cta: "Ver case",
      coverAlt: "Capa do case Dashboard Jurídico",
      soon: "Novos cases em breve",
    },
    education: {
      eyebrow: "04 — Base",
      title: "Formação",
      degree: "Ciência da Computação",
      status: "Cursando",
      start: "Início em 2026",
      complementary:
        "Também possuo formações complementares em Dados, Business Intelligence, Automação e Inteligência Artificial.",
      institutions: "Instituições",
      cta: "Explorar certificações",
    },
    contact: {
      eyebrow: "05 — Contato",
      title: "Vamos conversar?",
      text: "Tem um projeto, oportunidade ou quer trocar uma ideia sobre dados e tecnologia?",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    footer: {
      tagline: "Dados • Business Intelligence • Automação",
      rights: "Todos os direitos reservados.",
    },
    soon: {
      badge: "Em construção",
      caseTitle: "Case: Dashboard Jurídico",
      caseText:
        "O detalhamento completo deste case está sendo preparado. Em breve você encontrará aqui o contexto do problema, a reestruturação dos dados e os indicadores construídos.",
      certTitle: "Certificações",
      certText:
        "A página completa de certificações está sendo preparada. Em breve você encontrará aqui as formações em Dados, Business Intelligence, Automação e Inteligência Artificial.",
    },
  },
  en: {
    nav: {
      about: "About",
      tech: "Technologies",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
      home: "Home",
      backHome: "Back to home",
    },
    hero: {
      role: "Business Intelligence Analyst",
      headline: ["I understand the problem.", "I structure the data.", "I build the solution."],
      text: "I build Business Intelligence and automation solutions focused on solving real problems, first understanding the process and then turning data into something genuinely useful for the business.",
      ctaProjects: "Explore projects",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      eyebrow: "01 — About",
      title: "About me",
      paragraphs: [
        "I'm a Data Analyst focused on Business Intelligence, and what I enjoy most is turning business problems into practical solutions using data and automation.",
        "My interest in the field came precisely from wanting to help solve real problems. After my first experiences structuring data and building solutions for everyday needs, I started going deeper into Power BI and the wider data ecosystem.",
        "I'm self-taught by nature and I try to understand the problem before choosing the tool or building the solution. Today, alongside growing in Business Intelligence, I'm expanding my knowledge in automation, Artificial Intelligence and backend development, mainly with Java.",
      ],
    },
    tech: {
      eyebrow: "02 — Stack",
      title: "Technologies",
      subtitle: "The tools I use to structure data and build solutions.",
      main: "Main tool",
    },
    projects: {
      eyebrow: "03 — Work",
      title: "Projects",
      subtitle: "Projects that demonstrate problem solving, analysis, and technical development in Business Intelligence.",
      cta: "View case",
      coverAlt: "Legal Dashboard case cover",
      soon: "New cases coming soon",
    },
    education: {
      eyebrow: "04 — Foundation",
      title: "Education",
      degree: "Computer Science",
      status: "In progress",
      start: "Starting in 2026",
      complementary:
        "I also have complementary training in Data, Business Intelligence, Automation and Artificial Intelligence.",
      institutions: "Institutions",
      cta: "Explore certifications",
    },
    contact: {
      eyebrow: "05 — Contact",
      title: "Shall we talk?",
      text: "Have a project, an opportunity, or just want to exchange ideas about data and technology?",
      linkedin: "LinkedIn",
      email: "Email",
    },
    footer: {
      tagline: "Data • Business Intelligence • Automation",
      rights: "All rights reserved.",
    },
    soon: {
      badge: "In progress",
      caseTitle: "Case: Legal Dashboard",
      caseText:
        "The full write-up for this case is being prepared. Soon you'll find here the problem context, the data restructuring and the indicators that were built.",
      certTitle: "Certifications",
      certText:
        "The full certifications page is being prepared. Soon you'll find here the training in Data, Business Intelligence, Automation and Artificial Intelligence.",
    },
  },
} as const;

export const institutions = ["Daxus", "Preditiva Analytics"];

export function techLabel(name: string, lang: Lang) {
  if (!name.startsWith("pt:")) return name;
  const [pt, en] = name.replace("pt:", "").split("|en:");
  return lang === "pt" ? pt : en;
}
