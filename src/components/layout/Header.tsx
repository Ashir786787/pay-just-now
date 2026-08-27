"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/components/icons/Icons";
import {
  LinkedInIcon,
  TiktokIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/Icons";
import { PjnLogo } from "@/components/icons/PjnLogo";

const menuItems = [
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
      { label: "Operational Status", href: "#" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "TikTok", href: "#", Icon: TiktokIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

function ButtonFill({ className = "bg-primary" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square h-[140%] rounded-full ${className} scale-[0.15] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100`}
    />
  );
}

function isMenuActive(pathname: string, item: (typeof menuItems)[number]) {
  if (item.children) {
    return item.children.some(
      (child) => pathname === child.href || pathname.startsWith(child.href + "/")
    );
  }
  return pathname === item.href;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setScrolledDown(y > lastScrollY.current && y > 160);
      lastScrollY.current = y;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 will-change-transform ${
          !mobileOpen && scrolledDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          style={{ marginLeft: "auto", marginRight: "auto" }}
          className="ml-auto mr-auto w-full px-3 py-2 sm:px-4 [@media(min-width:1100px)]:w-[83vw] [@media(min-width:1100px)]:px-0 [@media(min-width:1100px)]:py-0"
        >
          <div
            className={`hidden lg:flex items-center h-10 mb-3 transition-all duration-300 ${
              scrolled ? "-translate-y-2 opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link
              href="/"
              className="group relative mr-2 inline-flex h-10 items-center overflow-hidden rounded-md bg-primary px-4 text-xs font-medium text-black"
            >
              <ButtonFill className="bg-white" />
              <span className="relative">Shopper</span>
            </Link>
            <Link
              href="#"
              className="group relative inline-flex h-10 items-center overflow-hidden rounded-md bg-white px-4 text-xs font-medium text-black ring-1 ring-black hover:ring-primary"
            >
              <ButtonFill />
              <span className="relative">Business</span>
            </Link>
          </div>

          <div className="relative flex items-center h-16 lg:h-[64px] rounded bg-white shadow-[0_2px_10px_rgba(45,49,49,0.06)] ring-1 ring-black">
            <Link
              href="/"
              aria-label="Home"
              className="ml-3 flex shrink-0 items-center lg:ml-4"
            >
              <span className="block w-auto max-h-7 lg:max-h-8">
                <PjnLogo className="block w-auto max-h-7 lg:max-h-8" />
              </span>
            </Link>

            <div className="hidden lg:flex items-center flex-1 min-w-0 h-full">
              <nav className="flex h-full items-center">
                <ul className="flex items-center gap-0.5">
                  {menuItems.map((item) => {
                    const active = isMenuActive(pathname, item);
                    if (!item.children) {
                      return (
                        <li key={item.label} className="relative flex">
                          <Link
                            href={item.href}
                            className={`group relative flex h-full items-center overflow-hidden rounded-full px-3 text-sm font-medium text-black transition-colors ${
                              active ? "shadow-[inset_0_0_0_1px_#000]" : ""
                            }`}
                          >
                            <ButtonFill className="bg-[#a9acab]/20" />
                            <span className="relative">{item.label}</span>
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <DesktopMenuDropdown
                        key={item.label}
                        item={item}
                        active={active}
                      />
                    );
                  })}
                </ul>
              </nav>

              <div className="ml-auto flex items-center gap-2 pl-4">
                <Link
                  href="#"
                  className="group relative inline-flex h-12 items-center overflow-hidden rounded-md bg-white px-6 text-base font-medium text-black ring-1 ring-black hover:ring-primary"
                >
                  <ButtonFill />
                  <span className="relative">Log In</span>
                </Link>
                <Link
                  href="#"
                  className="group relative inline-flex h-12 items-center overflow-hidden rounded-md bg-black px-6 text-base font-medium text-white"
                >
                  <ButtonFill className="bg-[#a9acab]/20" />
                  <span className="relative">Sign Up</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-1 items-stretch justify-center h-full lg:hidden mx-1">
              <Link
                href="/"
                className={`relative flex flex-1 items-center justify-center ${
                  pathname === "/" ? "text-black" : "text-black/40"
                }`}
              >
                <span className="text-sm font-medium">Shopper</span>
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
              <Link href="#" className="relative flex flex-1 items-center justify-center text-black/40">
                <span className="text-sm font-medium">Business</span>
              </Link>
            </div>

            <button
              className="mr-3 flex h-9 w-9 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`relative flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-500 ${
                  mobileOpen ? "bg-black" : ""
                }`}
              >
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-black transition-all duration-500 ${
                    mobileOpen ? "rotate-45 bg-white" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-black transition-all duration-500 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-black transition-all duration-500 ${
                    mobileOpen ? "-rotate-45 bg-white" : "translate-y-[3px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <div className="px-4 pb-10 pt-20">
              <ul>
                {menuItems.map((item) => {
                  const active = isMenuActive(pathname, item);
                  if (!item.children) {
                    return (
                      <li
                        key={item.label}
                        className="border-b border-[#e0e3e3] first:border-t"
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center py-4 text-[1.4rem] font-medium leading-[1.2] text-black ${
                            active ? "shadow-[inset_0_0_0_1px_#000]" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  const expanded = mobileExpanded === item.label;
                  return (
                    <li
                      key={item.label}
                      className="border-b border-[#e0e3e3] first:border-t"
                    >
                      <button
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.label)
                        }
                        className={`flex w-full items-center justify-between py-4 text-[1.4rem] font-medium leading-[1.2] text-black ${
                          active ? "shadow-[inset_0_0_0_1px_#000]" : ""
                        }`}
                        aria-expanded={expanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  className={`flex h-12 items-center px-4 text-sm font-medium text-black ${
                                    pathname === child.href
                                      ? "bg-primary/25"
                                      : "hover:bg-primary/25"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex gap-3">
                <Link
                  href="#"
                  className="inline-flex h-14 flex-1 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-black ring-1 ring-black"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-14 flex-1 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-black"
                >
                  Sign Up
                </Link>
              </div>

              <div className="mt-10 flex w-full border-t border-[#e0e3e3] pt-6">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex h-14 flex-1 items-center justify-center text-black"
                    aria-label={label}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopMenuDropdown({
  item,
  active,
}: {
  item: (typeof menuItems)[number];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const openNow = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const closeAfter = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className="relative flex"
      onMouseEnter={openNow}
      onMouseLeave={closeAfter}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`group relative flex h-full items-center overflow-hidden rounded-full px-3 text-sm font-medium text-black transition-colors ${
          active ? "shadow-[inset_0_0_0_1px_#000]" : ""
        }`}
        aria-expanded={open}
      >
        <ButtonFill className="bg-[#a9acab]/20" />
        <span className="relative flex items-center">
          {item.label}
          <ChevronDown
            className={`relative ml-1 h-3.5 w-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-3 min-w-[200px] rounded-lg bg-white py-2 shadow-[0_2px_8px_rgba(45,49,49,0.1)] ring-1 ring-black/10"
          >
            {item.children!.map((child) => {
              const childActive = pathname === child.href;
              return (
                <li key={child.label} className="relative overflow-hidden">
                  <Link
                    href={child.href}
                    onMouseLeave={closeAfter}
                    className={`relative flex h-12 items-center px-4 text-sm font-medium text-black transition-colors ${
                      childActive ? "bg-primary/25" : "hover:bg-primary/25"
                    }`}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}