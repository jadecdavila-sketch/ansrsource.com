import { HeroSection } from "@/components/landing/HeroSection";
import { ChoosePathSection } from "@/components/landing/ChoosePathSection";
import { CredibilityBar } from "@/components/landing/CredibilityBar";
import { ShowcaseSection } from "@/components/landing/ShowcaseSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ChoosePathSection />
      <CredibilityBar />
      <ShowcaseSection />
    </>
  );
}
