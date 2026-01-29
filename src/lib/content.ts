/* All copy from the PRD, centralized for easy review and updates. */

export const landing = {
  hero: {
    headline: "Business-outcome driven learning solutions built for real organizational complexity.",
    subhead: "We help teams design, deliver, and scale learning that actually works\u2014in the real world.",
    credibility: "Operating globally with enterprise and higher-ed organizations for over a decade.",
  },

  choosePath: {
    heading: "What challenge can we help you solve?",
    cards: [
      {
        title: "Prove ROI & justify investment",
        href: "/prove-roi",
        active: true,
      },
      {
        title: "Reduce global complexity & compliance risk",
        href: "#",
        active: false,
      },
      {
        title: "Increase adoption & engagement",
        href: "#",
        active: false,
      },
      {
        title: "Explore AI-enabled learning",
        href: "#",
        active: false,
      },
    ],
  },

  aiSignal: {
    text: "Your experience adapts based on what you\u2019re exploring.",
  },
} as const;

export const hub = {
  header: {
    headline: "Proving the value of learning shouldn\u2019t be harder than delivering it.",
    body: "We help learning teams connect programs to outcomes their executives actually care about.",
  },

  recommendedPath: {
    eyebrow: "Recommended starting point",
    title: "Learning Measurement & Optimization",
    body: "A structured approach to designing, delivering, and measuring programs that stand up to executive scrutiny.",
  },

  proofOfOutcome: {
    heading: "What this looks like in practice",
    metrics: [
      { value: "45%", label: "increase in program adoption" },
      { value: "30%", label: "reduction in delivery time" },
    ],
    context: "Global healthcare organization \u00B7 18-month engagement",
  },

  howItWorks: {
    heading: "How this works",
    steps: [
      "Align learning goals to business outcomes",
      "Design programs with measurement built in",
      "Use automation to reduce reporting overhead",
      "Translate results into executive-ready insights",
    ],
  },

  operationalDiff: {
    heading: "Why this scales",
    body: "Our standardized frameworks and global delivery model allow us to deliver consistent results across teams, regions, and time zones.",
  },

  pointOfView: {
    heading: "Our POV",
    body: "Most learning teams fail to prove ROI because measurement is bolted on at the end. We design for evidence from day one.",
  },

  teamSignal: {
    heading: "Who you\u2019ll work with",
    body: "Our delivery teams average 6+ years at ansrSource and have led complex programs across healthcare, enterprise technology, and higher education.",
  },

  continueAdventure: {
    heading: "You may also be exploring:",
    links: [
      "Reducing global delivery complexity",
      "Increasing learner adoption",
      "AI-enabled learning design",
    ],
  },

  nextAction: {
    heading: "Talk to us",
    body: "Have a specific challenge? Talk with someone who\u2019s run these programs\u2014not a sales script.",
    cta: "Start a conversation",
  },
} as const;
