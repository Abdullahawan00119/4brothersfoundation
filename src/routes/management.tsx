import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Leadership } from "@/components/site/Leadership";
import { Button } from "@/components/ui/button";
import {
  Users,
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

interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  img: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sheraz Haroon",
    role: "Education Coordinator",
    department: "Education & Special Needs",
    bio: "Oversees educational initiatives including Gawahi 4B Hope & Ability School, ensuring special needs children and vulnerable students receive quality learning, therapy, and compassionate support.",
    img: "/images/sheraz.jpeg",
    initials: "SH",
  },
  {
    name: "Adil Akash",
    role: "Medical Outreach Lead",
    department: "Healthcare & Hospital Relief",
    bio: "Leads clinical outreach operations, hospital meal distributions at BMC Hospital, and rapid medical assistance programs for impoverished families and chronically ill patients.",
    img: "/images/adil.jpeg",
    initials: "AA",
  },
  {
    name: "Opher Jamil",
    role: "Women Empowerment Officer",
    department: "Community Welfare",
    bio: "Drives grassroots women's welfare programs, vocational livelihood training, and emergency ration relief distributions to female-headed households across marginalized neighborhoods.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    initials: "OJ",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <div className="bg-card rounded-2xl border border-border/70 hover:border-gold/50 shadow-sm hover:shadow transition-all duration-300 p-4 sm:p-5 flex flex-col h-full text-center group">
        {/* Photo Container — aspect-[4/3] to fit photos naturally without awkward crop */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted/60 border border-border/60 mb-3.5 shrink-0 flex items-center justify-center">
          {!imgError ? (
            <img
              src={member.img}
              alt={member.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className={`w-full h-full ${
                member.name === "Adil Akash"
                  ? "object-contain bg-slate-100 dark:bg-slate-800 p-1"
                  : "object-cover object-[center_15%]"
              } group-hover:scale-102 transition-transform duration-500`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-primary/10 text-primary">
              <span className="font-sans font-bold text-2xl">{member.initials}</span>
            </div>
          )}

          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
              {member.department}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="font-sans font-bold text-base sm:text-lg text-foreground leading-snug">
            {member.name}
          </h3>
          <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-0.5 mb-2">
            {member.role}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {member.bio}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function ManagementPage() {
  return (
    <>
      {/* ── Dignified, Authentic Hero Section (Rich Blue Brand Color) ── */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] text-white overflow-hidden">
        {/* Subtle, natural geometric texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container-x max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/85 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md mb-5">
              <span className="size-1.5 rounded-full bg-gold" />
              The People Behind
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Our Leadership & Management
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Dedicated individuals united by a shared vision of service, compassion, and transparent stewardship for the communities we serve across Pakistan.
            </p>

            {/* Credibility Badges */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-gold shrink-0" />
                <span>Transparent Governance</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-gold shrink-0" />
                <span>Spini Road, Quetta</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="size-4 text-gold shrink-0" />
                <span>100% Volunteer Board</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership / Founders */}
      <Leadership />

      {/* Dedicated Team / The People Powering Our Programs */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container-x max-w-5xl">
          <Reveal className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/15 text-gold text-[11px] font-bold uppercase tracking-wider mb-2">
              <Users className="size-3" /> Field Coordinators
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-foreground">
              The People Powering Our Programs
            </h2>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Our coordinators and officers are on the frontlines every day — managing school operations, hospital feedings, and ration distributions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

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
