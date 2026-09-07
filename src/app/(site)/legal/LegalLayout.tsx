"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LegalSection = { id: number; label: string };

export default function LegalLayout({
  title,
  sections,
  children,
}: {
  title: string;
  sections: LegalSection[];
  children: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const headingsRef = useRef(new Map<number, HTMLElement>());

  useEffect(() => {
    document.body.classList.add("legal-page");
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("#legal .legal-content .heading"),
    );
    headings.forEach((el, i) => headingsRef.current.set(i, el));

    const onScroll = () => {
      const scrolled = window.scrollY > 240;
      if (sidebarRef.current) {
        sidebarRef.current.classList.toggle("scroll", scrolled);
      }
      const header = document.querySelector(".header");
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const offset = headerH + 24;
      let current = 0;
      headingsRef.current.forEach((el, i) => {
        if (el.getBoundingClientRect().top - offset <= 0) current = i;
      });
      setActive((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.body.classList.remove("legal-page");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const goTo = (id: number) => {
    const el = headingsRef.current.get(id);
    if (el) {
      const header = document.querySelector(".header");
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerH - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(id);
    setOpen(false);
  };

  const activeLabel =
    sections.find((s) => s.id === active)?.label ?? sections[0]?.label ?? "";

  return (
    <div id="legal">
      <section className="section section-light section-page">
        <div className="container-sm">
          <div className="s-inner">
            <div className="s-content">
              <h1 className="s-title">{title}</h1>
            </div>
            <div className="legal-wrapper">
              <aside className="legal-sidebar" ref={sidebarRef}>
                <div
                  className={`dropdown heading-dropdown mobile-only${open ? " open" : ""}`}
                  data-value={active}
                >
                  <div className="dropdown-inner">
                    <div className="dropdown-bg"></div>
                    <button
                      type="button"
                      className="dropdown-header"
                      aria-expanded={open}
                      onClick={() => setOpen((v) => !v)}
                    >
                      <span className="dropdown-header-text">{activeLabel}</span>
                    </button>
                    <div className="dropdown-options">
                      {sections.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          className={`dropdown-option${active === s.id ? " active" : ""}`}
                          data-value={s.id}
                          onClick={() => goTo(s.id)}
                        >
                          <span className="dropdown-option-text">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <nav className="heading-nav desktop-only">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      data-index={s.id}
                      className={`heading-nav-item${active === s.id ? " active" : ""}`}
                      onClick={() => goTo(s.id)}
                    >
                      <span className="heading-nav-text">{s.label}</span>
                    </button>
                  ))}
                </nav>
              </aside>
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}