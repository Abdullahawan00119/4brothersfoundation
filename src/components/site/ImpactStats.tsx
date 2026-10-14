import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, Stethoscope, Utensils } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: GraduationCap, value: 27, suffix: "+", label: "Special Students Enrolled" },
  { icon: Users, value: 8, suffix: "+", label: "Dedicated Teachers" },
  { icon: Stethoscope, value: 3200, suffix: "+", label: "Medical Consultations" },
  { icon: Utensils, value: 50000, suffix: "+", label: "Hot Meals Served" },
];

export function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-14 sm:py-20 bg-slate-50/80 dark:bg-slate-900/40 border-b border-border/60">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
          <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-1.5 sm:mb-2">
            Verified Field Impact
          </p>
          <h2 className="font-sans text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Measurable Change Across Communities
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every donation directly powers active programs on the ground with verified beneficiaries.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-card rounded-xl sm:rounded-2xl p-3.5 sm:p-7 shadow-xs hover:shadow-sm transition-all duration-300 border border-border/70 text-center flex flex-col items-center group h-full justify-center">
                <div className="p-2 sm:p-3 rounded-xl border border-gold/30 bg-gold/10 text-gold mb-2.5 sm:mb-3.5 group-hover:scale-105 transition-transform">
                  <s.icon className="size-4 sm:size-6" />
                </div>
                <div className="font-sans text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tabular-nums leading-none tracking-tight">
                  {inView ? <CountUp end={s.value} duration={2.2} separator="," /> : 0}
                  <span className="text-gold ml-0.5">{s.suffix}</span>
                </div>
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-muted-foreground font-semibold leading-tight">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
