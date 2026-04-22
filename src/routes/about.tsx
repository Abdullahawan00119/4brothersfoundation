import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Heart, Eye, Compass, Award,
  Utensils, GraduationCap, Droplets, Zap, HandHeart, ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — 4 Brothers Welfare Trust" },
      { name: "description", content: "Our story, mission, vision and the team behind 4 Brothers Welfare Trust." },
      { property: "og:title", content: "About — 4 Brothers Welfare Trust" },
      { property: "og:description", content: "Our story, mission, vision and the team behind 4 Brothers Welfare Trust." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const services = [
  {
    icon: Utensils,
    title: "Food & Nutrition",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    items: ["Daily Dastarkhwan", "Monthly Ration Packs", "Ramadan Iftar Drives", "Sadqa Meat Distribution", "Roti Bank"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    items: ["School Sponsorships", "Books & Uniforms", "After-School Tutoring", "Vocational Training", "Scholarship Programs"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    items: ["Free Medical Camps", "Life-Saving Surgeries", "Maternal Health", "Mobile Health Clinics", "Chronic Care Support"],
  },
  {
    icon: Droplets,
    title: "Clean Water",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    items: ["Hand Pump Installation", "RO Filtration Plants", "Well Digging", "Water Chiller Units", "Supply Rehabilitation"],
  },
  {
    icon: Zap,
    title: "Emergency Relief",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    items: ["Flood Response", "Disaster Relief Kits", "Emergency Medical Aid", "Shelter Provision", "Rapid Deployment Teams"],
  },
  {
    icon: HandHeart,
    title: "Rehabilitation",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    items: ["NIJAT Drug Treatment", "Drug-Free Youth Program", "Community Counselling", "Family Support", "Reintegration Aid"],
  },
];

const values = [
  { icon: Heart,    title: "Compassion",    desc: "We treat every life with dignity and warmth." },
  { icon: Eye,      title: "Transparency",  desc: "Every rupee is tracked, audited and reported." },
  { icon: Compass,  title: "Integrity",     desc: "We do what's right — even when no one is watching." },
  { icon: Award,    title: "Impact",        desc: "Programs designed to create measurable change." },
];

const milestones = [
  ["2025", "Founded by four brothers with a shared mission to serve Quetta."],
  ["2026", "Launched digital outreach platform and reached 50,000+ beneficiaries nationwide."],
];

const stats = [
  { value: "2025", label: "Established" },
  { value: "30K+", label: "Families Helped" },
  { value: "100+", label: "Volunteers" },
  { value: "4",    label: "Core Programs" },
];

function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.12 0.07 260) 0%, oklch(0.18 0.09 254) 50%, oklch(0.22 0.10 248) 100%)" }}
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.20, 0.35, 0.20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 size-[600px] rounded-full blur-[120px]" style={{ background: "oklch(0.78 0.17 70 / 0.22)" }} />
          <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.10, 0.20, 0.10] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-32 -right-32 size-[500px] rounded-full blur-[110px]" style={{ background: "oklch(0.58 0.15 240 / 0.18)" }} />
          <motion.div animate={{ y: [-12, 12, -12], opacity: [0.06, 0.14, 0.06] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[400px] rounded-full blur-[90px]" style={{ background: "oklch(0.78 0.13 225 / 0.10)" }} />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.028) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.028) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* Diagonal accent */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(112deg, transparent 55%, oklch(0.78 0.17 70 / 0.04) 55%, oklch(0.78 0.17 70 / 0.04) 58%, transparent 58%)" }} />

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span key={i} className="absolute rounded-full"
              style={{ width: i % 4 === 0 ? 4 : 2, height: i % 4 === 0 ? 4 : 2, left: `${(i * 43 + 7) % 94}%`, top: `${(i * 31 + 5) % 88}%`, background: i % 2 === 0 ? "oklch(0.78 0.17 70)" : "oklch(1 0 0 / 0.5)", opacity: 0 }}
              animate={{ y: [-18, 18, -18], opacity: [0, i % 3 === 0 ? 0.8 : 0.4, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.28, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="container-x relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

            {/* Left */}
            <div className="text-white">
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/[0.08] backdrop-blur-md px-5 py-2 mb-8">
                <ShieldCheck className="size-4 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-bold">Established 2025</span>
              </motion.div>

              {/* Headline */}
              <h1 className="text-[clamp(1.6rem,3.5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-6">
                {["Empowering", "communities", "through", "compassionate", "service."].map((word, wi) => (
                  <motion.span key={word}
                    initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.75, delay: 0.08 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block mr-[0.2em] ${wi === 2 || wi === 4 ? "text-gradient-gold" : "text-white"}`}
                  >{word}</motion.span>
                ))}
              </h1>

              {/* Body */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-white/60 leading-[1.75] max-w-xl mb-10">
                What started as four brothers sharing meals with neighbors in Quetta has grown into a
                movement reaching tens of thousands of Pakistani families — through food, education,
                healthcare, clean water, emergency relief and rehabilitation.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4 mb-12">
                <Link to="/donate">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" className="relative h-13 px-8 bg-gradient-gold text-navy font-extrabold text-base overflow-hidden group" style={{ boxShadow: "0 0 36px oklch(0.78 0.17 70 / 0.42)" }}>
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                      <Heart className="size-5 mr-2 fill-navy relative z-10" />
                      <span className="relative z-10">Donate Now</span>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/get-involved">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" variant="outline" className="h-13 px-8 border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.13] font-semibold text-base backdrop-blur-md">
                      Volunteer <ArrowRight className="size-4 ml-2 opacity-50" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Right — stats cards */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { value: "2025", label: "Established",    sub: "Quetta, Balochistan" },
                { value: "30K+", label: "Families Helped", sub: "Across Pakistan"     },
                { value: "100+", label: "Volunteers",      sub: "Active nationwide"   },
                { value: "4",    label: "Core Programs",   sub: "Food · Education · Relief · Rehab" },
              ].map(({ value, label, sub }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/[0.10] p-6 flex flex-col"
                  style={{ background: "oklch(1 0 0 / 0.05)", backdropFilter: "blur(16px)" }}
                >
                  <div className="font-display text-3xl font-extrabold text-gold leading-none mb-1">{value}</div>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-white/40 text-[11px] mt-1">{sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.7 }}
            className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {[
              { value: "2025", label: "Established" },
              { value: "30K+", label: "Families" },
              { value: "100+", label: "Volunteers" },
              { value: "4",    label: "Programs" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-center">
                <div className="font-display text-2xl font-extrabold text-gold">{value}</div>
                <div className="text-[11px] text-white/50 mt-1 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              A welfare trust built on brotherhood and service.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              4 Brothers Welfare Trust is dedicated to uplifting the impoverished through comprehensive
              support services across Quetta and Balochistan. Our mission encompasses free food
              distribution, medical assistance, access to clean water, quality education and
              rehabilitation programs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2013, we have invested in philanthropic efforts that bring dignity, hope and
              tangible aid to thousands of families across Pakistan — with 100% of donations reaching
              beneficiaries directly.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="inline-flex p-2.5 rounded-xl bg-gradient-gold text-navy mb-3">
                  <v.icon className="size-5" />
                </div>
                <h3 className="font-display font-bold">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-muted/40">
        <div className="container-x grid sm:grid-cols-2 gap-6">
          {[
            {
              label: "Our Mission",
              heading: "To serve humanity through comprehensive welfare programs.",
              body: "We believe humanity is our shared identity. Through food, education, healthcare and emergency response, we restore dignity to families pushed to the margins by poverty, disaster or circumstance.",
            },
            {
              label: "Our Vision",
              heading: "To create a compassionate world with equal opportunities for all.",
              body: "We envision communities where neighbors care, where children learn, where the sick are healed, and where everyone — regardless of background — is treated with the dignity every human being deserves.",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.15}>
              <div className="relative rounded-3xl p-8 sm:p-10 border border-border bg-card shadow-soft overflow-hidden h-full">
                <div className="absolute top-0 right-0 size-40 rounded-full blur-3xl pointer-events-none" style={{ background: "oklch(0.78 0.17 70 / 0.07)" }} />
                <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">{item.label}</p>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">{item.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Our Services ── */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Comprehensive programs designed to address{" "}
              <span className="text-gradient-gold">every aspect of human welfare.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <div className="bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all h-full">
                  <div className={`inline-flex p-3 rounded-2xl border mb-5 ${s.color}`}>
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 bg-muted/40">
        <div className="container-x max-w-3xl">
          <Reveal className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-5xl font-bold">A decade of service</h2>
          </Reveal>
          <div className="relative pl-8 border-l-2 border-border">
            {milestones.map(([year, text], i) => (
              <Reveal key={year} delay={i * 0.08} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[41px] size-5 rounded-full bg-gradient-gold ring-4 ring-muted/40" />
                <div className="font-display text-2xl font-bold text-primary">{year}</div>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <Reveal>
            <div
              className="relative rounded-[2rem] overflow-hidden text-white text-center px-8 py-20"
              style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 260) 0%, oklch(0.20 0.10 248) 100%)" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
              <div className="absolute -top-20 -right-20 size-80 rounded-full blur-3xl pointer-events-none" style={{ background: "oklch(0.78 0.17 70 / 0.15)" }} />
              <div className="relative max-w-2xl mx-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-gold font-bold mb-4">Join Our Mission</p>
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-5">
                  Every contribution creates{" "}
                  <span className="text-gradient-gold">ripples of change.</span>
                </h2>
                <p className="text-white/65 text-lg mb-10 leading-relaxed">
                  Together, we can build a world where compassion knows no bounds.
                  No matter how small, your support changes lives.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/donate">
                    <Button size="lg" className="h-14 px-10 bg-gradient-gold text-navy font-extrabold text-base shadow-glow hover:opacity-95">
                      <Heart className="size-5 mr-2.5 fill-navy" /> Donate Now
                    </Button>
                  </Link>
                  <Link to="/get-involved">
                    <Button size="lg" variant="outline" className="h-14 px-10 border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.13] font-semibold text-base backdrop-blur-md">
                      Volunteer <ArrowRight className="size-4 ml-2 opacity-60" />
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
