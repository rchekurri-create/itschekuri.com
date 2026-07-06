import { ArrowUpRight, Target } from "lucide-react";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group premium-card flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/35">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(0,194,255,0.18),rgba(168,92,255,0.08)_42%,rgba(9,9,11,0.92)),radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.16),transparent_38%)]">
        <div className="absolute inset-6 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-sky-200">
                {project.category}
              </span>
              <span className="size-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(0,194,255,0.65)]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Case study</p>
              <p className="mt-2 max-w-[14rem] text-2xl font-black leading-tight text-white">{project.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">{project.status}</p>
          <ArrowUpRight className="size-5 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-200" />
        </div>
        <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex gap-3">
            <Target className="mt-0.5 size-4 shrink-0 text-sky-300" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Business value</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{project.outcome}</p>
            </div>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-zinc-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
