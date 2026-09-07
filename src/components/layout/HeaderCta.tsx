"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Close16,
  HeaderStars,
  MagicIcon,
} from "@/components/icons/PjnBrandIcons";

export default function HeaderCta() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("header-cta-active");
    return () => {
      html.classList.remove("header-cta-active");
    };
  }, []);

  const onClose = () => {
    const html = document.documentElement;
    html.classList.remove("header-cta-active");
    const el = ref.current;
    if (!el) return;
    el.style.overflow = "hidden";
    el.style.transition = "transform 0.5s var(--ease), opacity 0.4s ease";
    el.style.transform = "translateX(-100%)";
    el.style.opacity = "0";
  };

  return (
    <div className="header-cta mobile-only" ref={ref}>
      <div className="header-cta-close" onClick={onClose} role="button" aria-label="Close PayJustNow rating banner">
        <Close16 />
      </div>
      <div className="header-cta-inner">
        <div className="header-cta-inner-icon">
          <MagicIcon />
        </div>
        <div className="header-cta-content">
          <span className="header-cta-title">PayJustNow</span>
          <span className="header-cta-rating">
            <span className="number">4.9</span>
            <span className="stars">
              <HeaderStars />
            </span>
          </span>
          <span className="header-cta-ratings-text">168k+ ratings</span>
        </div>
      </div>
      <Link
        href="/register/overview"
        className="btn btn-outline-light btn-sm"
      >
        <span className="btn-fill"></span>
        <span className="btn-text">
          <span className="line line-normal">Download</span>
          <span className="line line-hover">Download</span>
        </span>
      </Link>
    </div>
  );
}