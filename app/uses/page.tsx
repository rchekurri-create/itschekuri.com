import type { Metadata } from "next";
import { MonitorCog } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = { title: "Uses", description: "Tools and setup used by Raja Vamsi Chekuri." };

export default function UsesPage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Uses" title="Tools, setup, and workflow." description="A future page for the platforms, apps, research tools, and operating systems that support consulting, solution design, writing, and implementation planning." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Editor", "Hardware", "Cloud"].map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <MonitorCog className="mb-5 size-7 text-emerald-300" />
              <h2 className="text-xl font-black text-white">{item}</h2>
              <p className="mt-2 text-sm text-zinc-400">Details coming soon.</p>
            </article>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
