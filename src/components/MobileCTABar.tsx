import { ButtonLink } from "./Button";

// Persistent bottom CTA bar on mobile (CRO: always-present primary action).
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-azure-200 bg-white/85 p-3 backdrop-blur-xl backdrop-saturate-150 lg:hidden">
      <ButtonLink href="/hire" variant="brand" className="w-full" withArrow>
        Hire Talent
      </ButtonLink>
    </div>
  );
}
