import type { Lang } from "@/content/site";

export const POWER_BI_XSALES_URL = "https://app.powerbi.com/view?r=eyJrIjoiNTQ1MjVjYjktM2M4Yi00N2NlLWFmOGUtZDg4YTU2ZmY3ODg0IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9";
export const xsalesTech = ["Power BI", "Power Query", "DAX"];

export const xsalesDax = [
  {
    title: { pt: "Faturamento Líquido", en: "Net Revenue" },
    code: `Faturamento Liquido =\nSUM(BD[Valor Total c/ Desconto])`,
    text: {
      pt: "Soma os valores das vendas já considerando os descontos aplicados.",
      en: "Sums sales values after applied discounts are taken into account.",
    },
  },
  {
    title: { pt: "Margem de Lucro", en: "Profit Margin" },
    code: `%lucro =\nDIVIDE([Lucro Total], [Faturamento Liquido])`,
    text: {
      pt: "Calcula a proporção do lucro em relação ao faturamento líquido, permitindo comparar rentabilidade entre diferentes contextos da análise.",
      en: "Calculates profit as a proportion of net revenue, allowing profitability to be compared across different analysis contexts.",
    },
  },
  {
    title: { pt: "Faturamento Médio", en: "Average Revenue" },
    code: `faturamento medio =\nDIVIDE(\n  [Faturamento Liquido],\n  DISTINCTCOUNT(BD[Data])\n)`,
    text: {
      pt: "Divide o faturamento líquido pela quantidade distinta de datas existentes no contexto atual da análise.",
      en: "Divides net revenue by the distinct number of dates in the current analysis context.",
    },
  },
];

const pt = {
  eyebrow: "PROJETO DE ESTUDO • BUSINESS INTELLIGENCE",
  title: "Análise de Vendas — XSales",
  description: "Um projeto de estudo construído para aprofundar conhecimentos em Power BI, da preparação dos dados à análise comercial em layouts desktop e mobile.",
  cta: "Explorar dashboard",
  coverAlt: "Dashboard Análise de Vendas XSales em versão desktop",
  context: {
    eyebrow: "Contexto",
    title: "Aprendizado aplicado em um dashboard completo",
    paragraphs: [
      "Este projeto foi desenvolvido durante meus estudos em Business Intelligence com o objetivo de aprofundar conhecimentos em Power BI, passando pelas etapas de preparação dos dados, estruturação do modelo, criação de cálculos e desenvolvimento da interface do dashboard.",
      "Os dados utilizados foram disponibilizados pela Daxus como parte do processo de aprendizagem. A partir dessas bases, realizei o tratamento das informações no Power Query e construí as análises no Power BI utilizando medidas DAX.",
      "O resultado foi um dashboard de vendas que permite analisar o desempenho sob diferentes perspectivas, incluindo evolução mensal, produtos, países, tipos de clientes, faturamento, custos, lucro e margem.",
    ],
  },
  flow: {
    eyebrow: "Processo",
    title: "Da base ao dashboard",
    steps: ["Dados disponibilizados", "Power Query", "Modelo de dados", "DAX", "Power BI", "Desktop + Mobile"],
  },
  pq: {
    eyebrow: "Power Query",
    title: "Preparação dos dados",
    text: "O Power Query foi utilizado para tratar e preparar a base antes da etapa analítica, deixando os dados adequados para a modelagem e para a construção dos indicadores no Power BI.",
  },
  model: {
    eyebrow: "Modelagem",
    title: "Calendário, base principal e medidas",
    text: "O modelo possui a tabela principal BD relacionada à Dcalendario em uma relação 1:N. Também foi utilizada uma tabela dedicada para organizar as medidas do relatório.",
    relation: "Dcalendario (1) → (*) BD",
    imageAlt: "Modelo de dados do projeto XSales mostrando Dcalendario relacionada à tabela BD e uma tabela de medidas",
    measuresAlt: "Lista de medidas DAX e campos utilizados no projeto XSales",
  },
  dax: {
    eyebrow: "DAX",
    title: "Indicadores para a análise comercial",
    text: "As medidas foram utilizadas para transformar os campos da base em indicadores de faturamento, custo, lucro, descontos e rentabilidade. Abaixo estão três exemplos do projeto.",
    why: "Objetivo da medida",
  },
  analysis: {
    eyebrow: "Análises",
    title: "Diferentes perspectivas de vendas",
    kpis: ["Faturamento líquido", "Custo", "Lucro", "Faturamento médio", "Descontos realizados"],
    views: ["Evolução do faturamento por mês", "Desempenho por produto", "Faturamento por país", "Margem de lucro por país", "Faturamento por tipo de cliente", "Margem por tipo de cliente", "Seleção entre 2018 e 2019"],
  },
  design: {
    eyebrow: "Design",
    title: "Experiência para desktop e mobile",
    text: "Além da interface principal para desktop, foi desenvolvida uma disposição específica para dispositivos móveis, reorganizando os elementos do dashboard para melhorar a leitura e a navegação em telas menores.",
    desktop: "Desktop",
    mobile: "Mobile",
    mobileAlt: "Layout mobile do dashboard XSales",
  },
  embed: {
    eyebrow: "Power BI interativo",
    title: "Explore o Dashboard",
    text: "Navegue pela versão publicada do projeto e explore os filtros e análises diretamente no Power BI.",
    open: "Abrir Dashboard Interativo",
    fullscreen: "Tela cheia",
    iframeTitle: "Análise de Vendas XSales — Power BI",
  },
  learning: {
    eyebrow: "Aprendizados",
    title: "Aprofundando o processo completo de BI",
    paragraphs: [
      "O projeto permitiu aprofundar conhecimentos em diferentes etapas do desenvolvimento de uma solução em Power BI, incluindo preparação de dados com Power Query, estruturação do modelo, criação de medidas DAX e desenvolvimento de visualizações para diferentes contextos de análise.",
      "Além da versão desktop, o desenvolvimento de um layout específico para dispositivos móveis também permitiu explorar diferentes formas de organizar e apresentar informações de acordo com o dispositivo utilizado.",
    ],
  },
  final: { techLabel: "Tecnologias utilizadas", back: "Voltar aos projetos", previous: "Projeto anterior" },
};

const en: typeof pt = {
  eyebrow: "STUDY PROJECT • BUSINESS INTELLIGENCE",
  title: "Sales Analysis — XSales",
  description: "A study project built to deepen Power BI skills, from data preparation to commercial analysis across dedicated desktop and mobile layouts.",
  cta: "Explore dashboard",
  coverAlt: "XSales Sales Analysis dashboard desktop layout",
  context: {
    eyebrow: "Context",
    title: "Learning applied through a complete dashboard",
    paragraphs: [
      "This project was developed during my Business Intelligence studies to deepen my Power BI knowledge across data preparation, model structuring, calculations, and dashboard interface development.",
      "The data was provided by Daxus as part of the learning process. I prepared the information in Power Query and built the Power BI analyses using DAX measures.",
      "The result is a sales dashboard that supports analysis from several perspectives, including monthly trends, products, countries, customer types, revenue, costs, profit, and margin.",
    ],
  },
  flow: {
    eyebrow: "Process",
    title: "From source data to dashboard",
    steps: ["Provided data", "Power Query", "Data model", "DAX", "Power BI", "Desktop + Mobile"],
  },
  pq: {
    eyebrow: "Power Query",
    title: "Preparing the data",
    text: "Power Query was used to treat and prepare the source before the analytical stage, making the data suitable for modeling and for building indicators in Power BI.",
  },
  model: {
    eyebrow: "Modeling",
    title: "Calendar, main table, and measures",
    text: "The model contains the main BD table related to Dcalendario through a 1:N relationship. A dedicated table was also used to organize report measures.",
    relation: "Dcalendario (1) → (*) BD",
    imageAlt: "XSales data model showing Dcalendario related to BD and a measures table",
    measuresAlt: "DAX measures and fields used in the XSales project",
  },
  dax: {
    eyebrow: "DAX",
    title: "Indicators for sales analysis",
    text: "Measures turn source fields into revenue, cost, profit, discount, and profitability indicators. Below are three examples from the project.",
    why: "Measure purpose",
  },
  analysis: {
    eyebrow: "Analysis",
    title: "Multiple sales perspectives",
    kpis: ["Net revenue", "Cost", "Profit", "Average revenue", "Discounts"],
    views: ["Monthly revenue trend", "Product performance", "Revenue by country", "Profit margin by country", "Revenue by customer type", "Margin by customer type", "2018 and 2019 selection"],
  },
  design: {
    eyebrow: "Design",
    title: "Desktop and mobile experiences",
    text: "In addition to the main desktop interface, a dedicated mobile layout was created, reorganizing dashboard elements to improve reading and navigation on smaller screens.",
    desktop: "Desktop",
    mobile: "Mobile",
    mobileAlt: "XSales dashboard mobile layout",
  },
  embed: {
    eyebrow: "Interactive Power BI",
    title: "Explore the Dashboard",
    text: "Navigate the published project and explore its filters and analyses directly in Power BI.",
    open: "Open Interactive Dashboard",
    fullscreen: "Fullscreen",
    iframeTitle: "XSales Sales Analysis — Power BI",
  },
  learning: {
    eyebrow: "Learnings",
    title: "Deepening the complete BI process",
    paragraphs: [
      "The project helped deepen my knowledge across several stages of a Power BI solution, including data preparation with Power Query, model structuring, DAX measure creation, and visualization development for different analysis contexts.",
      "Building a dedicated mobile layout also provided practice in organizing and presenting information according to the device being used.",
    ],
  },
  final: { techLabel: "Technologies used", back: "Back to projects", previous: "Previous project" },
};

export const xsalesDict: Record<Lang, typeof pt> = { pt, en };
