import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/data/site";

type Post = (typeof posts)[number];

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.06]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-md bg-purple-300/10 px-2.5 py-1 text-xs font-black text-purple-200">{post.category}</span>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-zinc-500">
          <Clock className="size-3.5" />
          {post.readTime}
        </span>
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{post.date}</p>
      <h3 className="mt-3 text-xl font-black text-white">{post.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{post.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
        Read soon
        <ArrowRight className="size-4" />
      </span>
    </article>
  );
}
