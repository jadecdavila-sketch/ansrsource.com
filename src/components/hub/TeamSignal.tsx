import Image from "next/image";
import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function TeamSignal() {
  return (
    <SectionWrapper bgClassName="bg-brand-pale-gray">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-brand-midnight md:text-4xl">
            {hub.teamSignal.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-charcoal">
            {hub.teamSignal.body}
          </p>
          <p className="mt-6">
            <span className="text-5xl font-extrabold text-brand-teal">6+</span>
            <span className="ml-2 text-sm text-brand-light-gray">
              average years at ansrSource
            </span>
          </p>
        </div>
        <div className="hidden shrink-0 md:block">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
            alt="Professional team collaborating in a meeting"
            width={400}
            height={280}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
