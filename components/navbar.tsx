"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="page-shell">
        <nav className="glass flex min-h-20 items-center justify-between rounded-[8px] px-5 py-3" aria-label="Primary navigation">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="itschekuri home">
            <Image src="/images/brand-logo.png" alt="itschekuri" width={280} height={94} priority className="h-16 w-auto" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-medium text-zinc-300 transition hover:text-white",
                    active && "text-white",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#ff8a00] via-[#ff3cac] to-[#00c2ff]" />
                  ) : null}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <ButtonLink href="/connect" variant="secondary" className="min-h-11 px-5">
              Let's Connect
            </ButtonLink>
          </div>

          <button
            type="button"
            className="grid size-12 place-items-center rounded-[8px] border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.07] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.nav
              className="glass mt-2 rounded-[8px] p-3 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              aria-label="Mobile navigation"
            >
              <div className="grid gap-2">
                {[...site.nav, { href: "/connect", label: "Let's Connect" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
