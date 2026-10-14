import { Reveal } from "./Reveal";
import { ShieldCheck, HeartHandshake, Eye, FileCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "100% To Ground Relief",
    desc: "Every rupee donated for food, special education, or clean water goes directly to the field without hidden deductions.",
    highlight: "100% Direct",
  },
  {
    icon: HeartHandshake,
    title: "Founder-Funded Operations",
    desc: "Our founders personally cover administrative, transportation, and overhead costs to ensure public funds reach beneficiaries.",
    highlight: "Zero Overhead",
  },
  {
    icon: Eye,
    title: "Doorstep Verification",
    desc: "Every family receiving ration bags or hospital meals is verified by field teams and local community elders across Balochistan.",
    highlight: "Verified Aid",
  },
  {
    icon: FileCheck,
    title: "Complete Openness",
    desc: "Transparent beneficiary records and field photographic updates ensure our donors see the direct outcome of their charity.",
    highlight: "Accountability",
  },
];

export function TransparencyModel() {
  return (
    <section className="py-14 sm:py-20 bg-[#071739] text-white relative overflow-hidden border-b border-white/10">
      <div className="container-x relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
            Trust & Integrity
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
            The <span className="text-gold">100% Donation Model</span>
          </h2>
          <p className="mt-2.5 text-white/75 text-xs sm:text-sm leading-relaxed">
            Transparent stewardship is sacred. 4 Brothers Welfare Trust ensures 100% of your relief contribution reaches verified beneficiaries.
          </p>
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-gold/40 transition-all duration-300 p-5 sm:p-6 flex flex-col h-full text-left group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center border border-gold/30 group-hover:scale-105 transition-transform">
                      <Icon className="size-5 text-gold" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-gold border border-white/10">
                      {p.highlight}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed flex-1 font-normal">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
