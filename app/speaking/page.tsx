import type { Metadata } from "next";
import { Mic2 } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = { title: "Speaking", description: "Speaking page for Raja Vamsi Chekuri." };

export default function SpeakingPage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Speaking" title="Talks, workshops, and future sessions." description="A route prepared for speaking topics, event history, recordings, and proposals." />
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-8">
          <Mic2 className="mb-5 size-8 text-cyan-300" />
          <h2 className="text-2xl font-black text-white">Speaking page ready</h2>
          <p className="mt-3 text-zinc-400">Add topics and event details when they are ready to publish.</p>
        </div>
      </MotionSection>
    </main>
  );
}
