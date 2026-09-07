"use client";

import { useState } from "react";
import Link from "next/link";
import AppChrome from "@/components/layout/AppChrome";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailContent = emailFocused || email.length > 0;
  const passwordContent = passwordFocused || password.length > 0;

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <div className="auth-app-form-block">
            <div className="auth-app-heading">
              <h1 className="heading-1">Customer Log In</h1>
              <p className="auth-app-lead">
                Welcome back, please log in to access your PayJustNow account.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div
                className={
                  emailContent
                    ? "input-wrapper input-has-content"
                    : "input-wrapper"
                }
              >
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  name="email"
                  placeholder="E.g. johandoe@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
              </div>
              <div
                className={
                  "input-wrapper auth-password-field " +
                  (passwordContent ? "input-has-content" : "")
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="input"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
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
              <p className="auth-forgot-row">
                <Link
                  href="/forgot-password"
                  className="link-bold text-pjn-primary-30"
                >
                  Forgot Password?
                </Link>
                <span className="auth-forgot-sep"> or </span>
                <Link
                  href="/forgot-email"
                  className="link-bold text-pjn-primary-30"
                >
                  Forgot Email?
                </Link>
              </p>
            </form>
          </div>
          <div className="auth-app-form-footer">
            <p className="auth-not-member">
              <span className="auth-not-member-label">
                Not a member yet?
              </span>
              <Link href="/register/overview" className="link-bold">
                Sign up
              </Link>
            </p>
            <div className="auth-app-submit-row">
              <button type="submit" className="pjn-btn w-full">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}