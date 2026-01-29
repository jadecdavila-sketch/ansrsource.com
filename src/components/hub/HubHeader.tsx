import { hub } from "@/lib/content";

export function HubHeader() {
  return (
    <section className="bg-brand-midnight">
      <div className="h-1 bg-brand-bright-orange" />
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          {hub.header.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          {hub.header.body}
        </p>
      </div>
    </section>
  );
}
