import { ButtonLink } from "./Button";

// Persistent bottom CTA bar on mobile (CRO: always-present primary action).
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <ButtonLink href="/apply" variant="outline" className="w-full">
          Find Work
        </ButtonLink>
        <ButtonLink href="/hire" variant="brand" className="w-full">
          Hire Talent
        </ButtonLink>
      </div>
    </div>
  );
}
