"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const caseStudies = [
  {
    id: "healthcare",
    tab: "Healthcare Training",
    category: "Enterprise Learning",
    title: "Global Compliance Rollout",
    client: "Fortune 500 Healthcare Company",
    description:
      "Redesigned compliance training for 50,000+ employees across 12 countries, reducing completion time by 40% while improving knowledge retention scores.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    imageAlt: "Healthcare professionals in modern training environment",
  },
  {
    id: "higher-ed",
    tab: "Higher Education",
    category: "Curriculum Development",
    title: "Digital Learning Transformation",
    client: "Major Research University",
    description:
      "Partnered to convert 200+ courses to hybrid delivery, creating scalable templates that faculty adopted across 8 colleges.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    imageAlt: "Students engaged in collaborative digital learning",
  },
  {
    id: "tech",
    tab: "Tech Enablement",
    category: "Product Training",
    title: "Customer Education Platform",
    client: "Enterprise SaaS Company",
    description:
      "Built a self-service learning academy that reduced support tickets by 35% and accelerated customer time-to-value.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    imageAlt: "Technology dashboard and analytics interface",
  },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const activeCase = caseStudies.find((c) => c.id === activeTab)!;

  return (
    <SectionWrapper>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-brand-midnight md:text-4xl">
          Selected work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-charcoal">
          Real results from real partnerships
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-0 md:justify-start md:border-b md:border-brand-pale-gray">
        {caseStudies.map((study) => (
          <button
            key={study.id}
            onClick={() => setActiveTab(study.id)}
            className={`relative px-5 py-3 text-sm font-semibold transition-colors md:px-8 md:py-4 md:text-base ${
              activeTab === study.id
                ? "text-brand-midnight"
                : "text-brand-light-gray hover:text-brand-charcoal"
            }`}
          >
            {study.tab}
            {/* Active indicator */}
            {activeTab === study.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal md:h-1" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Text side */}
        <div>
          <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-1.5 text-sm font-semibold text-brand-teal">
            {activeCase.category}
          </span>
          <h3 className="mt-4 text-2xl font-bold text-brand-midnight md:text-3xl lg:text-4xl">
            {activeCase.title}
          </h3>
          <p className="mt-2 text-sm text-brand-light-gray">
            {activeCase.client}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-brand-charcoal">
            {activeCase.description}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center text-base font-semibold text-brand-teal transition-colors hover:text-brand-midnight"
          >
            View case study
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Image side */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-midnight shadow-2xl">
          <Image
            src={activeCase.image}
            alt={activeCase.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
