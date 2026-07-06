import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-lg font-black text-white">
            <span className="grid size-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              <Image
                src="/images/itschekuri-logo.png"
                alt="itschekuri logo"
                width={80}
                height={80}
                className="size-full object-cover"
              />
            </span>
            <span>itschekuri</span>
          </Link>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Raja Vamsi Chekuri&apos;s digital headquarters for technology consulting, solution design, AI adoption, and practical business transformation.
          </p>
        </div>
        <SocialLinks />
      </div>
      <div className="page-shell flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.person}. Built for {site.url.replace("https://", "")}.</p>
        <div className="flex gap-4">
          {site.futureNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-zinc-200">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
