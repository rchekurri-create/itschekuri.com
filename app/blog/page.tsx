import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing and notes from the itschekuri workshop.",
};

export default function BlogPage() {
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader
          eyebrow="Blog"
          title="Search-ready notes from the build."
          description="Prepared for future articles, categories, reading time, featured posts, and technical writing."
        />
      </MotionSection>

      <MotionSection className="page-shell grid gap-8 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="glow-border rounded-3xl">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Featured article</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">{featured.title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">{featured.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg bg-purple-300/10 px-3 py-2 text-sm font-black text-purple-200">{featured.category}</span>
              <span className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm font-black text-zinc-300">{featured.readTime}</span>
            </div>
          </div>
        </article>
        <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-xl font-black text-white">Categories</h2>
          <div className="mt-5 grid gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-zinc-300">
                {category}
              </span>
            ))}
          </div>
        </aside>
      </MotionSection>

      <MotionSection className="page-shell grid gap-5 pb-24 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </MotionSection>
    </main>
  );
}
