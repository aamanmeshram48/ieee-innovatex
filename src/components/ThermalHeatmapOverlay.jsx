import React, { useEffect, useRef, useState } from 'react';

/**
 * Gallery Play Signature Thermal Heatmap Cursor Trail
 * Faithfully mirrors the #heatmap-overlay implementation from https://gallery-play.be/
 * 5 Thermal Color Gradient:
 * #213ded (Electric Blue) -> #00acd7 (Cyan) -> #00b181 (Green) -> #e6c82a (Yellow) -> #ff3700 (Red)
 */
export default function ThermalHeatmapOverlay() {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    let points = [];
    let animationFrameId = null;
    let lastAdd = 0;
    const POINT_INTERVAL = 14; // ms
    const DECAY_MS = 2400; // trail persistence
    const RADIUS = 42;
    const SCALE = 0.5; // High-performance canvas downscale

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(1, Math.round(w * SCALE));
      canvas.height = Math.max(1, Math.round(h * SCALE));
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pre-create color stops for thermal heat intensity (0 to 1)
    const getThermalColor = (intensity) => {
      // 0.0 -> transparent
      // 0.2 -> #213ded (33, 61, 237)
      // 0.45 -> #00acd7 (0, 172, 215)
      // 0.7 -> #00b181 (0, 177, 129)
      // 0.88 -> #e6c82a (230, 200, 42)
      // 1.0 -> #ff3700 (255, 55, 0)
      if (intensity < 0.25) {
        const t = intensity / 0.25;
        return `rgba(33, 61, 237, ${t * 0.7})`;
      } else if (intensity < 0.5) {
        const t = (intensity - 0.25) / 0.25;
        return `rgba(${Math.round(33 + t * (0 - 33))}, ${Math.round(61 + t * (172 - 61))}, ${Math.round(237 + t * (215 - 237))}, 0.75)`;
      } else if (intensity < 0.75) {
        const t = (intensity - 0.5) / 0.25;
        return `rgba(${Math.round(0 + t * 0)}, ${Math.round(172 + t * (177 - 172))}, ${Math.round(215 + t * (129 - 215))}, 0.8)`;
      } else if (intensity < 0.9) {
        const t = (intensity - 0.75) / 0.15;
        return `rgba(${Math.round(0 + t * 230)}, ${Math.round(177 + t * (200 - 177))}, ${Math.round(129 + t * (42 - 129))}, 0.85)`;
      } else {
        const t = (intensity - 0.9) / 0.1;
        return `rgba(${Math.round(230 + t * (255 - 230))}, ${Math.round(200 + t * (55 - 200))}, ${Math.round(42 + t * (0 - 42))}, 0.9)`;
      }
    };

    const addPoint = (clientX, clientY) => {
      const now = performance.now();
      if (now - lastAdd < POINT_INTERVAL) return;
      lastAdd = now;

      points.push({
        x: clientX * SCALE,
        y: clientY * SCALE,
        time: now,
      });

      if (points.length > 90) {
        points.shift();
      }
    };

    const handlePointerMove = (e) => {
      if (e.clientX != null && e.clientY != null) {
        addPoint(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        addPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Render loop
    const render = (now) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cutoff = now - DECAY_MS;
      points = points.filter((p) => p.time >= cutoff);

      if (points.length > 0) {
        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          const age = now - pt.time;
          const life = Math.max(0, 1 - age / DECAY_MS);
          const eased = Math.pow(life, 2.5); // cubic decay like gallery-play.be
          const currentRadius = RADIUS * SCALE * (0.6 + eased * 0.4);

          const grad = ctx.createRadialGradient(
            pt.x,
            pt.y,
            0,
            pt.x,
            pt.y,
            currentRadius
          );

          grad.addColorStop(0, getThermalColor(eased));
          grad.addColorStop(0.4, getThermalColor(eased * 0.7));
          grad.addColorStop(0.8, getThermalColor(eased * 0.3));
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  return (
    <>
      {/* Fixed Fullscreen Thermal Canvas Overlay */}
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"
          style={{
            transformOrigin: '0 0',
            filter: 'blur(16px) brightness(1.15)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />
      )}

      {/* Discreet Thermal Effect Toggle Pill (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-40 hidden sm:block">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className="gp-button flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 backdrop-blur-md shadow-lg transition-all cursor-pointer"
          title="Toggle Gallery Play thermal cursor effect"
        >
          <span
            className="w-2 h-2 rounded-full transition-colors"
            style={{
              background: isEnabled
                ? 'linear-gradient(135deg, #00acd7, #ff3700)'
                : '#64748b',
              boxShadow: isEnabled ? '0 0 8px #00acd7' : 'none',
            }}
          />
          <span>HEATMAP {isEnabled ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </>
  );
}
