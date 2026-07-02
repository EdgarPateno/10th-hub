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

export const primaryNav: NavLink[] = [
  { label: "For Employers", href: "/for-employers" },
  { label: "For VAs", href: "/for-vas" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case studies", href: "/case-studies" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Hire talent",
    links: [
      { label: "For employers", href: "/for-employers" },
      { label: "Browse services", href: "/services" },
      { label: "Pricing & packages", href: "/pricing" },
      { label: "Hire a VA", href: "/hire" },
    ],
  },
  {
    title: "Find work",
    links: [
      { label: "For VAs", href: "/for-vas" },
      { label: "How applying works", href: "/how-it-works" },
      { label: "Apply as a VA", href: "/apply" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case studies", href: "/case-studies" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
