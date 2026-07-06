import type { Metadata } from "next";
import { Camera, Heart, Lightbulb, Target } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { interests, techStack } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Raja Vamsi Chekuri, a technology consultant and business solution designer building itschekuri.",
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader
          eyebrow="About Raja"
          title="A business-minded technology consultant with a solution designer's lens."
          description="I am Raja Vamsi Chekuri, building itschekuri as the personal brand for my work across IT consulting, product strategy, solution architecture, digital transformation, AI-driven solutions, and technology adoption."
        />
      </MotionSection>

      <MotionSection className="page-shell grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
          <Camera className="mb-10 size-8 text-cyan-300" />
          <div className="grid aspect-[4/5] place-items-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-center text-sm font-bold text-zinc-500">
            Photo placeholder
          </div>
        </div>
        <div className="grid gap-5">
          {[
            { icon: Lightbulb, title: "Professional story", body: "I help businesses translate ideas, operational challenges, and complex requirements into practical technology strategies and scalable solutions." },
            { icon: Target, title: "Core values", body: "Clarity, trust, practical execution, measurable value, customer focus, and technology choices that serve real business goals." },
            { icon: Heart, title: "What I enjoy exploring", body: "Enterprise software, AI adoption, cloud platforms, process automation, product thinking, implementation strategy, and the human side of change." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <Icon className="mb-5 size-7 text-emerald-300" />
                <h2 className="text-2xl font-black text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-zinc-400">{item.body}</p>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="page-shell grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="Journey" title="Professional direction." description="A concise view of how itschekuri will grow into a resource for technology strategy, implementation insight, and business solution design." />
        </div>
        <Timeline />
      </MotionSection>

      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Focus areas" title="What pulls my attention." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Icon className="mb-4 size-6 text-cyan-300" />
                <h3 className="font-black text-white">{item.title}</h3>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Capabilities" title="How I think about the work." />
        <div className="mt-8 flex flex-wrap gap-3">
          {techStack.map((item) => (
            <span key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-zinc-200">
              {item}
            </span>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
