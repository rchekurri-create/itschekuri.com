import Image from "next/image";
import { ArrowRight, BrainCircuit, Code2, Sparkles, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { BlogCard } from "@/components/blog-card";
import { ButtonLink } from "@/components/button-link";
import { CTA } from "@/components/cta";
import { MotionSection } from "@/components/motion-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { experiments, interests, posts, projects, techStack } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-screen overflow-hidden pt-24">
        <AnimatedBackground />
        <div className="page-shell grid min-h-[calc(100vh-6rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">
              <Sparkles className="size-3.5" />
              Raja Vamsi Chekuri
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building useful software in the <span className="text-gradient">itschekuri</span> workshop.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A personal digital home for software engineering, AI, cloud computing, product development, technical writing, and whatever I am curious enough to build next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">Explore projects</ButtonLink>
              <ButtonLink href="/about" variant="secondary">Meet Raja</ButtonLink>
            </div>
          </div>

          <div className="relative z-10">
            <div className="glow-border rounded-3xl">
              <div className="glass overflow-hidden rounded-3xl p-3">
                <Image
                  src="/images/itschekuri-lab.png"
                  alt="Abstract digital workshop visual for itschekuri"
                  width={1672}
                  height={941}
                  priority
                  className="aspect-[16/10] rounded-2xl object-cover"
                />
                <div className="grid gap-3 p-4 sm:grid-cols-3">
                  {experiments.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                        <Icon className="mb-3 size-5 text-cyan-300" />
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                        <p className="mt-1 text-sm font-bold text-zinc-100">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="page-shell py-20">
        <SectionHeader
          eyebrow="Digital workshop"
          title="Somewhere between portfolio, engineering notebook, and creative lab."
          description="The goal is simple: make the work feel alive. Not a static resume, not a generic template, but a place that shows curiosity through the things being built."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Curious", "Following threads from AI systems to cloud architecture and product polish."],
            ["Analytical", "Thinking in systems, tradeoffs, constraints, and clear interfaces."],
            ["Always building", "Turning ideas into prototypes, notes, tools, and finished products."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{body}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Featured projects" title="Things taking shape." description="Project cards are ready for real screenshots, repositories, demos, categories, and status updates." />
          <ButtonLink href="/projects" variant="ghost">View all</ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Technologies" title="Tools I keep close." description="A flexible stack for shipping fast, learning deeply, and keeping the craft sharp." />
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-cyan-300 p-7 text-zinc-950 md:col-span-2">
            <Zap className="mb-8 size-8" />
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Currently experimenting with AI products, agent workflows, and cloud-native systems.</h2>
            <p className="mt-5 max-w-2xl font-semibold text-zinc-800">The fun part is finding the tiny useful version first, then making it feel obvious.</p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Code2 className="mb-5 size-7 text-emerald-300" />
              <h3 className="text-xl font-black text-white">What I&apos;m learning</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">AI engineering, better product thinking, scalable cloud patterns, and writing that teaches clearly.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <BrainCircuit className="mb-5 size-7 text-purple-300" />
              <h3 className="text-xl font-black text-white">Fun fact</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">I enjoy the messy middle where a rough idea starts becoming a useful system.</p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Blog highlights" title="Notes from the build." description="The blog is ready for future technical writing, categories, reading time, and search." />
          <ButtonLink href="/blog" variant="ghost">
            Visit blog
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <SectionHeader eyebrow="Interests" title="The orbit." align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center transition hover:-translate-y-1 hover:border-emerald-300/40">
                <Icon className="mx-auto mb-4 size-7 text-emerald-300" />
                <h3 className="font-black text-white">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </MotionSection>

      <CTA />
    </main>
  );
}
