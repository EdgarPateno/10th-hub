# 10th HUB — marketplace website

A multi-page, conversion-optimized marketing site for **10th HUB**, a two-sided VA
staffing marketplace connecting **employers hiring virtual assistants** with
**VAs looking for remote work**.

---

## Stack

| Layer | Choice | Why |
|------|--------|-----|
| Framework | **Next.js 14 (App Router)** | Real routes (not anchor sections), per-page SEO metadata, static prerendering, React Server Components. |
| Language | **TypeScript** | Type-safe content models and components. |
| Styling | **Tailwind CSS 3.4** | Utility-first with a custom design-token theme (see `tailwind.config.ts`). |
| Fonts | **Plus Jakarta Sans** (display) + **Inter** (body) via `next/font` | Self-hosted, no layout shift. |
| Icons | Inline SVG set (`components/Icons.tsx`) | No emoji, one consistent stroke language, theme-able. |

Everything prerenders to static HTML — **26 routes**, ~96 kB first-load JS on content pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

---

## Design system

Defined once in `tailwind.config.ts` + `src/app/globals.css`:

- **Two-audience color system** (also a CRO device): employers = **blue `#2557E6`**,
  talent/VAs = **coral `#FB6B4B`**, grounded in navy `#0E1B2E` on a cool off-white canvas.
- **Signature element:** the *hub* node-graph (`components/HubGraphic.tsx`) — businesses on
  one side, VA skill-nodes on the other, connected through a central 10th HUB node. The
  two-sided marketplace, drawn literally.
- Accessibility floor: visible focus rings, `prefers-reduced-motion` honored, semantic
  landmarks, labeled controls, alt/aria text, ≥44px touch targets, AA contrast.

---

## Route structure

```
src/app/
  layout.tsx            Root chrome: fonts, scarcity banner, nav, footer, mobile CTA bar, skip link
  page.tsx              Home — dual-path hero (signature), value prop, services, snapshot, proof, CTA
  for-employers/        Pain→solution, categories, how-hiring-works, testimonials, FAQ, CTA
  for-vas/              VA value prop, how-applying-works, roles, testimonials, FAQ, CTA
  services/
    page.tsx            Services overview grid
    [slug]/page.tsx     8 service detail pages (SSG) with breadcrumb + tasks + related
  how-it-works/         Tabbed employer vs VA journeys
  pricing/              3-tier comparison + pricing FAQ
  about/                Mission, us-vs-generic table, stats, founder note
  case-studies/         3 detailed success stories with metrics
  faq/                  Tabbed employer/VA objection handling
  hire/                 Multi-step "Hire a VA" lead form
  apply/                Multi-step "Apply as a VA" form (with resume upload placeholder)
  contact/              Contact form + quick-path cards
  resources/            SEO/thought-leadership index (placeholder posts)
  not-found.tsx         Branded 404
  sitemap.ts / robots.ts / icon.svg

src/components/         NavBar, Footer, Hero (in page), ServiceCard, TestimonialCard,
                        CTASection, PricingTable, FAQAccordion, Tabs, HubGraphic, blocks
                        (StatBand/TrustRow/StepList), Button, ui (headings/badges), forms/
src/lib/
  site.ts              Editable site settings + navigation (incl. onboarding-slots field)
  content.ts           Services, testimonials, stats, FAQs, pricing tiers, case studies
```

**To edit copy/content:** almost everything lives in `src/lib/content.ts` and
`src/lib/site.ts` — no component edits needed for text, services, testimonials, pricing,
FAQs, or the honest "onboarding slots left" urgency field (set it to `null` to hide the
scarcity banner entirely).

---

## CRO features applied

- Segmented nav + dual, audience-colored CTAs everywhere ("Hire Talent" / "Find Work").
- Single primary CTA per page; secondary actions visually subordinate.
- Above-the-fold H1 + subhead + CTA on every landing page.
- Sticky header CTA (desktop) + persistent bottom CTA bar (mobile).
- Trust/stat band + testimonials placed near every major CTA.
- Objection-handling FAQs ("Is this legit?", "How fast?", "What if it doesn't work out?").
- Low-friction multi-step forms: only name/email/category required up front, progressive
  disclosure, visible step progress, exit-friendly secondary links ("Not ready? See how it works").
- Honest, editable urgency (real content field, not fabricated data).
- Microcopy under CTAs describing what happens next.

---

## Plugging in a real backend / CRM

Forms currently validate client-side and **mock** submission (a short delay, then a success
state). Each form marks its integration point with a `BACKEND INTEGRATION POINT` comment:

- `src/components/forms/HireForm.tsx`
- `src/components/forms/ApplyForm.tsx`
- `src/components/forms/ContactForm.tsx`

To make them live, replace the mocked `setTimeout` with a real POST, e.g.:

```ts
await fetch("/api/hire", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

Then add a route handler (`src/app/api/hire/route.ts`) that forwards to your system:

- **HubSpot** — Forms API / Contacts API.
- **Airtable** — create a record in a "Leads" / "Applicants" base.
- **Zapier / Make webhook** — POST the JSON to a catch hook and fan out from there.

For the VA **resume upload**, the file input is a placeholder (no file is stored in the
demo). In production, upload to object storage (S3 / Supabase Storage / Google Drive) from
the API route and save the returned URL alongside the applicant record.

---

## Notes

- All testimonials, case-study metrics, client names, and pricing are **placeholder,
  on-brand content** clearly labeled as such — replace before launch.
- Not affiliated with Upwork; marketplace mechanics were used only as a structural reference.
