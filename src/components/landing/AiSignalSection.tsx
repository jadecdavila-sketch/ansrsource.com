import { landing } from "@/lib/content";

export function AiSignalSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-light-teal" />
          <p className="text-base italic text-brand-light-gray">
            {landing.aiSignal.text}
          </p>
        </div>
      </div>
    </section>
  );
}
