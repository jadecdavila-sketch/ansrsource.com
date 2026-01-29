import { hub } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function NextAction() {
  return (
    <section className="bg-brand-midnight">
      <div className="mx-auto max-w-[1200px] px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {hub.nextAction.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {hub.nextAction.body}
        </p>
        <div className="mt-10">
          <Button variant="primary" href="#contact">
            {hub.nextAction.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
