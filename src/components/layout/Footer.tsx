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

const menus = [
  { title: "Shopper", items: ["How It Works", "FAQs", "Press", "Help"] },
  { title: "Business", items: ["BNPL", "Retail Credit", "Marketing Solutions", "Business Support", "Request a Demo"] },
  { title: "Resources", items: ["Merchant Portal", "PayUp", "Operational Status", "PAIA Manual", "Whistle Blowing"] },
];

const localLinks: Record<string, string> = {
  "How It Works": "/payin3",
  FAQs: "/support#faq",
  Press: "/press",
  Help: "/support",
  "Operational Status": "/status",
};

const socials = [
  { label: "LinkedIn", href: "#", Icon: LinkedInSocial },
  { label: "TikTok", href: "#", Icon: TiktokSocial },
  { label: "Facebook", href: "#", Icon: FacebookSocial },
  { label: "Instagram", href: "#", Icon: InstagramSocial },
];

export default function Footer() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="footer footer-clone">
      <div className="footer-clone-inner">
        <div className="footer-clone-top">
          <div className="footer-clone-menus">
            {menus.map((menu, index) => (
              <nav key={menu.title} className={`footer-clone-menu${openMenu === index ? " is-open" : ""}`}>
                <button type="button" className="footer-clone-heading" onClick={() => setOpenMenu(openMenu === index ? null : index)}>
                  {menu.title}
                  <span className="footer-clone-plus" aria-hidden="true">+</span>
                </button>
                <ul>
                  {menu.items.map((item) => (
                    <li key={item}>
                      {localLinks[item] ? <Link href={localLinks[item]}>{item}</Link> : <span>{item}</span>}
                      {item === "Operational Status" ? <small>Major</small> : null}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="footer-clone-side">
            <section className={`footer-clone-contact${contactOpen ? " is-open" : ""}`}>
              <button type="button" className="footer-clone-heading" onClick={() => setContactOpen(!contactOpen)}>
                Contact us
                <span className="footer-clone-plus" aria-hidden="true">+</span>
              </button>
              <div className="footer-clone-actions">
                <button type="button" className="footer-clone-action footer-clone-action-dark">Chatbot</button>
                <a className="footer-clone-action" href="mailto:hello@payjustnow.com">Email Us</a>
              </div>
            </section>
            <section className="footer-clone-weaver"><WeaverLogo /></section>
          </div>
        </div>

        <div className="footer-clone-bottom">
          <Link className="footer-clone-logo" href="/" aria-label="Home"><PjnLogo /></Link>
          <div className="footer-clone-socials">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} className="footer-clone-social">
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-clone-legal">
          <span>© PayJustNow 2026. All Rights Reserved.</span>
          <div><span>Terms and Conditions</span><span>Privacy Policy</span><span>PCI DSS Policy</span></div>
        </div>
      </div>
    </footer>
  );
}
