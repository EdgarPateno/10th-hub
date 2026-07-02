import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { HubMark } from "./HubGraphic";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-white">
      <div className="container-hub grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <HubMark className="h-8 w-8" />
            <span className="font-display text-lg font-extrabold tracking-tight text-ink">
              10th<span className="text-brand"> HUB</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-body">{site.tagline}</p>
          <p className="mt-4 text-sm text-slate-muted">
            <a href={`mailto:${site.email}`} className="link-underline">
              {site.email}
            </a>
            <br />
            {site.phone}
          </p>
        </div>

        {footerNav.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-body transition-colors hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="container-hub flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Placeholder content for demonstration.
          </p>
          <div className="flex gap-5">
            <Link href="/faq" className="hover:text-brand">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-brand">
              About
            </Link>
            <Link href="/contact" className="hover:text-brand">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
