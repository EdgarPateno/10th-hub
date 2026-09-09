// -----------------------------------------------------------------------------
// Placeholder-but-realistic, on-brand content. All copy here is illustrative and
// clearly marked as placeholder where it implies specific results or people.
// -----------------------------------------------------------------------------

export type IconName =
  | "headset"
  | "executive"
  | "assistant"
  | "code"
  | "shopify"
  | "cart"
  | "amazon"
  | "ledger"
  | "spark";

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  short: string;
  pitch: string;
  outcomes: string[];
  tasks: string[];
  startingRate: string;
};

export const services: Service[] = [
  {
    slug: "customer-service",
    name: "Customer Service",
    icon: "headset",
    short: "Fast, on-brand support across email, chat, and phone.",
    pitch:
      "Give every customer a quick, human answer. Our support VAs cover tickets, live chat, and inbound calls so your response times stay low and your reviews stay high.",
    outcomes: [
      "Under-24h first-response times",
      "Coverage across time zones",
      "Consistent, on-brand tone",
    ],
    tasks: [
      "Email & helpdesk (Zendesk, Gorgias, Freshdesk)",
      "Live chat & social DMs",
      "Order & returns handling",
      "Escalation triage",
    ],
    startingRate: "$8/hr",
  },
  {
    slug: "executive-assistant",
    name: "Executive Assistant",
    icon: "executive",
    short: "Senior, discreet support for founders and the C-suite.",
    pitch:
      "A right hand for the person everyone needs. An executive assistant owns your calendar, prepares you for every meeting, and handles board, investor, and travel logistics with the discretion the role demands — making the judgment calls a general VA shouldn't have to.",
    outcomes: [
      "A calendar that protects your deep work",
      "Every meeting prepped and followed up",
      "Confidential work handled discreetly",
    ],
    tasks: [
      "Calendar ownership & gatekeeping",
      "Inbox triage & drafted replies",
      "Board & investor communications",
      "Travel, expense reports & meeting prep",
    ],
    startingRate: "$14/hr",
  },
  {
    slug: "virtual-assistance",
    name: "Virtual Assistance",
    icon: "assistant",
    short: "A reliable right hand for inbox, calendar, and daily ops.",
    pitch:
      "Hand off the busywork. A general VA keeps your inbox, calendar, travel, and admin running so you can spend your hours on the work only you can do.",
    outcomes: [
      "10–20 hours back each week",
      "Inbox zero, kept that way",
      "Nothing falls through the cracks",
    ],
    tasks: [
      "Inbox & calendar management",
      "Data entry & CRM upkeep",
      "Travel & scheduling",
      "Research & reporting",
    ],
    startingRate: "$8/hr",
  },
  {
    slug: "web-developer-designer",
    name: "Web Developer / Designer",
    icon: "code",
    short: "Landing pages, fixes, and design that ships.",
    pitch:
      "From a new landing page to ongoing site maintenance, our web VAs design and build in the tools you already use — no agency retainer required.",
    outcomes: [
      "Faster launches",
      "On-brand, responsive builds",
      "Ongoing upkeep without the overhead",
    ],
    tasks: [
      "Landing pages & funnels",
      "WordPress / Webflow / Framer",
      "UI design in Figma",
      "Bug fixes & maintenance",
    ],
    startingRate: "$15/hr",
  },
  {
    slug: "shopify-specialist",
    name: "Shopify Specialist",
    icon: "shopify",
    short: "Theme, apps, and conversion work for your store.",
    pitch:
      "Specialists who live in Shopify. Theme customization, app setup, product uploads, and CRO tweaks that move your store forward every week.",
    outcomes: [
      "Cleaner, faster storefronts",
      "Higher conversion",
      "Launch-ready product pages",
    ],
    tasks: [
      "Theme customization (Liquid)",
      "App setup & integrations",
      "Product & collection uploads",
      "Conversion & speed tweaks",
    ],
    startingRate: "$15/hr",
  },
  {
    slug: "ecommerce-manager",
    name: "Ecommerce Manager",
    icon: "cart",
    short: "One owner for merchandising, promos, and day-to-day store ops.",
    pitch:
      "A hands-on manager for your online store — from merchandising and promotions to inventory and reporting — so the store runs like a business, not a to-do list.",
    outcomes: [
      "Consistent promo calendar",
      "Healthier margins",
      "Weekly performance reporting",
    ],
    tasks: [
      "Merchandising & catalog",
      "Promotions & email calendar",
      "Inventory coordination",
      "Sales & KPI reporting",
    ],
    startingRate: "$15/hr",
  },
  {
    slug: "amazon-specialist",
    name: "Amazon Specialist",
    icon: "amazon",
    short: "Listings, PPC, and Seller Central, handled.",
    pitch:
      "Grow on Amazon without the guesswork. Listing optimization, PPC management, and Seller Central operations from VAs who know the marketplace.",
    outcomes: [
      "Better-ranked listings",
      "Lower ACoS on ads",
      "Fewer account headaches",
    ],
    tasks: [
      "Listing & A+ content",
      "PPC campaign management",
      "Seller Central operations",
      "Reviews & feedback",
    ],
    startingRate: "$15/hr",
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping Services",
    icon: "ledger",
    short: "Clean books, reconciled monthly, ready for tax time.",
    pitch:
      "Stay on top of the numbers. Our bookkeeping VAs handle categorization, reconciliation, invoicing, and monthly reports in QuickBooks or Xero.",
    outcomes: [
      "Books closed on time",
      "Always tax-ready",
      "Clear monthly financials",
    ],
    tasks: [
      "Transaction categorization",
      "Bank reconciliation",
      "Invoicing & AP/AR",
      "Monthly P&L reports",
    ],
    startingRate: "$15/hr",
  },
  {
    slug: "all-other-va-services",
    name: "All Other VA Services",
    icon: "spark",
    short: "Have something specific? We match to it.",
    pitch:
      "If the role isn't on this list, tell us what you need. From social media and video editing to lead generation and project management, we source and vet a VA for the exact skill set.",
    outcomes: [
      "A match for niche roles",
      "One vetted candidate, not fifty",
      "Flexible scope & hours",
    ],
    tasks: [
      "Social media management",
      "Video & podcast editing",
      "Lead generation & outreach",
      "Project management",
    ],
    startingRate: "Custom",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// -----------------------------------------------------------------------------

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2,400+", label: "VAs placed with businesses" },
  { value: "72 hrs", label: "Average time to first match" },
  { value: "94%", label: "Client retention after 6 months" },
  { value: "7 yrs", label: "Placing remote talent" },
];

// -----------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// NOTE: Placeholder testimonials — replace with real, attributed quotes before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "We had a vetted customer-service VA answering tickets within the week. Our first-response time dropped from two days to under three hours.",
    name: "Marina Ruiz",
    role: "Founder, Coastline Goods",
    initials: "MR",
  },
  {
    quote:
      "I stopped trying to be the bottleneck for everything. My VA runs my inbox and calendar, and I got my evenings back.",
    name: "David Chen",
    role: "Managing Partner, Northwind Advisory",
    initials: "DC",
  },
  {
    quote:
      "Our Amazon specialist cut our ad spend waste and rewrote our top listings. Sales are up and I'm not micromanaging.",
    name: "Priya Nair",
    role: "Owner, Lumen Home",
    initials: "PN",
  },
];

// -----------------------------------------------------------------------------

export type FaqItem = { q: string; a: string };

export const employerFaqs: FaqItem[] = [
  {
    q: "Is this legit — how do I know the VAs are real and vetted?",
    a: "Every VA goes through a skills assessment, a live interview, and reference or portfolio checks before they reach you. You review one shortlisted, pre-matched candidate — not a pile of cold applications — and you interview them yourself before committing.",
  },
  {
    q: "How fast can I actually hire someone?",
    a: "Most employers meet a matched candidate within 72 hours of submitting a request. Straightforward roles can be filled the same week.",
  },
  {
    q: "What if it doesn't work out?",
    a: "Your first two weeks are a risk-free trial. If the fit isn't right, we re-match you at no extra cost — or you can walk away and pay only for hours worked.",
  },
  {
    q: "How does pricing work?",
    a: "You pay a simple monthly rate based on hours and role. There are no recruiting fees or long lock-in contracts. See the Pricing page for package details.",
  },
  {
    q: "Who manages the VA day to day?",
    a: "You do — they work as an extension of your team. A 10th HUB success manager checks in, handles replacements, and steps in if anything needs attention.",
  },
  {
    q: "Do I need to handle payroll or contracts?",
    a: "No. Billing, contracts, and payments run through 10th HUB. You get one monthly invoice.",
  },
];

// -----------------------------------------------------------------------------

export type PricingTier = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  featured?: boolean;
  bestFor: string;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Part-Time",
    tagline: "Test the waters",
    price: "$640",
    unit: "/mo · 20 hrs/wk",
    bestFor: "Founders offloading their first tasks",
    features: [
      "One dedicated VA",
      "20 hours per week",
      "Any single service category",
      "Success manager check-ins",
      "2-week risk-free trial",
    ],
    cta: "Start part-time",
  },
  {
    name: "Full-Time",
    tagline: "Your everyday operator",
    price: "$1,180",
    unit: "/mo · 40 hrs/wk",
    featured: true,
    bestFor: "Teams ready to fully hand off a role",
    features: [
      "One dedicated full-time VA",
      "40 hours per week",
      "Priority 72-hour matching",
      "Free replacement guarantee",
      "Dedicated success manager",
      "2-week risk-free trial",
    ],
    cta: "Hire full-time",
  },
  {
    name: "Team",
    tagline: "Scale a function",
    price: "Custom",
    unit: "multiple roles",
    bestFor: "Businesses staffing a whole department",
    features: [
      "Multiple VAs & specialists",
      "Blended skill sets",
      "Volume pricing",
      "Shared team lead option",
      "Quarterly performance reviews",
    ],
    cta: "Get a quote",
  },
];

// -----------------------------------------------------------------------------

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  service: string;
  headline: string;
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  quote: string;
  person: string;
};

// NOTE: Placeholder case studies — illustrative outcomes, replace before launch.
export const caseStudies: CaseStudy[] = [
  {
    slug: "coastline-goods",
    client: "Coastline Goods",
    industry: "DTC home & lifestyle",
    service: "Customer Service",
    headline: "From a 2-day support backlog to same-day replies",
    challenge:
      "A growing DTC brand was drowning in support tickets during peak season. The founder was answering emails at midnight and reviews were slipping.",
    approach:
      "We matched a vetted customer-service VA within five days, set up macros in Gorgias, and layered in weekend coverage as volume grew.",
    metrics: [
      { value: "-92%", label: "First-response time" },
      { value: "4.9★", label: "Support rating" },
      { value: "18 hrs", label: "Founder time saved / wk" },
    ],
    quote:
      "Our first-response time dropped from two days to under three hours, and I got my nights back.",
    person: "Marina Ruiz, Founder",
  },
  {
    slug: "lumen-home",
    client: "Lumen Home",
    industry: "Amazon marketplace seller",
    service: "Amazon Specialist",
    headline: "Cutting ad waste while growing marketplace sales",
    challenge:
      "Lumen Home's Amazon ad spend was climbing with flat returns, and their listings hadn't been touched in a year.",
    approach:
      "An Amazon specialist restructured PPC campaigns, rewrote the top ten listings with A+ content, and set a weekly optimization rhythm.",
    metrics: [
      { value: "-34%", label: "Wasted ad spend" },
      { value: "+27%", label: "Marketplace revenue" },
      { value: "Top 3", label: "Ranking on hero keywords" },
    ],
    quote:
      "Sales are up, ACoS is down, and I'm not micromanaging any of it.",
    person: "Priya Nair, Owner",
  },
  {
    slug: "northwind-advisory",
    client: "Northwind Advisory",
    industry: "Professional services",
    service: "Virtual Assistance + Bookkeeping",
    headline: "Two roles filled, one calmer managing partner",
    challenge:
      "A boutique advisory firm needed both executive support and reliable bookkeeping but didn't want two full-time local hires.",
    approach:
      "We placed a general VA for inbox and calendar plus a part-time bookkeeping VA, coordinated by a single success manager.",
    metrics: [
      { value: "2 roles", label: "Filled in 10 days" },
      { value: "-60%", label: "Admin load on partners" },
      { value: "On time", label: "Monthly close, every month" },
    ],
    quote:
      "I stopped being the bottleneck for everything. Now the firm just runs.",
    person: "David Chen, Managing Partner",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
