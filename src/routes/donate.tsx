import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Heart, Shield, CheckCircle2, CreditCard, Smartphone, Building2 } from "lucide-react";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — 4 Brothers Welfare Trust" },
      { name: "description", content: "Donate securely via JazzCash, EasyPaisa, bank transfer or card. 100% of funds reach beneficiaries." },
    ],
  }),
});

const presets = [500, 1000, 2500, 5000, 10000, 25000];
const causes = ["Where most needed", "Food & Ration", "Education", "Medical", "Clean Water", "Emergency Relief", "Orphan Care"];

const impacts = [
  { amt: 500, text: "feeds a family of 6 for one day" },
  { amt: 2500, text: "covers a child's school books for a term" },
  { amt: 10000, text: "funds a free medical camp visit for 50 patients" },
];

function DonatePage() {
  const [amount, setAmount] = useState<number | "">(2500);
  const [cause, setCause] = useState(causes[0]);
  const [recurring, setRecurring] = useState(false);

  const matchedImpact = typeof amount === "number"
    ? [...impacts].reverse().find((i) => amount >= i.amt)
    : null;

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Turn your generosity into <span className="text-gradient-gold">someone's tomorrow.</span></>}
        subtitle="100% of your donation reaches the beneficiaries — operations are funded separately by our founders."
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Make a donation</h2>
              <p className="text-muted-foreground text-sm mt-1">Secure & encrypted • Receipt emailed instantly</p>

              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-7 block">Choose Amount (PKR)</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setAmount(p)}
                    className={`h-12 rounded-xl font-bold text-sm transition-all border ${
                      amount === p
                        ? "bg-gradient-gold text-navy border-transparent shadow-glow"
                        : "bg-background border-border hover:border-gold"
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
                className="mt-3 w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-7 block">Donate To</label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="mt-3 w-full h-12 px-4 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {causes.map((c) => <option key={c}>{c}</option>)}
              </select>

              <label className="mt-6 flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={recurring}
                  onChange={(e) => setRecurring(e.target.checked)}
                  className="size-5 accent-gold"
                />
                <span className="text-sm font-medium">Make this a monthly donation</span>
              </label>

              {matchedImpact && (
                <div className="mt-6 p-4 rounded-xl bg-accent text-accent-foreground flex gap-3">
                  <Heart className="size-5 text-gold shrink-0 mt-0.5 fill-gold" />
                  <p className="text-sm">
                    <strong>PKR {matchedImpact.amt.toLocaleString()}</strong> {matchedImpact.text}.
                  </p>
                </div>
              )}

              <Button size="lg" className="w-full mt-7 h-14 bg-gradient-gold text-navy font-bold text-base animate-pulse-glow">
                <Heart className="size-5 mr-2 fill-navy" /> Proceed to Payment
              </Button>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { i: CreditCard, l: "Card" },
                  { i: Smartphone, l: "JazzCash / EasyPaisa" },
                  { i: Building2, l: "Bank Transfer" },
                ].map(({ i: Icon, l }) => (
                  <div key={l} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border text-center">
                    <Icon className="size-5 text-primary" />
                    <span className="text-[11px] font-medium text-muted-foreground">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl bg-gradient-hero text-white p-8 shadow-elegant">
              <Shield className="size-8 text-gold" />
              <h3 className="font-display text-xl font-bold mt-4">Why donate to us?</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                {[
                  "100% donation policy — operations covered separately",
                  "Independently audited every year",
                  "Tax-deductible receipts in 24 hours",
                  "Real impact stories shared monthly",
                ].map((t) => (
                  <li key={t} className="flex gap-2"><CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /> {t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-card border border-border p-8">
              <h3 className="font-display text-lg font-bold">Bank Transfer Details</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Account Title</dt><dd className="font-medium">4 Brothers Welfare Trust</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Bank</dt><dd className="font-medium">Meezan Bank</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Account #</dt><dd className="font-medium">0000-1234567890</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">IBAN</dt><dd className="font-medium">PK00 MEZN 0000 0000 1234 5678</dd></div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
