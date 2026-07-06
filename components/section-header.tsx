import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}
