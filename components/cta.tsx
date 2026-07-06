import { ButtonLink } from "@/components/button-link";

export function CTA() {
  return (
    <section className="page-shell py-20">
      <div className="glow-border rounded-3xl">
        <div className="glass rounded-3xl p-8 sm:p-10 md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Contact CTA</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
                Have an idea, role, or collaboration in mind?
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-400">
                I like useful software, thoughtful teams, and projects that reward curiosity.
              </p>
            </div>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
