import { timeline } from "@/data/site";

export function Timeline() {
  return (
    <div className="relative grid gap-4">
      <div className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-cyan-300 via-purple-300 to-emerald-300" aria-hidden="true" />
      {timeline.map((item) => (
        <article key={item.title} className="relative pl-12">
          <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-cyan-300/40 bg-zinc-950 text-xs font-black text-cyan-200">
            {item.year === "Now" ? "N" : item.year === "Next" ? "+" : "*"}
          </span>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{item.year}</p>
            <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
