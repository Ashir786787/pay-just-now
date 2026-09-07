"use client";

import { useEffect, useRef, useState } from "react";

export default function BrowseAllStores() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section section-cta section-light section-lighter">
      <div className="container">
        <div className={`cta${visible ? " cta-visible" : ""}`}>
          <div className="cta-bg"></div>
          <h5 className="cta-title">Browse all stores and products</h5>
          <a href="https://app.payjustnow.com/stores" target="_blank" className="btn btn-dark btn-md">
            <span className="btn-fill"></span>
            <span className="btn-text">Shop Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}