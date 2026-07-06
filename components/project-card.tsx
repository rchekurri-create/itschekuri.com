import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group glow-border rounded-2xl">
      <div className="glass flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/30">
        <div className="mb-5 grid aspect-video place-items-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_34%),linear-gradient(135deg,rgba(168,85,247,0.18),rgba(17,24,39,0.7))]">
          <div className="rounded-lg border border-white/10 bg-zinc-950/60 px-4 py-2 font-mono text-xs text-cyan-100">
            {project.category.toLowerCase()} / {project.status.toLowerCase()}
          </div>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{project.status}</p>
            <h3 className="mt-2 text-xl font-black text-white">{project.title}</h3>
          </div>
        </div>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-bold text-zinc-300">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a href={project.github} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white" target="_blank" rel="noreferrer">
            <Code2 className="size-4" />
            GitHub
          </a>
          <a href={project.demo} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-100" target="_blank" rel="noreferrer">
            <ExternalLink className="size-4" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
