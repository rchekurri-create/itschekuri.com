import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = { title: "Resume", description: "Resume page for Raja Vamsi Chekuri." };

export default function ResumePage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader eyebrow="Resume" title="Resume hub, ready for the real document." description="A future-ready route for a downloadable resume, role highlights, and selected achievements." />
        <div className="mt-10 rounded-3xl border border-dashed border-white/15 bg-white/[0.035] p-8">
          <FileText className="mb-5 size-8 text-cyan-300" />
          <h2 className="text-2xl font-black text-white">Resume coming soon</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">Add the final PDF or structured resume content here when ready.</p>
        </div>
      </MotionSection>
    </main>
  );
}
