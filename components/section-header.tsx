import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "purple" | "blue" | "orange" | "pink" | "white";
};

const accentClass = {
  purple: "text-purple-300",
  blue: "text-sky-300",
  orange: "text-orange-300",
  pink: "text-pink-300",
  white: "text-white",
};

export function SectionHeader({ eyebrow, title, description, align = "left", accent = "blue" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("mb-3 text-xs font-black uppercase tracking-[0.22em]", accentClass[accent])}>{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}
