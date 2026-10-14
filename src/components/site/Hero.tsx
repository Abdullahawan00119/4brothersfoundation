import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Heart,
  ArrowRight,
  MapPin,
  Sparkles,
  ShieldAlert,
  Utensils,
  GraduationCap,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_EVENT_SLIDES, type HeroEventSlide } from "@/data/heroEvents";

const AUTO_SLIDE_DURATION = 6000; // 6s per slide

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = HERO_EVENT_SLIDES.length;
  const currentSlide: HeroEventSlide = HERO_EVENT_SLIDES[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Clean Autoplay timer (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Category Icon helper
  const getCategoryIcon = (category: HeroEventSlide["tagCategory"]) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="size-3.5 text-yellow-400" />;
      case "Food Security":
        return <Utensils className="size-3.5 text-amber-400" />;
      case "Hospital Meals":
        return <Heart className="size-3.5 text-rose-400" />;
      case "Rehabilitation":
        return <ShieldAlert className="size-3.5 text-emerald-400" />;
      case "Clean Water":
        return <Droplets className="size-3.5 text-sky-400" />;
      default:
        return <Sparkles className="size-3.5 text-gold" />;
    }
  };

  return (
    <section
      aria-label="Humanitarian Work Showcase"
      className="relative z-10 min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] bg-[#051126] text-white pt-20 xs:pt-24 sm:pt-32 pb-8 sm:pb-14 flex flex-col justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Background Photography with Optimized Uncropped Focal Point ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 size-full"
          >
            <img
              src={currentSlide.image}
              alt={`${currentSlide.title} ${currentSlide.highlightText}`}
              className={`size-full object-cover ${currentSlide.focalPoint} transform-gpu`}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Overlays: Pristine Contrast Without Artificial Neon Colors ── */}
        {/* Top Dark Fade: Blends cleanly under the floating navbar */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-[#051126] via-[#051126]/80 to-transparent z-10" />

        {/* Left Side Contrast Vignette for Clean Typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051126]/90 via-[#051126]/75 sm:via-[#051126]/60 to-transparent z-10" />

        {/* Bottom Dark Fade */}
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-24 bg-gradient-to-t from-[#051126] via-[#051126]/40 to-transparent z-10" />
      </div>

      {/* ── Minimalist Content Container ── */}
      <div className="container-x relative z-20">
        <div className="max-w-2xl text-left">
          {/* Top Micro Tag */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10.5px] sm:text-xs font-semibold text-gold shadow-sm mb-2 sm:mb-3">
            <span className="size-1.5 sm:size-2 rounded-full bg-gold" />
            <span>Together as Humans • Core Programs</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Category + Location Badges */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-xs font-medium text-white">
                  {getCategoryIcon(currentSlide.tagCategory)}
                  {currentSlide.tag}
                </span>

                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-xs text-white/80">
                  <MapPin className="size-2.5 sm:size-3 text-red-400" />
                  {currentSlide.location}
                </span>
              </div>

              {/* Punchy Headline - Tuned for mobile screens */}
              <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.18] tracking-tight mb-2 sm:mb-2.5 text-white">
                {currentSlide.title}{" "}
                <span className="text-gold block xs:inline">{currentSlide.highlightText}</span>
              </h1>

              {/* 1-Sentence Concise Subtitle */}
              <p className="text-xs sm:text-sm md:text-base text-white/85 leading-relaxed max-w-xl mb-3 sm:mb-4 font-normal">
                {currentSlide.subtitle}
              </p>

              {/* Minimal Key Stat Pill */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-white/15 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs md:text-sm font-semibold text-gold mb-3.5 sm:mb-5">
                <span>{currentSlide.keyStat}</span>
              </div>

              {/* Action Buttons: Responsive row on mobile */}
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                <Link to={currentSlide.primaryAction.href} className="flex-1 xs:flex-none">
                  <Button
                    size="lg"
                    className="w-full xs:w-auto bg-gold hover:bg-[#b8986c] text-navy font-bold text-xs sm:text-sm h-9 sm:h-10.5 px-3.5 sm:px-6 shadow-sm rounded-xl transition-all"
                  >
                    <Heart className="size-3.5 mr-1 fill-navy" /> {currentSlide.primaryAction.label}
                  </Button>
                </Link>

                <Link to={currentSlide.secondaryAction.href} className="flex-1 xs:flex-none">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full xs:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold text-xs sm:text-sm h-9 sm:h-10.5 px-3 sm:px-5 backdrop-blur-md rounded-xl"
                  >
                    {currentSlide.secondaryAction.label} <ArrowRight className="size-3 sm:size-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Slide Indicator Dots ── */}
          <div className="pt-4 sm:pt-6 flex items-center gap-2">
            {HERO_EVENT_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-7 bg-gold"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
