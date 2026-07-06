import { site } from "@/data/site";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {site.socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            className="group inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm font-bold text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon className="size-4 text-sky-300 transition group-hover:scale-110 group-hover:text-white" />
            {social.label}
          </a>
        );
      })}
    </div>
  );
}
