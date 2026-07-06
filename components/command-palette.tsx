"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/data/site";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => [...site.nav, ...site.futureNav, { href: "mailto:admin@itschekuri.com", label: "Email Raja" }], []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 hidden min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-zinc-900/90 px-3 text-sm font-bold text-zinc-300 shadow-2xl backdrop-blur transition hover:border-cyan-300/50 hover:text-white sm:inline-flex"
        aria-label="Open command palette"
      >
        <Command className="size-4" />
        <span className="text-zinc-500">⌘K</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-start bg-black/60 px-4 pt-24 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search className="size-4 text-cyan-300" />
                <span className="flex-1 text-sm font-bold text-zinc-400">Jump anywhere</span>
                <button type="button" onClick={() => setOpen(false)} className="rounded-md p-1 text-zinc-400 hover:bg-white/10 hover:text-white" aria-label="Close command palette">
                  <X className="size-4" />
                </button>
              </div>
              <div className="grid gap-1 p-2">
                {links.map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-bold text-zinc-200 transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
