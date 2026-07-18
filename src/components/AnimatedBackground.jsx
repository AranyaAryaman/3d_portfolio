import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

// Per-page content sets. `pool` = null means "use digits" (quant feel).
const VARIANTS = {
  quant: {
    pool: null,
    phrases: [
      "C = S·N(d₁) − K·e^(−rT)·N(d₂)",
      "Sharpe = (Rₚ − R_f) / σₚ",
      "dS = μS·dt + σS·dW",
      "β = Cov(r, m) / Var(m)",
      "E[R] = R_f + β(R_m − R_f)",
      "σ = √( Σ(xᵢ − μ)² / n )",
      "Δ = ∂C/∂S      Γ = ∂²C/∂S²",
      "VaR_α = μ − z_α·σ",
      "f* = (bp − q) / b",
      "P&L = Σ wᵢ·rᵢ − costs",
    ],
  },
  code: {
    pool: ["{", "}", "</>", "()", "=>", "[]", "//", "&&", "||", "fn", "let", "::", "++"],
    phrases: [
      "const alpha = f(x)",
      "while (!done) iterate()",
      "model.fit(X, y)",
      "O(n log n)",
      "git commit -m \"ship\"",
      "return insight;",
      "async () => await run()",
    ],
  },
  accolades: {
    pool: ["★", "✦", "✧", "◆", "♦", "▲", "+", "0", "1", "7"],
    phrases: [
      "top 2%",
      "170 / 170",
      "AIR 570",
      "4.0 GPA",
      "AIR 176",
      "+2.39 Sharpe",
    ],
  },
  academic: {
    pool: ["Σ", "π", "∫", "∂", "√", "∞", "λ", "Δ", "≈", "∇", "→"],
    phrases: [
      "teach · learn · grow",
      "mentor → student",
      "office hours 3-5pm",
      "knowledge compounds",
    ],
  },
  hobbies: {
    pool: ["♪", "♫", "♩", "♬", "सा", "रे", "ग", "म", "प", "ध", "नी", "~", "⚽"],
    phrases: [
      "सा रे ग म प ध नी सा",
      "swim · sing · play",
      "♪  〜〜  ⚽",
      "do re mi fa so",
    ],
  },
  contact: {
    pool: ["@", "✉", "·", "-", "»", "☎", "→"],
    phrases: ["let's connect", "say hello", "reach out", "@ aranya"],
  },
};

// Quant-flavored, mouse-interactive backdrop that changes its symbols per page.
const AnimatedBackground = ({ variant = "quant" }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const cfg = VARIANTS[variant] || VARIANTS.quant;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const palette =
      theme === "dark"
        ? { base: "237,235,230", accent: "201,162,75", baseA: 0.2, accentA: 0.3 }
        : { base: "24,24,27", accent: "168,133,58", baseA: 0.17, accentA: 0.26 };

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf;

    const mouse = { x: -9999, y: -9999, ex: -9999, ey: -9999 };
    const R = 190;

    const rand = (n) => Math.floor(Math.random() * n);
    const digit = () => String(rand(10));
    const token = () =>
      cfg.pool
        ? cfg.pool[rand(cfg.pool.length)]
        : Math.random() > 0.8
        ? digit() + digit()
        : digit();
    const driftText = () =>
      cfg.pool
        ? cfg.pool[rand(cfg.pool.length)]
        : Math.random() > 0.5
        ? (Math.random() * 100).toFixed(2)
        : String(rand(1000));
    const phrase = () =>
      cfg.phrases[rand(cfg.phrases.length)] || token();

    let rings = [];
    let drifters = [];
    let phrases = [];

    const build = () => {
      const minSide = Math.min(width, height);
      rings = [0.92, 0.7, 0.48, 0.28].map((f, i) => {
        const radius = (minSide / 2) * f;
        const count = Math.max(14, Math.round(radius / 24));
        return {
          radius,
          count,
          rotation: Math.random() * Math.PI * 2,
          speed: (i % 2 === 0 ? 1 : -1) * (0.0011 + i * 0.0004),
          chars: Array.from({ length: count }, token),
          fontSize: 13 + (3 - i) * 2,
          gold: i === 1 || i === 3,
        };
      });

      const fCount = Math.max(4, Math.min(9, Math.round(width / 220)));
      phrases = Array.from({ length: fCount }, (_, i) => ({
        x: 40 + Math.random() * Math.max(60, width - 360),
        y: (height / fCount) * i + Math.random() * 60,
        vy: 0.06 + Math.random() * 0.16,
        text: phrase(),
        size: 14 + rand(4),
        alpha: 0.06 + Math.random() * 0.06,
        gold: Math.random() > 0.6,
      }));

      const target = Math.round((width * height) / 34000);
      drifters = Array.from({ length: Math.min(60, target) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        ox: 0,
        oy: 0,
        vy: 0.14 + Math.random() * 0.4,
        text: driftText(),
        size: 10 + rand(6),
        alpha: 0.05 + Math.random() * 0.09,
        gold: Math.random() > 0.85,
      }));
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const glyph = (ch, x, y, baseAlpha, gold) => {
      const dx = x - mouse.ex;
      const dy = y - mouse.ey;
      const dist = Math.hypot(dx, dy);
      let alpha = baseAlpha;
      let useGold = gold;
      if (dist < R) {
        const t = 1 - dist / R;
        alpha = baseAlpha + t * 0.55;
        if (t > 0.4) useGold = true;
      }
      const rgb = useGold ? palette.accent : palette.base;
      ctx.fillStyle = `rgba(${rgb},${alpha})`;
      ctx.fillText(ch, x, y);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.ex += (mouse.x - mouse.ex) * 0.08;
      mouse.ey += (mouse.y - mouse.ey) * 0.08;

      const px = (mouse.ex - width / 2) * 0.015;
      const py = (mouse.ey - height / 2) * 0.015;
      const cx = width / 2 + px;
      const cy = height * 0.45 + py;

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      rings.forEach((ring) => {
        if (!reduce) ring.rotation += ring.speed;
        ctx.font = `${ring.fontSize}px "JetBrains Mono", ui-monospace, monospace`;
        for (let i = 0; i < ring.count; i++) {
          const a = ring.rotation + (i / ring.count) * Math.PI * 2;
          const x = cx + Math.cos(a) * ring.radius;
          const y = cy + Math.sin(a) * ring.radius;
          const flick = 0.6 + 0.4 * Math.sin(a * 3 + ring.rotation * 6);
          glyph(
            ring.chars[i],
            x,
            y,
            (ring.gold ? palette.accentA : palette.baseA) * flick,
            ring.gold
          );
        }
      });

      ctx.textAlign = "left";
      phrases.forEach((f) => {
        if (!reduce) {
          f.y -= f.vy;
          if (f.y < -30) {
            f.y = height + 30;
            f.x = 40 + Math.random() * Math.max(60, width - 360);
            f.text = phrase();
          }
        }
        ctx.font = `${f.size}px "JetBrains Mono", ui-monospace, monospace`;
        glyph(f.text, f.x + px * 1.2, f.y + py * 1.2, f.alpha, f.gold);
      });

      ctx.textAlign = "center";
      drifters.forEach((d) => {
        if (!reduce) {
          d.y -= d.vy;
          if (d.y < -20) {
            d.y = height + 20;
            d.x = Math.random() * width;
          }
        }
        const dx = d.x - mouse.ex;
        const dy = d.y - mouse.ey;
        const dist = Math.hypot(dx, dy);
        let tx = 0;
        let ty = 0;
        if (dist < R && dist > 0.01) {
          const push = (1 - dist / R) * 18;
          tx = (dx / dist) * push;
          ty = (dy / dist) * push;
        }
        d.ox += (tx - d.ox) * 0.1;
        d.oy += (ty - d.oy) * 0.1;

        ctx.font = `${d.size}px "JetBrains Mono", ui-monospace, monospace`;
        glyph(
          d.text,
          d.x + d.ox + px * 1.4,
          d.y + d.oy + py * 1.4,
          d.alpha,
          d.gold
        );
      });

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, [theme, variant]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default AnimatedBackground;
