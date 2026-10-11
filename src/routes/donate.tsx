import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Building2,
  Shield,
  Heart,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — 4 Brothers Welfare Trust" },
      {
        name: "description",
        content:
          "Support our food distribution, special education school, and medical relief programs. Official account details and donation inquiries.",
      },
    ],
  }),
});

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

function AccountRow({
  label,
  value,
  isUnderProcess = false,
}: {
  label: string;
  value: string;
  isUnderProcess?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-border last:border-0">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        {isUnderProcess ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
            <Clock className="size-3" />
            Under Process
          </span>
        ) : (
          <>
            <span className="text-sm font-semibold text-foreground font-mono">{value}</span>
            <CopyBtn text={value} />
          </>
        )}
      </div>
    </div>
  );
}

function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Cause"
        title={
          <>
            Your Donation Brings <span className="text-gold font-bold">Hope to Those in Need.</span>
          </>
        }
        subtitle="100% of your donation directly reaches beneficiaries. Help us nourish families, empower special children, and restore human dignity."
      />

      <section className="py-14 sm:py-20 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top trust bar */}
          <Reveal className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border">
            {[
              "100% Donation Policy",
              "Registered Welfare Trust",
              "Direct Beneficiary Verification",
              "Tax Receipt & Updates",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/75">
                <CheckCircle2 className="size-4 text-gold shrink-0" /> {t}
              </span>
            ))}
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 sm:gap-10 items-start">
            {/* ── LEFT: Official Account Card ── */}
            <div className="space-y-8">
              <Reveal>
                <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
                  {/* Card Header */}
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="size-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow shrink-0">
                          <Building2 className="size-6 text-navy" />
                        </div>
                        <div>
                          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-foreground">
                            Official Bank Account
                          </h2>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            4 Brothers Foundation & Welfare Trust
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        <Clock className="size-3.5 animate-pulse" />
                        Account Under Process
                      </span>
                    </div>
                  </div>

                  {/* Account Table */}
                  <div className="p-6 sm:p-8">
                    <div className="space-y-1">
                      <AccountRow label="Bank" value="Under Process" isUnderProcess />
                      <AccountRow label="Account Title" value="Under Process" isUnderProcess />
                      <AccountRow label="Account Number" value="Under Process" isUnderProcess />
                      <AccountRow label="IBAN" value="Under Process" isUnderProcess />
                    </div>

                    {/* Notice box */}
                    <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/15 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                        <AlertCircle className="size-4 shrink-0 text-gold" />
                        Please Note:
                      </p>
                      Please mention <strong>"Donation"</strong> in the remarks when making transfers once active. For direct bank transfer instructions, cash contributions, or verified donation receipts, please contact our management team directly.
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Direct Inquiries & Contact Channels */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-8">
                  <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                    <Mail className="size-5 text-gold" />
                    Direct Donation Inquiries & Support
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Our team is available to assist you with in-person donations, ration sponsorships, or school program support.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:info@4brothersfoundation.com"
                      className="p-4 rounded-2xl bg-card border border-border hover:border-gold hover:shadow-soft transition-all flex items-start gap-3 group"
                    >
                      <div className="size-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Mail className="size-5 text-gold group-hover:text-navy transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-semibold">Official Email</div>
                        <div className="text-sm font-bold text-foreground mt-0.5 truncate">
                          info@4brothersfoundation.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+923333610874"
                      className="p-4 rounded-2xl bg-card border border-border hover:border-gold hover:shadow-soft transition-all flex items-start gap-3 group"
                    >
                      <div className="size-10 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Phone className="size-5 text-gold group-hover:text-navy transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-semibold">Direct Helpline</div>
                        <div className="text-sm font-bold text-foreground mt-0.5">
                          +92 333-3610874
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-card border border-border flex items-start gap-3">
                    <MapPin className="size-5 text-gold shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      <strong className="text-foreground">Head Office:</strong> 4 Brothers Spini Road, Quetta, Balochistan, Pakistan
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Specific Program Sponsorships */}
              <Reveal delay={0.15}>
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">
                    Sponsor a Specific Initiative
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Family Monthly Ration Bag",
                        cost: "PKR 8,000",
                        desc: "Rice, flour, daal, oil, milk & sweets for a family in need for a full month.",
                        link: "/programs",
                      },
                      {
                        title: "Special Child Education & Therapy",
                        cost: "PKR 10,000 / mo",
                        desc: "Tuition, physiotherapy & speech therapy at Gawahi 4B Hope & Ability School.",
                        link: "/programs",
                      },
                      {
                        title: "Hospital Meal Distribution",
                        cost: "PKR 5,000",
                        desc: "Hot, nutritious meals for ~50 hospital attendants at BMC Hospital.",
                        link: "/programs",
                      },
                      {
                        title: "Clean Water Hand Pump",
                        cost: "PKR 35,000",
                        desc: "Installed in a water-deprived village, serving multiple families permanently.",
                        link: "/programs",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:shadow-soft transition-all"
                      >
                        <div>
                          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                            {item.title}
                          </div>
                          <div className="font-display text-xl font-black text-gold mb-2">
                            {item.cost}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border">
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-gold transition-colors"
                          >
                            Pledge this initiative <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="space-y-6">
              {/* Trust Card */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-gradient-hero text-white p-7 shadow-elegant">
                  <Shield className="size-8 text-gold mb-4" />
                  <h3 className="font-display text-lg font-bold mb-3">Why donate to us?</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {[
                      "100% donation policy",
                      "Full transparency & audited accounts",
                      "Operational expenses covered by founders",
                      "Direct beneficiary impact in Balochistan",
                      "Regular video and photo reports",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Quick Contact Form link */}
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border bg-card p-6 text-center">
                  <Heart className="size-8 text-gold fill-gold mx-auto mb-3" />
                  <h4 className="font-display font-bold text-lg mb-2">Have a question?</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                    Need help arranging a bank wire, corporate CSR sponsorship, or Zakat distribution?
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-gold text-navy font-bold shadow-glow">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
