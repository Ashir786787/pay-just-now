"use client";

import { useState } from "react";
import Link from "next/link";
import AppChrome from "@/components/layout/AppChrome";

export default function CompleteProfilePage() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const hasContent = (key: string) =>
    focused[key] || (values[key as keyof typeof values]?.length ?? 0) > 0;

  const wrapperClass = (key: string) =>
    hasContent(key) ? "input-wrapper input-has-content" : "input-wrapper";

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <div className="auth-app-form-block">
            <div className="auth-app-heading">
              <h1 className="heading-1">Create Your Account</h1>
              <p className="auth-app-lead">
                Almost done — split your purchase into 3 interest-free payments.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="auth-form-row-2">
                <div className={wrapperClass("firstName")}>
                  <label htmlFor="first-name">First name</label>
                  <input
                    id="first-name"
                    className="input"
                    type="text"
                    name="first-name"
                    placeholder="First name"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={set("firstName")}
                    onFocus={() => setFocused((f) => ({ ...f, firstName: true }))}
                    onBlur={() =>
                      setFocused((f) => ({ ...f, firstName: false }))
                    }
                  />
                </div>
                <div className={wrapperClass("lastName")}>
                  <label htmlFor="last-name">Last name</label>
                  <input
                    id="last-name"
                    className="input"
                    type="text"
                    name="last-name"
                    placeholder="Last name"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={set("lastName")}
                    onFocus={() => setFocused((f) => ({ ...f, lastName: true }))}
                    onBlur={() =>
                      setFocused((f) => ({ ...f, lastName: false }))
                    }
                  />
                </div>
              </div>
              <div className={wrapperClass("mobile")}>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  className="input"
                  type="tel"
                  name="mobile"
                  placeholder="E.g. 083 123 4567"
                  autoComplete="tel"
                  value={values.mobile}
                  onChange={set("mobile")}
                  onFocus={() => setFocused((f) => ({ ...f, mobile: true }))}
                  onBlur={() => setFocused((f) => ({ ...f, mobile: false }))}
                />
              </div>
              <div className={wrapperClass("email")}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  name="email"
                  placeholder="E.g. johandoe@mail.com"
                  autoComplete="email"
                  value={values.email}
                  onChange={set("email")}
                  onFocus={() => setFocused((f) => ({ ...f, email: true }))}
                  onBlur={() => setFocused((f) => ({ ...f, email: false }))}
                />
              </div>
              <div
                className={
                  wrapperClass("password") + " auth-password-field"
                }
              >
                <label htmlFor="password">Create Password</label>
                <input
                  id="password"
                  className="input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={set("password")}
                  onFocus={() => setFocused((f) => ({ ...f, password: true }))}
                  onBlur={() => setFocused((f) => ({ ...f, password: false }))}
                />
                <button
                  type="button"
                  className="auth-password-visibility"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M2 2L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.5 13.5 0 0 0 2 12s3 8 10 8a9.74 9.74 0 0 0 5.39-1.61" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 10a2 2 0 0 0 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 12S4 4 12 4s11 8 11 8-3 8-11 8S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                </button>
              </div>
              <label className="auth-terms-row">
                <input type="checkbox" className="auth-terms-checkbox" />
                <span className="auth-terms-text">
                  I agree to PayJustNow&apos;s{" "}
                  <Link href="/legal/terms" className="link-bold">
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/legal/privacy" className="link-bold">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </form>
          </div>
          <div className="auth-app-form-footer">
            <p className="auth-not-member">
              <span className="auth-not-member-label">
                Already have an account?
              </span>
              <Link href="/login" className="link-bold">
                Log In
              </Link>
            </p>
            <div className="auth-app-submit-row">
              <button type="submit" className="pjn-btn w-full">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}