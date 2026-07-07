import { ArrowRight, Clock } from "lucide-react";
import { posts } from "@/data/site";

type Post = (typeof posts)[number];

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white p-6 text-black transition duration-300 hover:-translate-y-1">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#f6a4ff] px-3 py-1 text-xs font-black text-black">{post.category}</span>
        <span className="inline-flex items-center gap-1 text-xs font-bold text-zinc-500">
          <Clock className="size-3.5" />
          {post.readTime}
        </span>
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{post.date}</p>
      <h3 className="mt-3 text-xl font-black text-black">{post.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#ef4b20] transition group-hover:translate-x-1">
        Read soon
        <ArrowRight className="size-4" />
      </span>
    </article>
  );
}
