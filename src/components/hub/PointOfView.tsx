import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function PointOfView() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <span className="text-8xl leading-none text-brand-pale-gray" aria-hidden="true">
          &ldquo;
        </span>
        <h2 className="-mt-10 text-2xl font-bold text-brand-midnight md:text-3xl">
          {hub.pointOfView.heading}
        </h2>
        <p className="mt-6 text-xl leading-relaxed text-brand-charcoal md:text-2xl">
          {hub.pointOfView.body}
        </p>
      </div>
    </SectionWrapper>
  );
}
