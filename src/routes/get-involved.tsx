import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2, Users, Briefcase, GraduationCap,
  Heart, HandHeart, Sparkles, ArrowRight, MapPin,
  Clock, Star, Send,
} from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedPage,
  head: () => ({
    meta: [
      { title: "Get Involved — 4 Brothers Welfare Trust" },
      { name: "description", content: "Volunteer, partner or intern with 4 Brothers Welfare Trust." },
      { property: "og:title", content: "Get Involved — 4 Brothers Welfare Trust" },
      { property: "og:description", content: "Volunteer, partner or intern with 4 Brothers Welfare Trust." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const ways = [
  {
    icon: Users,
    title: "Volunteer",
    desc: "Give your time and skills directly on the ground. Join our field teams and make an immediate impact in communities that need it most.",
    bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    borderColor: "rgba(245,158,11,0.4)",
    iconBg: "bg-amber-500 text-white",
    tagBg: "bg-amber-100 text-amber-700",
    tag: "Most Popular",
  },
  {
    icon: Briefcase,
    title: "Corporate Partner",
    desc: "Sponsor life-changing programs and run CSR drives aligned with your brand values. Together, we create measurable social impact.",
    bg: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
    borderColor: "rgba(14,165,233,0.4)",
    iconBg: "bg-sky-500 text-white",
    tagBg: "bg-sky-100 text-sky-700",
    tag: "For Companies",
  },
  {
    icon: GraduationCap,
    title: "Internships",
    desc: "Gain hands-on experience in non-profit operations, community outreach and project management — all while giving back.",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    borderColor: "rgba(16,185,129,0.4)",
    iconBg: "bg-emerald-500 text-white",
    tagBg: "bg-emerald-100 text-emerald-700",
    tag: "For Students",
  },
];

const stats = [
  { icon: Users,    value: "100+",  label: "Active Volunteers" },
  { icon: MapPin,   value: "12",    label: "Cities Covered" },
  { icon: Clock,    value: "48hrs", label: "Response Time" },
  { icon: Star,     value: "30K+",  label: "Lives Changed" },
];

const skillTags = [
  "Cooking", "Teaching", "Medical", "Logistics",
  "Photography", "Social Media", "Driving", "Translation",
  "IT & Tech", "Fundraising", "Legal Aid", "Counselling",
];

function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSkills((arr) => (arr.includes(s) ? arr.filter((x) => x !== s) : [...arr, s]));

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.11 0.07 260) 0%, oklch(0.17 0.09 254) 50%, oklch(0.21 0.10 248) 100%)" }}
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-48 -left-48 size-[700px] rounded-full blur-[130px]"
            style={{ background: "oklch(0.78 0.17 70 / 0.20)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-40 -right-40 size-[550px] rounded-full blur-[110px]"
            style={{ background: "oklch(0.58 0.15 240 / 0.18)" }}
          />
          <motion.div
            animate={{ y: [-15, 15, -15], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[450px] rounded-full blur-[100px]"
            style={{ background: "oklch(0.78 0.13 225 / 0.12)" }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 5 === 0 ? 5 : 2,
                height: i % 5 === 0 ? 5 : 2,
                left: `${(i * 47 + 9) % 92}%`,
                top: `${(i * 33 + 7) % 85}%`,
                background: i % 2 === 0 ? "oklch(0.78 0.17 70)" : "oklch(1 0 0 / 0.45)",
                opacity: 0,
              }}
              animate={{ y: [-20, 20, -20], opacity: [0, i % 3 === 0 ? 0.85 : 0.4, 0] }}
              transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.26, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="container-x relative z-10 pt-36 pb-24">
          <div className="max-w-3xl mx-auto text-center text-white">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/[0.08] backdrop-blur-md px-5 py-2 mb-8"
            >
              <Sparkles className="size-4 text-gold" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-bold">Join the Movement</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] mb-6">
              {["Lend", "a", "hand.", "Change", "a", "life."].map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.1 + wi * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.22em] ${wi >= 3 ? "text-gradient-gold" : "text-white"}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto"
            >
              There are many ways to be part of the movement — find the one that fits you and start making a difference today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#signup-form"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="relative h-13 px-8 bg-gradient-gold text-navy font-extrabold text-base overflow-hidden group"
                  style={{ boxShadow: "0 0 36px oklch(0.78 0.17 70 / 0.42)" }}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  <Heart className="size-5 mr-2 fill-navy relative z-10" />
                  <span className="relative z-10">Volunteer Now</span>
                </Button>
              </motion.a>
              <motion.a href="#ways" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.13] font-semibold text-base backdrop-blur-md"
                >
                  Explore Ways <ArrowRight className="size-4 ml-2 opacity-60" />
                </Button>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(0.13 0.05 260))" }} />
      </section>

      {/* ── Stats Strip ── */}
      <section style={{ background: "oklch(0.13 0.05 260)" }} className="py-10 border-y border-white/[0.07]">
        <div className="container-x">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="inline-flex p-3 rounded-2xl bg-gold/10 text-gold mb-1">
                    <Icon className="size-5" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-gold leading-none">{value}</div>
                  <div className="text-sm text-white/50 uppercase tracking-wide">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to Get Involved ── */}
      <section id="ways" className="py-24 bg-background">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">How You Can Help</p>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Choose your{" "}
              <span className="text-gradient-gold">path to impact</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Every skill, every hour, every contribution makes a difference.</p>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-3xl p-8 overflow-hidden h-full cursor-pointer group"
                  style={{ background: w.bg, border: `1px solid ${w.borderColor}` }}
                >
                  {/* Tag */}
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${w.tagBg} mb-5`}>
                    {w.tag}
                  </span>

                  <div className={`inline-flex p-3.5 rounded-2xl ${w.iconBg} mb-5`}>
                    <w.icon className="size-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{w.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{w.desc}</p>


                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Volunteer ── */}
      <section className="py-20 bg-muted/40">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Why Join Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-snug">
                Be part of something <span className="text-gradient-gold">bigger than yourself</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Volunteering with 4 Brothers Welfare Trust isn't just about giving — it's about growing. You'll build leadership skills, forge lifelong friendships, and witness the direct impact of your actions on real families across Pakistan.
              </p>
              <ul className="space-y-3">
                {[
                  "Work alongside passionate, like-minded individuals",
                  "Gain certified volunteer experience & references",
                  "Access exclusive training workshops",
                  "Be recognized in our annual impact report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: HandHeart, title: "Real Impact", desc: "Every hour you give directly feeds, heals or educates a family." },
                  { icon: Star,      title: "Recognition", desc: "We celebrate every volunteer with certificates and shoutouts." },
                  { icon: Users,     title: "Community",   desc: "Join a family of 100+ passionate change-makers." },
                  { icon: Heart,     title: "Fulfillment", desc: "Experience the joy of selfless service and human connection." },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4 }}
                    className="bg-card rounded-2xl p-5 border border-border shadow-soft"
                  >
                    <div className="inline-flex p-2.5 rounded-xl bg-gradient-gold text-navy mb-3">
                      <card.icon className="size-5" />
                    </div>
                    <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Volunteer Sign-up Form ── */}
      <section id="signup-form" className="py-24 bg-background">
        <div className="container-x">
          <Reveal className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-3">Join Today</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Volunteer Sign-up</h2>
            <p className="mt-3 text-muted-foreground">We'll get back to you within 48 hours with your first mission.</p>
          </Reveal>

          <Reveal>
            <div
              className="relative max-w-3xl mx-auto rounded-3xl border border-white/[0.10] p-8 sm:p-12 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, oklch(0.14 0.07 260 / 0.85) 0%, oklch(0.18 0.09 255 / 0.85) 100%)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 80px oklch(0.78 0.17 70 / 0.08), inset 0 1px 0 oklch(1 0 0 / 0.06)",
              }}
            >
              {/* Decorative orb */}
              <div className="absolute -top-20 -right-20 size-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "oklch(0.78 0.17 70 / 0.12)" }} />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <CheckCircle2 className="size-20 text-gold mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Welcome to the family!</h3>
                  <p className="text-white/60 text-lg max-w-sm mx-auto">
                    Our team will reach out within 48 hours with your first steps. Get ready to change lives!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="relative space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { label: "Full Name",     placeholder: "Your name",       type: "text"  },
                      { label: "Email Address", placeholder: "you@email.com",   type: "email" },
                      { label: "Phone Number",  placeholder: "+92 300 0000000", type: "tel"   },
                      { label: "City",          placeholder: "Quetta",          type: "text"  },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-sm font-medium text-white/80">{field.label}</label>
                        <Input
                          required
                          type={field.type}
                          placeholder={field.placeholder}
                          className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 focus:ring-gold/20 h-11"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/80">Skills you can offer</label>
                    <p className="text-xs text-white/40 mt-0.5 mb-3">Select all that apply</p>
                    <div className="flex flex-wrap gap-2">
                      {skillTags.map((s) => (
                        <motion.button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                            skills.includes(s)
                              ? "bg-gradient-gold text-navy border-transparent shadow-md"
                              : "bg-white/[0.06] border-white/20 text-white/70 hover:border-gold/50 hover:text-white"
                          }`}
                        >
                          {skills.includes(s) && <span className="mr-1">✓</span>}
                          {s}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/80">Why do you want to volunteer?</label>
                    <Textarea
                      rows={4}
                      placeholder="Tell us a little about your motivation and availability…"
                      className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-13 bg-gradient-gold text-navy font-extrabold text-base relative overflow-hidden group"
                      style={{ boxShadow: "0 0 30px oklch(0.78 0.17 70 / 0.35)" }}
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                      <Send className="size-5 mr-2.5 relative z-10" />
                      <span className="relative z-10">Submit Application</span>
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
