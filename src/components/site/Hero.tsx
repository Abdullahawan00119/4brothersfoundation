import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Heart, Users } from "lucide-react";
import heroImg from "@/assets/quetta-distribution.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Volunteers distributing food to families at sunset"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1.5 rounded-full bg-gold/60"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [-10, 18, -10], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="container-x relative pt-24 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold"
          >
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            Together as Humans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]"
          >
            Building hope.{" "}
            <span className="text-gradient-gold">Changing lives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed"
          >
            From the snow-belt of Ziarat to the deserts of Kharan, 4 Brothers
            Welfare Trust stands beside the people of Quetta and Balochistan —
            feeding families, educating children, and bringing healthcare to
            communities that need it most.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } } }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              <Link key="d" to="/donate">
                <Button size="lg" className="bg-gradient-gold text-navy font-bold h-12 px-7 animate-pulse-glow">
                  <Heart className="size-5 mr-2 fill-navy" /> Donate Now
                </Button>
              </Link>,
              <Link key="v" to="/get-involved">
                <Button size="lg" variant="outline" className="h-12 px-7 border-white/40 bg-white/5 text-white hover:bg-white hover:text-navy font-semibold backdrop-blur">
                  <Users className="size-5 mr-2" /> Become a Volunteer
                </Button>
              </Link>,
            ].map((el, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                {el}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl border-t border-white/15 pt-6"
          >
            {[
              ["30K+", "Families helped"],
              ["100+", "Active volunteers"],
              ["12", "Years of service"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold">{n}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.6, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
      >
        Scroll <ChevronDown className="size-5" />
      </motion.div>
    </section>
  );
}
