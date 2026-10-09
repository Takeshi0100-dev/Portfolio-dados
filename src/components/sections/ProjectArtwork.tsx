import type { ProjectSlug, Lang } from "@/content/site";

type Props = { slug: ProjectSlug; lang: Lang; title: string };

const labels: Record<ProjectSlug, { pt: string[]; en: string[] }> = {
  "dashboard-juridico": { pt: ["PROCESSOS", "PRAZOS", "INDICADORES"], en: ["CASES", "DEADLINES", "METRICS"] },
  "gestao-abastecimentos": { pt: ["FROTA", "CUSTOS", "CONSUMO"], en: ["FLEET", "COSTS", "FUEL USE"] },
  "analise-vendas-xsales": { pt: ["VENDAS", "DESEMPENHO", "TENDÊNCIA"], en: ["SALES", "PERFORMANCE", "TREND"] },
  "acompanhamento-vendas": { pt: ["RECEITA", "CATEGORIAS", "REGIÕES"], en: ["REVENUE", "CATEGORIES", "REGIONS"] },
};

export function ProjectArtwork({ slug, lang, title }: Props) {
  const text = labels[slug][lang];
  const id = `art-${slug}`;
  return (
    <div className="project-artwork relative flex size-full min-h-48 items-center justify-center overflow-hidden bg-[#050b16] sm:min-h-56" role="img" aria-label={title}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_45%,rgba(37,99,235,0.2),transparent_68%)]" />
      <svg viewBox="0 0 640 360" className="relative z-10 size-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#38bdf8" /><stop offset="1" stopColor="#2563eb" /></linearGradient>
          <linearGradient id={`${id}-panel`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#102748" /><stop offset="1" stopColor="#081326" /></linearGradient>
          <pattern id={`${id}-grid`} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="#1e3a5f" strokeOpacity=".35" strokeWidth="1" /></pattern>
        </defs>
        <rect width="640" height="360" fill={`url(#${id}-grid)`} />
        <path d="M30 292H610" stroke="#1e3a5f" />
        <text x="34" y="38" fill="#7dd3fc" fontSize="12" letterSpacing="3" fontFamily="ui-monospace, monospace">DATA / BUSINESS INTELLIGENCE</text>
        {slug === "dashboard-juridico" && <>
          <rect x="48" y="68" width="544" height="222" rx="16" fill={`url(#${id}-panel)`} stroke="#1d4ed8" strokeOpacity=".7" />
          <rect x="48" y="68" width="544" height="36" rx="16" fill="#102747" /><path d="M48 104H592" stroke="#1e40af" strokeOpacity=".6" />
          {[0,1,2].map(i => <circle key={i} cx={68+i*16} cy="86" r="3" fill={i===0?"#38bdf8":"#315174"} />)}
          {[0,1,2].map(i => <g key={i}><rect x={72+i*174} y="122" width="154" height="54" rx="8" fill="#0b1b31" stroke="#1e40af" strokeOpacity=".6" /><text x={84+i*174} y="141" fill="#7b9bbd" fontSize="9">{text[i]}</text><rect x={84+i*174} y="151" width={42+i*15} height="9" rx="4" fill={`url(#${id}-line)`} /></g>)}
          <rect x="72" y="192" width="306" height="76" rx="8" fill="#09182c" stroke="#1e3a5f" />
          {[0,1,2,3,4,5,6].map(i=><g key={i}><path d={`M${91+i*39} 207V254`} stroke="#1e3a5f" strokeDasharray="3 5"/><rect x={84+i*39} y={244-[18,30,24,42,34,49,58][i]*.55} width="14" height={[18,30,24,42,34,49,58][i]*.55} rx="3" fill={`url(#${id}-line)`}><animate attributeName="opacity" values=".55;1;.55" dur="2.8s" begin={`${i*.18}s`} repeatCount="indefinite"/></rect></g>)}
          <rect x="392" y="192" width="176" height="76" rx="8" fill="#09182c" stroke="#1e3a5f" /><circle cx="480" cy="230" r="25" stroke="#1e3a5f" strokeWidth="9"/><circle cx="480" cy="230" r="25" stroke="#38bdf8" strokeWidth="9" strokeDasharray="92 66" transform="rotate(-90 480 230)"><animateTransform attributeName="transform" type="rotate" from="0 480 230" to="360 480 230" dur="18s" repeatCount="indefinite"/></circle>
        </>}
        {slug === "gestao-abastecimentos" && <>
          <path d="M80 270L185 214L286 240L400 159L548 187" stroke="#1d4ed8" strokeWidth="1.5" strokeDasharray="4 8"/>
          {[0,1,2,3].map(i=><g key={i}><rect x={70+i*136} y={112+(i%2)*16} width="112" height="158" rx="12" fill={`url(#${id}-panel)`} stroke="#1d4ed8" strokeOpacity=".6"/><path d={`M${92+i*136} 145H${160+i*136}`} stroke="#315174" strokeWidth="5" strokeLinecap="round"/><path d={`M${92+i*136} 162H${145+i*136}`} stroke="#1e3a5f" strokeWidth="4" strokeLinecap="round"/><g transform={`translate(${98+i*136} 188)`}><rect width="54" height="30" rx="6" fill="#0b2340" stroke="#2563eb"/><path d="M8 20H46L40 10H15L8 20Z" stroke="#7dd3fc" strokeWidth="2"/><circle cx="17" cy="22" r="4" fill="#38bdf8"/><circle cx="38" cy="22" r="4" fill="#38bdf8"/></g><text x={126+i*136} y="246" fill="#93c5fd" fontSize="9" textAnchor="middle">{text[i%3]}</text></g>)}
          <circle cx="320" cy="94" r="8" fill="#38bdf8"><animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/></circle>
        </>}
        {slug === "analise-vendas-xsales" && <>
          <rect x="48" y="70" width="544" height="218" rx="16" fill={`url(#${id}-panel)`} stroke="#1d4ed8" strokeOpacity=".7"/>
          <text x="72" y="101" fill="#93c5fd" fontSize="11" letterSpacing="2">{text[0]}</text>
          {[0,1,2].map(i=><g key={i}><rect x={72+i*174} y="116" width="154" height="46" rx="8" fill="#0b1b31" stroke="#1e3a5f"/><path d={`M${88+i*174} 145L${103+i*174} 136L${118+i*174} 140L${133+i*174} 126L${149+i*174} 132`} stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><animate attributeName="stroke-dasharray" values="0 100;100 0" dur="3s" repeatCount="indefinite"/></path></g>)}
          <rect x="72" y="180" width="496" height="86" rx="8" fill="#081629" stroke="#1e3a5f"/>
          {[0,1,2,3,4,5,6,7,8,9].map(i=><rect key={i} x={90+i*45} y={244-[22,37,30,53,44,60,38,69,52,76][i]*.72} width="19" height={[22,37,30,53,44,60,38,69,52,76][i]*.72} rx="4" fill={`url(#${id}-line)`} opacity=".85"><animate attributeName="height" values={`${[22,37,30,53,44,60,38,69,52,76][i]*.5};${[22,37,30,53,44,60,38,69,52,76][i]*.72};${[22,37,30,53,44,60,38,69,52,76][i]*.5}`} dur="2.2s" begin={`${i*.12}s`} repeatCount="indefinite"/></rect>)}
        </>}
        {slug === "acompanhamento-vendas" && <>
          <rect x="48" y="68" width="544" height="222" rx="16" fill={`url(#${id}-panel)`} stroke="#1d4ed8" strokeOpacity=".7"/>
          <text x="72" y="99" fill="#93c5fd" fontSize="11" letterSpacing="2">{text[0]}</text>
          <path d="M80 248H560M80 212H560M80 176H560M80 140H560" stroke="#1e3a5f" strokeDasharray="3 7"/>
          <path d="M82 234C130 218 147 238 190 196S258 207 300 163S370 178 408 132S480 150 556 108" stroke="#1d4ed8" strokeWidth="9" strokeOpacity=".18" strokeLinecap="round"/>
          <path d="M82 234C130 218 147 238 190 196S258 207 300 163S370 178 408 132S480 150 556 108" stroke={`url(#${id}-line)`} strokeWidth="3" strokeLinecap="round" strokeDasharray="600" strokeDashoffset="600"><animate attributeName="stroke-dashoffset" from="600" to="0" dur="3s" repeatCount="indefinite"/></path>
          {[190,300,408,556].map((x,i)=><circle key={x} cx={x} cy={[196,163,132,108][i]} r="5" fill="#7dd3fc" stroke="#0b1b31" strokeWidth="3"><animate attributeName="r" values="4;6;4" dur="2s" begin={`${i*.3}s`} repeatCount="indefinite"/></circle>)}
          <rect x="82" y="112" width="98" height="28" rx="7" fill="#0b2340" stroke="#1d4ed8"/><text x="131" y="130" fill="#7dd3fc" fontSize="10" textAnchor="middle">{text[1]}</text>
          <rect x="432" y="246" width="126" height="26" rx="7" fill="#0b2340" stroke="#1d4ed8"/><text x="495" y="263" fill="#7dd3fc" fontSize="10" textAnchor="middle">{text[2]}</text>
        </>}
        <text x="34" y="330" fill="#47719e" fontSize="10" letterSpacing="2" fontFamily="ui-monospace, monospace">INSIGHT IN MOTION / {slug.toUpperCase()}</text>
        <circle cx="590" cy="328" r="4" fill="#38bdf8"><animate attributeName="opacity" values=".3;1;.3" dur="1.8s" repeatCount="indefinite"/></circle>
      </svg>
    </div>
  );
}
