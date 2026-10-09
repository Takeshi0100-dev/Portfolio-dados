import { useEffect, useRef } from "react";

type Dot = { x: number; y: number; alpha: number };
type Point = { x: number; y: number };

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

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
    let width = 1;
    let height = 128;
    let dpr = 1;
    let start = performance.now();
    let ready = false;

    const handles: Point[] = [
      { x: 0.18, y: 0.42 },
      { x: 0.72, y: 0.26 },
      { x: 0.84, y: 0.78 },
    ];

    const build = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(280, bounds.width);
      height = width < 420 ? 94 : 126;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mask = document.createElement("canvas");
      mask.width = Math.round(width);
      mask.height = height;
      const maskContext = mask.getContext("2d");
      if (!maskContext) return;

      const fontSize = Math.min(width < 420 ? 42 : 62, width / 8.3);
      maskContext.font = `800 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;
      maskContext.textAlign = "left";
      maskContext.textBaseline = "middle";
      maskContext.fillStyle = "#fff";
      maskContext.fillText("JOÃO VICTOR", 2, height / 2, width - 10);

      const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
      dots = [];
      const spacing = width < 420 ? 3.5 : 4;
      for (let y = 1; y < height; y += spacing) {
        for (let x = 1; x < width; x += spacing) {
          const index = (Math.floor(y) * mask.width + Math.floor(x)) * 4 + 3;
          if (pixels[index] > 75) dots.push({ x, y, alpha: pixels[index] / 255 });
        }
      }
      ready = true;
      start = performance.now();
    };

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000;
      const reveal = reducedMotion ? 1 : clamp(elapsed / 0.95, 0, 1);
      context.clearRect(0, 0, width, height);

      // Subtle coordinate grid behind the wordmark.
      context.save();
      context.strokeStyle = "rgba(103, 158, 225, 0.075)";
      context.lineWidth = 1;
      for (let x = 12; x < width; x += 24) {
        context.beginPath();
        context.moveTo(x, 8);
        context.lineTo(x, height - 8);
        context.stroke();
      }
      context.restore();

      const radius = 82;
      for (const dot of dots) {
        // Reveal the lettering from left to right instead of popping in all at once.
        const revealEdge = reveal * (width + 34) - 17;
        if (dot.x > revealEdge) continue;

        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active && distance < radius ? 1 - distance / radius : 0;
        const wave = reducedMotion ? 0 : Math.sin(elapsed * 1.35 + dot.x * 0.018) * 0.65;
        const push = influence * 14;
        const x = dot.x + (distance > 0 ? (dx / distance) * push : 0);
        const y = dot.y + (distance > 0 ? (dy / distance) * push : 0) + wave * (0.25 + influence);
        const bright = influence > 0.04;
        context.beginPath();
        context.fillStyle = bright
          ? `rgba(120, 190, 255, ${Math.min(1, dot.alpha * (0.6 + influence * 0.6))})`
          : `rgba(177, 202, 234, ${dot.alpha * 0.9})`;
        context.arc(x, y, bright ? 1.1 + influence * 0.7 : 1.05, 0, Math.PI * 2);
        context.fill();
      }

      // Three moving vector handles, connected with a dashed triangular guide.
      const points = handles.map((handle, index) => {
        const drift = reducedMotion ? 0 : Math.sin(elapsed * 0.8 + index * 2.1) * 0.018;
        const x = pointer.active
          ? clamp((pointer.x / width) * 0.34 + handle.x * 0.66, 0.08, 0.94)
          : clamp(handle.x + drift, 0.08, 0.94);
        const y = pointer.active
          ? clamp((pointer.y / height) * 0.28 + handle.y * 0.72, 0.12, 0.88)
          : clamp(handle.y + Math.cos(elapsed * 0.7 + index) * drift, 0.12, 0.88);
        return { x: x * width, y: y * height };
      });

      context.save();
      context.setLineDash([3, 5]);
      context.lineWidth = 1;
      context.strokeStyle = "rgba(105, 176, 255, 0.55)";
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);
      context.lineTo(points[1].x, points[1].y);
      context.lineTo(points[2].x, points[2].y);
      context.closePath();
      context.stroke();
      context.restore();

      points.forEach((point, index) => {
        const box = 18;
        context.save();
        context.strokeStyle = index === 1 ? "rgba(124, 190, 255, 0.95)" : "rgba(124, 190, 255, 0.65)";
        context.lineWidth = 1;
        context.strokeRect(point.x - box / 2, point.y - box / 2, box, box);
        context.fillStyle = "rgba(9, 22, 40, 0.92)";
        context.fillRect(point.x - 17, point.y + 12, 42, 13);
        context.font = '9px ui-monospace, SFMono-Regular, Menlo, monospace';
        context.fillStyle = "rgba(157, 202, 255, 0.95)";
        context.fillText(
          `${Math.round((point.x / width) * 100)},${Math.round((point.y / height) * 100)}`,
          point.x - 14,
          point.y + 21,
        );
        context.beginPath();
        context.arc(point.x, point.y, 2, 0, Math.PI * 2);
        context.fillStyle = "#8fc7ff";
        context.fill();
        context.restore();
      });

      // Fine scanning line gives the particle text a quiet, continuous life.
      if (!reducedMotion) {
        const scanX = ((elapsed * 42) % (width + 80)) - 40;
        const gradient = context.createLinearGradient(scanX - 22, 0, scanX + 22, 0);
        gradient.addColorStop(0, "rgba(91, 165, 255, 0)");
        gradient.addColorStop(0.5, "rgba(91, 165, 255, 0.11)");
        gradient.addColorStop(1, "rgba(91, 165, 255, 0)");
        context.fillStyle = gradient;
        context.fillRect(scanX - 22, 0, 44, height);
      }

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      if (!frame && !reducedMotion) frame = window.requestAnimationFrame(draw);
      else if (reducedMotion) draw(performance.now());
    };

    const onPointerLeave = () => {
      pointer.active = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      if (reducedMotion) draw(performance.now());
      else frame = window.requestAnimationFrame(draw);
    };

    build();
    if (ready) draw(performance.now());
    const observer = new ResizeObserver(() => {
      build();
      if (reducedMotion) draw(performance.now());
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
    <div
      ref={hostRef}
      className="w-full max-w-[38rem]"
      aria-label="João Victor, efeito tipográfico vetorial interativo"
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="João Victor formado por partículas, com caixas de coordenadas e linhas vetoriais interativas"
        className="block w-full"
      />
      <span className="sr-only">João Victor</span>
    </div>
  );
}
