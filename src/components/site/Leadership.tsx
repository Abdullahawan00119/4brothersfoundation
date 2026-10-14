import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail, ShieldCheck } from "lucide-react";

export interface Founder {
  name: string;
  role: string;
  title: string;
  focus: string;
  bio: string;
  email: string;
  img: string | null;
  initials: string;
}

export const founders: Founder[] = [
  {
    name: "Roshan",
    role: "Founder",
    title: "Founder & Executive Director",
    focus: "Field Missions & Operations",
    bio: "Visionary leader with a decade in social development, directing humanitarian relief and ground operations across Quetta and Balochistan.",
    email: "chouhanroshan877@gmail.com",
    img: "/R.jpg",
    initials: "R",
  },
  {
    name: "Afshan",
    role: "Founder",
    title: "Co-Founder & Financial Trustee",
    focus: "Financial Integrity & Audit",
    bio: "Certified finance professional ensuring transparent fund allocation, ethical governance, and strict accountability for every rupee donated.",
    email: "afshanwilliam00@gmail.com",
    img: null,
    initials: "A",
  },
  {
    name: "Sonia Khurram Chohan",
    role: "Founder",
    title: "Co-Founder & Community Outreach",
    focus: "Special Education & Partnerships",
    bio: "Driving educational empowerment and community care through strategic NGO alliances and specialized children's therapy programs.",
    email: "sonia@4brotherfoundation.com",
    img: null,
    initials: "SK",
  },
];

interface LeadershipProps {
  compact?: boolean;
}

function FounderCard({ founder, i }: { founder: Founder; i: number }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(founder.img) && !imgError;

  return (
    <Reveal delay={i * 0.1} className="h-full">
      <div className="bg-card rounded-2xl border border-border/80 hover:border-gold/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 flex flex-col h-full text-center group relative overflow-hidden">
        {/* Subtle executive gold hairline accent on top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Photo or Executive Trustee Monogram Frame */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-border/60 mb-4 shrink-0 flex items-center justify-center shadow-inner">
          {hasPhoto ? (
            <div className="relative size-full overflow-hidden">
              <img
                src={founder.img!}
                alt={founder.name}
                loading="lazy"
                onError={() => setImgError(true)}
                className="size-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle filmic vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071739]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="size-full flex flex-col items-center justify-center bg-gradient-to-b from-[#071739] via-[#091f4d] to-[#040e24] text-white relative overflow-hidden p-4">
              {/* Decorative radial crest pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, rgba(197, 168, 128, 0.8) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="absolute inset-0 rounded-xl border border-gold/15 pointer-events-none m-2" />

              {/* Embossed Trustee Monogram Seal */}
              <div className="relative size-16 sm:size-20 rounded-full border-2 border-gold/50 bg-[#071739]/90 shadow-lg flex items-center justify-center mb-2 group-hover:border-gold group-hover:scale-105 transition-all duration-300">
                <div className="absolute inset-1 rounded-full border border-gold/20" />
                <span className="font-display font-black text-2xl sm:text-3xl text-gold tracking-tight drop-shadow-sm">
                  {founder.initials}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/75">
                Board of Trustees
              </span>
            </div>
          )}

          {/* Role badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#071739]/85 backdrop-blur-md text-white border border-gold/30 shadow-sm">
              <ShieldCheck className="size-3 text-gold" />
              <span>{founder.role}</span>
            </span>
          </div>
        </div>

        {/* Founder Details */}
        <div className="flex flex-col flex-1">
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-foreground leading-snug group-hover:text-gold transition-colors">
            {founder.name}
          </h3>

          <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 mb-2">
            {founder.title}
          </p>

          <div className="mb-3">
            <span className="inline-flex items-center text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/25">
              {founder.focus}
            </span>
          </div>

          <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4 font-normal">
            {founder.bio}
          </p>

          {/* Direct Verified Email Link */}
          <div className="pt-3 border-t border-border/70 flex items-center justify-center">
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all font-medium truncate max-w-full px-3 py-1.5 rounded-lg border border-transparent hover:border-gold/30"
              title={founder.email}
            >
              <Mail className="size-3.5 text-gold shrink-0" />
              <span className="truncate">{founder.email}</span>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Leadership({ compact = false }: LeadershipProps) {
  return (
    <section className="py-14 sm:py-20 bg-muted/20 border-b border-border/40">
      <div className="container-x max-w-5xl">
        {/* Section header */}
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-bold mb-2">
            Leadership & Governance
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            Our Founders & <span className="text-gold">Board of Trustees</span>
          </h2>
          <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
            United by blood and dedicated to transparent stewardship, directing relief missions and empowering vulnerable communities across Pakistan.
          </p>
        </Reveal>

        {/* Founders: Horizontal Snap Scroll on Mobile, 3-column Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 gap-5 sm:gap-6 no-scrollbar">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className="w-[82vw] xs:w-[72vw] sm:w-auto shrink-0 snap-center h-full"
            >
              <FounderCard founder={founder} i={i} />
            </div>
          ))}
        </div>

        {/* Mobile swipe helper indicator */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-foreground/80 font-medium">
          <span className="size-1.5 rounded-full bg-gold/80" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-1 text-[10.5px]">Swipe to view founders</span>
        </div>
      </div>
    </section>
  );
}
