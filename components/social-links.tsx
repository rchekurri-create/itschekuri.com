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
            className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 bg-white px-3 text-sm font-bold text-zinc-800 transition hover:-translate-y-0.5 hover:bg-zinc-100"
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon className="size-4 text-[#ef4b20] transition group-hover:scale-110 group-hover:text-black" />
            {social.label}
          </a>
        );
      })}
    </div>
  );
}
