import { hub } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function ContinueAdventure() {
  return (
    <SectionWrapper>
      <h2 className="mb-10 text-3xl font-bold text-brand-midnight md:text-4xl">
        {hub.continueAdventure.heading}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hub.continueAdventure.links.map((link) => (
          <a
            key={link}
            href="#"
            className="group flex items-center justify-between rounded-lg border border-brand-pale-gray bg-white p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            <span className="text-lg font-semibold text-brand-midnight">
              {link}
            </span>
            <svg
              className="ml-4 h-5 w-5 shrink-0 text-brand-teal transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
