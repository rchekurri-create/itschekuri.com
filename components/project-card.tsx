import { ArrowUpRight, Target } from "lucide-react";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full min-h-[440px] flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_24px_60px_rgba(24,24,27,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 bg-[#d8ff5a]">
        <div className="absolute inset-6 rounded-[1.5rem] border border-black/10 bg-white/65 p-4">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-black">
                {project.category}
              </span>
              <span className="size-12 rounded-[1rem] bg-[#78dcf2] shadow-[0_18px_32px_rgba(24,24,27,0.16)]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Case study</p>
              <p className="mt-2 max-w-[14rem] text-2xl font-black leading-tight text-black">{project.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ef4b20]">{project.status}</p>
          <ArrowUpRight className="size-5 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
        </div>
        <h3 className="mt-3 text-2xl font-black text-black">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
        <div className="mt-5 rounded-2xl border border-black/10 bg-zinc-50 p-4">
          <div className="flex gap-3">
            <Target className="mt-0.5 size-4 shrink-0 text-[#1685a0]" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Business value</p>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{project.outcome}</p>
            </div>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold text-zinc-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
