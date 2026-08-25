"use client";

export default function PjnLogo({ className = "", white = true }: { className?: string; white?: boolean }) {
  const color = white ? "#ffffff" : "#000000";
  return (
    <svg
      viewBox="0 0 68 28"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 2C0.5 0.895 1.395 0 2.5 0H7.5C9.5 0 11 1.5 11 4V24C11 26.5 9 28 7 28C5 28 3.5 26.5 3.5 24.5V7H0.5V24C0.5 26.2 2.3 28 4.5 28C6.7 28 8.5 26.2 8.5 24V4C8.5 2.5 8 2 7.5 2H2.5C1.5 2 0.5 2.895 0.5 4V2Z"
        fill={color}
      />
      <path
        d="M14 24V2C16 2 18 3.5 18 6V22C18 24.5 16 26 14 26H13V28H17C19.5 28 21 26 21 23V5C21 2.5 19 2 17 2H13V0H15C17 0 19 1.5 19 4V23C19 26 17 28 14 28H12V26H14C15.5 26 17 25 17 23V5C17 3.5 16 2 14 2"
        fill={color}
      />
      <path
        d="M27 0H31C33.5 0 35 1.5 35 4C35 6.5 33.5 8 31 8H29V24C29 26.5 27.5 28 25.5 28H24V26H25.5C26.5 26 27 25 27 24V0ZM27 2V6H31C32 6 33 5 33 4C33 3 32 2 31 2H27Z"
        fill={color}
      />
      <path
        d="M41 0H45C47.5 0 49 1.5 49 4C49 6.5 47.5 8 45 8H43V24C43 26.5 41.5 28 39.5 28H38V26H39.5C40.5 26 41 25 41 24V0ZM41 2V6H45C46 6 47 5 47 4C47 3 46 2 45 2H41Z"
        fill={color}
      />
      <path
        d="M55 0H59C61.5 0 63 1.5 63 4V24C63 26.5 61.5 28 59 28H55V0ZM57 2V26H59C60 26 61 25 61 23V4C61 3 60 2 59 2H57Z"
        fill={color}
      />
    </svg>
  );
}
