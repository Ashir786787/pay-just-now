"use client";

import { useState } from "react";
import Link from "next/link";
import AppChrome from "@/components/layout/AppChrome";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [sent, setSent] = useState(false);

  const emailContent = emailFocused || email.length > 0;
  const isValid = /^\S+@\S+\.\S+$/.test(email.trim());

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <form
            className="auth-app-form-block"
            onSubmit={(e) => {
              e.preventDefault();
              if (isValid) setSent(true);
            }}
            noValidate
          >
            <div className="auth-app-heading">
              <h1 className="heading-1">Forgotten your password?</h1>
              <p className="auth-app-lead">
                Confirm the email address you used to sign up below, and we&apos;ll
                send you an email with instructions on how to reset your
                password.
              </p>
            </div>
            {sent && (
              <div className="auth-success-banner" role="status">
                <strong>If the email exists a link will be sent to you</strong>
                Please follow the prompts to reset your password.
              </div>
            )}
            <div
              className={
                emailContent ? "input-wrapper input-has-content" : "input-wrapper"
              }
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="input"
                type="text"
                name="email"
                placeholder="E.g. johndoe@mail.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </div>
          </form>
          <div className="auth-app-form-footer">
            <p className="auth-not-member">
              <span className="auth-not-member-label">I remembered!</span>
              <Link href="/login" className="link-bold">
                Back to log in
              </Link>
            </p>
            <div className="auth-app-submit-row">
              <button
                type="submit"
                className="pjn-btn w-full"
                disabled={!isValid}
                onClick={() => {
                  if (isValid) setSent(true);
                }}
              >
                Send me instructions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}