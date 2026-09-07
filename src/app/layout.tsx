import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScarcityBanner } from "@/components/ScarcityBanner";
import { MobileCTABar } from "@/components/MobileCTABar";
import { Backdrop } from "@/components/Backdrop";
import { MotionProvider } from "@/components/Motion";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://10thhub.com"),
  title: {
    default: "10th HUB — Hire vetted virtual assistants, or find remote work",
    template: "%s · 10th HUB",
  },
  description:
    "10th HUB connects businesses with vetted virtual assistants and specialists — and connects skilled VAs with legitimate, well-paid remote work. Match in 72 hours.",
  keywords: [
    "virtual assistant",
    "hire a VA",
    "remote staffing",
    "Shopify VA",
    "customer service outsourcing",
    "bookkeeping VA",
  ],
  openGraph: {
    title: "10th HUB — Hire vetted virtual assistants, or find remote work",
    description:
      "Vetted virtual assistants for growing businesses. Legitimate remote work for skilled VAs. Matched in 72 hours.",
    type: "website",
    siteName: "10th HUB",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/*
          No-JS safety net. Motion serialises its `initial` state (opacity: 0)
          into the static export, so if the bundle never runs, force every
          reveal wrapper visible. Inert the moment JS is available.
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>[data-reveal]{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body className="min-h-dvh">
        {/* CSS-only ambient blue field. Zero JS, aria-hidden, z-index -1. */}
        <Backdrop />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <ScarcityBanner />
          <NavBar />
          <main id="main" className="pb-24 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCTABar />
        </MotionProvider>
      </body>
    </html>
  );
}
