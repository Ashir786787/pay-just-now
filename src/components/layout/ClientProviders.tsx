"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/PageLoader";
import { AnimatePresence } from "framer-motion";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const mounted = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("is-shopper");

    let lastY = window.scrollY;
    let delta = 0;
    let ticking = false;
    let rafId: number | null = null;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const d = y - lastY;
      lastY = y;

      html.classList.toggle("scrolled", y > 0);

      if (y <= 0) {
        html.classList.remove("scrolled-up");
        html.classList.remove("scrolled-down");
        delta = 0;
        return;
      }

      if ((delta > 0 && d < 0) || (delta < 0 && d > 0)) {
        delta = 0;
      }
      delta += d;

      if (Math.abs(delta) > 32) {
        if (delta > 0) {
          html.classList.add("scrolled-down");
          html.classList.remove("scrolled-up");
        } else {
          html.classList.add("scrolled-up");
          html.classList.remove("scrolled-down");
        }
        delta = 0;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const timer = setTimeout(() => {
      setLoading(false);
      html.classList.add("site-loaded");
    }, mounted.current ? 800 : 1200);
    mounted.current = true;
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>
      {children}
    </>
  );
}