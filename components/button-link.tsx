import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({ href, children, variant = "primary", className, onClick }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-5 py-2.5 text-sm font-semibold transition duration-200 active:scale-[0.98]",
        variant === "primary" && "button-primary hover:-translate-y-0.5",
        variant === "secondary" && "button-secondary hover:-translate-y-0.5",
        variant === "ghost" && "px-0 text-zinc-300 hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
