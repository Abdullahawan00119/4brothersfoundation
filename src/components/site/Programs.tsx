import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, animate } from "framer-motion";
import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const programs = [
  {
    title: "Gawahi 4B Hope & Ability School",
    subtitle: "Special Needs Education & Therapy",
    desc: "Dedicated education center for special children established in Feb 2026. 8 qualified teachers serving 27 students with Speech and Physiotherapy on Brewery Road.",
    img: "/images/school-program.jpeg",
    count: "27",
    unit: "special students",
    color: "from-sky-500/80",
    badge: "Since Feb 2026",
  },
  {
    title: "Community Ration Distribution",
    subtitle: "Monthly Family Food Security",
    desc: "Providing 25 to 30 monthly grocery packages (flour, rice, daal, oil, milk & sweets) to vulnerable families at an estimated cost of PKR 8,000 per bag.",
    img: "/images/ration-program.jpeg",
    count: "30",
    unit: "bags / month",
    color: "from-amber-500/80",
    badge: "PKR 8,000 / bag",
  },
  {
    title: "Community Meal Distribution",
    subtitle: "Weekly Feeding & BMC Hospital",
    desc: "Combatting hunger by serving freshly prepared hot meals to ~200 underprivileged individuals weekly, including regular distribution at BMC Hospital.",
    img: "/images/meal-program.jpeg",
    count: "200+",
    unit: "meals / week",
    color: "from-rose-500/80",
    badge: "Weekly Feeding",
  },
  {
    title: "Rehabilitation & Youth Recovery",
    subtitle: "Partnering with NIJAT Center",
    desc: "Joining hands with NIJAT Drug Treatment Center for a drug-free youth and a healthier society across Quetta city through medical care and counseling.",
    img: "/images/frehabliation.jpg",
    count: "500+",
    unit: "rehabilitated",
    color: "from-emerald-600/80",
    badge: "Drug-Free Youth",
  },
  {
    title: "Clean Water Projects",
    subtitle: "Wells & RO Filtration Plants",
    desc: "Bringing clean drinking water to remote, drought-affected areas of Balochistan with solar pumps and filtration stations.",
    img: "/images/water.jpg",
    count: "120+",
    unit: "clean sites",
    color: "from-blue-600/80",
    badge: "Safe Water",
  },
];

const DESKTOP_CARD_W = 390;
const GAP = 16;

function getCardWidth() {
  if (typeof window === "undefined") return DESKTOP_CARD_W;
  return window.innerWidth < 640 ? Math.min(320, Math.round(window.innerWidth * 0.84)) : DESKTOP_CARD_W;
}

export function Programs() {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(DESKTOP_CARD_W);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const update = () => setCardW(getCardWidth());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = cardW + GAP;

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, programs.length - 1));
    setActive(clamped);
    animate(x, -(clamped * step), { type: "spring", stiffness: 260, damping: 30 });
  };

  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const delta = info.offset.x;
    if (delta < -40) goTo(active + 1);
    else if (delta > 40) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section className="py-14 sm:py-24 bg-background overflow-hidden border-b border-border/50">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold max-w-xl leading-tight text-foreground">
              Our Core <span className="text-gold">Programs</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="flex items-center">
            <Link
              to="/programs"
              className="inline-flex items-center px-4 py-2 rounded-xl border border-border bg-card hover:border-gold hover:text-gold text-xs sm:text-sm font-semibold text-foreground transition-all shadow-xs"
            >
              View all programs
            </Link>
          </Reveal>
        </div>

        {/* Carousel viewport */}
        <div className="overflow-visible select-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{
              left: -((programs.length - 1) * step),
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={onDragEnd}
            style={{ x }}
            className="flex gap-4 sm:gap-5 cursor-grab active:cursor-grabbing py-3"
          >
            {programs.map((p, i) => (
              <motion.article
                key={p.title}
                onClick={() => goTo(i)}
                style={{ width: cardW, minWidth: cardW }}
                animate={{
                  scale: active === i ? 1 : 0.98,
                  opacity: active === i ? 1 : 0.88,
                }}
                transition={{ duration: 0.25 }}
                className={`relative group rounded-3xl overflow-hidden bg-card border border-border/70 shadow-xs hover:shadow-sm flex flex-col transition-all duration-300 ${
                  active === i ? "ring-2 ring-gold/40 border-gold/40" : ""
                }`}
              >
                {/* Image top */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    draggable={false}
                    className="size-full object-cover group-hover:scale-103 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold text-navy shadow-xs">
                      {p.badge}
                    </span>
                  </div>

                  {/* Impact metric float */}
                  <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/10 text-right">
                    <div className="font-display font-black text-xl text-gold leading-none">
                      {p.count}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/80 font-bold mt-0.5">
                      {p.unit}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {p.subtitle}
                  </p>
                  <h3 className="font-display font-extrabold text-xl text-foreground leading-snug mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 line-clamp-3">
                    {p.desc}
                  </p>

                  <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                    <Link
                      to="/programs"
                      className="inline-flex items-center text-xs font-bold text-foreground group-hover:text-gold transition-colors"
                    >
                      Explore Program
                    </Link>
                    <Link
                      to="/donate"
                      className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-lg bg-gold/15 text-gold hover:bg-gold hover:text-navy transition-all"
                    >
                      <Heart className="size-3 fill-gold group-hover:fill-navy" /> Donate
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-gold" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
