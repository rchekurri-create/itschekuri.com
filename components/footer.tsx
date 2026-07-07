import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030407]/92">
      <div className="page-shell grid gap-8 py-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label="itschekuri home">
            <Image src="/images/brand-logo.png" alt="itschekuri" width={190} height={64} className="h-12 w-auto" />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">{site.positioning}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-400 lg:justify-center">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/connect" className="transition hover:text-white">
            Let's Connect
          </Link>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white">
            <Mail className="size-4 text-[#ff8a00]" />
            {site.email}
          </a>
          <div className="flex gap-3">
            {site.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-white/20 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="page-shell border-t border-white/10 py-5 text-center text-xs text-zinc-500 sm:text-left">
        <p>(c) 2026 itschekuri. All rights reserved.</p>
      </div>
    </footer>
  );
}
