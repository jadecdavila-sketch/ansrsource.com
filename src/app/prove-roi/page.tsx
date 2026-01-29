import type { Metadata } from "next";
import { HubHeader } from "@/components/hub/HubHeader";
import { RecommendedPath } from "@/components/hub/RecommendedPath";
import { ProofOfOutcome } from "@/components/hub/ProofOfOutcome";
import { HowItWorks } from "@/components/hub/HowItWorks";
import { OperationalDiff } from "@/components/hub/OperationalDiff";
import { PointOfView } from "@/components/hub/PointOfView";
import { TeamSignal } from "@/components/hub/TeamSignal";
import { ContinueAdventure } from "@/components/hub/ContinueAdventure";
import { NextAction } from "@/components/hub/NextAction";

export const metadata: Metadata = {
  title: "Prove ROI & Justify Investment | ansrsource",
  description:
    "Learn how ansrsource helps learning teams connect programs to outcomes their executives actually care about.",
};

export default function ProveRoiPage() {
  return (
    <>
      <HubHeader />
      <RecommendedPath />
      <ProofOfOutcome />
      <HowItWorks />
      <OperationalDiff />
      <PointOfView />
      <TeamSignal />
      <ContinueAdventure />
      <NextAction />
    </>
  );
}
