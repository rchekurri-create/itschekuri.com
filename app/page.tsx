import { ArrowRight, BadgeCheck, CircleDot, Gem, ShieldCheck } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { CTA } from "@/components/cta";
import { ExpertiseCard } from "@/components/expertise-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/service-card";
import { caseStudies, expertise, services, whatIDo } from "@/data/site";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Technologies", value: "20+" },
  { label: "Client Focused", value: "100%" },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <section className="relative min-h-[92vh] overflow-hidden pt-36">
        <AnimatedBackground />
        <div className="page-shell pb-16 pt-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300">
              <CircleDot className="size-3 text-[#ff8a00]" />
              IT Consultant - Business Solutions Designer
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Designing practical IT solutions for <span className="text-gradient">real business problems.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I am Raja Vamsi Chekuri, an IT Consultant helping organizations analyze operations, design efficient
              processes, and implement technology solutions that improve productivity, streamline workflows, and support
              long-term growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services">Explore Services</ButtonLink>
              <ButtonLink href="/connect" variant="secondary">
                Let's Connect
              </ButtonLink>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="page-shell border-t border-white/10 py-16">
        <SectionHeader
          eyebrow="What I Do"
          title="The way I work with businesses"
          description="Businesses do not need more software. They need the right solutions to solve the right problems."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {whatIDo.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <SectionHeader eyebrow="Expertise Overview" title="Practical knowledge across systems, infrastructure, and data." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Services Preview" title="Solutions I help businesses with" />
          <ButtonLink href="/services" variant="ghost">
            View all services
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} {...service} includes={undefined} index={index + 1} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Case Studies Preview" title="Real solutions. Practical impact." />
          <ButtonLink href="/case-studies" variant="ghost">
            View all case studies
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.title} study={study} compact />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Process Clarity", icon: BadgeCheck },
            { title: "Connected Systems", icon: ArrowRight },
            { title: "Measurable Growth", icon: Gem },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="soft-card flex items-center gap-4 p-5">
                <ShieldCheck className="size-5 text-[#ff8a00]" />
                <Icon className="size-5 text-[#00c2ff]" />
                <p className="font-semibold text-white">{item.title}</p>
              </div>
            );
          })}
        </div>
      </MotionSection>

      <CTA />
    </main>
  );
}
