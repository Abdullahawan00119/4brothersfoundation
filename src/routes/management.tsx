import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Leadership } from "@/components/site/Leadership";
import { FieldCoordinators } from "@/components/site/FieldCoordinators";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Heart,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/management")({
  component: ManagementPage,
  head: () => ({
    meta: [
      { title: "Our Leadership & Management — 4 Brothers Foundation" },
      {
        name: "description",
        content:
          "Meet the founders, leadership, and dedicated team powering 4 Brothers Foundation across Pakistan. Official governance and verified account status.",
      },
    ],
  }),
});

function ManagementPage() {
  return (
    <>
      {/* ── Dignified, Authentic Hero Section (Rich Blue Brand Color) ── */}
      <section className="relative pt-28 xs:pt-32 sm:pt-40 pb-12 sm:pb-20 bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] text-white overflow-hidden">
        {/* Subtle, natural geometric texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-x max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/85 text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md mb-3.5 sm:mb-5">
              <span className="size-1.5 rounded-full bg-gold" />
              The People Behind
            </div>

            <h1 className="font-sans text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
              Our Leadership & Management
            </h1>

            <p className="mt-3.5 sm:mt-5 text-xs xs:text-sm sm:text-base lg:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Dedicated individuals united by a shared vision of service, compassion, and transparent stewardship for the communities we serve across Pakistan.
            </p>

            {/* Credibility Badges */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-8 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="size-4 text-gold shrink-0" />
                <span>Transparent Governance</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="size-4 text-gold shrink-0" />
                <span>Spini Road, Quetta</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Heart className="size-4 text-gold shrink-0" />
                <span>100% Volunteer Board</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership / Founders */}
      <Leadership />

      {/* Dedicated Team / Field Coordinators with mobile horizontal scroll */}
      <FieldCoordinators />

      {/* ── Official Bank & Account Details: Under Process Section ── */}
      <section className="py-12 sm:py-16 bg-muted/30 border-t border-border">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Building2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">
                      Support Our Cause — Account Details
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      4 Brothers Welfare Trust & Foundation
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/25 self-start sm:self-auto">
                  <Clock className="size-3.5 animate-pulse" />
                  Account Under Process
                </span>
              </div>

              {/* Table of Under Process details */}
              <div className="grid sm:grid-cols-2 gap-4 py-6 border-b border-border">
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">Bank</span>
                  <span className="text-xs font-bold text-foreground">Under Process</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">Account Title</span>
                  <span className="text-xs font-bold text-foreground">Under Process</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">Account Number</span>
                  <span className="text-xs font-bold text-foreground">Under Process</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/50">
                  <span className="text-xs text-muted-foreground font-medium">IBAN</span>
                  <span className="text-xs font-bold text-foreground">Under Process</span>
                </div>
              </div>

              {/* Remarks note */}
              <div className="mt-5 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200 leading-relaxed text-center sm:text-left">
                Please mention <strong>"Donation"</strong> in the remarks when making transfers once active. For direct donations, in-person contributions, or queries, contact us at:
              </div>

              {/* Direct helpline buttons */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:info@4brothersfoundation.com"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-lg border border-border bg-background"
                  >
                    <Mail className="size-3.5 text-gold shrink-0" />
                    info@4brothersfoundation.com
                  </a>
                  <a
                    href="tel:+923333610874"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors py-1.5 px-3 rounded-lg border border-border bg-background"
                  >
                    <Phone className="size-3.5 text-gold shrink-0" />
                    +92 333-3610874
                  </a>
                </div>

                <Link to="/donate">
                  <Button size="sm" className="bg-gradient-gold text-navy font-bold text-xs h-8 px-4">
                    <Heart className="size-3 mr-1 fill-navy" /> Full Donation Page
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
