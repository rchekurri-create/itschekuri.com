import Image from "next/image";
import { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Connect",
  description: "Share your business goals, systems, or operational challenges with itschekuri.",
};

export default function ConnectPage() {
  return (
    <main>
      <PageHero
        eyebrow="Connect"
        title="Let's discuss your business challenge."
        description="Share a few details about your goals, current systems, or operational challenges. I will use this information to understand where technology can create the most value."
      />

      <section className="page-shell grid gap-6 pb-16 lg:grid-cols-[1fr_0.45fr]">
        <ContactForm />
        <aside className="soft-card p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8a00]">Contact Information</p>
          <a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-white">
            <Mail className="size-4 text-[#00c2ff]" />
            {site.email}
          </a>
          <p className="mt-5 text-sm leading-7 text-zinc-400">
            Available for consulting engagements, business solution discovery, and practical technology collaboration.
          </p>
          <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.03] p-5">
            <Image
              src="/images/connect-logo-glow.png"
              alt="itschekuri glowing brand mark"
              width={1024}
              height={1024}
              className="h-auto w-full rounded-[8px]"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
