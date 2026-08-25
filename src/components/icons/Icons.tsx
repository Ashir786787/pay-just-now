"use client";

export function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

export function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
      <path d="M19 15L35 24L19 33V15Z" fill="white" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.43C10.125 6.445 11.903 4.787 14.594 4.787C15.878 4.787 17.219 5.016 17.219 5.016V8H15.453C13.719 8 13.188 9.078 13.188 10.187V12.073H17.063L16.441 15.563H13.188V24C18.912 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2.163C15.204 2.163 15.584 2.179 16.85 2.233C17.999 2.283 18.632 2.479 19.052 2.644C19.61 2.863 20.013 3.128 20.435 3.55C20.857 3.972 21.122 4.375 21.341 4.933C21.506 5.353 21.702 5.986 21.752 7.135C21.806 8.401 21.822 8.781 21.822 11.985C21.822 15.189 21.806 15.569 21.752 16.835C21.702 17.984 21.506 18.617 21.341 19.037C21.122 19.595 20.857 19.998 20.435 20.42C20.013 20.842 19.61 21.107 19.052 21.326C18.632 21.491 17.999 21.687 16.85 21.737C15.584 21.791 15.204 21.807 12 21.807C8.796 21.807 8.416 21.791 7.15 21.737C6.001 21.687 5.368 21.491 4.948 21.326C4.39 21.107 3.987 20.842 3.565 20.42C3.143 19.998 2.878 19.595 2.659 19.037C2.494 18.617 2.298 17.984 2.248 16.835C2.194 15.569 2.178 15.189 2.178 11.985C2.178 8.781 2.194 8.401 2.248 7.135C2.298 5.986 2.494 5.353 2.659 4.933C2.878 4.375 3.143 3.972 3.565 3.55C3.987 3.128 4.39 2.863 4.948 2.644C5.368 2.479 6.001 2.283 7.15 2.233C8.416 2.179 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.128 4.902 0.334 4.14 0.63C3.351 0.94 2.674 1.348 1.998 2.024C1.322 2.7 0.914 3.377 0.604 4.166C0.308 4.928 0.102 5.801 0.046 7.079C-0.012 8.359 -0.012 8.767 -0.012 12.026C-0.012 15.285 -0.012 15.693 0.046 16.973C0.102 18.251 0.308 19.124 0.604 19.886C0.914 20.675 1.322 21.352 1.998 22.028C2.674 22.704 3.351 23.112 4.14 23.422C4.902 23.718 5.775 23.924 7.053 23.98C8.333 24.036 8.741 24.05 12 24.05C15.259 24.05 15.667 24.036 16.947 23.98C18.225 23.924 19.098 23.718 19.86 23.422C20.649 23.112 21.326 22.704 22.002 22.028C22.678 21.352 23.086 20.675 23.396 19.886C23.692 19.124 23.898 18.251 23.954 16.973C24.012 15.693 24.012 15.285 24.012 12.026C24.012 8.767 24.012 8.359 23.954 7.079C23.898 5.801 23.692 4.928 23.396 4.166C23.086 3.377 22.678 2.7 22.002 2.024C21.326 1.348 20.649 0.94 19.86 0.63C19.098 0.334 18.225 0.128 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C17.808 4.155 17.321 4.642 17.321 5.24C17.321 5.838 17.808 6.325 18.406 6.325C19.004 6.325 19.491 5.838 19.491 5.24C19.491 4.642 19.004 4.155 18.406 4.155Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20.447 20.452H16.893V14.884C16.893 13.554 16.868 11.848 15.043 11.848C13.194 11.848 12.911 13.293 12.911 14.785V20.452H9.357V8.997H12.765V10.56H12.812C13.288 9.674 14.444 8.738 16.194 8.738C19.782 8.738 20.447 11.112 20.447 14.167V20.452ZM5.337 7.433C4.196 7.433 3.276 6.514 3.276 5.373C3.276 4.232 4.196 3.312 5.337 3.312C6.478 3.312 7.398 4.232 7.398 5.373C7.398 6.514 6.478 7.433 5.337 7.433ZM7.119 20.452H3.555V8.997H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
    </svg>
  );
}

export function TiktokIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.23 8.23 0 005.58 2.16v-3.44a4.85 4.85 0 01-5.58-2.7V6.69h5.58z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
