import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HowItWorks() {
  return (
    <SectionWrapper>
      <h2 className="mb-10 text-3xl font-bold text-brand-midnight md:text-4xl">
        {hub.howItWorks.heading}
      </h2>
      <ol className="space-y-6">
        {hub.howItWorks.steps.map((step, index) => (
          <li key={index} className="flex items-start gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-lg font-bold text-white"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <p className="pt-1.5 text-lg text-brand-charcoal">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
