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
        variant === "primary" && "bg-cyan-300 text-zinc-950 shadow-[0_0_34px_rgba(34,211,238,0.28)] hover:bg-emerald-300",
        variant === "secondary" && "border border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-white/10",
        variant === "ghost" && "text-zinc-300 hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
