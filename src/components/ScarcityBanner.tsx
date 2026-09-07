import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./Icons";

// Honest, editable urgency. Renders nothing when the slots field is null.
export function ScarcityBanner() {
  if (site.onboardingSlotsLeft == null) return null;
  return (
    <div className="mesh-navy">
      <div className="container-hub flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-[13px] font-medium">
        <Icon.bolt className="h-4 w-4 text-talent" />
        <span>
          Onboarding{" "}
          <span className="font-bold text-white">
            {site.onboardingSlotsLeft} new businesses
          </span>{" "}
          this month.
        </span>
        <Link href="/hire" className="font-semibold text-brand-100 underline underline-offset-2 hover:text-white">
          Reserve your match →
        </Link>
      </div>
    </div>
  );
}
