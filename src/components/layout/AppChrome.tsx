"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PjnLogo } from "@/components/icons/PjnLogo";

const YEAR = new Date().getFullYear();
const APP_VERSION = "3.14.0";

function BurgerIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M3 6H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
        fill="#0D1111"
      />
    </svg>
  );
}

export default function AppChrome() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("auth-shell");
    return () => document.body.classList.remove("auth-shell");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.classList.add("navopen");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("navopen");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const navLinkClass = (active: boolean) =>
    active
      ? "auth-nav-link active"
      : "auth-nav-link";

  const isRegister = pathname.startsWith("/register");

  return (
    <>
      <div className="auth-app-topbar">
        <div className="auth-app-topbar-side">
          <button
            type="button"
            className="auth-app-burger"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <BurgerIcon />
          </button>
        </div>
        <Link href="/" className="auth-app-logo" aria-label="PayJustNow home">
          <PjnLogo />
        </Link>
        <div
          className="auth-app-topbar-side auth-app-topbar-side--right"
          aria-hidden="true"
        />
      </div>

      <div
        className={open ? "auth-drawer-layer visible" : "auth-drawer-layer"}
        onClick={() => setOpen(false)}
      >
        <div
          className="auth-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="auth-drawer-header">
            <button
              type="button"
              className="auth-drawer-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="auth-drawer-nav">
            <Link
              href="/"
              className={navLinkClass(pathname === "/")}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <div className="auth-nav-divider" />
            <Link
              href="/support"
              className={navLinkClass(pathname === "/support")}
              onClick={() => setOpen(false)}
            >
              Contact us
            </Link>
            <div className="auth-nav-divider" />
            <Link
              href="/legal/privacy"
              className={navLinkClass(pathname === "/legal/privacy")}
              onClick={() => setOpen(false)}
            >
              Privacy Policy
            </Link>
            <div className="auth-nav-divider" />
            <Link
              href="/legal/pci-dss"
              className={navLinkClass(pathname === "/legal/pci-dss")}
              onClick={() => setOpen(false)}
            >
              PCI DSS Compliance
            </Link>
          </div>
          <div className="auth-drawer-footer">
            <Link
              href="/legal/terms"
              className="auth-drawer-terms"
              onClick={() => setOpen(false)}
            >
              PayJustNow Terms &amp; Conditions
            </Link>
            <p className="auth-drawer-legal">
              © PayJustNow {YEAR}. All Rights Reserved.
              <br />
              App Version: {APP_VERSION}
            </p>
            <Link
              href="/register/overview"
              className={[
                "auth-app-btn",
                "auth-app-btn--lime",
                "auth-app-btn--block",
                isRegister ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className={[
                "auth-app-btn",
                "auth-app-btn--outline",
                "auth-app-btn--block",
                pathname === "/login" ? "active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}