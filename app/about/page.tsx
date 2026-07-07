import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTA } from "@/components/cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { approach, platformAreas, valueDrivers } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Raja Vamsi Chekuri, IT Consultant and Business Solutions Designer behind itschekuri.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="I help businesses turn operational challenges into practical technology solutions."
        description="Businesses do not need more software, they need the right solutions to solve the right problems."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/connect"
        secondaryLabel="Let's Connect"
      />

      <MotionSection className="page-shell grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader eyebrow="Intro Story" title="Business-first consulting with practical technology execution." />
        <div className="grid gap-5 text-base leading-8 text-zinc-400">
          <p>
            As an IT Consultant at Revel Consultants, I work with organizations to analyze business operations, design
            efficient processes, and implement technology solutions that drive measurable business outcomes.
          </p>
          <p>
            My focus is on aligning technology with business strategy to improve productivity, streamline operations,
            and support long-term growth.
          </p>
          <p>
            From process discovery and solution architecture to implementation, integration, and optimization, I help
            organizations build scalable, connected systems that simplify complex workflows and enable informed
            decision-making.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <div className="soft-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff8a00]">What I Believe</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white">
            The best solution is the one people can understand, adopt, and measure.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-400">
            I enjoy partnering with businesses to transform ideas into practical, technology-driven solutions that
            create lasting operational value.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <SectionHeader eyebrow="My Approach" title="A clear path from discovery to optimization." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`soft-card accent-${item.accent} p-5`}>
                <Icon className="size-6 accent-text" />
                <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="page-shell grid gap-8 py-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <SectionHeader
            eyebrow="Platforms & Solution Areas"
            title="Experience across enterprise platforms and operational systems."
            description="My experience spans business systems, infrastructure, security, cloud, data, automation, and digital workplace technologies."
          />
        </div>
        <div className="soft-card p-5">
          <ul className="grid gap-3 text-sm text-zinc-300">
            {platformAreas.map((area) => (
              <li key={area} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#ff8a00]" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="page-shell py-12">
        <SectionHeader eyebrow="How I Create Value" title="Simple outcomes that matter to business teams." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {valueDrivers.map((item) => (
            <div key={item} className="soft-card p-5 text-center text-sm font-semibold text-white">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">View Services</ButtonLink>
          <ButtonLink href="/connect" variant="secondary">
            Start a Conversation
          </ButtonLink>
        </div>
      </MotionSection>

      <CTA />
    </main>
  );
}
