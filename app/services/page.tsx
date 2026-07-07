import { Metadata } from "next";
import { CTA } from "@/components/cta";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Business process discovery, solution design, implementation, integration, advisory, automation, and BI services.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Services that connect business needs with practical technology solutions."
        description="I help organizations move from scattered tools and inefficient workflows to connected, scalable systems designed around real business goals."
        primaryHref="/connect"
        primaryLabel="Discuss a Challenge"
      />

      <MotionSection className="page-shell py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index + 1} />
          ))}
        </div>
      </MotionSection>

      <CTA />
    </main>
  );
}
