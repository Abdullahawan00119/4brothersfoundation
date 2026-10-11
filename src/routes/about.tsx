import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Eye,
  Compass,
  Award,
  Utensils,
  GraduationCap,
  Droplets,
  Zap,
  HandHeart,
  ShieldCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Leadership } from "@/components/site/Leadership";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — 4 Brothers Welfare Trust & Foundation" },
      {
        name: "description",
        content:
          "Our story, mission, vision, and the dedicated team behind 4 Brothers Welfare Trust serving Quetta and Balochistan.",
      },
    ],
  }),
});

const services = [
  {
    icon: Utensils,
    title: "Food & Nutrition",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    items: ["Daily Dastarkhwan", "Monthly Family Ration Bags", "Weekly Hospital Meal Drives", "Ramadan Food Packages"],
  },
  {
    icon: GraduationCap,
    title: "Special Needs & Education",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    items: ["Gawahi 4B Hope & Ability School", "Speech & Physiotherapy", "School Sponsorships", "Uniforms & Textbooks"],
  },
  {
    icon: Heart,
    title: "Healthcare Relief",
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    items: ["Free Medical Camps", "Emergency Prescription Aid", "Hospital Patient Assistance", "Chronic Care Support"],
  },
  {
    icon: Droplets,
    title: "Clean Water Projects",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    items: ["Community Hand Pumps", "RO Water Filtration Plants", "Deep Bore Wells", "Rehabilitation of Broken Supplies"],
  },
  {
    icon: Zap,
    title: "Emergency & Disaster Aid",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    items: ["Flood Response Teams", "Emergency Food Kits", "Shelter & Blanket Drives", "Rapid Medical Deployment"],
  },
  {
    icon: HandHeart,
    title: "Rehabilitation & Recovery",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    items: ["NIJAT Drug Treatment Center Partnership", "Drug-Free Youth Outreach", "Family Psychological Support", "Community Reintegration"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "Every human being deserves dignified assistance without discrimination of background or status.",
  },
  {
    icon: Eye,
    title: "100% Transparency",
    desc: "Direct verification from doorsteps to hospital wards. Administrative costs funded separately by our founders.",
  },
  {
    icon: Compass,
    title: "Brotherhood & Unity",
    desc: "Together as humans — bound by a lifelong commitment to uplift communities pushed to the margins.",
  },
  {
    icon: Award,
    title: "Sustainable Impact",
    desc: "Not just temporary handouts, but schools, water stations, and rehabilitation programs for enduring progress.",
  },
];

const milestones: [string, string][] = [
  ["2013", "Grassroots community food drives begin among four brothers in Quetta, sharing hot meals with low-income neighbors."],
  ["2017", "Expanded into emergency medical assistance and hand pump water wells in remote, water-deprived villages of Balochistan."],
  ["2022", "Massive disaster response during devastating Balochistan floods, delivering ration bags, clean water, and mobile clinics."],
  ["2026", "Formally established Gawahi 4B Hope & Ability School on Brewery Road Quetta for children with special needs, offering education and therapy."],
];

function AboutPage() {
  return (
    <>
      {/* ── 1. Hero Section (Deep Foundation Navy, Professional & Human) ── */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-white/90 font-semibold mb-5">
                <ShieldCheck className="size-3.5 text-gold" />
                Our Story & Purpose • Est. 2026
              </div>

              <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Empowering Communities Through Compassionate Service
              </h1>

              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
                What started as four brothers sharing meals with neighbors on Spini Road, Quetta has grown into a dedicated foundation serving thousands of families — through specialized education, daily food drives, healthcare relief, and clean water.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/donate">
                  <Button className="bg-gradient-gold text-navy font-bold text-sm h-11 px-7 shadow-md">
                    <Heart className="size-4 mr-2 fill-navy" /> Support Our Mission
                  </Button>
                </Link>
                <Link to="/management">
                  <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 text-sm h-11 px-6 backdrop-blur-md">
                    Meet Our Leadership
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Real Verified Stats Card */}
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { value: "27+", label: "Students Enrolled", sub: "Gawahi 4B Ability School" },
                { value: "8+", label: "Dedicated Teachers", sub: "Special Needs Educators" },
                { value: "3,200+", label: "Medical Consultations", sub: "Free Clinical Outreach" },
                { value: "50,000+", label: "Meals Distributed", sub: "Food & Ration Drives" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between"
                >
                  <div className="font-sans text-2xl sm:text-3xl font-extrabold text-gold tracking-tight">{card.value}</div>
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-white">{card.label}</div>
                    <div className="text-[11px] text-white/60 mt-0.5">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Are & Values (Clean White Canvas) ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold mb-2">Who We Are</p>
              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
                A foundation built on brotherhood, dignity, and real action.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                4 Brothers Welfare Trust is dedicated to uplifting disadvantaged communities through structured support programs in Quetta and across Pakistan. Our work addresses hunger, physical disabilities, illness, lack of clean water, and social neglect.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We believe humanity is our shared identity. Every program is driven by direct door-to-door verification, ensuring that assistance reaches those who need it most with complete transparency.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all"
                >
                  <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-3">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-foreground mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision (Alternating Soft Slate Tint) ── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-border/70">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold mb-2">Core Mandate</p>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Our Mission & Vision
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-card rounded-2xl p-7 border border-border shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-primary block mb-2">Our Mission</span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">
                    To serve humanity through comprehensive, dignified welfare programs.
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Through regular food distribution, specialized special needs schooling, rapid medical aid, and clean water wells, we restore self-respect and basic security to impoverished families.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-card rounded-2xl p-7 border border-border shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-primary block mb-2">Our Vision</span>
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">
                    A compassionate society with equal opportunity and human dignity for all.
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We envision communities where every special child has access to therapy, where no hospital attendant sleeps hungry, and where neighbors unite to support the vulnerable.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Comprehensive Services (Clean White Canvas) ── */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold mb-2">What We Deliver</p>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Six Pillars of Community Action
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Holistic support addressing education, food security, healthcare, and community rehabilitation.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className={`inline-flex p-3 rounded-xl border mb-4 self-start ${s.color}`}>
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-foreground mb-3">{s.title}</h3>
                  <ul className="space-y-2 mt-auto">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Leadership & Founders ── */}
      <Leadership />

      {/* ── 6. Milestones Timeline (Alternating Soft Slate Tint) ── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-border/70">
        <div className="container-x max-w-3xl mx-auto px-4 sm:px-6">
          <Reveal className="mb-10 sm:mb-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold mb-2">Our Journey</p>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Milestones of Service
            </h2>
          </Reveal>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-8">
            {milestones.map(([year, text], i) => (
              <Reveal key={year} delay={i * 0.08} className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] size-4 sm:size-5 rounded-full bg-primary ring-4 ring-background" />
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-primary">{year}</div>
                <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Join CTA Banner (Rich Blue Card) ── */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container-x max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl p-8 sm:p-12 text-white text-center bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] shadow-md border border-white/10">
              <div className="max-w-xl mx-auto space-y-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
                  Join Our Mission
                </span>
                <h3 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Every contribution creates lasting change.
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Join hundreds of supporters and volunteers who partner with 4 Brothers Foundation to bring hope, nutrition, and education to vulnerable families.
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <Link to="/donate">
                    <Button size="lg" className="bg-gradient-gold text-navy font-bold h-11 px-8 shadow-sm">
                      <Heart className="size-4 mr-2 fill-navy" /> Donate Now
                    </Button>
                  </Link>
                  <Link to="/get-involved">
                    <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 h-11 px-7">
                      Volunteer With Us <ArrowRight className="size-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
