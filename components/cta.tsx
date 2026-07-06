import { ButtonLink } from "@/components/button-link";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function CTA() {
  return (
    <section className="section-band accent-white page-shell py-24">
      <div className="premium-card rounded-[2rem] p-8 sm:p-10 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white">Contact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Have a business challenge that needs a practical technology path?
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              I help connect strategy, product thinking, solution architecture, and implementation planning so ideas can become useful systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="mailto:admin@itschekuri.com" variant="secondary">
                {site.email}
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Useful links</p>
            <div className="mt-5">
              <SocialLinks />
            </div>
            <a
              href="/contact"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-black text-zinc-950 transition hover:scale-[1.01] hover:bg-zinc-200"
            >
              Calendar booking placeholder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
