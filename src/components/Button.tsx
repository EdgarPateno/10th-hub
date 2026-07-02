import Link from "next/link";
import { Icon } from "./Icons";

type Variant = "brand" | "talent" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  brand:
    "bg-brand text-white hover:bg-brand-600 shadow-sm hover:shadow-cardHover focus-visible:ring-brand",
  talent:
    "bg-talent text-white hover:bg-talent-600 shadow-sm hover:shadow-cardHover focus-visible:ring-talent",
  dark: "bg-navy text-white hover:bg-navy-700 shadow-sm",
  outline:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink hover:bg-brand-50 hover:text-brand",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "px-6 text-base min-h-[52px] py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold font-display tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function ButtonLink({
  href,
  variant = "brand",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={cn(buttonBase, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow && <Icon.arrow className="h-4 w-4" />}
    </Link>
  );
}

export function Button({
  variant = "brand",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonBase, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow && <Icon.arrow className="h-4 w-4" />}
    </button>
  );
}
