import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  includes?: string[];
  icon: LucideIcon;
  accent: string;
  index?: number;
};

export function ServiceCard({ title, description, includes, icon: Icon, accent, index }: ServiceCardProps) {
  return (
    <article className={cn("soft-card soft-card-hover accent-" + accent, "p-6")}>
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-11 place-items-center rounded-[8px] border accent-ring">
          <Icon className="size-5" />
        </div>
        {index ? <span className="text-sm font-semibold accent-text">{String(index).padStart(2, "0")}</span> : null}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      {includes ? (
        <ul className="mt-5 grid gap-2 text-sm text-zinc-300">
          {includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
