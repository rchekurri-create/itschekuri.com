import { Send } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function CTA() {
  return (
    <section className="page-shell py-16">
      <div className="soft-card relative isolate overflow-hidden p-8 sm:p-10">
        <div className="absolute inset-y-0 right-0 -z-10 w-2/3 bg-gradient-to-l from-[#ff3cac]/18 via-[#a855f7]/10 to-transparent" />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="grid size-12 place-items-center rounded-full border border-[#ff3cac]/35 bg-[#ff3cac]/10 text-[#ff3cac]">
              <Send className="size-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">Have a business challenge?</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Let's discuss how the right solution can simplify your operations and create measurable value.
            </p>
          </div>
          <ButtonLink href="/connect">Let's Connect</ButtonLink>
        </div>
      </div>
    </section>
  );
}
