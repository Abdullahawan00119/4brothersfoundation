import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Our Core Programs — 4 Brothers Welfare Trust" },
      {
        name: "description",
        content:
          "Four flagship initiatives addressing the most pressing needs in the communities we serve: Special Education, Ration Packs, Hospital Meals, Water & Rehabilitation.",
      },
    ],
  }),
});

interface CoreProgram {
  title: string;
  tagline: string;
  badge: string;
  img: string;
  desc: string;
  highlights: string[];
  costInfo?: string;
  location?: string;
}

const flagshipPrograms: CoreProgram[] = [
  {
    title: "Gawahi 4B Hope & Ability School",
    tagline: "Empowering Special Children Through Education, Therapy & Care",
    badge: "Since February 2026",
    img: "/images/school-program.jpeg",
    desc: "Gawahi 4B Hope & Ability School is a dedicated educational center for children with special needs, established in February 2026. Located on Brewery Road near SBK University, the school provides a supportive and inclusive learning environment where every child is encouraged to develop their abilities, confidence, and independence. With a team of 8 qualified teachers serving 27 students, we offer specialized educational programs along with Speech Therapy and Physiotherapy services to support each child's unique developmental journey.",
    highlights: [
      "8 Qualified Special Education Teachers",
      "27 Enrolled Special Needs Students",
      "Specialized Speech Therapy & Physiotherapy Services",
      "Supportive, Inclusive & Dignified Environment",
    ],
    location: "Brewery Road, near SBK University, Quetta",
  },
  {
    title: "Community Ration Distribution Initiative",
    tagline: "Fighting Hunger Through Compassion and Community Support",
    badge: "Monthly Assistance",
    img: "/images/ration-program.jpeg",
    desc: "The Community Ration Distribution Initiative aims to provide regular food assistance to vulnerable families on a monthly basis. Through this program, 25 to 30 ration bags are distributed each month to individuals and families in need. Each carefully prepared food package includes rice, wheat flour, daal, cooking oil, milk, and sweets, offering essential nourishment and relief. With an estimated cost of PKR 8,000 per bag, the program plays a vital role in reducing food insecurity and supporting the well-being of disadvantaged communities.",
    highlights: [
      "25 to 30 Ration Bags Distributed Every Month",
      "Complete Family Grocery Package: Flour, Rice, Daal, Oil, Milk & Sweets",
      "Targeted to Vulnerable Widows, Orphans & Disabled Heads of Household",
      "Direct Doorstep Verification & Transparent Tracking",
    ],
    costInfo: "Estimated Cost: PKR 8,000 per family ration bag",
  },
  {
    title: "Community Meal Distribution Initiative",
    tagline: "Delivering Hope and Nourishment to Those Who Need It Most",
    badge: "Weekly Feeding",
    img: "/images/meal-program.jpeg",
    desc: "The Community Meal Distribution Initiative aims to combat hunger by providing freshly prepared meals to underprivileged individuals and families every week. Through this program, around 200 people benefit from food assistance on a weekly basis. Regular food distribution is also carried out at BMC Hospital, where meals are provided to patients' attendants and other needy individuals. This initiative reflects our commitment to supporting the community through dignity, compassion, and essential nutritional care.",
    highlights: [
      "Around 200 People Benefit Weekly",
      "Freshly Prepared, Nutritious & Wholesome Hot Meals",
      "Weekly Distribution at BMC Hospital for Patient Attendants",
      "Dignified Meal Service Reaching the Most Fragile Individuals",
    ],
    location: "BMC Hospital & Low-Income Communities, Quetta",
  },
];

const additionalPillars = [
  {
    title: "Rehabilitation & Drug-Free Youth",
    tagline: "In Partnership with NIJAT Drug Treatment Center",
    img: "/images/frehabliation.jpg",
    desc: "Joining hands with NIJAT Drug Treatment Center for a drug-free youth and a healthier society in Quetta city. Providing medical detox, psychological counseling, and family reintegration.",
    impact: "500+ Youth & Families Supported",
  },
  {
    title: "Clean Water Projects",
    tagline: "Safe Drinking Water for Desert & Rural Regions",
    img: "/images/water.jpg",
    desc: "Installing community hand pumps, deep bore wells, and reverse osmosis filtration plants across remote water-stressed districts of Balochistan.",
    impact: "120+ Active Water Sites",
  },
  {
    title: "Emergency Medical Relief",
    tagline: "Lifesaving Care When Seconds Count",
    img: "/images/medical.jpeg",
    desc: "Organizing free medical camps, emergency prescription funding, surgical subsidies, and mobile diagnostic clinics in underserved areas.",
    impact: "5,000+ Patients Treated Annually",
  },
  {
    title: "Orphan Care & Child Sponsorship",
    tagline: "Nurturing Hope for the Next Generation",
    img: "/images/orphan.jpeg",
    desc: "Comprehensive sponsorship addressing monthly nutrition, school uniforms, textbooks, healthcare monitoring, and loving psychosocial support.",
    impact: "300+ Children Sponsored",
  },
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Our Core <span className="text-gold font-bold">Programs.</span>
          </>
        }
        subtitle="Four flagship initiatives and key community welfare pillars addressing the most pressing humanitarian needs in the communities we serve."
      />

      {/* Flagship Initiatives Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-24">
            {flagshipPrograms.map((p, i) => (
              <Reveal key={p.title}>
                <article
                  className={`grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image container */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-border group bg-muted aspect-[4/3]">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] sm:text-xs font-bold uppercase tracking-wider bg-gold text-navy shadow-md">
                          {p.badge}
                        </span>
                      </div>
                      {p.location && (
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-white/10">
                          <MapPin className="size-3.5 sm:size-4 text-gold shrink-0" />
                          <span className="truncate">{p.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content container */}
                  <div className="lg:col-span-6 flex flex-col">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold mb-1.5 sm:mb-2">
                      Flagship Program 0{i + 1}
                    </span>
                    <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      {p.title}
                    </h2>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-base font-semibold text-primary/90">
                      {p.tagline}
                    </p>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-base text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="size-3.5 sm:size-4 text-gold shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {p.costInfo && (
                      <div className="mt-4 sm:mt-5 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gold/10 border border-gold/25 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold self-start">
                        <Heart className="size-3.5 sm:size-4 fill-gold shrink-0" />
                        <span>{p.costInfo}</span>
                      </div>
                    )}

                    <div className="mt-6 sm:mt-7 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                      <Link to="/donate" className="w-full xs:w-auto">
                        <Button className="w-full xs:w-auto bg-gradient-gold text-navy font-bold h-11 px-7 shadow-glow">
                          Support this program <ArrowRight className="size-4 ml-1.5" />
                        </Button>
                      </Link>
                      <Link to="/contact" className="w-full xs:w-auto">
                        <Button variant="outline" className="w-full xs:w-auto h-11 px-6">
                          Inquire Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pillars */}
      <section className="py-14 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-border/70">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">
              Continuous Welfare
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground tracking-tight">
              Expanded Community Pillars
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Addressing urgent survival needs across clean water, emergency medicine, addiction recovery, and child protection.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {additionalPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="bg-card rounded-2xl overflow-hidden border border-border/70 hover:border-primary/40 shadow-sm hover:shadow transition-all duration-300 flex flex-col h-full group">
                  {/* Proportional compact image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-muted shrink-0">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="size-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {p.impact}
                      </span>
                    </div>
                  </div>

                  {/* Compact Body */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="font-sans font-bold text-base text-foreground leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-primary truncate mt-0.5 mb-2">
                      {p.tagline}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3.5 flex-1">
                      {p.desc}
                    </p>

                    <div className="pt-2.5 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                      <Link to="/donate" className="hover:text-gold flex items-center gap-1 transition-colors">
                        Support this <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA Banner (Rich Foundation Blue Card) */}
          <Reveal className="mt-14 sm:mt-16">
            <div className="rounded-3xl p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-md bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                Want to Sponsor a Program?
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed max-w-xl mx-auto font-normal">
                Your contribution directly funds special education teachers, monthly family ration packs, and hot hospital meals. Every single rupee creates lasting change.
              </p>
              <Link to="/donate">
                <Button size="lg" className="bg-gradient-gold text-navy font-bold px-8 shadow-sm">
                  <Heart className="size-4 mr-2 fill-navy" /> Support Our Programs Now
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
