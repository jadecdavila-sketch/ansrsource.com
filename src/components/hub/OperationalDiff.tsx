import { hub } from "@/lib/content";

export function OperationalDiff() {
  return (
    <section className="bg-brand-teal">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {hub.operationalDiff.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          {hub.operationalDiff.body}
        </p>
      </div>
    </section>
  );
}
