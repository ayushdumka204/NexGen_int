"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import createGlobe from "cobe";

// ─── Markers (outside component — never re-created) ───────────────────────────
const MARKERS = [
  { location: [28.6139, 77.209], size: 0.1 }, // Delhi
  { location: [19.076, 72.8777], size: 0.1 }, // Mumbai
  { location: [12.9716, 77.5946], size: 0.1 }, // Bengaluru
  { location: [22.5726, 88.3639], size: 0.1 }, // Kolkata
];

// ─── Fallback (WebGL unavailable) ────────────────────────────────────────────
const GlobeFallback = ({ className }) => (
  <div
    className={`relative w-full h-full flex items-center justify-center ${className}`}
  >
    <div className="relative w-full aspect-square">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(128,204,41,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 rounded-full overflow-hidden bg-[radial-gradient(circle_at_35%_35%,#2d1060,#0f0528)]">
        {[20, 35, 50, 65, 80].map((top) => (
          <div
            key={top}
            className="absolute w-full h-px bg-[rgba(128,204,41,0.2)]"
            style={{ top: `${top}%` }}
          />
        ))}
        <div className="absolute inset-0 animate-spin [animation-duration:12s] [animation-timing-function:linear]">
          {[0, 20, 40, 60, 80].map((left) => (
            <div
              key={left}
              className="absolute h-full w-px bg-[rgba(128,204,41,0.2)]"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>
        <div className="absolute opacity-60 rounded-full blur-[4px] bg-[rgba(128,204,41,0.35)] w-[28%] h-[22%] top-[22%] left-[18%]" />
        <div className="absolute opacity-60 rounded-full blur-[4px] bg-[rgba(128,204,41,0.35)] w-[22%] h-[28%] top-[30%] left-[48%]" />
        <div className="absolute opacity-50 rounded-full blur-[4px] bg-[rgba(128,204,41,0.3)] w-[18%] h-[16%] top-[55%] left-[38%]" />
        <div className="absolute opacity-50 rounded-full blur-[4px] bg-[rgba(128,204,41,0.3)] w-[14%] h-[18%] top-[25%] left-[72%]" />
        <div className="absolute w-2 h-2 rounded-full bg-[rgba(128,204,41,0.9)] animate-ping top-[38%] left-[62%]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[rgb(128,204,41)] top-[38.2%] left-[62.2%]" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      </div>
      <div className="absolute inset-0 rounded-full pointer-events-none shadow-[0_0_40px_8px_rgba(128,204,41,0.15)]" />
    </div>
  </div>
);

// ─── Earth ────────────────────────────────────────────────────────────────────
const Earth = ({ className }) => {
  // We size the globe using the WRAPPER div, not the canvas itself.
  // The canvas is position:absolute so it never drives layout.
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const roRef = useRef(null);
  const phiRef = useRef(0);
  const sizeRef = useRef(0); // current pixel size (square)
  const isDragging = useRef(false);

  const [webglOk, setWebglOk] = useState(true);
  const [ready, setReady] = useState(false);

  // ── create globe once we know the real size ──────────────────────────────
  const createOrResize = useCallback((size) => {
    if (size <= 0) return;
    sizeRef.current = size;

    // Already created → just let onRender pick up new sizeRef
    if (globeRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Explicitly size the canvas backing buffer
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    globeRef.current = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: 1.8, // start facing India
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [0.17, 0.07, 0.38],
      markerColor: [0.5, 0.8, 0.16],
      glowColor: [0.5, 0.8, 0.16],
      offset: [0, 0],
      markers: MARKERS,
      onRender: (state) => {
        if (!isDragging.current) phiRef.current += 0.003;
        state.phi = phiRef.current;
        // Always use latest sizeRef so resize works without re-init
        const s = sizeRef.current * dpr;
        state.width = s;
        state.height = s;
      },
    });

    setReady(true);
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    // WebGL check
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebglOk(false);
      return;
    }

    // Observe the WRAPPER (has real CSS size), not the canvas
    roRef.current = new ResizeObserver((entries) => {
      const entry = entries[0];
      const w =
        entry?.contentBoxSize?.[0]?.inlineSize ??
        entry?.contentRect?.width ??
        0;
      // Square: use width for both dimensions
      if (w > 0) createOrResize(Math.round(w));
    });

    roRef.current.observe(wrapper);

    // Fallback: if ResizeObserver fires too late, kick it manually
    const initialW = wrapper.getBoundingClientRect().width;
    if (initialW > 0) createOrResize(Math.round(initialW));

    return () => {
      roRef.current?.disconnect();
      globeRef.current?.destroy();
      globeRef.current = null;
    };
  }, [createOrResize]);

  if (!webglOk) return <GlobeFallback className={className} />;

  return (
    // Wrapper drives the layout size; canvas is absolutely placed inside
    <div
      ref={wrapperRef}
      className={`relative w-full aspect-square ${className}`}
    >
      {/* Canvas absolutely fills wrapper — never causes its own layout shift */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        onPointerDown={() => {
          isDragging.current = true;
        }}
        onPointerUp={() => {
          isDragging.current = false;
        }}
        onPointerOut={() => {
          isDragging.current = false;
        }}
      />

      {/* Pulse skeleton while globe loads */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-3/4 aspect-square rounded-full border border-dashed border-white/20 animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default Earth;
