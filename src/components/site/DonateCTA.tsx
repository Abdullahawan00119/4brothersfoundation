import { Link } from "@tanstack/react-router";
import { Heart, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "Family Monthly Ration Bag", amount: "PKR 8,000", impact: "Feeds a vulnerable family for a full month" },
  { label: "Special Child Education & Therapy", amount: "PKR 10,000", impact: "Tuition & therapy at Hope & Ability School" },
  { label: "BMC Hospital Meal Drive", amount: "PKR 5,000", impact: "Hot wholesome meals for ~50 attendants" },
  { label: "Clean Water Hand Pump", amount: "PKR 35,000", impact: "Permanent fresh water in a rural village" },
];

const trust = [
  "100% donation policy — zero admin deduction",
  "Direct door-to-door beneficiary verification",
  "Operational costs funded independently by founders",
];

export function DonateCTA() {
  return (
    <section className="py-10 sm:py-16 bg-background">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden text-white shadow-sm bg-[#071739] border border-white/10">
            <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 p-5 sm:p-8 lg:p-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] text-white/90 font-semibold mb-3.5">
                    <ShieldCheck className="size-3 text-gold" />
                    Trusted Humanitarian Action
                  </div>

                  <h2 className="font-sans text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 tracking-tight">
                    Your contribution <br className="hidden sm:inline" />
                    <span className="text-gold font-bold">saves and restores</span> lives.
                  </h2>

                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-normal">
                    Whether funding a month of groceries for an impoverished family or sponsoring speech therapy for a special child, your donation creates immediate change.
                  </p>

                  <ul className="space-y-2 mb-6">
                    {trust.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className="size-3.5 text-gold shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link to="/donate" className="w-full sm:w-auto inline-block">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gold hover:bg-[#b8986c] text-navy font-bold text-xs sm:text-sm h-10 px-6 rounded-xl shadow-xs"
                    >
                      <Heart className="size-3.5 mr-1.5 fill-navy" /> Support Our Mission Today
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Sponsorship Tiers */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((c) => (
                  <div
                    key={c.label}
                    className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-white/70 mb-1">
                        {c.label}
                      </div>
                      <div className="font-sans text-lg sm:text-xl font-extrabold text-gold mb-1.5 tracking-tight">
                        {c.amount}
                      </div>
                      <p className="text-xs text-white/75 leading-relaxed font-normal">
                        {c.impact}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to="/donate"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:text-gold transition-colors"
                      >
                        Pledge this <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
