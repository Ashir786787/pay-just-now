"use client";

import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/icons/Icons";

const footerSections = [
  {
    title: "About Us",
    links: [
      { label: "Press", href: "/press" },
      { label: "Content Hub", href: "/content-hub" },
      { label: "Careers", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Shopper",
    links: [
      { label: "How it Works", href: "/payin3" },
      { label: "Pay in 3", href: "/payin3" },
      { label: "Pay in 12", href: "/payin12" },
      { label: "Support", href: "/support" },
      { label: "FAQs", href: "/support#faq" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Shoppers", href: "/support#contact" },
      { label: "Press Office", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Other Queries", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: TiktokIcon, href: "#", label: "TikTok" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-surface text-white">
      <div className="site-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Pre-Store Credit T&Cs
              </Link>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6 text-center md:text-left max-w-3xl">
            PayJustNow (Pty) Ltd is an authorized Financial Services (FSP97452) and
            Credit Provider (NCRCP12680) in compliance with the National Credit Act
            and registered with the Information Regulator under the Protection of
            Personal Information Act (POPIA).
          </p>

          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            © {new Date().getFullYear()} PayJustNow (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
