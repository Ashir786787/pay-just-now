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
    const onScroll = () => {
      const y = window.scrollY;
      html.classList.toggle("scrolled", y > 0);
      const goingDown = y > lastY + 160;
      const goingUp = y < lastY - 160;
      if (goingDown) {
        html.classList.add("scrolled-down");
        html.classList.remove("scrolled-up");
      } else if (goingUp) {
        html.classList.add("scrolled-up");
        html.classList.remove("scrolled-down");
      }
      if (y <= 0) {
        html.classList.remove("scrolled-up");
        html.classList.remove("scrolled-down");
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
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