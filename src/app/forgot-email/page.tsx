"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import AppChrome from "@/components/layout/AppChrome";

const OTP_LENGTH = 4;

export default function ForgotEmailPage() {
  const [step, setStep] = useState<"id" | "otp" | "email">("id");
  const [idNumber, setIdNumber] = useState("");
  const [idFocused, setIdFocused] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [resendMsg, setResendMsg] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [editingEmail, setEditingEmail] = useState(false);
  const [didEdit, setDidEdit] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmFocused, setConfirmFocused] = useState(false);

  const idContent = idFocused || idNumber.length > 0;
  const emailContent = emailFocused || email.length > 0;
  const confirmContent = confirmFocused || confirmEmail.length > 0;
  const idValid = idNumber.length === 13;
  const otpComplete = otp.join("").length === OTP_LENGTH;
  const emailValid = /^\S+@\S+\.\S+$/.test(email.trim());
  const canUpdateEmail = emailValid && email.trim() === confirmEmail.trim();

  const onOtpChange = (index: number, value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) {
      setOtp((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      return;
    }
    const chars = digits.slice(0, OTP_LENGTH - index).split("");
    setOtp((prev) => {
      const next = [...prev];
      chars.forEach((ch, i) => {
        next[index + i] = ch;
      });
      return next;
    });
    const nextIndex = index + chars.length;
    if (nextIndex < OTP_LENGTH) {
      otpRefs.current[nextIndex]?.focus();
    }
  };

  const onOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const onOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const digits = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!digits) return;
    e.preventDefault();
    setOtp(digits.split(""));
    otpRefs.current[Math.min(digits.length, OTP_LENGTH - 1)]?.focus();
  };

  const copyEmail = () => {
    if (!registeredEmail) return;
    navigator.clipboard?.writeText(registeredEmail).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  };

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <form
            className="auth-app-form-block"
            onSubmit={(e) => {
              e.preventDefault();
              if (step === "id" && idValid) {
                setStep("otp");
                setOtp(Array(OTP_LENGTH).fill(""));
              } else if (step === "otp" && otpComplete) {
                setRegisteredEmail("j******@gmail.com");
                setStep("email");
              } else if (step === "email" && editingEmail && canUpdateEmail) {
                setRegisteredEmail(email.trim());
                setDidEdit(true);
                setEditingEmail(false);
              }
            }}
            noValidate
          >
            <div className="auth-app-heading">
              {step === "id" && (
                <>
                  <h1 className="heading-1">Forgotten your email?</h1>
                  <p className="auth-app-lead">
                    Confirm your South African ID number you used with your
                    account, and we&apos;ll send you a four-digit confirmation
                    code.
                  </p>
                </>
              )}
              {step === "otp" && (
                <>
                  <h1 className="heading-1">Confirm Mobile Number</h1>
                  <p className="auth-app-lead">
                    We&apos;ve just sent you a four-digit confirmation code by
                    SMS to your number.
                  </p>
                </>
              )}
              {step === "email" && (
                <>
                  <h1 className="heading-1">
                    {didEdit ? "Confirm Your New Email" : "Your Email"}
                  </h1>
                  <p className="auth-app-lead">
                    {didEdit
                      ? "We've just sent a verification email to your new email address. For changes to take effect, confirm your new email address by clicking the link in the email."
                      : "We've found an email associated with your account"}
                  </p>
                </>
              )}
            </div>

            {step === "otp" && (
              <div className="auth-success-banner" role="status">
                OTP sent to your mobile number
              </div>
            )}
            {step === "email" && !didEdit && (
              <div className="auth-success-banner" role="status">
                OTP Verified
              </div>
            )}
            {resendMsg && (
              <div className="auth-success-banner" role="status">
                A new code has been sent to your number.
              </div>
            )}
            {copied && (
              <div className="auth-success-banner" role="status">
                Email copied to clipboard
              </div>
            )}

            {step === "id" && (
              <div
                className={
                  idContent ? "input-wrapper input-has-content" : "input-wrapper"
                }
              >
                <label htmlFor="id-number">South African ID Number</label>
                <input
                  id="id-number"
                  className="input"
                  type="tel"
                  name="id-number"
                  maxLength={13}
                  inputMode="numeric"
                  placeholder="13 Digit South African ID number"
                  value={idNumber}
                  onChange={(e) =>
                    setIdNumber(e.target.value.replace(/\D/g, "").slice(0, 13))
                  }
                  onFocus={() => setIdFocused(true)}
                  onBlur={() => setIdFocused(false)}
                />
              </div>
            )}

            {step === "otp" && (
              <>
                <span className="auth-otp-confirm-label">Confirm code:</span>
                <div className="auth-otp-row">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpRefs.current[index] = el;
                      }}
                      className="auth-otp-input auth-otp-input--dark"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={OTP_LENGTH - index}
                      aria-label={`Digit ${index + 1}`}
                      value={digit}
                      onChange={(e) => onOtpChange(index, e.target.value)}
                      onKeyDown={(e) => onOtpKeyDown(index, e)}
                      onPaste={onOtpPaste}
                    />
                  ))}
                </div>
                <div className="auth-otp-actions-row">
                  <span>Didn&apos;t receive your OTP?</span>
                  <button
                    type="button"
                    onClick={() => setResendMsg(true)}
                  >
                    Resend code
                  </button>
                  <span> or </span>
                  <a href="/support">Contact Support</a>
                </div>
              </>
            )}

            {step === "email" && (
              <>
                <div className="auth-email-reveal">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 7l10 6L22 7"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="auth-email-reveal-email">
                    {registeredEmail}
                  </span>
                  <button
                    type="button"
                    className="auth-email-reveal-copy"
                    aria-label="copy email"
                    onClick={copyEmail}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="8"
                        y="8"
                        width="12"
                        height="12"
                        rx="2"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
                <p className="auth-note-row">
                  Not your email?{" "}
                  <button
                    type="button"
                    className="link-bold"
                    onClick={() => setEditingEmail(true)}
                  >
                    Change it
                  </button>
                </p>
                {editingEmail && (
                  <>
                    <p className="auth-note-row">Please enter email below</p>
                    <div
                      className={
                        emailContent
                          ? "input-wrapper input-has-content"
                          : "input-wrapper"
                      }
                    >
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        className="input"
                        type="email"
                        name="email"
                        placeholder="E.g. johndoe@mail.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                      />
                    </div>
                    <p className="auth-note-row">Please re-enter email below</p>
                    <div
                      className={
                        confirmContent
                          ? "input-wrapper input-has-content"
                          : "input-wrapper"
                      }
                    >
                      <label htmlFor="confirmEmail">
                        Confirm Email Address
                      </label>
                      <input
                        id="confirmEmail"
                        className="input"
                        type="email"
                        name="confirmEmail"
                        placeholder="E.g. johndoe@mail.com"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        onFocus={() => setConfirmFocused(true)}
                        onBlur={() => setConfirmFocused(false)}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </form>

          <div className="auth-app-form-footer">
            <p className="auth-not-member">
              <span className="auth-not-member-label">I remembered!</span>
              <Link href="/login" className="link-bold">
                Back to log in
              </Link>
            </p>
            <div className="auth-app-submit-row">
              {step === "id" && (
                <button
                  type="submit"
                  className="pjn-btn w-full"
                  disabled={!idValid}
                >
                  Send Code
                </button>
              )}
              {step === "otp" && (
                <>
                  <button
                    type="button"
                    className="pjn-btn pjn-btn--dark-border"
                    style={{ flex: 1 }}
                    onClick={() => {
                      setStep("id");
                      setOtp(Array(OTP_LENGTH).fill(""));
                      setResendMsg(false);
                    }}
                  >
                    Edit Your ID
                  </button>
                  <button
                    type="submit"
                    className="pjn-btn"
                    style={{ flex: 1 }}
                    disabled={!otpComplete}
                  >
                    Next
                  </button>
                </>
              )}
              {step === "email" && !editingEmail && (
                <button type="submit" className="pjn-btn w-full">
                  Login
                </button>
              )}
              {step === "email" && editingEmail && (
                <>
                  <button
                    type="button"
                    className="pjn-btn pjn-btn--dark-border"
                    style={{ flex: 1 }}
                    onClick={() => setEditingEmail(false)}
                  >
                    Cancel Edit
                  </button>
                  <button
                    type="submit"
                    className="pjn-btn"
                    style={{ flex: 1 }}
                    disabled={!canUpdateEmail}
                  >
                    Update Email
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}