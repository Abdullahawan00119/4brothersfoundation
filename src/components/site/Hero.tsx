import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
const heroImg = "/images/fbaner.png";
import { Button } from "@/components/ui/button";

const headline = ["Building", "hope,", "changing", "lives."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy"
    >
      {/* ── Parallax background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.1]">
        <img src={heroImg} alt="" aria-hidden className="size-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 55%, oklch(0.28 0.13 258 / 0.55), transparent)" }} />
      </motion.div>

      {/* ── Ambient glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 size-[500px] rounded-full blur-[110px]"
          style={{ background: "oklch(0.78 0.17 70 / 0.20)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-16 -right-16 size-[450px] rounded-full blur-[100px]"
          style={{ background: "oklch(0.58 0.15 240 / 0.15)" }}
        />
      </div>

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width:  i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
              height: i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
              left: `${(i * 43 + 7) % 94}%`,
              top:  `${(i * 31 + 5) % 88}%`,
              background: i % 3 === 0 ? "oklch(0.78 0.17 70)" : i % 3 === 1 ? "oklch(0.78 0.13 225)" : "white",
              opacity: 0,
            }}
            animate={{ y: [-18, 20, -18], opacity: [0, i % 4 === 0 ? 0.9 : 0.5, 0] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ══ CONTENT ══ */}
      <motion.div style={{ y: textY }} className="container-x relative z-10 pt-36 pb-16">
        <div className="max-w-2xl text-white">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/[0.08] backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-gold font-bold">
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="size-1.5 rounded-full bg-gold"
              />
              Together as Humans
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6">
            {headline.map((word, wi) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 44, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.78, delay: 0.08 + wi * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block mr-[0.22em] ${wi === 1 || wi === 3 ? "text-gradient-gold" : "text-white"}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/60 leading-[1.75] mb-10"
          >
            From the snow-belt of Ziarat to the deserts of Kharan — 4 Brothers Welfare Trust
            stands beside the people of Quetta and Balochistan, feeding families, educating
            children, and delivering healthcare where it's needed most.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <Link to="/donate">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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

            <Link to="/get-involved">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 border-white/25 bg-white/[0.06] text-white hover:bg-white/[0.13] font-semibold text-base backdrop-blur-md"
                >
                  <Users className="size-5 mr-2.5" />
                  Volunteer
                  <ArrowRight className="size-4 ml-2 opacity-50" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40"
          >
            {["100% Donation Policy", "Independently Audited", "Tax Deductible"].map((t, i) => (
              <span key={t} className="flex items-center gap-1.5">
                {i > 0 && <span className="size-1 rounded-full bg-white/20 hidden sm:block" />}
                <CheckCircle className="size-3 text-gold/55" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ══ SCROLL INDICATOR ══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-medium">Scroll</span>
        <div className="relative w-px h-12 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.08)" }}>
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 rounded-full"
            style={{ background: "linear-gradient(to bottom, transparent, oklch(0.78 0.17 70), transparent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
