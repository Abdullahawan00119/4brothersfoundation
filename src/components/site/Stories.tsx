import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const stories = [
  {
    quote: "When the floods took everything, 4 Brothers were the first to reach our village. They gave us food, clean water and the courage to rebuild.",
    name: "Ayesha B.",
    role: "Beneficiary, Sindh",
  },
  {
    quote: "Volunteering here changed my life. You don't just give — you receive ten times more in love and purpose.",
    name: "Hamza A.",
    role: "Volunteer, Lahore",
  },
  {
    quote: "Our children now have books, uniforms and a future. Before 4 Brothers, school was a dream we couldn't afford.",
    name: "Tariq M.",
    role: "Parent, Quetta",
  },
  {
    quote: "The free medical camp saved my father's life. We had no money for treatment — they asked for nothing in return.",
    name: "Nadia R.",
    role: "Beneficiary, Balochistan",
  },
];

const CARD_W = 420;
const GAP    = 20;
const STEP   = CARD_W + GAP;
const AUTO_INTERVAL = 3500;

export function Stories() {
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    const clamped = ((idx % stories.length) + stories.length) % stories.length;
    setActive(clamped);
    animate(x, -(clamped * STEP), { type: "spring", stiffness: 240, damping: 28 });
  };

  /* auto-advance */
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((a) => {
      const next = (a + 1) % stories.length;
      animate(x, -(next * STEP), { type: "spring", stiffness: 240, damping: 28 });
      return next;
    }), AUTO_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  /* drag */
  const dragStart = useRef(0);
  const onDragStart = () => { dragStart.current = x.get(); resetTimer(); };
  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) goTo(active + 1);
    else if (info.offset.x > 60) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 size-72 rounded-full blur-3xl pointer-events-none" style={{ background: "oklch(0.78 0.17 70 / 0.10)" }} />
      <div className="absolute -bottom-20 -right-20 size-72 rounded-full blur-3xl pointer-events-none" style={{ background: "oklch(0.58 0.15 240 / 0.12)" }} />

      <div className="container-x relative">

        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Voices of Hope</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Stories from the people{" "}
            <span className="text-gradient-gold">we serve</span>
          </h2>
        </Reveal>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -(STEP * (stories.length - 1)), right: 0 }}
            dragElastic={0.06}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={{ x }}
            className="flex gap-5 cursor-grab active:cursor-grabbing select-none"
          >
            {stories.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.name}
                  animate={{ scale: isActive ? 1 : 0.93, opacity: isActive ? 1 : 0.5 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative shrink-0 rounded-3xl p-8 border border-white/10 bg-white/[0.05] backdrop-blur-sm"
                  style={{ width: CARD_W }}
                >
                  {/* Gold quote mark */}
                  <div className="size-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow">
                    <Quote className="size-5 text-navy fill-navy" />
                  </div>

                  {/* Quote */}
                  <p className="text-white/85 leading-relaxed text-[1.05rem] italic mb-8">
                    "{s.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                    {/* Avatar initials */}
                    <div
                      className="size-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0"
                      style={{ background: "oklch(0.78 0.17 70 / 0.25)", color: "oklch(0.78 0.17 70)" }}
                    >
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">{s.name}</div>
                      <div className="text-sm text-white/50">{s.role}</div>
                    </div>
                  </div>

                  {/* Active bottom line */}
                  {isActive && (
                    <motion.div
                      layoutId="story-line"
                      className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-gold"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Thin progress bar — auto advances, no dots/arrows */}
        <div className="mt-8 h-0.5 rounded-full bg-white/10 max-w-xs mx-auto overflow-hidden">
          <motion.div
            key={active}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
            className="h-full rounded-full bg-gradient-gold"
          />
        </div>
      </div>
    </section>
  );
}
