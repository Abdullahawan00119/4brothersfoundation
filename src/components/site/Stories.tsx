import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const stories = [
  {
    quote: "When the floods took everything, 4 Brothers were the first to reach our village. They gave us food, clean water, and the courage to rebuild.",
    name: "Ayesha B.",
    role: "Community Beneficiary, Sindh",
  },
  {
    quote: "Volunteering with the ration drives changed my perspective. You don't just distribute food — you restore human dignity to families.",
    name: "Hamza A.",
    role: "Outreach Volunteer, Quetta",
  },
  {
    quote: "My daughter now receives specialized speech and physiotherapy at Hope & Ability School. Her progress in just months has given our entire family renewed hope.",
    name: "Tariq M.",
    role: "Parent, Brewery Road Center",
  },
  {
    quote: "The hospital meal initiative brings hot meals to patient attendants who often go days without food. It is a genuine lifeline of compassion.",
    name: "Nadia R.",
    role: "Attendant, BMC Hospital",
  },
];

const DESKTOP_CARD_W = 420;
const GAP = 20;
const AUTO_INTERVAL = 4000;

function getStoryCardWidth() {
  if (typeof window === "undefined") return DESKTOP_CARD_W;
  return window.innerWidth < 640 ? Math.round(window.innerWidth * 0.88) : DESKTOP_CARD_W;
}

export function Stories() {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(DESKTOP_CARD_W);
  const x = useMotionValue(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const update = () => setCardW(getStoryCardWidth());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = cardW + GAP;

  const goTo = (idx: number) => {
    const clamped = ((idx % stories.length) + stories.length) % stories.length;
    setActive(clamped);
    animate(x, -(clamped * step), { type: "spring", stiffness: 240, damping: 28 });
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % stories.length;
        animate(x, -(next * step), { type: "spring", stiffness: 240, damping: 28 });
        return next;
      });
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step]);

  const onDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) goTo(active + 1);
    else if (info.offset.x > 50) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-y border-white/10">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-bold mb-2">
            Voices of Hope
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Stories From The Communities We Serve
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
            Real testimonies of dignity restored, children educated, and families nourished across Pakistan.
          </p>
        </Reveal>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -(step * (stories.length - 1)), right: 0 }}
            dragElastic={0.06}
            onDragEnd={onDragEnd}
            style={{ x }}
            className="flex cursor-grab active:cursor-grabbing select-none"
          >
            {stories.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.div
                  key={s.name}
                  animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="relative shrink-0 rounded-2xl p-6 sm:p-7 border border-white/15 bg-white/[0.06] backdrop-blur-md flex flex-col justify-between"
                  style={{ width: cardW, marginRight: GAP }}
                >
                  <div>
                    <div className="size-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4 border border-gold/30">
                      <Quote className="size-4 text-gold fill-gold" />
                    </div>

                    <p className="text-white/90 leading-relaxed text-sm sm:text-base italic mb-6">
                      "{s.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="size-9 rounded-full bg-gold/20 text-gold flex items-center justify-center font-sans font-bold text-sm shrink-0">
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{s.name}</div>
                      <div className="text-xs text-white/60">{s.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-1 rounded-full bg-white/10 max-w-xs mx-auto overflow-hidden">
          <motion.div
            key={active}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
            className="h-full rounded-full bg-gold"
          />
        </div>
      </div>
    </section>
  );
}
