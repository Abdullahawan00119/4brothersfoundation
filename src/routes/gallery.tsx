import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox, type LightboxImage } from "@/components/site/Lightbox";
const education   = "/images/education.webp";
const medical     = "/images/medical.jpeg";
const water       = "/images/water.jpg";
const relief      = "/images/f11.jpg";
const distribution = "/images/f1.jpg";
const quettaCity  = "/images/f2.jpg";
const quettaDist  = "/images/f3.jpg";
const quettaEdu   = "/images/f6.jpg";
const quettaFlood = "/images/f12.jpg";
const quettaMed   = "/images/f8.jpg";
const quettaRamadan = "/images/f10.jpg";
const quettaSkills  = "/images/f13.jpg";
const quettaWater   = "/images/water.jpg";
const quettaWinter  = "/images/f14.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — 4 Brothers Welfare Trust" },
      { name: "description", content: "Photos from our food drives, medical camps, schools and emergency response operations." },
      { property: "og:title", content: "Gallery — 4 Brothers Welfare Trust" },
      { property: "og:description", content: "Photos from our food drives, medical camps, schools and emergency response operations." },
      { property: "og:type", content: "website" },
    ],
  }),
});

type Category = "All" | "Food" | "Education" | "Medical" | "Water" | "Emergency" | "Plantation";

const allImages: (LightboxImage & { category: Category; tall?: boolean })[] = [
  { src: "/Food-distribution/hero-image.jpeg", alt: "Food distribution to families in Quetta", caption: "Community meal & ration distribution drive", category: "Food", tall: true },
  { src: "/Plantation/hero-image.jpeg", alt: "Youth volunteers planting saplings", caption: "Green Quetta Tree Plantation Drive", category: "Plantation", tall: true },
  { src: "/Food-distribution/WhatsApp Image 2026-10-18 at 8.29.26 PM.jpeg", alt: "Food packages arranged by volunteers", caption: "Essential grocery packs and meal boxes", category: "Food" },
  { src: "/Plantation/WhatsApp Image 2026-10-18 at 8.26.28 PM.jpeg", alt: "Planting saplings in school yard", caption: "School grounds greening initiative", category: "Plantation" },
  { src: "/Food-distribution/WhatsApp Image 2026-10-18 at 8.29.30 PM.jpeg", alt: "Distribution of meals to beneficiaries", caption: "Direct community food assistance", category: "Food", tall: true },
  { src: "/Plantation/WhatsApp Image 2026-10-18 at 8.26.29 PM.jpeg", alt: "Watering young trees in Quetta", caption: "Nurturing newly planted trees", category: "Plantation" },
  { src: distribution, alt: "Food distribution to families", caption: "Weekly food distribution drive", category: "Food", tall: true },
  { src: quettaDist, alt: "Ration packs being handed out", caption: "Ration packs for 500 families", category: "Food" },
  { src: quettaRamadan, alt: "Ramadan iftar distribution", caption: "Ramadan iftar for 2,000 people", category: "Food" },
  { src: education, alt: "Children in classroom", caption: "Education support program", category: "Education", tall: true },
  { src: quettaEdu, alt: "Students receiving books", caption: "Books and uniforms for students", category: "Education" },
  { src: quettaSkills, alt: "Skills training workshop", caption: "Vocational skills training", category: "Education" },
  { src: medical, alt: "Free medical camp", caption: "Free medical camp — 300 patients", category: "Medical" },
  { src: quettaMed, alt: "Doctor treating patient", caption: "Life-saving treatment provided", category: "Medical", tall: true },
  { src: water, alt: "Clean water project", caption: "Hand pump installation", category: "Water" },
  { src: quettaWater, alt: "Water filtration plant", caption: "Water filtration for 1,000 families", category: "Water", tall: true },
  { src: relief, alt: "Emergency relief operations", caption: "Flood relief response", category: "Emergency" },
  { src: quettaFlood, alt: "Flood victims receiving aid", caption: "Emergency flood relief", category: "Emergency", tall: true },
  { src: quettaWinter, alt: "Winter relief distribution", caption: "Winter blankets and warm clothing", category: "Emergency" },
  { src: quettaCity, alt: "Quetta city outreach", caption: "Community outreach in Quetta", category: "Food" },
];

const categories: Category[] = ["All", "Food", "Plantation", "Education", "Medical", "Water", "Emergency"];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? allImages : allImages.filter((img) => img.category === active);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      <PageHero
        eyebrow="Photo Gallery"
        title={<>Moments of <span className="text-gold font-bold">Impact & Service.</span></>}
        subtitle="A glimpse into our field work, community food distributions, special education school, and relief operations."
      />

      <section className="py-12 sm:py-20 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          {/* Category filter: horizontal scrollable on mobile */}
          <Reveal className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap sm:overflow-visible mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                  active === c
                    ? "bg-gradient-gold text-navy border-transparent shadow-glow"
                    : "bg-background border-border text-foreground/80 hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
            {filtered.map((img, i) => (
              <Reveal key={`${img.src}-${i}`} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => openLightbox(i)}
                  className={`relative break-inside-avoid w-full rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all group block ${
                    img.tall ? "h-[320px] sm:h-[420px]" : "h-[220px] sm:h-[280px]"
                  }`}
                  aria-label={`View ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-gold font-bold text-xs uppercase tracking-wider mb-1">{img.category}</span>
                    <h3 className="text-white font-display font-semibold text-lg leading-tight">{img.caption}</h3>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
