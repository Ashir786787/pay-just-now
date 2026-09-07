"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import AppChrome from "@/components/layout/AppChrome";

const REQUIREMENTS = [
  "To be at least 18 years old",
  "A South African resident",
  "A valid Debit or Credit card",
  "A valid email address and mobile number",
];

export default function RegisterOverviewPage() {
  const router = useRouter();

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <div className="auth-app-form-block">
            <div className="auth-app-heading">
              <h1 className="heading-1">Sign Up</h1>
              <p className="auth-app-lead">
                Before we begin, there are a few personal details we need to
                confirm before setting up your account.
              </p>
            </div>
            <span className="auth-required-label">You will need:</span>
            <ul className="auth-checklist">
              {REQUIREMENTS.map((item) => (
                <li key={item} className="auth-checklist-item">
                  <span className="auth-checklist-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12.5l5 5L20 6.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="auth-app-form-footer">
            <p className="auth-not-member">
              <span className="auth-not-member-label">Already signed up?</span>
              <Link href="/login" className="link-bold">
                Log in instead
              </Link>
            </p>
            <div className="auth-app-submit-row">
              <button
                type="button"
                className="pjn-btn w-full"
                onClick={() => router.push("/register/preregister")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}