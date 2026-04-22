import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Shield, CheckCircle2, Copy, Check, Building2, Smartphone, Heart } from "lucide-react";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — 4 Brothers Welfare Trust" },
      { name: "description", content: "Support 4 Brothers Welfare Trust via direct bank transfer. 100% of funds reach beneficiaries." },
      { property: "og:title", content: "Donate — 4 Brothers Welfare Trust" },
      { property: "og:description", content: "Support 4 Brothers Welfare Trust via direct bank transfer." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const banks = [
  {
    name: "Meezan Bank",
    fullName: "Meezan Bank Limited",
    account: {
      title: "4 Brothers Welfare Trust",
      number: "0329-0987654321",
      iban: "PK36 MEZN 0003 2909 8765 4321",
      currency: "PKR",
    },
  },
  {
    name: "HBL",
    fullName: "Habib Bank Limited",
    account: {
      title: "4 Brothers Welfare Trust",
      number: "1234-9876543210",
      iban: "PK22 HABB 0001 2349 8765 4321",
      currency: "PKR",
    },
  },
  {
    name: "UBL",
    fullName: "United Bank Limited",
    account: {
      title: "4 Brothers Welfare Trust",
      number: "2345-0987654321",
      iban: "PK60 UNIL 0001 2340 9876 5432",
      currency: "PKR",
    },
  },
  {
    name: "Bank Alfalah",
    fullName: "Bank Alfalah Limited",
    account: {
      title: "4 Brothers Welfare Trust",
      number: "3456-1234567890",
      iban: "PK07 ALFH 0211 0003 4561 2345",
      currency: "PKR",
    },
  },
];

const easyMethods = [
  { icon: Smartphone, label: "JazzCash",  number: "0300-0000000", name: "4 Brothers Welfare Trust" },
  { icon: Smartphone, label: "EasyPaisa", number: "0333-0000000", name: "4 Brothers Welfare Trust" },
];

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="ml-2 p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-primary"
      aria-label="Copy"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="block"
        >
          {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function AccountRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold text-foreground">{value}</span>
        <CopyBtn text={value} />
      </div>
    </div>
  );
}

function DonatePage() {
  const [activeBank, setActiveBank] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Support us via <span className="text-gradient-gold">bank transfer.</span></>}
        subtitle="100% of your donation reaches the beneficiaries — operations are funded separately by our founders."
      />

      <section className="py-20 bg-background">
        <div className="container-x">

          {/* Top trust bar */}
          <Reveal className="flex flex-wrap items-center justify-center gap-6 mb-16 p-5 rounded-2xl bg-muted/50 border border-border">
            {[
              "100% Donation Policy",
              "Independently Audited",
              "Tax-Deductible Receipts",
              "Instant Confirmation",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <CheckCircle2 className="size-4 text-gold shrink-0" /> {t}
              </span>
            ))}
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_340px] gap-10">

            {/* ── LEFT: Bank details ── */}
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-bold mb-2">Direct Bank Transfer</h2>
                <p className="text-muted-foreground mb-8">
                  Select your bank and transfer directly. Please use your name as the payment reference.
                </p>
              </Reveal>

              {/* Bank tabs */}
              <Reveal className="flex flex-wrap gap-2 mb-8">
                {banks.map((b, i) => (
                  <button
                    key={b.name}
                    onClick={() => setActiveBank(i)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                      activeBank === i
                        ? "bg-gradient-gold text-navy border-transparent shadow-glow"
                        : "bg-background border-border text-foreground/70 hover:border-gold"
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </Reveal>

              {/* Active bank card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBank}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                    {/* Bank header */}
                    <div className="px-7 py-5 border-b border-border flex items-center gap-4 bg-muted/30">
                      <div className="size-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow shrink-0">
                        <Building2 className="size-6 text-navy" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-lg">{banks[activeBank].name}</div>
                        <div className="text-sm text-muted-foreground">{banks[activeBank].fullName}</div>
                      </div>
                    </div>

                    {/* Account */}
                    <div className="px-7 py-6">
                      <AccountRow label="Currency"      value={banks[activeBank].account.currency} />
                      <AccountRow label="Account Title" value={banks[activeBank].account.title}    />
                      <AccountRow label="Account No."   value={banks[activeBank].account.number}   />
                      <AccountRow label="IBAN"          value={banks[activeBank].account.iban}     />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile wallets */}
              <Reveal className="mt-8">
                <h3 className="font-display font-bold text-lg mb-4">Mobile Wallets</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {easyMethods.map(({ icon: Icon, label, number, name }) => (
                    <div key={label} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                      <div className="size-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{name}</div>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-sm font-bold text-foreground">{number}</span>
                          <CopyBtn text={number} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="space-y-5">

              {/* Why donate */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-gradient-hero text-white p-7 shadow-elegant">
                  <Shield className="size-8 text-gold mb-4" />
                  <h3 className="font-display text-lg font-bold mb-4">Why donate to us?</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {[
                      "100% donation policy",
                      "Independently audited annually",
                      "Tax-deductible receipts in 24 hrs",
                      "Real impact stories every month",
                      "Operations funded by founders",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Impact guide */}
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-border bg-card p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Heart className="size-5 text-gold fill-gold" />
                    <h3 className="font-display font-bold">Your impact</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { amt: "PKR 500",    text: "Feeds a family for a day" },
                      { amt: "PKR 1,000",  text: "Covers a medical camp visit" },
                      { amt: "PKR 2,500",  text: "Books & uniform for one child" },
                      { amt: "PKR 5,000",  text: "Water filtration for 10 families" },
                      { amt: "PKR 10,000", text: "Emergency kit for a family" },
                    ].map(({ amt, text }) => (
                      <li key={amt} className="flex items-start gap-3">
                        <span className="font-display font-extrabold text-gold text-sm shrink-0 w-20">{amt}</span>
                        <span className="text-sm text-muted-foreground">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Transfer instructions */}
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border bg-muted/40 p-6">
                  <h3 className="font-display font-bold text-sm mb-3">Transfer instructions</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Copy the account number or IBAN above</li>
                    <li>Use your full name as the payment reference</li>
                    <li>Send us a screenshot at <span className="text-primary font-medium">donate@4brotherswelfare.org</span></li>
                    <li>Receive your receipt within 24 hours</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
