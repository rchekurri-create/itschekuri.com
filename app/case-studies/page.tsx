import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/data/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Representative solution scenarios for CRM, ITSM, workflow automation, and business intelligence.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Case studies in practical business solution design."
        description="A look at how business challenges can be translated into structured processes, connected systems, and measurable technology outcomes. These are anonymized representative solution scenarios."
        primaryHref="/connect"
        primaryLabel="Discuss a Similar Challenge"
      />

      <MotionSection className="page-shell grid gap-6 py-12">
        {caseStudies.map((study, index) => (
          <article key={study.title} className="soft-card overflow-hidden">
            <div className="grid gap-6 p-6 lg:grid-cols-[0.35fr_0.65fr] lg:p-8">
              <div>
                <p className="text-sm font-semibold text-[#ff8a00]">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{study.title}</h2>
                <p className="mt-3 text-sm text-zinc-500">{study.companyType}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Detail title="Challenge" body={study.challenge} />
                <Detail title="Solution" body={study.solution} />
                <div className="md:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a855f7]">Approach</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                    {study.approach.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#00c2ff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <Detail title="Outcome" body={study.outcome} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </MotionSection>

      <section className="page-shell pb-16">
        <div className="soft-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Have a similar operational challenge?</h2>
            <p className="mt-2 text-sm text-zinc-400">Share what is happening in your business and where systems feel disconnected.</p>
          </div>
          <ButtonLink href="/connect">Discuss a Similar Challenge</ButtonLink>
        </div>
      </section>
    </main>
  );
}

function Detail({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff8a00]">{title}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
    </div>
  );
}
