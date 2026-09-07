"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AppChrome from "@/components/layout/AppChrome";

const OTP_LENGTH = 6;

export default function PreregisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [mobile, setMobile] = useState("");
  const [mobileFocused, setMobileFocused] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const mobileContent = mobileFocused || mobile.length > 0;
  const formattedMobile = mobile ? `+27${mobile.replace(/^0/, "")}` : "";

  const requestOtp = () => {
    if (mobile.length < 9) return;
    setStep(1);
  };

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

  const verifyOtp = () => {
    if (otp.join("").length !== OTP_LENGTH) return;
    router.push("/register/complete-profile");
  };

  const otpComplete = otp.join("").length === OTP_LENGTH;

  return (
    <>
      <AppChrome />
      <div className="auth-app-page">
        <div className="auth-app-tile">
          <form
            className="auth-app-form-block"
            onSubmit={(e) => {
              e.preventDefault();
              if (step === 0) requestOtp();
              else verifyOtp();
            }}
            noValidate
          >
            {step === 0 ? (
              <>
                <div className="auth-app-heading">
                  <h1 className="heading-1">Create Account</h1>
                  <p className="auth-app-lead">
                    Enter your mobile number to get started.
                  </p>
                </div>
                <div
                  className={
                    mobileContent
                      ? "input-wrapper input-has-content"
                      : "input-wrapper"
                  }
                >
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    id="mobile"
                    className="input"
                    type="tel"
                    name="mobile"
                    placeholder="E.g. 083 123 4567"
                    autoComplete="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/[^\d\s-]/g, ""))
                    }
                    onFocus={() => setMobileFocused(true)}
                    onBlur={() => setMobileFocused(false)}
                  />
                </div>
                <p className="auth-mobile-hint">
                  We will send you a one-time PIN to verify your number.
                </p>
              </>
            ) : (
              <>
                <div className="auth-app-heading">
                  <h1 className="heading-1">Verify Number</h1>
                  <p className="auth-app-lead">
                    Enter the 6-digit code sent to{" "}
                    <strong>{formattedMobile}</strong>.
                  </p>
                </div>
                <div className="auth-otp-row">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpRefs.current[index] = el;
                      }}
                      className="auth-otp-input"
                      type="text"
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
                <p className="auth-mobile-hint">
                  Wrong number?{" "}
                  <button
                    type="button"
                    className="link-bold"
                    onClick={() => {
                      setStep(0);
                      setOtp(Array(OTP_LENGTH).fill(""));
                    }}
                  >
                    Change number
                  </button>
                  .
                </p>
              </>
            )}
          </form>
          {step === 0 ? (
            <div className="auth-app-form-footer">
              <p className="auth-not-member">
                <span className="auth-not-member-label">
                  Already have an account?
                </span>
                <button
                  type="button"
                  className="link-bold"
                  onClick={() => router.push("/login")}
                >
                  Log In
                </button>
              </p>
              <div className="auth-app-submit-row">
                <button
                  type="submit"
                  className="pjn-btn w-full"
                  disabled={mobile.length < 9}
                  onClick={requestOtp}
                >
                  Request OTP
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-app-form-footer">
              <p className="auth-not-member">
                <button
                  type="button"
                  className="link-bold"
                  onClick={() => {
                    setStep(0);
                    setOtp(Array(OTP_LENGTH).fill(""));
                  }}
                >
                  〈 Back to mobile number
                </button>
              </p>
              <div className="auth-app-submit-row">
                <button
                  type="submit"
                  className="pjn-btn w-full"
                  disabled={!otpComplete}
                  onClick={verifyOtp}
                >
                  Verify &amp; Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}