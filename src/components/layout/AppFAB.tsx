"use client";

import { useEffect, useRef } from "react";
import {
  AppleIcon,
  AppGalleryIcon,
  GooglePlayIcon,
} from "@/components/icons/PjnBrandIcons";

export default function AppFAB() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    let revealed = false;
    const onScroll = () => {
      if (!revealed && window.scrollY > 700) {
        revealed = true;
        html.classList.add("app-fab-active");
        ref.current?.classList.add("active");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="app-fab desktop-only" ref={ref}>
      <div className="app-qr-wrapper">
        <img
          className="app-qr"
          src="https://payjustnow.com/wp-content/uploads/2025/04/Group-13080-1.svg"
          alt="app-qr"
          width={80}
          height={80}
        />
      </div>
      <div className="app-icons">
        <a
          href="https://apps.apple.com/za/app/payjustnow/id1542974651"
          className="app-icon"
          target="_blank"
          rel="noopener"
        >
          <AppleIcon />
        </a>
        <a
          href="https://appgallery.huawei.com/app/C103873181"
          className="app-icon"
          target="_blank"
          rel="noopener"
        >
          <AppGalleryIcon />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.payjustnow"
          className="app-icon"
          target="_blank"
          rel="noopener"
        >
          <GooglePlayIcon />
        </a>
      </div>
      <a
        href="#"
        className="app-button"
      >
        Download
      </a>
    </div>
  );
}