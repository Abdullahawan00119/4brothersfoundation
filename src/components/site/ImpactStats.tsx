import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Users, Stethoscope, Utensils } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: GraduationCap, value: 27, suffix: "+", label: "Students Enrolled", color: "text-sky-600 bg-sky-500/10 border-sky-500/20" },
  { icon: Users, value: 8, suffix: "+", label: "Dedicated Teachers", color: "text-amber-600 bg-amber-500/10 border-amber-500/20" },
  { icon: Stethoscope, value: 3200, suffix: "+", label: "Medical Consultations", color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20" },
  { icon: Utensils, value: 50000, suffix: "+", label: "Meals Distributed", color: "text-blue-600 bg-blue-500/10 border-blue-500/20" },
];

export function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-14 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-b border-border/70">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold mb-2">
            Verified Field Impact
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            Measurable Change Across Communities
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Every donation directly powers active programs on the ground with verified beneficiaries.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-card rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-border text-center flex flex-col items-center group">
                <div className={`p-3 rounded-xl border mb-3.5 ${s.color}`}>
                  <s.icon className="size-5 sm:size-6" />
                </div>
                <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tabular-nums leading-none tracking-tight">
                  {inView ? <CountUp end={s.value} duration={2.2} separator="," /> : 0}
                  {s.suffix}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-semibold leading-tight">
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
