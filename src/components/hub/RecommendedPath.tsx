import Image from "next/image";
import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function RecommendedPath() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1 rounded-lg border-l-4 border-brand-teal bg-white p-8 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-teal">
            {hub.recommendedPath.eyebrow}
          </p>
          <h2 className="text-2xl font-bold text-brand-midnight md:text-3xl">
            {hub.recommendedPath.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-charcoal">
            {hub.recommendedPath.body}
          </p>
        </div>
        <div className="hidden shrink-0 md:block">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
            alt="Professional analyzing data on a dashboard"
            width={400}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
