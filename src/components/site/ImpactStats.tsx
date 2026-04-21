import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Utensils, GraduationCap, Stethoscope, HandHeart } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Utensils, value: 50000, suffix: "+", label: "Meals Distributed", color: "text-gold" },
  { icon: GraduationCap, value: 10000, suffix: "+", label: "Students Educated", color: "text-ocean" },
  { icon: Stethoscope, value: 5000, suffix: "+", label: "Medical Camp Visits", color: "text-success" },
  { icon: HandHeart, value: 100, suffix: "+", label: "Active Volunteers", color: "text-sky" },
];

export function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-24 bg-muted/40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.79_0.15_75/0.08),transparent_70%)]" />
      <div className="container-x relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Impact</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-foreground">
            Real numbers. <span className="text-gradient-gold">Real lives changed.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border">
                <div className={`inline-flex p-3.5 rounded-2xl bg-accent ${s.color} mb-5 group-hover:scale-110 transition-transform`}>
                  <s.icon className="size-7" />
                </div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tabular-nums">
                  {inView ? <CountUp end={s.value} duration={2.4} separator="," /> : 0}
                  {s.suffix}
                </div>
                <p className="mt-2 text-muted-foreground font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
