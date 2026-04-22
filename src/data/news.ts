const distribution = "/images/f1.jpg";
const education    = "/images/education.webp";
const medical      = "/images/medical.jpeg";
const water        = "/images/water.jpg";
const flood        = "/images/f12.jpg";
const skills       = "/images/f13.jpg";
const winter       = "/images/f2.jpg";
const ramadan      = "/images/f3.jpg";
const city         = "/images/f6.jpg";

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
  location: string;
};

export const news: NewsItem[] = [
  {
    slug: "ramadan-iftar-quetta-2024",
    title: "Ramadan Iftar Dastarkhwan Feeds 8,000 Nightly Across Quetta",
    excerpt:
      "Our largest iftar drive in Balochistan brought the city together for 30 nights of shared meals on Jinnah Road, Sariab and Hazara Town.",
    body: [
      "This Ramadan, 4 Brothers Welfare Trust hosted nightly iftar dastarkhwans across Quetta, serving freshly cooked meals to over 8,000 individuals every evening on Jinnah Road, Sariab Road, Hazara Town, Brewery Road and outside the historic Hanna Lake gateway.",
      "From day-wage laborers and Afghan refugees to students from interior Balochistan studying at BUITEMS and University of Balochistan — no one who arrived at our tables was turned away. Volunteers worked from Asr preparing sajji, pulao and dates, setting tables and welcoming neighbors as guests of honor.",
      "We are deeply grateful to every donor, restaurant partner from Liaquat Bazaar and volunteer who made this possible. Your generosity literally fed the spirit of an entire city.",
    ],
    image: ramadan,
    category: "Events",
    date: "2024-04-12",
    readMin: 3,
    author: "Communications Team — Quetta",
    location: "Quetta, Balochistan",
  },
  {
    slug: "winter-blanket-ziarat-2024",
    title: "Winter Campaign: 5,000 Blankets Reach Ziarat & Kalat Highlands",
    excerpt:
      "Our annual winter drive delivered warm clothing and high-tog blankets to families across Ziarat, Kalat and Mastung facing sub-zero nights.",
    body: [
      "Every winter, families in Ziarat's juniper valleys, the high plateaus of Kalat, and the snow-belt around Mastung battle brutal cold with little protection. This year our team trekked to 38 remote settlements across Balochistan with truckloads of blankets, jackets and woolen caps.",
      "We worked closely with local maliks and elders in Pishin, Killa Abdullah and Harnai to identify the most vulnerable households — elderly Baloch and Pashtun widows, families with newborns, and Afghan refugee households — to make sure aid reached those who needed it most.",
      "If you'd like to sponsor a winter pack for a family in upper Balochistan next year, our recurring donation program makes it simple.",
    ],
    image: winter,
    category: "News",
    date: "2024-01-22",
    readMin: 4,
    author: "Field Operations — Balochistan",
    location: "Ziarat & Kalat, Balochistan",
  },
  {
    slug: "skill-development-center-quetta",
    title: "New Women's Skill Center Opens in Sariab, Quetta",
    excerpt:
      "Free six-month courses in tailoring, traditional Balochi embroidery (doch) and IT will give women a path to financial independence.",
    body: [
      "We're proud to announce the opening of our Skill Development Center in Sariab Road, Quetta. The center offers free six-month diploma courses in tailoring, traditional Balochi doch embroidery, and basic computer literacy — designed for Baloch, Pashtun and Hazara women from the surrounding katchi abadis.",
      "Each graduating cohort receives a starter kit — a sewing machine or a refurbished laptop — so trainees can start earning from day one. Our first batch is already supplying hand-embroidered pieces to boutiques in Karachi and Islamabad.",
      "Applications for the next batch are open at our Sariab office. If you know a sister, daughter or neighbor who could benefit, please share this with them.",
    ],
    image: skills,
    category: "Press Release",
    date: "2024-03-05",
    readMin: 3,
    author: "Programs Team — Quetta",
    location: "Sariab Road, Quetta",
  },
  {
    slug: "medical-camp-khuzdar",
    title: "Free Medical Camp Treats 480 Patients in Khuzdar District",
    excerpt:
      "Our two-day camp brought specialist doctors from Quetta, free medication and follow-up plans to a community four hours from the nearest hospital.",
    body: [
      "In partnership with volunteer doctors from Bolan Medical Complex and Sandeman Provincial Hospital, our two-day camp in a remote village near Khuzdar provided free consultations, diagnostic tests and medicine to 480 patients.",
      "Of these, 22 were referred for surgical procedures fully sponsored by the trust at facilities in Quetta. Five children received pediatric specialist care for the first time in their lives, and 60 women attended a dedicated maternal-health session.",
      "Camps like this are only possible because of monthly donors. Becoming one is the single highest-impact way to support our medical mission across rural Balochistan.",
    ],
    image: medical,
    category: "Stories",
    date: "2024-02-18",
    readMin: 3,
    author: "Medical Wing",
    location: "Khuzdar, Balochistan",
  },
  {
    slug: "annual-impact-report-2023",
    title: "Annual Impact Report 2023 — A Year of Quiet Miracles in Balochistan",
    excerpt:
      "Read our complete transparency report: where every rupee went across Balochistan, who it reached, and what changed.",
    body: [
      "We believe transparency is the foundation of trust. Our 2023 Annual Impact Report breaks down every program across Balochistan — every cost line and every measurable outcome — district by district.",
      "Highlights: 1.4 million meals served across Quetta division, 2,200 students sponsored from Quetta to Gwadar, 22 new water sites commissioned in Tharparkar-style arid zones of Kharan and Chagai, and a 96% donation efficiency ratio audited by an independent firm.",
      "Download the full PDF on this page or get in touch with our finance team at the Quetta office for any clarification.",
    ],
    image: city,
    category: "Reports",
    date: "2024-01-05",
    readMin: 6,
    author: "Office of the CEO",
    location: "Quetta, Balochistan",
  },
  {
    slug: "clean-water-kharan-chagai",
    title: "Twelve New Water Wells Commissioned in Kharan & Chagai",
    excerpt:
      "After eight months of fieldwork in Balochistan's drought belt, twelve villages now have year-round access to clean drinking water.",
    body: [
      "In the deserts of Kharan and Chagai, women and children walk hours every day to fetch water — often unsafe to drink. Twelve villages will no longer have to.",
      "Our hydrogeology partners surveyed underground aquifers, and our engineers built deep wells with hand pumps and solar-powered filtration designed to handle Balochistan's high salinity. Each well is maintained by a trained village committee of local Baloch elders.",
      "One well costs roughly PKR 450,000 in this terrain and serves up to 200 people for years. To sponsor one in your name or in someone's memory, please contact our Quetta office.",
    ],
    image: water,
    category: "News",
    date: "2023-12-08",
    readMin: 4,
    author: "Water Programs",
    location: "Kharan & Chagai, Balochistan",
  },
  {
    slug: "education-scholarships-balochistan-2024",
    title: "850 New Education Scholarships Awarded Across Balochistan",
    excerpt:
      "From primary school in Pishin to university in Quetta — meet the next generation of Baloch and Pashtun dreamers we're standing behind.",
    body: [
      "This academic year, 850 students from low-income families across Balochistan received full scholarships covering tuition, uniforms, books and transport — from Quetta and Pishin to Loralai, Turbat and Gwadar.",
      "Among them: 320 girls in middle and high school in districts where female literacy is below 20%, 110 first-generation university students at University of Balochistan and BUITEMS, and 12 students entering Bolan Medical College and engineering programs.",
      "Education breaks generational cycles of poverty in a way nothing else does. Thank you for believing in these young Baloch lives.",
    ],
    image: education,
    category: "Stories",
    date: "2024-08-20",
    readMin: 3,
    author: "Education Programs",
    location: "Balochistan-wide",
  },
  {
    slug: "flood-response-balochistan-2024",
    title: "Emergency Flood Response Reaches 60 Villages in Naseerabad & Jaffarabad",
    excerpt:
      "Our rapid response teams from Quetta deployed within 36 hours of the first warnings, delivering food, tents and medical aid.",
    body: [
      "When flash floods devastated Naseerabad, Jaffarabad and Sohbatpur in lower Balochistan, our emergency response teams mobilized from Quetta within 36 hours. Convoys of food rations, drinking water, tents and medical kits reached 60 villages in the first week.",
      "Our medical wing set up two field clinics treating waterborne illnesses around Dera Murad Jamali, while our logistics team coordinated with the FC, PDMA Balochistan and local NGOs to avoid duplication.",
      "Disaster response is unpredictable. Your unrestricted donations are what allow us to move this fast across Balochistan's vast distances.",
    ],
    image: flood,
    category: "News",
    date: "2024-07-30",
    readMin: 4,
    author: "Emergency Response",
    location: "Naseerabad & Jaffarabad, Balochistan",
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
