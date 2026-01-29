import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ProofOfOutcome() {
  return (
    <SectionWrapper bgClassName="bg-brand-pale-gray">
      <h2 className="mb-10 text-3xl font-bold text-brand-midnight md:text-4xl">
        {hub.proofOfOutcome.heading}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {hub.proofOfOutcome.metrics.map((metric) => (
          <div key={metric.value} className="rounded-lg bg-white p-8 shadow-sm">
            <p className="text-5xl font-extrabold text-brand-dark-orange md:text-6xl">
              {metric.value}
            </p>
            <p className="mt-2 text-lg text-brand-charcoal">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-brand-light-gray">
        {hub.proofOfOutcome.context}
      </p>
    </SectionWrapper>
  );
}
