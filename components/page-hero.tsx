import { AnimatedBackground } from "@/components/animated-background";
import { ButtonLink } from "@/components/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-36">
      <AnimatedBackground />
      <div className="page-shell pb-14 pt-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a855f7]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">{description}</p>
        {primaryHref || secondaryHref ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink> : null}
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
