import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUpRight, Heart } from "lucide-react";
const distribution = "/images/f1.jpg";
const education    = "/images/education.webp";
const relief       = "/images/f11.jpg";
import { Reveal } from "./Reveal";

const programs = [
  {
    title: "Food Distribution",
    desc: "Hot meals and monthly ration packs reaching the most vulnerable families every single week.",
    img: distribution,
    count: "50K+",
    unit: "meals/year",
    color: "from-amber-500/80",
  },
  {
    title: "Education Support",
    desc: "Tuition fees, books, uniforms and after-school tutoring for children who can't afford it.",
    img: education,
    count: "10K+",
    unit: "students",
    color: "from-sky-500/80",
  },
  {
    title: "Rehabilitation",
    desc: "4 Brothers Foundation and NIJAT Drug Treatment Center — joining hands for a drug-free youth and a healthier society in Quetta city.",
    img: "/images/frehabliation.jpg",
    count: "500+",
    unit: "families",
    color: "from-emerald-600/80",
  },
  {
    title: "Emergency Relief",
    desc: "Rapid response with food, shelter and medical aid during floods and disasters.",
    img: relief,
    count: "24/7",
    unit: "nationwide",
    color: "from-red-500/80",
  },
];

const CARD_W = 380;
const GAP    = 20;
const STEP   = CARD_W + GAP;

export function Programs() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, programs.length - 1));
    setActive(clamped);
    animate(x, -(clamped * STEP), { type: "spring", stiffness: 260, damping: 30 });
  };

  /* drag */
  const dragStart = useRef(0);
  const onDragStart = () => { dragStart.current = x.get(); };
  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const delta = info.offset.x;
    if (delta < -60) goTo(active + 1);
    else if (delta > 60) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container-x">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-5xl font-bold max-w-xl leading-tight">
              Programs designed for{" "}
              <span className="text-gradient-gold">lasting change</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center gap-3">
            {/* Prev / Next */}
            <button
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous"
              className="size-11 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-gold hover:text-gold disabled:opacity-30 transition-all"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => goTo(active + 1)}
              disabled={active === programs.length - 1}
              aria-label="Next"
              className="size-11 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:border-gold hover:text-gold disabled:opacity-30 transition-all"
            >
              <ArrowRight className="size-4" />
            </button>
            <Link
              to="/programs"
              className="ml-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition-colors"
            >
              All programs <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* Progress dots */}
        <Reveal className="flex items-center gap-2 mb-8">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to ${programs[i].title}`}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === active ? 32 : 8, background: i === active ? "oklch(0.78 0.17 70)" : "oklch(0.78 0.17 70 / 0.25)" }}
            />
          ))}
        </Reveal>

        {/* Track */}
        <div className="relative" ref={trackRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -(STEP * (programs.length - 1)), right: 0 }}
            dragElastic={0.08}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={{ x }}
            className="flex gap-5 cursor-grab active:cursor-grabbing select-none"
          >
            {programs.map((p, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={p.title}
                  animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.65 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative shrink-0 rounded-3xl overflow-hidden shadow-soft"
                  style={{ width: CARD_W, height: 480 }}
                >
                  {/* Image */}
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-navy/50 to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-baseline gap-1 bg-black/30 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
                      <span className="font-display font-extrabold text-gold text-base leading-none">{p.count}</span>
                      <span className="text-white/60 text-[10px] uppercase tracking-wide">{p.unit}</span>
                    </span>
                  </div>

                  {/* Card number */}
                  <div className="absolute top-5 right-5 font-display font-bold text-white/20 text-4xl leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-2">{p.desc}</p>

                    {/* CTA */}
                    <Link
                      to="/donate"
                      className="inline-flex items-center gap-2 bg-gradient-gold text-navy text-sm font-bold px-5 py-2.5 rounded-full shadow-glow hover:opacity-90 transition-opacity"
                    >
                      <Heart className="size-3.5 fill-navy" /> Donate Now
                    </Link>
                  </div>

                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-line"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold"
                    />
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Active card detail strip */}
        <Reveal className="mt-10 flex items-center gap-6 p-5 rounded-2xl border border-border bg-muted/40">
          <div className="size-12 rounded-xl overflow-hidden shrink-0">
            <img src={programs[active].img} alt="" className="size-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-bold text-foreground truncate">{programs[active].title}</p>
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{programs[active].desc}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-display font-extrabold text-gold text-xl leading-none">{programs[active].count}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">{programs[active].unit}</div>
          </div>
          <Link to="/programs" className="shrink-0">
            <span className="size-10 rounded-full bg-gradient-gold text-navy flex items-center justify-center shadow-glow">
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
