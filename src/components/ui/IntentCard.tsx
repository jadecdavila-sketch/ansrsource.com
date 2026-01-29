import Link from "next/link";

interface IntentCardProps {
  title: string;
  href: string;
  active: boolean;
}

export function IntentCard({ title, href, active }: IntentCardProps) {
  if (!active) {
    return (
      <div className="relative flex flex-col justify-between rounded-lg border-2 border-brand-pale-gray bg-white p-6 opacity-60">
        <h3 className="text-lg font-semibold text-brand-charcoal">{title}</h3>
        <span className="mt-4 inline-block self-start rounded-full bg-brand-pale-gray px-3 py-1 text-xs font-medium text-brand-light-gray">
          Coming soon
        </span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-lg border-2 border-brand-bright-orange bg-white p-6 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright-orange focus-visible:ring-offset-2"
    >
      <h3 className="text-lg font-semibold text-brand-midnight">{title}</h3>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-dark-orange transition-transform group-hover:translate-x-1">
        Explore
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
