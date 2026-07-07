import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

type CaseStudy = {
  title: string;
  companyType: string;
  challenge: string;
  outcome: string;
  tags: string[];
};

export function CaseStudyCard({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  return (
    <article className="soft-card soft-card-hover overflow-hidden">
      <div className="border-b border-white/10 bg-white/[0.025] p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#ff8a00]">
          <Building2 className="size-4" />
          Representative scenario
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{study.title}</h3>
        <p className="mt-2 text-sm text-zinc-500">{study.companyType}</p>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-zinc-400">{compact ? study.outcome : study.challenge}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
        <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          View details
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
