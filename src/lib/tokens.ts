// Base path for GitHub Pages deployment
export const basePath = process.env.NODE_ENV === "production" ? "/ansrsource.com" : "";

export const colors = {
  darkOrange: "#DA3C04",
  brightOrange: "#F26902",
  yellow: "#F8B50C",
  midnight: "#003366",
  teal: "#127295",
  lightTeal: "#21A3B1",
  charcoal: "#2C2F30",
  lightGray: "#696969",
  paleGray: "#EAEAEA",
  white: "#FFFFFF",
} as const;

export const partnerLogos = [
  { src: `${basePath}/logos/asu.png`, alt: "Arizona State University", width: 160, height: 48, className: "h-12 md:h-14" },
  { src: `${basePath}/logos/cengage.png`, alt: "Cengage", width: 140, height: 43, className: "h-10 md:h-12" },
  { src: `${basePath}/logos/hilti.png`, alt: "Hilti", width: 140, height: 140, className: "h-20 md:h-24" },
  { src: `${basePath}/logos/mcgraw-hill.png`, alt: "McGraw-Hill", width: 80, height: 81, className: "h-14 md:h-16" },
  { src: `${basePath}/logos/pearson.png`, alt: "Pearson", width: 140, height: 140, className: "h-20 md:h-24" },
];

export const awardBadges = [
  { src: `${basePath}/awards/brandon-hall-2025.png`, alt: "Brandon Hall Group Technology Excellence Award Bronze 2025", width: 120, height: 94 },
  { src: `${basePath}/awards/training-industry-2023.png`, alt: "Training Industry 2023 Watch List Company - Learning Services", width: 96, height: 92 },
  { src: `${basePath}/awards/training-industry-2022.png`, alt: "Training Industry 2022 Watch List Company - Custom Content Development", width: 96, height: 96 },
];
