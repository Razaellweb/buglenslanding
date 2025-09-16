
import React from 'react';

const Logo = () => {
  return (
    <a href="#" aria-label="BugLens" className="flex items-center gap-3 select-none">
      <svg
        width="28"
        height="28"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="bl-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gradient-primary-from))" />
            <stop offset="100%" stopColor="hsl(var(--gradient-primary-to))" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="none" stroke="url(#bl-gradient)" strokeWidth="4" />
        <circle cx="24" cy="24" r="6" fill="hsl(var(--accent))" />
        <path d="M36 36 L44 44" stroke="url(#bl-gradient)" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        <span className="bg-clip-text text-transparent neural-gradient">Bug</span>
        <span className="text-foreground">Lens</span>
      </span>
    </a>
  );
};

export default Logo;
