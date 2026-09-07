// -----------------------------------------------------------------------------
// Site-wide settings and editable content.
// Everything a non-developer would want to tweak lives here.
// -----------------------------------------------------------------------------

export const site = {
  name: "10th HUB",
  domain: "10thhub.com",
  tagline: "Where great businesses meet great virtual assistants.",
  email: "hello@10thhub.com",
  phone: "+1 (555) 018-2210",
  // Honest, editable urgency field. Set to null to hide the scarcity banner entirely.
  onboardingSlotsLeft: 6 as number | null,
  responseGuaranteeHours: 24,
};

export type NavLink = { label: string; href: string };

// Client-only navigation. Every audience on this site is a business hiring a VA,
// so the nav no longer splits by audience — it splits by decision stage:
// what we do -> how it works -> what it costs -> proof.
export const primaryNav: NavLink[] = [
  { label: "Why 10th HUB", href: "/for-employers" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case studies", href: "/case-studies" },
];

// NOTE: Footer.tsx lays these out in a fixed 4-column grid
// (brand block + 3 link columns), so keep this at exactly three columns.
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Hire talent",
    links: [
      { label: "Browse services", href: "/services" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing & packages", href: "/pricing" },
      { label: "Hire a VA", href: "/hire" },
    ],
  },
  {
    title: "Why 10th HUB",
    links: [
      { label: "How we vet talent", href: "/for-employers" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
