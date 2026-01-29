import Image from "next/image";
import { landing } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HeroSection() {
  return (
    <SectionWrapper className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-midnight md:text-5xl lg:text-6xl">
          {landing.hero.headline}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-brand-charcoal md:text-xl">
          {landing.hero.subhead}
        </p>
        <p className="mt-4 text-sm text-brand-light-gray">
          {landing.hero.credibility}
        </p>
      </div>
      <div className="hidden shrink-0 md:block">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
          alt="Diverse professional team collaborating in a modern office"
          width={500}
          height={340}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </SectionWrapper>
  );
}
