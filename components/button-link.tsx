import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition duration-200",
        "active:scale-[0.98]",
        variant === "primary" &&
          "button-primary text-zinc-950 hover:scale-[1.02]",
        variant === "secondary" &&
          "button-secondary text-white hover:scale-[1.02]",
        variant === "ghost" && "rounded-md px-2 text-zinc-300 hover:translate-x-0.5 hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
