"use client";

import Link from "next/link";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/62 backdrop-blur-2xl">
      <div className="page-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3 font-black">
          <span className="grid size-9 place-items-center rounded-lg bg-white text-sm text-zinc-950 shadow-[0_0_28px_rgba(34,211,238,0.25)]">
            ic
          </span>
          <span className="text-white">itschekuri</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-bold text-zinc-400 transition hover:bg-white/5 hover:text-white",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300 hover:text-zinc-950"
          >
            <Sparkles className="size-4" />
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
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
