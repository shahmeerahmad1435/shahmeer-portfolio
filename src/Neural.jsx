import { useEffect, useRef } from "react";

export default function Neural({ active }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = reduce ? 28 : 64;
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00022,
      vy: (Math.random() - 0.5) * 0.00022,
      e: Math.random() * 0.2,
    }));
    const pointer = { x: 0.62, y: 0.38, inside: false };
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const move = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.inside = true;
    };
    const leave = () => {
      pointer.inside = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      if (!active) {
        raf = requestAnimationFrame(draw);
        return;
      }

      nodes.forEach((node) => {
        if (!reduce) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0.04 || node.x > 0.96) node.vx *= -1;
          if (node.y < 0.04 || node.y > 0.96) node.vy *= -1;
        }
        node.e *= 0.96;
      });

      if (pointer.inside) {
        let nearest = 0;
        let best = Infinity;
        nodes.forEach((node, index) => {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const d = dx * dx + dy * dy;
          if (d < best) {
            best = d;
            nearest = index;
          }
        });
        nodes[nearest].e = 1;
      }

      const reach = Math.min(w, h) * 0.22;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.hypot(dx, dy);
          if (dist > reach) continue;
          const pulse = Math.max(a.e, b.e);
          const alpha = (1 - dist / reach) * (0.16 + pulse * 0.7);
          ctx.strokeStyle = pulse > 0.2
            ? `rgba(214, 242, 92, ${alpha})`
            : `rgba(232, 196, 140, ${alpha * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x * w, a.y * h);
          ctx.lineTo(b.x * w, b.y * h);
          ctx.stroke();
          if (pulse > 0.35) {
            b.e = Math.max(b.e, a.e * 0.72);
            a.e = Math.max(a.e, b.e * 0.72);
          }
        }
      }

      nodes.forEach((node) => {
        const r = 1.6 + node.e * 3.4;
        ctx.fillStyle = node.e > 0.25 ? "#d6f25c" : "#e8c48c";
        ctx.globalAlpha = 0.45 + node.e * 0.55;
        ctx.beginPath();
        ctx.arc(node.x * w, node.y * h, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      frame += 1;
      if (!reduce || frame < 2) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [active]);

  return <canvas ref={ref} className={`neural ${active ? "is-on" : ""}`} aria-hidden="true" />;
}
