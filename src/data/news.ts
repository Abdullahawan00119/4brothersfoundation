import distribution from "@/assets/hero-distribution.jpg";
import education from "@/assets/program-education.jpg";
import medical from "@/assets/program-medical.jpg";
import water from "@/assets/program-water.jpg";
import relief from "@/assets/program-relief.jpg";
import skills from "@/assets/news-skills.jpg";
import winter from "@/assets/news-winter.jpg";
import ramadan from "@/assets/news-ramadan.jpg";

export type NewsCategory = "News" | "Stories" | "Press Release" | "Events" | "Reports";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  category: NewsCategory;
  date: string; // ISO
  readMin: number;
  author: string;
};

export const news: NewsItem[] = [
  {
    slug: "ramadan-iftar-drive-2024",
    title: "Ramadan Iftar Drive Feeds 12,000 Across 14 Cities",
    excerpt:
      "Our largest iftar drive yet brought the community together for 30 nights of shared meals, prayers and hope.",
    body: [
      "This Ramadan, 4 Brothers Welfare Trust hosted nightly iftar dastarkhwans across 14 cities of Pakistan, serving freshly cooked meals to over 12,000 individuals every evening.",
      "From day-wage laborers in Karachi to refugee families in Peshawar, no one who arrived at our tables was turned away. Volunteers worked from dawn preparing food, setting tables and welcoming neighbors as guests of honor.",
      "We are deeply grateful to every donor, restaurant partner and volunteer who made this possible. Your generosity literally fed the spirit of an entire community.",
    ],
    image: ramadan,
    category: "Events",
    date: "2024-04-12",
    readMin: 3,
    author: "Communications Team",
  },
  {
    slug: "winter-blanket-campaign",
    title: "Winter Campaign: 5,000 Blankets Reach Mountain Villages",
    excerpt:
      "Our annual winter drive delivered warm clothing and high-tog blankets to families in northern Pakistan facing sub-zero nights.",
    body: [
      "Every winter, families in upper Hunza, Chitral and Skardu battle brutal cold with little protection. This year our team trekked to 38 remote settlements with truckloads of blankets, jackets and woolen caps.",
      "We worked closely with local leaders to identify the most vulnerable households — elderly, widows and families with newborns — to make sure aid reached those who needed it most.",
      "If you'd like to sponsor a winter pack for a family next year, our recurring donation program makes it simple.",
    ],
    image: winter,
    category: "News",
    date: "2024-01-22",
    readMin: 4,
    author: "Field Operations",
  },
  {
    slug: "skill-development-center-launch",
    title: "New Skill Development Center Opens for Women in Korangi",
    excerpt:
      "Free six-month courses in tailoring, embroidery and IT will give women a path to financial independence.",
    body: [
      "We're proud to announce the opening of our second Skill Development Center, in Korangi, Karachi. The center offers free six-month diploma courses in tailoring, embroidery, and basic computer literacy.",
      "Each graduating cohort receives a starter kit — a sewing machine or a refurbished laptop — so trainees can start earning from day one after graduation.",
      "Applications for the first batch are open. If you know someone who could benefit, please share this with them.",
    ],
    image: skills,
    category: "Press Release",
    date: "2024-03-05",
    readMin: 3,
    author: "Programs Team",
  },
  {
    slug: "medical-camp-thatta",
    title: "Free Medical Camp Treats 480 Patients in Thatta",
    excerpt:
      "Our two-day camp brought specialist doctors, free medication and follow-up plans to a community with no nearby hospital.",
    body: [
      "In partnership with volunteer doctors from Karachi, our two-day camp in Thatta provided free consultations, diagnostic tests and medicine to 480 patients.",
      "Of these, 22 were referred for surgical procedures fully sponsored by the trust. Five children received pediatric specialist care for the first time in their lives.",
      "Camps like this are only possible because of monthly donors. Becoming one is the single highest-impact way to support our medical mission.",
    ],
    image: medical,
    category: "Stories",
    date: "2024-02-18",
    readMin: 3,
    author: "Medical Wing",
  },
  {
    slug: "annual-impact-report-2023",
    title: "Annual Impact Report 2023 — A Year of Quiet Miracles",
    excerpt:
      "Read our complete transparency report: where every rupee went, who it reached, and what changed.",
    body: [
      "We believe transparency is the foundation of trust. Our 2023 Annual Impact Report breaks down every program, every cost line, and every measurable outcome.",
      "Highlights: 4.2 million meals served, 8,200 students sponsored, 22 new water sites commissioned and a 96% donation efficiency ratio.",
      "Download the full PDF on this page or get in touch with our finance team for any clarification.",
    ],
    image: distribution,
    category: "Reports",
    date: "2024-01-05",
    readMin: 6,
    author: "Office of the CEO",
  },
  {
    slug: "clean-water-tharparkar",
    title: "Twelve New Water Wells Commissioned in Tharparkar",
    excerpt:
      "After eight months of fieldwork, twelve villages in Tharparkar now have year-round access to clean drinking water.",
    body: [
      "In the deserts of Tharparkar, women and children walk hours every day to fetch water — often unsafe to drink. Twelve villages will no longer have to.",
      "Our hydrogeology partners surveyed underground aquifers, and our engineers built deep wells with hand pumps and solar-powered filtration. Each well is maintained by a trained village committee.",
      "One well costs roughly PKR 350,000 and serves up to 200 people for years. To sponsor one in your name or in someone's memory, please contact us.",
    ],
    image: water,
    category: "News",
    date: "2023-12-08",
    readMin: 4,
    author: "Water Programs",
  },
  {
    slug: "education-scholarships-batch-2024",
    title: "850 New Education Scholarships Awarded for 2024",
    excerpt:
      "From primary school to university — meet the next generation of dreamers we're standing behind.",
    body: [
      "This academic year, 850 students from low-income families received full scholarships covering tuition, uniforms, books and transport.",
      "Among them: 320 girls in middle and high school, 110 first-generation university students, and 12 students entering medical and engineering programs.",
      "Education breaks generational cycles of poverty in a way nothing else does. Thank you for believing in these young lives.",
    ],
    image: education,
    category: "Stories",
    date: "2024-08-20",
    readMin: 3,
    author: "Education Programs",
  },
  {
    slug: "flood-response-balochistan",
    title: "Emergency Flood Response Reaches 60 Villages in Balochistan",
    excerpt:
      "Our rapid response teams deployed within 36 hours of the first warnings, delivering food, tents and medical aid.",
    body: [
      "When flash floods devastated parts of Balochistan, our emergency response teams mobilized within 36 hours. Convoys of food rations, drinking water, tents and medical kits reached 60 villages in the first week.",
      "Our medical wing set up two field clinics treating waterborne illnesses, while our logistics team coordinated with the army and local NGOs to avoid duplication.",
      "Disaster response is unpredictable. Your unrestricted donations are what allow us to move this fast.",
    ],
    image: relief,
    category: "News",
    date: "2024-07-30",
    readMin: 4,
    author: "Emergency Response",
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
