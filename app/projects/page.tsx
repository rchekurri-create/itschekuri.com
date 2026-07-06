import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and experiments from Raja Vamsi Chekuri.",
};

export default function ProjectsPage() {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  return (
    <main className="pt-28">
      <MotionSection className="page-shell py-16">
        <SectionHeader
          eyebrow="Projects"
          title="A grid for useful things."
          description="Each project supports status, categories, tags, screenshots, GitHub links, demos, and technology stacks."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-zinc-300">
              {category}
            </span>
          ))}
        </div>
      </MotionSection>
      <MotionSection className="page-shell grid gap-5 pb-24 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </MotionSection>
    </main>
  );
}
