"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PjnLogo } from "@/components/icons/PjnLogo";

const NAV = [
  {
    label: "How It Works",
    href: "/payin3",
    children: [
      { label: "Pay in 3", href: "/payin3" },
      { label: "Pay in 12", href: "/payin12" },
    ],
  },
  { label: "Press", href: "/press" },
  { label: "Content Hub", href: "/content-hub" },
  {
    label: "Support",
    href: "/support",
    children: [
      { label: "Help", href: "/support" },
      { label: "Operational Status", href: "https://status.payjustnow.com/", external: true },
    ],
  },
];

function SplitText({ label }: { label: string }) {
  return (
    <span className="text">
      <span className="line">
        <span className="line-inner">{label}</span>
      </span>
    </span>
  );
}

function ButtonText({ label }: { label: string }) {
  return (
    <span className="btn-text">
      <span className="line">{label}</span>
      <span className="line line-hover">{label}</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("nav-active", mobileOpen);
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      html.classList.remove("nav-active");
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onParentClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 1099px)").matches) return;
    e.preventDefault();
    setExpanded(expanded === label ? null : label);
  };

  return (
    <header className="header">
      <div className="header-top desktop-only">
        <Link href="/" className="btn btn-primary btn-sm">
          <span className="btn-fill" aria-hidden="true"></span>
          <ButtonText label="Shopper" />
        </Link>
        <button type="button" className="btn btn-outline-dark btn-sm">
          <span className="btn-fill" aria-hidden="true"></span>
          <ButtonText label="Business" />
        </button>
      </div>

      <div className="header-main">
        <div className="header-main-bg" aria-hidden="true"></div>

        <div className="header-main-inner">
          <Link href="/" className="header-logo" aria-label="PayJustNow home">
            <PjnLogo className="w-full h-auto" />
          </Link>

          <div className="header-tabs mobile-only">
            <Link href="/" className={`header-tab${pathname === "/" ? " active" : ""}`}>
              <span className="header-tab-text">
                <span className="line">Shopper</span>
              </span>
            </Link>
            <button type="button" className="header-tab">
              <span className="header-tab-text">
                <span className="line">Business</span>
              </span>
            </button>
          </div>

          <button
            type="button"
            className="header-nav-toggle mobile-only"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="line-wrapper">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>
        </div>

        <div className="header-nav">
          <nav className="nav" aria-label="Primary">
            <ul className="menu">
              {NAV.map((item) => {
                const isParent = !!item.children;
                const parentActive =
                  isParent &&
                  item.children!.some(
                    (child) =>
                      !child.external &&
                      (pathname === child.href || pathname.startsWith(child.href + "/"))
                  );
                const itemActive = !isParent && pathname === item.href;

                const className = [
                  "menu-item",
                  "menu-item-depth-0",
                  isParent ? "menu-item-has-children" : "",
                  itemActive ? "current-menu-item" : "",
                  parentActive ? "current-menu-parent" : "",
                  isParent && expanded === item.label ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <li key={item.label} className={className}>
                    {isParent ? (
                      <Link href={item.href} onClick={(e) => onParentClick(e, item.label!)}>
                        <SplitText label={item.label!} />
                        <span className="toggle">
                          <span className="icon"></span>
                        </span>
                      </Link>
                    ) : (
                      <Link href={item.href}>
                        <SplitText label={item.label!} />
                      </Link>
                    )}

                    {isParent && item.children ? (
                      <div className="sub-menu-wrapper">
                        <div className="sub-menu-inner">
                          <div className="sub-menu-bg" aria-hidden="true"></div>
                          <ul className="sub-menu">
                            {item.children.map((child) => {
                              const childActive = !child.external && pathname === child.href;
                              const childClass = `menu-item${childActive ? " current-menu-item" : ""}`;
                              return (
                                <li key={child.label} className={childClass}>
                                  {child.external ? (
                                    <a href={child.href} target="_blank" rel="noopener noreferrer">
                                      <SplitText label={child.label} />
                                    </a>
                                  ) : (
                                    <Link href={child.href}>
                                      <SplitText label={child.label} />
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-buttons">
            <a className="btn btn-outline-dark" href="#">
              <span className="btn-fill" aria-hidden="true"></span>
              <ButtonText label="Log In" />
            </a>
            <a className="btn btn-dark" href="#">
              <span className="btn-fill" aria-hidden="true"></span>
              <ButtonText label="Sign Up" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}