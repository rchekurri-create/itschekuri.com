import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Raja Vamsi Chekuri for technology consulting, solution design, AI adoption, and digital transformation conversations.",
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <MotionSection className="page-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk about the business problem behind the technology."
            description="Reach out for consulting conversations, solution design, product strategy, AI adoption, cloud transformation, implementation planning, or customer success work."
          />
          <a href={`mailto:${site.email}`} className="mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 font-black text-cyan-100 hover:bg-cyan-300 hover:text-zinc-950">
            <Mail className="size-5" />
            {site.email}
          </a>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="glass rounded-3xl p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Name
              <input name="name" className="min-h-12 rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-white" placeholder="Your name" autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Email
              <input name="email" type="email" className="min-h-12 rounded-lg border border-white/10 bg-zinc-950/70 px-3 text-white" placeholder="you@example.com" autoComplete="email" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Message
              <textarea name="message" rows={6} className="rounded-lg border border-white/10 bg-zinc-950/70 p-3 text-white" placeholder="What business challenge or technology opportunity should we discuss?" />
            </label>
            <button type="submit" className="min-h-12 rounded-lg bg-cyan-300 px-4 font-black text-zinc-950 transition hover:bg-emerald-300">
              Send Message
            </button>
          </div>
        </form>
      </MotionSection>
    </main>
  );
}
