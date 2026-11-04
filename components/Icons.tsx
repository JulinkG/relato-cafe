type P = { className?: string };

export const Arrow = ({ className = "arrow" }: P) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h10.5M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowLeft = ({ className }: P) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13.5 8H3M7 3.5 2.5 8 7 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WhatsApp = ({ className }: P) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2.2 13.8 3 11a5.7 5.7 0 1 1 2.1 2.1l-2.9.7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 5.4c.2-.3.6-.3.8 0l.5 1c.1.2 0 .5-.1.7l-.3.3c.3.7.9 1.3 1.6 1.6l.3-.3c.2-.2.5-.2.7-.1l1 .5c.3.2.3.6 0 .8-.5.5-1.2.7-1.9.4A5 5 0 0 1 5.7 7.3c-.3-.7-.1-1.4.3-1.9Z"
      fill="currentColor"
    />
  </svg>
);

export const Pin = ({ className }: P) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 14.5s4.5-4.2 4.5-8A4.5 4.5 0 0 0 3.5 6.5c0 3.8 4.5 8 4.5 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
