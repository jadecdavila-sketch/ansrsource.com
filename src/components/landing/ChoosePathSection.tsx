"use client";

import { useState } from "react";
import { landing } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { IntentCard } from "@/components/ui/IntentCard";

export function ChoosePathSection() {
  const [problem, setProblem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem.trim()) {
      // TODO: Connect to AI to generate a custom hub
      console.log("User problem:", problem);
    }
  };

  return (
    <SectionWrapper
      id="choose-path"
      bgClassName="bg-brand-pale-gray"
    >
      <h2 className="text-center text-3xl font-bold text-brand-midnight md:text-4xl">
        {landing.choosePath.heading}
      </h2>
      <p className="mx-auto mb-10 mt-3 max-w-xl text-center text-base italic text-brand-light-gray">
        {landing.aiSignal.text}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {landing.choosePath.cards.map((card) => (
          <IntentCard
            key={card.title}
            title={card.title}
            href={card.href}
            active={card.active}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="my-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-brand-light-gray/30" />
        <span className="text-sm text-brand-light-gray">or describe your challenge</span>
        <div className="h-px flex-1 bg-brand-light-gray/30" />
      </div>

      {/* Problem input */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
        <label htmlFor="problem-input" className="sr-only">
          Describe your learning challenge
        </label>
        <div className="flex gap-3">
          <input
            id="problem-input"
            type="text"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="e.g., We need to prove training ROI to our CFO..."
            className="flex-1 rounded-lg border border-brand-pale-gray bg-white px-4 py-3 text-brand-charcoal placeholder:text-brand-light-gray focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
          />
          <button
            type="submit"
            disabled={!problem.trim()}
            className="shrink-0 rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Find solutions
          </button>
        </div>
      </form>
    </SectionWrapper>
  );
}
