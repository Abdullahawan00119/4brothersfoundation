import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Heart, Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "Food & Ration",    amount: "500",    impact: "Feeds a family for a day",           accent: "oklch(0.78 0.17 70)"  },
  { label: "Education",        amount: "2,500",  impact: "Books & uniform for one child",       accent: "oklch(0.30 0.16 258)" },
  { label: "Healthcare",       amount: "1,000",  impact: "Free medical camp visit",             accent: "oklch(0.78 0.17 70)"  },
  { label: "Clean Water",      amount: "5,000",  impact: "Water filtration for 10 families",    accent: "oklch(0.30 0.16 258)" },
  { label: "Emergency Relief", amount: "10,000", impact: "Emergency kit for a family",          accent: "oklch(0.78 0.17 70)"  },
  { label: "Orphan Care",      amount: "3,000",  impact: "Monthly sponsorship for a child",     accent: "oklch(0.30 0.16 258)" },
];

const trust = [
  "100% donation policy",
  "Tax-deductible receipts",
  "Verified by independent auditors",
];

export function DonateCTA() {
  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div
            className="relative rounded-[2.5rem] overflow-hidden text-white shadow-elegant"
            style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 260) 0%, oklch(0.18 0.09 254) 50%, oklch(0.22 0.10 248) 100%)" }}
          >
            {/* ── Background decoration ── */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              {/* Orbs */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.30, 0.18] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-40 -right-40 size-[500px] rounded-full blur-[100px]"
                style={{ background: "oklch(0.78 0.17 70 / 0.22)" }}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.20, 0.10] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-40 -left-40 size-[450px] rounded-full blur-[90px]"
                style={{ background: "oklch(0.58 0.15 240 / 0.18)" }}
              />
              {/* Diagonal accent */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(115deg, transparent 55%, oklch(0.78 0.17 70 / 0.04) 55%, oklch(0.78 0.17 70 / 0.04) 58%, transparent 58%)" }}
              />
            </div>

            <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-0">

              {/* ── LEFT ── */}
              <div className="p-10 sm:p-14 flex flex-col justify-between">
                <div>
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/[0.08] px-4 py-1.5 mb-7">
                    <Sparkles className="size-3.5 text-gold" />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-bold">Make a difference</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.06] tracking-tight mb-5">
                    Your contribution
                    <br />
                    <span className="text-gradient-gold">saves lives.</span>
                  </h2>

                  <p className="text-white/65 leading-relaxed max-w-sm mb-8">
                    Every rupee goes directly to families in need — full transparency, instant impact, zero overhead.
                  </p>

                  {/* Trust list */}
                  <ul className="space-y-3 mb-10">
                    {trust.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="size-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="size-3 text-gold" />
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <Link to="/donate">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        size="lg"
                        className="relative h-14 px-10 bg-gradient-gold text-navy font-extrabold text-base overflow-hidden group"
                        style={{ boxShadow: "0 0 40px oklch(0.78 0.17 70 / 0.45)" }}
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                        <Heart className="size-5 mr-2.5 fill-navy relative z-10" />
                        <span className="relative z-10">Donate Now</span>
                      </Button>
                    </motion.div>
                  </Link>
                  <p className="mt-3 text-xs text-white/40 flex items-center gap-1.5">
                    <Shield className="size-3" /> Secure SSL · Instant receipt
                  </p>
                </div>
              </div>

              {/* ── RIGHT — category grid ── */}
              <div
                className="p-8 sm:p-10 border-l border-white/[0.07] grid grid-cols-2 gap-3 content-center"
              >
                <p className="col-span-2 text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold mb-1">
                  Choose where your donation goes
                </p>
                {categories.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to="/donate"
                      className="group relative flex flex-col rounded-2xl p-4 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden"
                      style={{ background: "oklch(1 0 0 / 0.04)", backdropFilter: "blur(12px)" }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                        style={{ background: `radial-gradient(ellipse at top left, ${c.accent}18, transparent 70%)` }}
                      />

                      {/* Accent dot + label */}
                      <div className="flex items-center gap-2 mb-3 relative z-10">
                        <span className="size-2 rounded-full shrink-0" style={{ background: c.accent }} />
                        <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">{c.label}</span>
                      </div>

                      {/* Amount */}
                      <div className="font-display font-extrabold text-2xl leading-none relative z-10" style={{ color: c.accent }}>
                        PKR {c.amount}
                      </div>

                      {/* Impact */}
                      <p className="text-white/50 text-[11px] mt-1.5 leading-snug relative z-10">{c.impact}</p>

                      {/* Arrow */}
                      <ArrowRight
                        className="absolute bottom-3.5 right-3.5 size-3.5 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-200"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
