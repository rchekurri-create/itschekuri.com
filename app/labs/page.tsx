import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { experiments } from "@/data/site";

export const metadata: Metadata = { title: "Labs", description: "Experiments in AI adoption, automation, and solution design from itschekuri." };

export default function LabsPage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Labs" title="Small experiments for practical transformation." description="A future home for AI adoption experiments, automation ideas, solution prototypes, and tools that make business workflows easier to understand and improve." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiments.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <Icon className="mb-5 size-7 text-cyan-300" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                <h2 className="mt-2 text-xl font-black text-white">{item.value}</h2>
              </article>
            );
          })}
          <article className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6">
            <FlaskConical className="mb-5 size-7 text-purple-300" />
            <h2 className="text-xl font-black text-white">More experiments soon</h2>
          </article>
        </div>
      </MotionSection>
    </main>
  );
}
