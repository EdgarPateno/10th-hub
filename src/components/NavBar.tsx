"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { HubMark } from "./HubGraphic";
import { Icon } from "./Icons";

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-azure-200 bg-navy/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="container-hub flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <HubMark className="h-10 w-10" />
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            10th<span className="text-brand"> HUB</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-brand-50 text-brand"
                    : "text-slate-body hover:bg-white/10 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs — one low-commitment path, one primary conversion */}
        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="outline" size="sm">
            Talk to us
          </ButtonLink>
          <ButtonLink href="/hire" variant="brand" size="sm" withArrow>
            Hire Talent
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl text-ink hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="band border-t border-azure-200 lg:hidden">
          <ul className="container-hub flex flex-col py-3">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-[15px] font-medium",
                    isActive(link.href) ? "bg-brand-50 text-brand" : "text-slate-body"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-hub flex flex-col gap-2.5 pb-4">
            <ButtonLink href="/hire" variant="brand" className="w-full" withArrow>
              Hire Talent
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" className="w-full">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
