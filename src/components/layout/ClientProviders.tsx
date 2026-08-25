"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/PageLoader";
import { AnimatePresence } from "framer-motion";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
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
