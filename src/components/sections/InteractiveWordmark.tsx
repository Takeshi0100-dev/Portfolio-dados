import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; baseX: number; baseY: number; alpha: number };

export function InteractiveWordmark() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !host || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let frame = 0;
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const build = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(280, bounds.width);
      height = width < 420 ? 84 : 112;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mask = document.createElement("canvas");
      mask.width = Math.round(width);
      mask.height = height;
      const maskContext = mask.getContext("2d");
      if (!maskContext) return;

      const fontSize = Math.min(width < 420 ? 48 : 70, width / 8.5);
      maskContext.font = `700 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;
      maskContext.textAlign = "left";
      maskContext.textBaseline = "middle";
      maskContext.fillStyle = "#fff";
      maskContext.fillText("JOÃO VICTOR", 1, height / 2 + 1, width - 8);

      const pixels = maskContext.getImageData(0, 0, Math.round(width), height).data;
      dots = [];
      const spacing = width < 420 ? 4 : 4.5;
      for (let y = 1; y < height; y += spacing) {
        for (let x = 1; x < width; x += spacing) {
          const alpha = pixels[(Math.floor(y) * Math.round(width) + Math.floor(x)) * 4 + 3];
          if (alpha > 80) dots.push({ x, y, baseX: x, baseY: y, alpha: alpha / 255 });
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const radius = 76;
      for (const dot of dots) {
        let x = dot.baseX;
        let y = dot.baseY;
        let influence = 0;
        if (pointer.active && !reducedMotion) {
          const dx = dot.baseX - pointer.x;
          const dy = dot.baseY - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < radius) {
            influence = 1 - distance / radius;
            const push = influence * 17;
            x += (dx / (distance || 1)) * push;
            y += (dy / (distance || 1)) * push;
          }
        }
        const glow = influence > 0.02;
        context.beginPath();
        context.fillStyle = glow
          ? `rgba(105, 176, 255, ${Math.min(1, dot.alpha * (0.55 + influence * 0.65))})`
          : `rgba(164, 190, 224, ${dot.alpha * 0.82})`;
        context.arc(x, y, glow ? 1.25 + influence * 0.6 : 1.05, 0, Math.PI * 2);
        context.fill();
      }
      if (pointer.active && !reducedMotion) frame = window.requestAnimationFrame(draw);
      else frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      if (!frame) frame = window.requestAnimationFrame(draw);
    };
    const onPointerLeave = () => {
      pointer.active = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(draw);
    };

    build();
    draw();
    const observer = new ResizeObserver(() => {
      build();
      if (!pointer.active || reducedMotion) draw();
    });
    observer.observe(host);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={hostRef} className="w-full max-w-[38rem]" aria-label="João Victor, efeito tipográfico interativo">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="João Victor em tipografia formada por pontos azuis interativos"
        className="block w-full"
      />
      <span className="sr-only">João Victor</span>
    </div>
  );
}
