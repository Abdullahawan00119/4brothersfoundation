import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2, Users, Briefcase, GraduationCap,
  Heart, HandHeart, ArrowRight, MapPin,
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
      <PageHero
        eyebrow="Join the Movement"
        title={
          <>
            Lend a Hand. <span className="text-gold font-bold">Change a Life.</span>
          </>
        }
        subtitle="There are many ways to be part of the movement — volunteer on the ground, partner as an organization, or sponsor life-changing programs."
      />

      {/* ── Stats Strip ── */}
      <section className="bg-[#071739] text-white py-8 sm:py-10 border-b border-white/10">
        <div className="container-x max-w-5xl mx-auto px-4 sm:px-6">
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
      <section className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-y border-border/70">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-bold mb-2">Why Join Us</p>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4 leading-snug text-foreground">
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
