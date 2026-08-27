"use client";

import { useState } from "react";
import Link from "next/link";

function HeaderCtaStars() {
  return (
    <svg
      width="69"
      height="12"
      viewBox="0 0 69 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.57852 10.75L4.39102 7.2375L1.66602 4.875L5.26602 4.5625L6.66602 1.25L8.06602 4.5625L11.666 4.875L8.94102 7.2375L9.75352 10.75L6.66602 8.8875L3.57852 10.75Z"
        fill="#EFF1F1"
      />
      <path
        d="M17.5785 10.75L18.391 7.2375L15.666 4.875L19.266 4.5625L20.666 1.25L22.066 4.5625L25.666 4.875L22.941 7.2375L23.7535 10.75L20.666 8.8875L17.5785 10.75Z"
        fill="#EFF1F1"
      />
      <path
        d="M31.5785 10.75L32.391 7.2375L29.666 4.875L33.266 4.5625L34.666 1.25L36.066 4.5625L39.666 4.875L36.941 7.2375L37.7535 10.75L34.666 8.8875L31.5785 10.75Z"
        fill="#EFF1F1"
      />
      <path
        d="M45.5785 10.75L46.391 7.2375L43.666 4.875L47.266 4.5625L48.666 1.25L50.066 4.5625L53.666 4.875L50.941 7.2375L51.7535 10.75L48.666 8.8875L45.5785 10.75Z"
        fill="#EFF1F1"
      />
      <path
        d="M59.5785 10.75L60.391 7.2375L57.666 4.875L61.266 4.5625L62.666 1.25L64.066 4.5625L67.666 4.875L64.941 7.2375L65.7535 10.75L62.666 8.8875L59.5785 10.75Z"
        fill="#EFF1F1"
      />
    </svg>
  );
}

export default function HeaderCta() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="pt-16 lg:hidden">
      <div className="relative bg-black px-4 py-3">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close rating banner"
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.26732 12.6663L3.33398 11.733L7.06732 7.99967L3.33398 4.26634L4.26732 3.33301L8.00065 7.06634L11.734 3.33301L12.6673 4.26634L8.93398 7.99967L12.6673 11.733L11.734 12.6663L8.00065 8.93301L4.26732 12.6663Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3 pr-8">
          <span className="shrink-0">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="0.666016" width="40" height="40" rx="8" fill="#BDF500" />
              <path
                d="M22.4958 23.6777L26.066 30.8148C26.1734 31.0239 26.2249 31.2574 26.2154 31.4923C26.2059 31.7272 26.1358 31.9557 26.0119 32.1556C25.888 32.3554 25.7145 32.5198 25.5083 32.6327C25.3021 32.7456 25.0702 32.8033 24.8351 32.8001H9.22791C8.86651 32.8001 8.5199 32.6565 8.26435 32.4009C8.0088 32.1453 7.86523 31.7986 7.86523 31.4372V8.5631C7.86523 8.20163 8.0088 7.85498 8.26435 7.59939C8.5199 7.34379 8.86651 7.2002 9.22791 7.2002H32.0845C32.4459 7.2002 32.7925 7.34379 33.0481 7.59939C33.3036 7.85498 33.4472 8.20163 33.4472 8.5631V24.2001C33.45 24.4355 33.3919 24.6676 33.2784 24.8738C33.165 25.08 33 25.2533 32.7997 25.3768C32.5993 25.5004 32.3704 25.5699 32.1353 25.5786C31.9001 25.5874 31.6666 25.5351 31.4577 25.4268L24.3264 21.8605C24.0716 21.7342 23.7838 21.6908 23.5031 21.7363C23.2225 21.7819 22.9631 21.9141 22.7613 22.1144C22.5596 22.3147 22.4255 22.5731 22.3779 22.8534C22.3302 23.1338 22.3715 23.422 22.4958 23.6777Z"
                fill="black"
              />
            </svg>
          </span>

          <div className="min-w-0 flex-1">
            <span className="block text-xs font-semibold text-white">
              PayJustNow
            </span>
            <span className="mt-1 flex items-center gap-1.5">
              <span className="text-xs font-bold text-white">4.9</span>
              <HeaderCtaStars />
              <span className="text-[11px] text-white/70">
                168k+ ratings
              </span>
            </span>
          </div>

          <Link
            href="#"
            className="shrink-0 rounded-full border border-white/70 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}