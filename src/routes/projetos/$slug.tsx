import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/lib/language";
import { projects } from "@/content/site";
import salesCover from "@/assets/acompanhamento-vendas.png";
import salesModel from "@/assets/acompanhamento-vendas-model.png";
import salesMeasures from "@/assets/acompanhamento-vendas-measures.png";
import fuelCover from "@/assets/gestao-abastecimentos.png";
import fuelModel from "@/assets/gestao-abastecimentos-model.png";

const cases = {
  "acompanhamento-vendas": {
    cover: salesCover, model: salesModel, extra: salesMeasures,
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDEzMzAwMWEtYjQ1Mi00M2Q3LTljMGMtMGQ1YTNlYWI2MDcxIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    pt: {
      badge:"PROJETO DE ESTUDO • BUSINESS INTELLIGENCE", title:"Dashboard de Acompanhamento de Vendas", desc:"Análise comercial construída a partir de uma base pública do Kaggle para aprofundar conhecimentos em modelagem, DAX e visualização no Power BI.",
      context:["O projeto foi desenvolvido durante meus estudos em Business Intelligence utilizando uma base pública obtida no Kaggle. O objetivo foi praticar a construção de uma solução de acompanhamento comercial, desde a organização do modelo até a criação dos indicadores e visualizações.","O dashboard reúne análises de lucro por categoria e subcategoria, tipos de consumidores, métodos de entrega, estados mais lucrativos e filtros por ano."],
      model:"O modelo foi estruturado com tabelas dedicadas a calendário, clientes e vendas, além da tabela principal e uma área dedicada às medidas. Os relacionamentos permitem analisar o desempenho comercial por diferentes dimensões.",
      dax:[['Valor total de vendas',"valor total de vendas =\nSUM('d vendas'[Sales])"],['Total de pedidos',"Total De pedidos =\nCOUNTROWS('d vendas')"],['Lucro total',"total de lucro =\nSUM('d vendas'[Profit])"],['Ticket médio',"ticket medio =\nDIVIDE([valor total de vendas], [Total De pedidos])"]],
      analyses:["Lucro por categoria e subcategoria","Tipos de consumidores","Métodos de entrega","10 estados mais lucrativos","Ticket médio","Total de pedidos","Lucro total","Filtro temporal por ano"],
      learning:"O projeto aprofundou meus conhecimentos em relacionamentos entre tabelas, estruturação de modelos analíticos, criação de medidas DAX e construção de visões comerciais que combinam indicadores executivos e detalhamento operacional.",
    },
    en: {
      badge:"STUDY PROJECT • BUSINESS INTELLIGENCE", title:"Sales Monitoring Dashboard", desc:"Commercial analysis built from a public Kaggle dataset to deepen data modeling, DAX, and Power BI visualization skills.",
      context:["This project was developed during my Business Intelligence studies using a public dataset obtained from Kaggle. The goal was to practice building a sales monitoring solution from model organization through indicators and visualizations.","The dashboard combines profit analysis by category and subcategory, customer types, delivery methods, most profitable states, and year filters."],
      model:"The model was structured with dedicated calendar, customer, and sales tables, along with the main table and a dedicated measures area. Relationships support analysis across multiple business dimensions.",
      dax:[['Total sales',"valor total de vendas =\nSUM('d vendas'[Sales])"],['Total orders',"Total De pedidos =\nCOUNTROWS('d vendas')"],['Total profit',"total de lucro =\nSUM('d vendas'[Profit])"],['Average ticket',"ticket medio =\nDIVIDE([valor total de vendas], [Total De pedidos])"]],
      analyses:["Profit by category and subcategory","Customer types","Delivery methods","10 most profitable states","Average ticket","Total orders","Total profit","Year filter"],
      learning:"The project deepened my knowledge of table relationships, analytical model structuring, DAX measures, and sales views that combine executive indicators with operational detail.",
    }
  },
  "gestao-abastecimentos": {
    cover: fuelCover, model: fuelModel, extra: null,
    url: "https://app.powerbi.com/view?r=eyJrIjoiMzg2ZTgyZmEtNDU0My00ZWRhLWE1OTctZWQ5ZDEyOGJhMmJhIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    pt: {
      badge:"PROJETO REAL • BUSINESS INTELLIGENCE", title:"Gestão de Abastecimentos — Frota Leve", desc:"Solução desenvolvida para transformar milhares de registros de abastecimento em uma visão gerencial de custos e apoiar decisões de redução de gastos.",
      context:["A plataforma de abastecimentos X7 gerava um relatório em planilha com mais de 6 mil registros. A base informava onde cada abastecimento havia ocorrido, mas o local da transação não necessariamente correspondia à filial ou ao centro de custo ao qual o veículo pertencia.","Um veículo vinculado a uma filial poderia abastecer em outra cidade durante uma viagem. Para evitar que esse gasto fosse atribuído à região errada, foi necessário relacionar cada placa à sua localidade de referência. Essa etapa foi realizada no Excel com fórmulas, além da correção de placas e outras inconsistências da base.","Depois da preparação e correção dos dados, a base foi levada ao Power BI para modelagem, criação dos indicadores e desenvolvimento do dashboard."],
      model:"A estrutura no Power BI reúne calendário, placas, base de abastecimentos, vendas e medidas. Isso permite analisar os custos por estado, cidade/filial, placa e período, separando o local do abastecimento da localidade de referência do veículo.",
      dax:[['Valor total de abastecimento',"Valor Total de abastecimento =\nSUM('D VENDAS'[ Valor Total da venda ])"],['Valor por contexto regional',"Valor Total de abastecimento estados =\nSUM('D VENDAS'[ Valor Total da venda ])"]],
      analyses:["Valor total gasto em abastecimentos","Quantidade de abastecimentos","Custos por estado","Custos por cidade/filial","Custos por placa","Evolução mensal dos gastos"],
      learning:"O dashboard foi utilizado pelo responsável do setor em conjunto com a diretoria para analisar custos e apoiar o corte de gastos desnecessários. Parte da base pública foi reconstruída para preservar informações sigilosas, e a empresa mantém atualmente modelos semelhantes de acompanhamento.",
    },
    en: {
      badge:"REAL PROJECT • BUSINESS INTELLIGENCE", title:"Fuel Management — Light Fleet", desc:"A solution built to turn thousands of fueling records into a management view of costs and support cost-reduction decisions.",
      context:["The X7 fueling platform generated a spreadsheet report with more than 6,000 records. It showed where each fueling transaction occurred, but the transaction location did not necessarily match the branch or cost center the vehicle belonged to.","A vehicle assigned to one branch could refuel in another city during a trip. To avoid allocating that expense to the wrong region, each license plate had to be mapped to its reference location. This was done in Excel using formulas, along with corrections for incorrect plates and other inconsistencies.","After preparing and correcting the data, the dataset was taken into Power BI for modeling, indicators, and dashboard development."],
      model:"The Power BI structure brings together calendar, vehicle, fueling, sales, and measure tables. It supports cost analysis by state, branch/city, vehicle, and period while separating transaction location from the vehicle's reference location.",
      dax:[['Total fueling value',"Valor Total de abastecimento =\nSUM('D VENDAS'[ Valor Total da venda ])"],['Regional context value',"Valor Total de abastecimento estados =\nSUM('D VENDAS'[ Valor Total da venda ])"]],
      analyses:["Total fueling spend","Number of fueling transactions","Costs by state","Costs by branch/city","Costs by vehicle","Monthly spending trend"],
      learning:"The dashboard was used by the department lead together with company directors to analyze costs and support cuts to unnecessary spending. Part of the public dataset was rebuilt to protect confidential information, and similar monitoring models remain in use at the company.",
    }
  }
} as const;

export const Route = createFileRoute("/projetos/$slug")({
  beforeLoad: ({ params }) => { if (!projects.some((p) => p.slug === params.slug)) throw notFound(); },
  component: ProjectCase,
});

function useDesktop(){ const [v,setV]=useState(false); useEffect(()=>{const q=matchMedia('(min-width:1024px)');const u=()=>setV(q.matches);u();q.addEventListener('change',u);return()=>q.removeEventListener('change',u)},[]);return v; }
function Section({children}:{children:ReactNode}){return <section className="section-rule py-20 md:py-28"><div className="section-shell">{children}</div></section>}
function ProjectCase(){
 const {slug}=Route.useParams(); const {lang}=useLanguage(); const data=(cases as any)[slug]; const desktop=useDesktop();
 if(!data) return null; const c=data[lang];
 return <main id="main-content" className="relative overflow-x-hidden pt-24 sm:pt-28">
  <header className="section-shell pb-16"><Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4"/> {lang==='pt'?'Voltar aos projetos':'Back to projects'}</Link><Reveal className="mt-10"><span className="eyebrow">{c.badge}</span><h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl">{c.title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{c.desc}</p></Reveal><Reveal delay={120} className="mt-10"><div className="card-surface overflow-hidden border-primary/20"><img src={data.cover} alt={c.title} className="w-full"/></div></Reveal></header>
  <Section><div className="grid gap-10 lg:grid-cols-[.8fr_1.4fr]"><SectionHeading eyebrow={lang==='pt'?'Contexto':'Context'} title={lang==='pt'?'Do problema à análise':'From problem to analysis'}/><Reveal><div className="space-y-4 text-muted-foreground">{c.context.map((p:string)=><p key={p}>{p}</p>)}</div></Reveal></div></Section>
  <Section><SectionHeading eyebrow={lang==='pt'?'Modelagem':'Modeling'} title={lang==='pt'?'Estrutura dos dados':'Data structure'} subtitle={c.model}/><Reveal className="mt-10"><div className="card-surface overflow-hidden"><img src={data.model} alt={`${c.title} — modelo de dados`} className="w-full"/></div></Reveal>{data.extra&&<Reveal className="mt-6"><div className="card-surface mx-auto max-w-md overflow-hidden"><img src={data.extra} alt={`${c.title} — medidas`} className="w-full"/></div></Reveal>}</Section>
  <Section><SectionHeading eyebrow="DAX" title={lang==='pt'?'Indicadores utilizados':'Measures used'}/><div className="mt-10 grid gap-5 lg:grid-cols-2">{c.dax.map((x:any,i:number)=><Reveal key={x[0]} delay={i*70}><article className="card-surface overflow-hidden"><h3 className="border-b border-border p-5 font-semibold">{x[0]}</h3><pre className="overflow-x-auto bg-background/60 p-5 text-xs"><code>{x[1]}</code></pre></article></Reveal>)}</div></Section>
  <Section><SectionHeading eyebrow={lang==='pt'?'Análises':'Analysis'} title={lang==='pt'?'O que o dashboard permite acompanhar':'What the dashboard tracks'}/><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{c.analyses.map((x:string)=><div key={x} className="card-surface p-5 text-sm text-foreground">{x}</div>)}</div></Section>
  <Section><SectionHeading eyebrow={lang==='pt'?'Power BI interativo':'Interactive Power BI'} title={lang==='pt'?'Explore o Dashboard':'Explore the Dashboard'} /> <Reveal className="mt-10">{desktop?<div className="card-surface p-3"><div className="relative aspect-[16/9.4] overflow-hidden rounded-md"><iframe title={c.title} src={data.url} allowFullScreen loading="lazy" className="absolute inset-0 size-full border-0"/></div></div>:<div className="card-surface overflow-hidden"><img src={data.cover} alt={c.title} className="w-full"/><div className="p-5"><a href={data.url} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">{lang==='pt'?'Abrir Dashboard Interativo':'Open Interactive Dashboard'} <ExternalLink className="size-4"/></a></div></div>}</Reveal></Section>
  <Section><div className="grid gap-10 lg:grid-cols-[.8fr_1.4fr]"><SectionHeading eyebrow={lang==='pt'?'Resultado e aprendizados':'Results & learnings'} title={lang==='pt'?'O que este projeto demonstra':'What this project demonstrates'}/><Reveal><p className="border-l-2 border-primary pl-5 leading-relaxed text-muted-foreground">{c.learning}</p></Reveal></div></Section>
 </main>
}
