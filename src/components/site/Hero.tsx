import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImg = "/images/fbaner.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071739] text-white pt-28 xs:pt-32 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 flex items-center justify-center">
      {/* ── Background Photography with Deep Foundation Overlay ── */}
      <div className="absolute inset-0 scale-105 pointer-events-none">
        <img
          src={heroImg}
          alt="4 Brothers Foundation community work"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071739]/95 via-[#0C2D6E]/85 to-[#0C2D6E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071739] via-transparent to-[#071739]/60" />
      </div>

      {/* ── Subtle Geometric Watermark ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ── */}
      <div className="container-x max-w-5xl relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 sm:mb-5"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90 font-semibold shadow-sm">
              <span className="size-1.5 sm:size-2 rounded-full bg-gold" />
              Together as Humans • Est. 2026
            </div>
          </motion.div>

          {/* Headline in Clean Professional Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight mb-3 sm:mb-5"
          >
            Building hope, <br className="hidden xs:inline" />
            <span className="text-gold">changing lives</span> across Pakistan.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal"
          >
            From daily hot meals and monthly ration packs to specialized education for children with special needs and emergency medical relief across Quetta and Balochistan.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-4"
          >
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-gradient-gold text-navy font-bold text-xs sm:text-base h-10 sm:h-12 px-5 sm:px-8 shadow-md hover:opacity-95"
              >
                <Heart className="size-3.5 sm:size-4 mr-1.5 sm:mr-2 fill-navy" /> Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 font-semibold text-xs sm:text-base h-10 sm:h-12 px-4 sm:px-6 backdrop-blur-md"
              >
                Our Programs <ArrowRight className="size-3.5 sm:size-4 ml-1.5 sm:ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
