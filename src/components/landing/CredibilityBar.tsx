import Image from "next/image";
import { partnerLogos, awardBadges } from "@/lib/tokens";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CredibilityBar() {
  return (
    <SectionWrapper className="text-center" bgClassName="bg-brand-pale-gray">
      {/* Partner logos */}
      <h2 className="mb-10 text-2xl font-bold text-brand-midnight md:text-3xl">
        Trusted by leading organizations
      </h2>
      <div className="mb-14 flex flex-wrap items-center justify-center gap-12 md:gap-16">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`w-auto ${logo.className}`}
          />
        ))}
      </div>

      {/* Award badges */}
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-12">
        {awardBadges.map((badge) => (
          <Image
            key={badge.alt}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className="h-24 w-auto grayscale md:h-28"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
