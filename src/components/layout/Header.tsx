"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MenuIcon, CloseIcon } from "@/components/icons/Icons";
import { motion, AnimatePresence } from "framer-motion";

const shopperLinks = [
  {
    label: "How it works",
    href: null,
    children: [
      { label: "Pay in 3", href: "/payin3" },
      { label: "Pay in 12", href: "/payin12" },
    ],
  },
  { label: "Press", href: "/press" },
  { label: "Content Hub", href: "/content-hub" },
  {
    label: "Support",
    href: null,
    children: [
      { label: "FAQ", href: "/support#faq" },
      { label: "Contact Us", href: "/support#contact" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-white font-extrabold text-xl tracking-tight">PayJustNow</span>
              </Link>


            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {shopperLinks.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                          item.children?.some(
                            (c) => pathname === c.href || pathname === c.href.split("#")[0]
                          )
                            ? "text-primary"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && item.children && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px]"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="px-5 py-2 text-sm font-semibold text-white border border-gray-600 rounded-full hover:border-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="px-5 py-2 text-sm font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-colors"
              >
                Sign Up
              </Link>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="pt-20 px-6 pb-8 h-full overflow-y-auto">
              <nav className="space-y-1">
                {shopperLinks.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium text-white hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white hover:text-primary transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`transition-transform duration-200 ${
                              mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && item.children && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-base text-gray-300 hover:text-white transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <Link
                  href="#"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white border border-gray-600 rounded-full"
                >
                  Log In
                </Link>
                <Link
                  href="#"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-black bg-primary rounded-full"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
