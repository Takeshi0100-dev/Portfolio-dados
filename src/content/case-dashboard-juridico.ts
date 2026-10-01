import type { Lang } from "@/content/site";

export const POWER_BI_URL =
  "https://app.powerbi.com/view?r=eyJrIjoiNmMxNjczNTMtZDQ2Ni00ZGZjLWEyOTgtMWVjYzI5NDNmNjAwIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9";

export const caseTech = ["Power BI", "Power Query", "DAX", "Excel", "SharePoint"];

/** Next project link — set when another case exists; hidden while null. */
export const nextProject: { slug: string; name: Record<Lang, string> } | null = {
  slug: "analise-vendas-xsales",
  name: { pt: "Análise de Vendas — XSales", en: "Sales Analysis — XSales" },
};

export const dataStructures = [
  { name: "base_de_dados_juridico", fields: { pt: ["Categoria", "Processos", "Autor", "Réu", "Status", "Valor da causa", "Valor pago", "Proveito econômico"], en: ["Category", "Cases", "Plaintiff", "Defendant", "Status", "Claim amount", "Amount paid", "Economic benefit"] } },
  { name: "resolucao_adm", fields: { pt: ["Parte", "Demanda", "Valor cobrado", "Valor pago", "Proveito econômico"], en: ["Party", "Claim", "Amount claimed", "Amount paid", "Economic benefit"] } },
  { name: "demanda_ADM", fields: { pt: ["Demandas recebidas ADM", "Valor recebido"], en: ["Administrative claims received", "Amount received"] } },
  { name: "homologação", fields: { pt: ["Processo", "Status", "Reclamado"], en: ["Case", "Status", "Respondent"] } },
  { name: "antt", fields: { pt: ["Processo ADM ANTT – Piso Mínimo de Frete", "Valor"], en: ["ANTT administrative case – Minimum Freight Rate", "Amount"] } },
];

export const daxExamples = [
  {
    code: `TOTAL FINALIZADOS =
CALCULATE(
    SUM(base_de_dados_juridico[proveito economico]),
    base_de_dados_juridico[status] = "finalizado"
)`,
    text: {
      pt: "Para determinados indicadores, foi necessário considerar apenas processos que já haviam sido finalizados. Para isso, foram utilizadas medidas DAX com CALCULATE, alterando o contexto de filtro e retornando os valores correspondentes aos processos concluídos.",
      en: "Some indicators needed to consider only cases that had already been closed. To achieve this, DAX measures with CALCULATE were used to change the filter context and return the values for completed cases only.",
    },
  },
  {
    code: `quantidade de antt =
CALCULATE(
    COUNTROWS(antt)
)`,
    text: {
      pt: "Contagem dos processos administrativos da ANTT, usada para dar visibilidade ao volume dessa frente de trabalho no painel.",
      en: "A count of ANTT administrative cases, used to give visibility to the volume of this workstream on the dashboard.",
    },
  },
];

const pt = {
  eyebrow: "CASE • BUSINESS INTELLIGENCE",
  title: "Dashboard Jurídico",
  description: "Da organização de registros jurídicos à construção de uma solução de Business Intelligence utilizada em um cenário real.",
  cta: "Explorar dashboard",
  coverAlt: "Apresentação do Dashboard Jurídico",
  conf: {
    title: "Projeto baseado em um cenário real",
    text: "Este projeto foi desenvolvido a partir de uma necessidade real de negócio. Para preservar a confidencialidade da empresa, os dados apresentados nesta versão pública foram substituídos por informações fictícias e elementos capazes de identificar a organização foram removidos ou adaptados.",
  },
  context: {
    eyebrow: "Contexto",
    title: "Onde tudo começou",
    paragraphs: [
      "O projeto teve início a partir de uma conversa com um colaborador do setor jurídico, que me apresentou a forma como as informações dos processos eram controladas. Grande parte dos registros era mantida manualmente em documentos do Word, sem uma estrutura adequada para análise de dados.",
      "Isso dificultava a consolidação das informações, a criação de indicadores e uma visão gerencial da operação jurídica.",
      "Ao identificar essa oportunidade, propus reorganizar o processo de armazenamento das informações para posteriormente transformá-las em uma solução analítica.",
    ],
  },
  problem: {
    eyebrow: "Entendendo o problema",
    title: "Antes dos gráficos, as perguntas",
    paragraphs: [
      "O desenvolvimento não começou pela construção dos gráficos. A primeira etapa foi entender quem utilizaria a solução e quais decisões precisavam ser apoiadas pelos dados.",
      "Durante as reuniões com o setor jurídico, foram levantadas regras de negócio, necessidades de acompanhamento e particularidades dos cálculos utilizados internamente.",
      "A partir dessas conversas, os requisitos foram traduzidos em campos estruturados, indicadores e regras que posteriormente fariam parte da solução.",
    ],
    topicsLabel: "Levantado nas reuniões",
    topics: ["Necessidades", "Processos", "Informações importantes", "Regras de negócio", "Cálculo de proveito econômico"],
    flow: ["Necessidade do usuário", "Regra de negócio", "Dado", "Indicador", "Visualização"],
  },
  beforeAfter: {
    eyebrow: "Antes x Depois",
    title: "A transformação da fonte de dados",
    before: "Antes",
    after: "Depois",
    beforeItems: ["Documento Word", "Registros processo a processo", "Informações pouco padronizadas", "Cálculos no próprio documento", "Difícil consolidação", "Análise manual"],
    afterItems: ["Excel estruturado", "Estrutura tabular", "Campos definidos", "Regras de cálculo estruturadas", "Fonte armazenada no SharePoint", "Power Query", "Power BI", "Indicadores gerenciais"],
  },
  architecture: {
    eyebrow: "Arquitetura da solução",
    title: "Do setor jurídico à gestão",
    steps: ["Setor Jurídico", "Excel / SharePoint", "Power Query", "Power BI + DAX", "Dashboard", "Supervisor Jurídico", "Apresentação à gestão"],
  },
  data: {
    eyebrow: "Estrutura dos dados",
    title: "Uma base reconstruída em Excel",
    text: "A fonte foi reorganizada em cinco estruturas, cada uma representando um conjunto distinto de informações do setor.",
    fieldsLabel: "campos",
  },
  pq: {
    eyebrow: "Power Query",
    title: "Um ETL simples por escolha",
    text: "Boa parte da padronização ocorreu ainda durante a reconstrução da fonte. Por isso, o tratamento no Power Query permaneceu relativamente simples. As cinco estruturas foram carregadas no Power BI.",
    steps: ["Conexão com a fonte", "Navegação entre as estruturas", "Promoção dos cabeçalhos", "Definição dos tipos de dados", "Remoção de campos desnecessários, quando necessário"],
  },
  model: {
    eyebrow: "Modelo",
    title: "Estruturas independentes",
    text: "As estruturas representam conjuntos de informações diferentes. Não houve necessidade de relacionamentos entre as cinco estruturas para atender aos requisitos do projeto.",
  },
  dax: {
    eyebrow: "DAX e regras de negócio",
    title: "Regras que viraram indicadores",
    text: "As regras levantadas com o setor foram transformadas em indicadores. Foram utilizadas medidas para:",
    uses: ["Agregações financeiras", "Contagens", "Cálculos condicionais", "Filtros de status"],
    whyLabel: "Por que existe",
  },
  benefit: {
    eyebrow: "Regra de negócio",
    title: "Proveito econômico",
    text: "Esse indicador permite visualizar a diferença entre o valor envolvido ou cobrado e aquilo que efetivamente foi pago, seguindo a regra utilizada pelo setor.",
    example: "Exemplo conceitual",
    rows: [["Valor da causa", "R$ 10.000"], ["Valor pago", "R$ 0"], ["Proveito econômico", "R$ 10.000"]],
  },
  dashboard: {
    eyebrow: "Dashboard",
    title: "Quatro páginas, quatro visões",
    note: "A versão original utilizava elementos da identidade visual da empresa. Na versão pública, esses elementos foram adaptados ou removidos por confidencialidade.",
    screenshotSoon: "Captura de tela em breve",
    pageLabel: "Página",
    pages: [
      { title: "Capa", items: ["Tela de entrada com botão ACESSAR"] },
      { title: "Dashboard de Acompanhamento Jurídico", items: ["Processos", "Réus", "Status geral", "Autores", "Total em causa", "Total pago", "Proveito econômico", "Processos por categoria"] },
      { title: "Visão Geral Homologações | ANTT", items: ["Quantidade por status", "Homologações", "Processos administrativos", "Reclamados", "Quantidade de homologações", "Quantidade de processos ANTT"] },
      { title: "Demanda ADM | Resolução", items: ["Valor total recebido", "Demandas administrativas", "Valor cobrado", "Valor pago", "Proveito econômico", "Partes", "Categorias das demandas"] },
    ],
  },
  embed: {
    eyebrow: "Power BI interativo",
    title: "Explore o Dashboard",
    text: "Interaja com a versão demonstrativa do projeto diretamente pelo navegador. Todos os dados apresentados foram substituídos por informações fictícias para preservar a confidencialidade da empresa.",
    open: "Abrir Dashboard Interativo",
    fullscreen: "Tela cheia",
    iframeTitle: "Dashboard Jurídico — Power BI",
  },
  result: {
    eyebrow: "Resultado",
    title: "Uma solução em uso",
    paragraphs: [
      "Após o desenvolvimento e validação da solução, o dashboard passou a ser utilizado pelo setor jurídico como ferramenta de acompanhamento das informações.",
      "A solução substituiu a estrutura anterior baseada em registros no Word por uma base estruturada em Excel armazenada no SharePoint, que alimenta as análises desenvolvidas no Power BI.",
      "O dashboard também passou a ser utilizado pelo supervisor do setor como apoio na apresentação das informações jurídicas aos proprietários da empresa.",
      "A solução permanece em utilização atualmente.",
    ],
  },
  learning: {
    eyebrow: "Aprendizado",
    title: "BI vai além de dashboards",
    paragraphs: [
      "O principal aprendizado deste projeto foi perceber que desenvolver uma solução de Business Intelligence vai muito além da construção de dashboards.",
      "Grande parte do trabalho esteve na compreensão do problema, nas conversas com os usuários, na identificação das regras de negócio e na estruturação correta dos dados.",
      "O Power BI foi a etapa final de um processo que começou com uma necessidade real do negócio.",
    ],
  },
  final: { techLabel: "Tecnologias utilizadas", back: "Voltar aos projetos", next: "Próximo projeto" },
};

const en: typeof pt = {
  eyebrow: "CASE STUDY • BUSINESS INTELLIGENCE",
  title: "Legal Dashboard",
  description: "From organizing legal records to building a Business Intelligence solution used in a real-world setting.",
  cta: "Explore the dashboard",
  coverAlt: "Legal Dashboard overview",
  conf: {
    title: "Based on a real-world project",
    text: "This project was built to address a real business need. To protect the company's confidentiality, the data shown in this public version has been replaced with fictitious information, and any elements that could identify the organization have been removed or adapted.",
  },
  context: {
    eyebrow: "Context",
    title: "Where it all started",
    paragraphs: [
      "The project began with a conversation with a member of the legal department, who walked me through how case information was being tracked. Most records were kept manually in Word documents, with no structure suitable for data analysis.",
      "This made it hard to consolidate information, build indicators, or get a management-level view of legal operations.",
      "Seeing the opportunity, I proposed reorganizing how the information was stored so it could later be turned into an analytical solution.",
    ],
  },
  problem: {
    eyebrow: "Understanding the problem",
    title: "Questions before charts",
    paragraphs: [
      "Development did not start with building charts. The first step was understanding who would use the solution and which decisions the data needed to support.",
      "In meetings with the legal department, we mapped business rules, monitoring needs, and the specifics of the calculations used internally.",
      "Those conversations were then translated into structured fields, indicators, and rules that would become part of the solution.",
    ],
    topicsLabel: "Covered in the meetings",
    topics: ["Needs", "Processes", "Key information", "Business rules", "Economic benefit calculation"],
    flow: ["User need", "Business rule", "Data", "Indicator", "Visualization"],
  },
  beforeAfter: {
    eyebrow: "Before vs. After",
    title: "Transforming the data source",
    before: "Before",
    after: "After",
    beforeItems: ["Word document", "Case-by-case records", "Poorly standardized information", "Calculations inside the document", "Hard to consolidate", "Manual analysis"],
    afterItems: ["Structured Excel workbook", "Tabular structure", "Defined fields", "Structured calculation rules", "Source stored in SharePoint", "Power Query", "Power BI", "Management indicators"],
  },
  architecture: {
    eyebrow: "Solution architecture",
    title: "From the legal team to leadership",
    steps: ["Legal department", "Excel / SharePoint", "Power Query", "Power BI + DAX", "Dashboard", "Legal supervisor", "Presentation to leadership"],
  },
  data: {
    eyebrow: "Data structure",
    title: "A source rebuilt in Excel",
    text: "The source was reorganized into five structures, each representing a distinct set of the department's information.",
    fieldsLabel: "fields",
  },
  pq: {
    eyebrow: "Power Query",
    title: "A deliberately simple ETL",
    text: "Most of the standardization happened while the source itself was being rebuilt. As a result, the Power Query stage stayed fairly simple. All five structures were loaded into Power BI.",
    steps: ["Connecting to the source", "Navigating between structures", "Promoting headers", "Setting data types", "Removing unnecessary fields where needed"],
  },
  model: {
    eyebrow: "Model",
    title: "Independent structures",
    text: "Each structure represents a different set of information. No relationships between the five structures were needed to meet the project's requirements.",
  },
  dax: {
    eyebrow: "DAX and business rules",
    title: "Rules turned into indicators",
    text: "The rules gathered with the department were turned into indicators. Measures were used for:",
    uses: ["Financial aggregations", "Counts", "Conditional calculations", "Status filters"],
    whyLabel: "Why it exists",
  },
  benefit: {
    eyebrow: "Business rule",
    title: "Economic benefit",
    text: "This indicator shows the difference between the amount at stake or claimed and what was actually paid, following the rule used by the department.",
    example: "Conceptual example",
    rows: [["Claim amount", "R$ 10,000"], ["Amount paid", "R$ 0"], ["Economic benefit", "R$ 10,000"]],
  },
  dashboard: {
    eyebrow: "Dashboard",
    title: "Four pages, four perspectives",
    note: "The original version used elements of the company's visual identity. In this public version, those elements were adapted or removed for confidentiality.",
    screenshotSoon: "Screenshot coming soon",
    pageLabel: "Page",
    pages: [
      { title: "Cover", items: ["Landing screen with an ACCESS button"] },
      { title: "Legal Monitoring Dashboard", items: ["Cases", "Defendants", "Overall status", "Plaintiffs", "Total claimed", "Total paid", "Economic benefit", "Cases by category"] },
      { title: "Settlements | ANTT Overview", items: ["Count by status", "Settlements", "Administrative cases", "Respondents", "Number of settlements", "Number of ANTT cases"] },
      { title: "Administrative Claims | Resolution", items: ["Total amount received", "Administrative claims", "Amount claimed", "Amount paid", "Economic benefit", "Parties", "Claim categories"] },
    ],
  },
  embed: {
    eyebrow: "Interactive Power BI",
    title: "Explore the Dashboard",
    text: "Interact with the demo version of the project right in your browser. All data shown has been replaced with fictitious information to protect the company's confidentiality.",
    open: "Open Interactive Dashboard",
    fullscreen: "Fullscreen",
    iframeTitle: "Legal Dashboard — Power BI",
  },
  result: {
    eyebrow: "Outcome",
    title: "A solution in daily use",
    paragraphs: [
      "After development and validation, the legal department adopted the dashboard as its tool for monitoring case information.",
      "The solution replaced the previous Word-based records with a structured Excel source stored in SharePoint, which feeds the analyses built in Power BI.",
      "The department's supervisor also began using the dashboard to support presenting legal information to the company's owners.",
      "The solution is still in use today.",
    ],
  },
  learning: {
    eyebrow: "Key takeaway",
    title: "BI goes beyond dashboards",
    paragraphs: [
      "The main takeaway from this project was realizing that building a Business Intelligence solution goes far beyond creating dashboards.",
      "Most of the work lay in understanding the problem, talking with users, identifying business rules, and structuring the data correctly.",
      "Power BI was the final step of a process that started with a real business need.",
    ],
  },
  final: { techLabel: "Technologies used", back: "Back to projects", next: "Next project" },
};

export const caseDict: Record<Lang, typeof pt> = { pt, en };
