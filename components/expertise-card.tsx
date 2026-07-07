import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpertiseCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export function ExpertiseCard({ title, description, icon: Icon, accent }: ExpertiseCardProps) {
  return (
    <article className={cn("soft-card soft-card-hover accent-" + accent, "p-5")}>
      <Icon className="size-6 accent-text" />
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </article>
  );
}
