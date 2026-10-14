export interface HeroEventSlide {
  id: string;
  tag: string;
  tagCategory: "Education" | "Food Security" | "Hospital Meals" | "Rehabilitation" | "Clean Water";
  title: string;
  highlightText: string;
  subtitle: string;
  location: string;
  image: string;
  focalPoint: string;
  keyStat: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}

export const HERO_EVENT_SLIDES: HeroEventSlide[] = [
  {
    id: "hope-ability-school",
    tag: "Special Needs Education",
    tagCategory: "Education",
    title: "Gawahi 4B Hope & Ability School:",
    highlightText: "Empowering 27 Special Students",
    subtitle: "Specialized learning, speech therapy, and physiotherapy for children on Brewery Road, Quetta.",
    location: "Brewery Road, Quetta",
    image: "/images/school-program.jpeg",
    focalPoint: "object-[center_20%]",
    keyStat: "27 Special Students • 8 Qualified Teachers",
    primaryAction: {
      label: "Support Special School",
      href: "/donate",
    },
    secondaryAction: {
      label: "Our Programs",
      href: "/programs",
    },
  },
  {
    id: "ration-distribution",
    tag: "Family Food Security",
    tagCategory: "Food Security",
    title: "Community Ration Distribution:",
    highlightText: "Monthly Family Packages",
    subtitle: "Essential monthly grocery hampers supporting widows, orphans, and vulnerable households.",
    location: "Quetta Communities",
    image: "/images/ration-program.jpeg",
    focalPoint: "object-[center_30%]",
    keyStat: "30 Packages Monthly • PKR 8,000 / Bag",
    primaryAction: {
      label: "Sponsor a Ration Bag",
      href: "/donate",
    },
    secondaryAction: {
      label: "Our Programs",
      href: "/programs",
    },
  },
  {
    id: "meal-distribution",
    tag: "Hospital & Weekly Meals",
    tagCategory: "Hospital Meals",
    title: "Community Meal Distribution:",
    highlightText: "200+ Meals at BMC Hospital",
    subtitle: "Freshly prepared hot meals served weekly to patients' attendants and families in need.",
    location: "BMC Hospital, Quetta",
    image: "/images/meal-program.jpeg",
    focalPoint: "object-center",
    keyStat: "200+ Weekly Meals • BMC Hospital",
    primaryAction: {
      label: "Sponsor Hot Meals",
      href: "/donate",
    },
    secondaryAction: {
      label: "Our Programs",
      href: "/programs",
    },
  },
  {
    id: "youth-rehabilitation",
    tag: "Drug-Free Youth Mission",
    tagCategory: "Rehabilitation",
    title: "Rehabilitation & Recovery:",
    highlightText: "Partnering with NIJAT Center",
    subtitle: "Medical detox, psychological counseling, and family reintegration for a healthier society.",
    location: "Quetta City",
    image: "/images/frehabliation.jpg",
    focalPoint: "object-[center_18%]",
    keyStat: "500+ Rehabilitated • NIJAT Center",
    primaryAction: {
      label: "Support Recovery",
      href: "/donate",
    },
    secondaryAction: {
      label: "Our Programs",
      href: "/programs",
    },
  },
  {
    id: "clean-water-projects",
    tag: "Safe Water Access",
    tagCategory: "Clean Water",
    title: "Clean Water Projects:",
    highlightText: "120+ Wells & Solar RO Plants",
    subtitle: "Bringing safe drinking water to remote drought-affected areas with solar pumps and filtration.",
    location: "Balochistan Drought Belts",
    image: "/images/water.jpg",
    focalPoint: "object-center",
    keyStat: "120+ Clean Sites • Solar Powered",
    primaryAction: {
      label: "Sponsor a Water Well",
      href: "/donate",
    },
    secondaryAction: {
      label: "Our Programs",
      href: "/programs",
    },
  },
];
