import type { IconName } from "@/lib/content";

type Props = { className?: string };

const base = "h-6 w-6";

// Consistent 1.6px stroke, rounded joins — one visual language across the site.
function S({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const serviceIcons: Record<IconName, (p: Props) => JSX.Element> = {
  headset: ({ className }) => (
    <S className={className}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.4" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.4" />
      <path d="M20 19a4 4 0 0 1-4 4h-2" />
    </S>
  ),
  assistant: ({ className }) => (
    <S className={className}>
      <path d="M12 3v3" />
      <rect x="4" y="6" width="16" height="12" rx="3" />
      <circle cx="9" cy="12" r="1.2" />
      <circle cx="15" cy="12" r="1.2" />
      <path d="M2.5 11v3M21.5 11v3" />
    </S>
  ),
  code: ({ className }) => (
    <S className={className}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </S>
  ),
  shopify: ({ className }) => (
    <S className={className}>
      <path d="M6 7h12l1.2 12.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 7Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </S>
  ),
  cart: ({ className }) => (
    <S className={className}>
      <path d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L21 8H6" />
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </S>
  ),
  amazon: ({ className }) => (
    <S className={className}>
      <path d="M4 15c4 3 12 3 16 0" />
      <path d="M18.5 14.5c.6 1.2.4 2.6-.4 3.6" />
      <path d="M8 11a4 4 0 1 1 7 2.5" />
      <path d="M8 11V8.5a3 3 0 0 1 6 0" />
    </S>
  ),
  ledger: ({ className }) => (
    <S className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h5" />
      <path d="M14.5 14.5 16 16l2.5-2.5" />
    </S>
  ),
  spark: ({ className }) => (
    <S className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13.6 12 12 15.5 10.4 12 12 8.5Z" />
    </S>
  ),
};

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = serviceIcons[name];
  return <Cmp className={className} />;
}

// Utility icons
export const Icon = {
  arrow: (p: Props) => (
    <S className={p.className ?? "h-4 w-4"}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </S>
  ),
  check: (p: Props) => (
    <S className={p.className ?? "h-5 w-5"}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </S>
  ),
  shield: (p: Props) => (
    <S className={p.className ?? base}>
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </S>
  ),
  clock: (p: Props) => (
    <S className={p.className ?? base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </S>
  ),
  star: (p: Props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={p.className ?? "h-4 w-4"} aria-hidden="true">
      <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  ),
  users: (p: Props) => (
    <S className={p.className ?? base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17 13.5a5.5 5.5 0 0 1 3.5 5.1" />
    </S>
  ),
  menu: (p: Props) => (
    <S className={p.className ?? base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </S>
  ),
  close: (p: Props) => (
    <S className={p.className ?? base}>
      <path d="M6 6l12 12M18 6 6 18" />
    </S>
  ),
  chevron: (p: Props) => (
    <S className={p.className ?? "h-5 w-5"}>
      <path d="m6 9 6 6 6-6" />
    </S>
  ),
  bolt: (p: Props) => (
    <S className={p.className ?? base}>
      <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
    </S>
  ),
  spark: (p: Props) => (
    <S className={p.className ?? base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13.6 12 12 15.5 10.4 12 12 8.5Z" />
    </S>
  ),
};
