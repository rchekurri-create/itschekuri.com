import type { Metadata } from "next";
import { Calendar, Code2, Mail, Network } from "lucide-react";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Raja Vamsi Chekuri for technology consulting, solution design, AI adoption, and digital transformation conversations.",
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <MotionSection className="section-band accent-white page-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk about the business problem behind the technology."
            description="Reach out for consulting conversations, solution design, product strategy, AI adoption, cloud transformation, implementation planning, or customer success work."
            accent="white"
          />
          <div className="mt-8 grid gap-3">
            {[
              { href: `mailto:${site.email}`, label: site.email, icon: Mail },
              { href: "https://linkedin.com/in/itschekuri", label: "LinkedIn", icon: Network },
              { href: "https://github.com/itschekuri", label: "GitHub", icon: Code2 },
              { href: "/contact", label: "Calendar booking placeholder", icon: Calendar },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="premium-card inline-flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-black text-zinc-100 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon className="size-5 text-white" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="premium-card rounded-[2rem] p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Name
              <input name="name" className="min-h-12 rounded-xl border border-white/10 bg-zinc-950/70 px-3 text-white transition focus:border-white/35" placeholder="Your name" autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Email
              <input name="email" type="email" className="min-h-12 rounded-xl border border-white/10 bg-zinc-950/70 px-3 text-white transition focus:border-white/35" placeholder="you@example.com" autoComplete="email" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-300">
              Message
              <textarea name="message" rows={6} className="rounded-xl border border-white/10 bg-zinc-950/70 p-3 text-white transition focus:border-white/35" placeholder="What business challenge or technology opportunity should we discuss?" />
            </label>
            <button type="submit" className="min-h-12 rounded-xl border border-transparent bg-[linear-gradient(#fff,#e5e7eb)_padding-box,linear-gradient(115deg,#fff,#a85cff,#00c2ff)_border-box] px-4 font-black text-zinc-950 transition hover:scale-[1.01]">
              Send Message
            </button>
          </div>
        </form>
      </MotionSection>
    </main>
  );
}
