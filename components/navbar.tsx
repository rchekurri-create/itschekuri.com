"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const allLinks = [...site.nav, { href: "/resume", label: "Resume" }];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/58 backdrop-blur-2xl">
      <div className="page-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3 font-black">
          <span className="grid size-10 place-items-center overflow-hidden rounded-xl border border-white/15 bg-zinc-900 shadow-[0_0_28px_rgba(34,211,238,0.25)]">
            <Image
              src="/images/itschekuri-logo.png"
              alt="itschekuri logo"
              width={80}
              height={80}
              priority
              className="size-full object-cover"
            />
          </span>
          <span className="text-white">itschekuri</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative rounded-lg px-3 py-2 text-sm font-bold text-zinc-400 transition hover:text-white",
                "after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-gradient-to-r after:from-pink-300 after:via-purple-300 after:to-sky-300 after:transition-all hover:after:w-[calc(100%-1.5rem)]",
                pathname === item.href && "bg-white/[0.055] text-white after:w-[calc(100%-1.5rem)]",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.045] px-3 py-2 text-sm font-black text-white transition hover:scale-[1.02] hover:border-purple-300/45 hover:bg-purple-300/10"
          >
            <Sparkles className="size-4 text-purple-300" />
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-purple-300/40 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="border-t border-white/10 bg-zinc-950/96 px-4 py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile navigation"
          >
            <div className="grid gap-2">
              {allLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-bold text-zinc-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
