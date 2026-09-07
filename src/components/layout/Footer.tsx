"use client";

import { useState } from "react";
import Link from "next/link";
import { PjnLogo } from "@/components/icons/PjnLogo";
import {
  WeaverLogo,
  LinkedInSocial,
  TiktokSocial,
  FacebookSocial,
  InstagramSocial,
} from "@/components/icons/PjnBrandIcons";

type FooterItem = {
  label: string;
  href?: string;
  external?: boolean;
  status?: boolean;
};

const menus: { title: string; items: FooterItem[] }[] = [
  {
    title: "Shopper",
    items: [
      { label: "How It Works", href: "/payin3" },
      { label: "FAQs", href: "/faqs" },
      { label: "Press", href: "/press" },
      { label: "Help", href: "/support" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "BNPL" },
      { label: "Retail Credit" },
      { label: "Marketing Solutions" },
      { label: "Business Support" },
      { label: "Request a Demo" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Merchant Portal" },
      { label: "PayUp" },
      { label: "Operational Status", href: "/status", status: true },
      { label: "PAIA Manual" },
      { label: "Whistle Blowing" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/payjustnow/", Icon: LinkedInSocial },
  { label: "TikTok", href: "https://www.tiktok.com/@payjustnow", Icon: TiktokSocial },
  { label: "Facebook", href: "https://www.facebook.com/PayJustNow", Icon: FacebookSocial },
  { label: "Instagram", href: "https://www.instagram.com/payjustnow/", Icon: InstagramSocial },
];

export default function Footer() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleMenu = (title: string) => setOpenMenu(openMenu === title ? null : title);

  return (
    <footer className="footer footer-light">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-left">
            {menus.map((menu) => (
              <nav
                key={menu.title}
                className={`footer-nav footer-menu${openMenu === menu.title ? " active" : ""}`}
              >
                <div
                  className="footer-nav-heading footer-menu-heading"
                  onClick={() => toggleMenu(menu.title)}
                >
                  <h4 className="footer-nav-title">{menu.title}</h4>
                  <div className="toggle mobile-only">
                    <div className="icon"></div>
                  </div>
                </div>
                <ul className="menu">
                  {menu.items.map((item) => (
                    <li
                      key={item.label}
                      className={`menu-item menu-item-depth-0${item.status ? " status" : ""}`}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener" : undefined}
                        >
                          {item.status ? (
                            <span className="status-label label major">Major</span>
                          ) : null}
                          <span className="text">{item.label}</span>
                        </Link>
                      ) : (
                        <span className="text">{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="footer-top-right">
            <div className={`footer-contact footer-menu${contactOpen ? " active" : ""}`}>
              <div
                className="footer-contact-heading footer-menu-heading"
                onClick={() => setContactOpen(!contactOpen)}
              >
                <h4 className="footer-contact-title">Contact us</h4>
                <div className="toggle mobile-only">
                  <div className="icon"></div>
                </div>
              </div>
              <div className="contact-items">
                <button
                  aria-label="Chatbot"
                  type="button"
                  className="btn btn-dark btn-sm btn-chatbot"
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Chatbot</span>
                </button>
                <div className="contact-item">
                  <Link
                    aria-label="Email Us"
                    className="btn btn-outline-dark btn-sm btn-footer-email-us"
                    href="/support"
                  >
                    <span className="btn-fill"></span>
                    <span className="btn-text">Email Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-weaver">
              <WeaverLogo />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Link className="footer-logo" href="/" aria-label="Home">
            <PjnLogo />
          </Link>
          <div className="footer-social-buttons">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="social-btn"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="social-btn-fill"></span>
                <Icon className="icon" />
                <span className="social-btn-text">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-copyright">
          <p className="copyright">
            &copy; PayJustNow 2026. All Rights Reserved.
          </p>
          <nav className="legal-nav">
            <ul className="menu">
              <li className="menu-item menu-item-depth-0">
                <Link href="/legal/terms">Terms and Conditions</Link>
              </li>
              <li className="menu-item menu-item-depth-0">
                <Link href="/legal/privacy">Privacy Policy</Link>
              </li>
              <li className="menu-item menu-item-depth-0">
                <Link href="/legal/pci-dss">PCI DSS Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}