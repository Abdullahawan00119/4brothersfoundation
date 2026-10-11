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
    <section className="py-16 sm:py-24 bg-background">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden text-white shadow-md bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] border border-white/10">
            {/* Subtle texture */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 p-7 sm:p-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] text-white/90 font-semibold mb-5">
                    <ShieldCheck className="size-3.5 text-gold" />
                    Trusted Humanitarian Action
                  </div>

                  <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                    Your contribution <br />
                    <span className="text-gold font-bold">saves and restores</span> lives.
                  </h2>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Whether funding a month of groceries for an impoverished family or sponsoring speech therapy for a special child, your donation creates immediate change.
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {trust.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className="size-4 text-gold shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link to="/donate">
                    <Button
                      size="lg"
                      className="bg-gradient-gold text-navy font-bold text-sm sm:text-base h-12 px-8 shadow-md hover:opacity-95"
                    >
                      <Heart className="size-4 mr-2 fill-navy" /> Support Our Mission Today
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Sponsorship Tiers */}
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                {categories.map((c) => (
                  <div
                    key={c.label}
                    className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-gold/50 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-white/75 mb-1">
                        {c.label}
                      </div>
                      <div className="font-sans text-xl sm:text-2xl font-extrabold text-gold mb-2 tracking-tight">
                        {c.amount}
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-normal">
                        {c.impact}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to="/donate"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-gold transition-colors"
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
