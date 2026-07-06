import Image from "next/image";
import { ArrowRight, CheckCircle2, Compass, Sparkles, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { BlogCard } from "@/components/blog-card";
import { ButtonLink } from "@/components/button-link";
import { CTA } from "@/components/cta";
import { MotionSection } from "@/components/motion-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { experiments, posts, projects, services, techStack } from "@/data/site";
import { cn } from "@/lib/utils";

const serviceAccent: Record<string, string> = {
  orange: "hover:border-orange-300/35 hover:[box-shadow:0_0_0_1px_rgba(255,138,0,0.08),0_18px_70px_rgba(255,138,0,0.08)] text-orange-300 bg-orange-300/10 border-orange-300/15",
  blue: "hover:border-sky-300/35 hover:[box-shadow:0_0_0_1px_rgba(0,194,255,0.08),0_18px_70px_rgba(0,194,255,0.08)] text-sky-300 bg-sky-300/10 border-sky-300/15",
  pink: "hover:border-pink-300/35 hover:[box-shadow:0_0_0_1px_rgba(255,60,172,0.08),0_18px_70px_rgba(255,60,172,0.08)] text-pink-300 bg-pink-300/10 border-pink-300/15",
  purple: "hover:border-purple-300/35 hover:[box-shadow:0_0_0_1px_rgba(168,92,255,0.08),0_18px_70px_rgba(168,92,255,0.08)] text-purple-300 bg-purple-300/10 border-purple-300/15",
  white: "hover:border-white/30 hover:[box-shadow:0_0_0_1px_rgba(255,255,255,0.07),0_18px_70px_rgba(255,255,255,0.05)] text-white bg-white/10 border-white/15",
};

export default function Home() {
  return (
    <main>
      <section className="accent-purple relative isolate min-h-screen overflow-hidden pt-24">
        <AnimatedBackground />
        <div className="page-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-purple-100">
              <Sparkles className="size-3.5" />
              IT Consultant • Business Solutions Designer
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Helping businesses turn complex needs into practical <span className="text-gradient">technology solutions.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I am Raja Vamsi Chekuri, building itschekuri as a digital headquarters for technology consulting, solution design, product strategy, AI adoption, cloud transformation, and implementation guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects">Explore focus areas</ButtonLink>
              <ButtonLink href="/about" variant="secondary">About Raja</ButtonLink>
            </div>
          </div>

          <div className="relative z-10">
            <div className="premium-card relative overflow-hidden rounded-[2rem] p-3">
              <div className="absolute right-8 top-8 h-px w-28 rotate-[-16deg] bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
              <Image
                src="/images/itschekuri-lab.png"
                alt="Abstract digital headquarters visual for itschekuri"
                width={1672}
                height={941}
                priority
                className="aspect-[16/10] rounded-[1.35rem] object-cover"
              />
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {experiments.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-zinc-950/45 p-4">
                      <Icon className="mb-4 size-5 text-purple-300" />
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                      <p className="mt-2 text-sm font-bold leading-5 text-zinc-100">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="section-band accent-blue page-shell grid gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Professional positioning"
          title="A trusted technology advisor for business-led transformation."
          description="itschekuri is built around a simple belief: the best technology work starts with business context, clear requirements, practical solution design, and thoughtful adoption."
          accent="blue"
        />
        <div className="grid gap-4">
          {[
            ["Discover", "Understand goals, process gaps, stakeholder needs, and opportunities for measurable improvement."],
            ["Design", "Translate complex requirements into scalable, user-focused solutions and implementation plans."],
            ["Deliver", "Support adoption with practical guidance, clear communication, and customer-focused execution."],
          ].map(([title, body], index) => (
            <article
              key={title}
              className={cn(
                "premium-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/35",
                index === 1 && "lg:translate-x-8",
              )}
            >
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-sm font-black text-sky-200">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-band accent-orange page-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Services"
            title="Premium solution cards for practical technology work."
            description="Focused advisory and implementation support across the moments where business needs become system decisions."
            accent="orange"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={cn(
                    "premium-card group rounded-3xl p-5 transition duration-300 hover:-translate-y-1",
                    index % 2 === 1 && "md:translate-y-8",
                  )}
                >
                  <div className={cn("mb-7 grid size-12 place-items-center rounded-2xl border", serviceAccent[service.accent])}>
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="premium-card grid gap-8 rounded-[2rem] p-6 md:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <Zap className="mb-5 size-7 text-orange-300" />
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Business and technology disciplines.</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-400">A practical mix of strategy, solution design, product thinking, adoption planning, and technology execution.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm font-bold text-zinc-200 transition hover:border-orange-300/35 hover:bg-orange-300/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-band accent-blue page-shell py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Projects"
            title="Case-study style work, not generic project tiles."
            description="Core themes across consulting, solution architecture, enterprise software, AI-driven transformation, and business process optimization."
            accent="blue"
          />
          <ButtonLink href="/projects" variant="ghost">
            View all
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-band accent-pink page-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Insights"
            title="Practical guidance for business technology decisions."
            description="A future home for case studies, technology trends, product reviews, implementation strategies, and lessons from solution consulting."
            accent="pink"
          />
          <div className="flex items-center gap-3 rounded-3xl border border-pink-300/15 bg-pink-300/10 p-4 text-sm leading-6 text-pink-100">
            <CheckCircle2 className="size-5 shrink-0" />
            Writing designed for operators, buyers, builders, and teams that need clarity before committing to tools.
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="premium-card rounded-3xl p-7 md:col-span-2">
            <Compass className="mb-8 size-8 text-purple-300" />
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Helping organizations discover, design, implement, and optimize technology solutions.</h2>
            <p className="mt-5 max-w-2xl text-zinc-400">The work is part strategy, part product thinking, part solution architecture, and always grounded in business value.</p>
          </div>
          <div className="premium-card rounded-3xl p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">Positioning</p>
            <div className="mt-6 grid gap-3">
              {["Trusted Technology Advisor", "Business Solutions Designer", "Customer-Focused", "Innovation-Driven"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <CTA />
    </main>
  );
}
