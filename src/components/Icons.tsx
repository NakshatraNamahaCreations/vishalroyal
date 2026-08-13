type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconHall({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M3 21h18M5 21V9l7-5 7 5v12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6M10.5 11h3" strokeLinecap="round" />
    </svg>
  );
}

export function IconCatering({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M4 15h16a8 8 0 0 0-16 0ZM3 18h18M12 7V5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="4" r="1" />
    </svg>
  );
}

export function IconRooms({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2M21 18v2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" strokeLinecap="round" />
    </svg>
  );
}

export function IconParking({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M10 17V8h3.2a2.8 2.8 0 0 1 0 5.6H10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDecor({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M12 3v18M12 8c0-2.2 1.8-4 4-4 0 2.2-1.8 4-4 4ZM12 8c0-2.2-1.8-4-4-4 0 2.2 1.8 4 4 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14c0-2.2 1.8-4 4-4 0 2.2-1.8 4-4 4ZM12 14c0-2.2-1.8-4-4-4 0 2.2 1.8 4 4 4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPower({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path
        d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.76 1.45 5.32L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84S17.47 2 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-2.96.95.96-2.88-.2-.3a8.14 8.14 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.18-8.17a8.17 8.17 0 0 1 .02 16.34Zm4.49-6.11c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.77.95-.14.17-.28.19-.53.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className} aria-hidden>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconQuote({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.5 5C6.5 6.6 5 9.2 5 12.8V19h6.2v-6.2H8.4c0-2.4.9-4 2.7-5L9.5 5Zm9 0C15.5 6.6 14 9.2 14 12.8V19h6.2v-6.2h-2.8c0-2.4.9-4 2.7-5L18.5 5Z" />
    </svg>
  );
}

export function IconDiamond({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
      <path d="M6 3h12l3 5-9 13L3 8l3-5Z" strokeLinejoin="round" />
      <path d="M3 8h18M9 3 7.5 8 12 21M15 3l1.5 5L12 21" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGuests({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M3 19a6 6 0 0 1 12 0M16 19a5 5 0 0 1 5-5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlan({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" strokeLinecap="round" />
      <path d="M7 13h5M7 17h9" strokeLinecap="round" />
    </svg>
  );
}

export function IconExpand({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden>
      <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconMap = {
  hall: IconHall,
  catering: IconCatering,
  rooms: IconRooms,
  parking: IconParking,
  decor: IconDecor,
  power: IconPower,
} as const;
