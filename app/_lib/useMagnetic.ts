"use client";

import { useEffect, useRef } from "react";

const SETTLE_EPSILON = 0.02;

/**
 * Pulls an element a few pixels toward the pointer with spring physics,
 * then eases back to rest on leave. Reserved for a single rare/first-time
 * element (the hero's primary CTA) — decorative mouse-tracking like this
 * only earns its place at low frequency. See emil-design-eng skill.
 *
 * Hand-rolled rather than pulling in a motion library: one spring, one
 * element, direct `transform` writes on a ref (no re-renders) — the
 * "cheapest tool that works" for this specific case.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.3, max = 12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let vx = 0;
    let vy = 0;
    let raf = 0;
    let running = false;

    const stiffness = 0.18;
    const damping = 0.72;

    const tick = () => {
      const dx = targetX - x;
      const dy = targetY - y;
      vx = (vx + dx * stiffness) * damping;
      vy = (vy + dy * stiffness) * damping;
      x += vx;
      y += vy;
      el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

      const settled =
        Math.abs(targetX) < SETTLE_EPSILON &&
        Math.abs(targetY) < SETTLE_EPSILON &&
        Math.abs(vx) < SETTLE_EPSILON &&
        Math.abs(vy) < SETTLE_EPSILON;

      if (settled) {
        x = 0;
        y = 0;
        el.style.transform = "translate(0px, 0px)";
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const ensureRunning = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      targetX = Math.max(-max, Math.min(max, relX * strength));
      targetY = Math.max(-max, Math.min(max, relY * strength));
      ensureRunning();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      ensureRunning();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, max]);

  return ref;
}
