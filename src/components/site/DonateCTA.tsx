import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Shield, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

const presets = [500, 1000, 5000, 10000];
const causes = ["Where most needed", "Food & Ration", "Education", "Medical", "Emergency Relief"];

export function DonateCTA() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [cause, setCause] = useState(causes[0]);

  return (
    <section className="py-24 bg-background">
      <div className="container-x">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-hero text-white p-8 sm:p-14 shadow-elegant">
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-ocean/30 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Make a difference</p>
                <h2 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
                  Your contribution <span className="text-gradient-gold">saves lives.</span>
                </h2>
                <p className="mt-5 text-white/80 max-w-md">
                  Every rupee goes directly to families in need — full transparency, instant impact.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {["100% donation policy", "Tax-deductible receipts", "Verified by independent auditors"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-gold" /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8">
                <label className="text-xs uppercase tracking-widest text-white/70 font-semibold">Choose Amount (PKR)</label>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => setAmount(p)}
                      className={`h-12 rounded-xl font-bold text-sm transition-all ${
                        amount === p
                          ? "bg-gold text-navy shadow-glow"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {p.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Custom amount"
                  className="mt-3 w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />

                <label className="text-xs uppercase tracking-widest text-white/70 font-semibold mt-5 block">Donate To</label>
                <select
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="mt-3 w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  {causes.map((c) => (
                    <option key={c} value={c} className="text-foreground">{c}</option>
                  ))}
                </select>

                <Link to="/donate" className="block mt-6">
                  <Button size="lg" className="w-full h-14 bg-gradient-gold text-navy font-bold text-base hover:opacity-95 animate-pulse-glow">
                    <Heart className="size-5 mr-2 fill-navy" /> Donate Now
                  </Button>
                </Link>
                <p className="mt-3 text-xs text-white/60 flex items-center justify-center gap-1.5">
                  <Shield className="size-3.5" /> Secure SSL payment
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
