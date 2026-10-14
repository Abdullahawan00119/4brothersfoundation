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
      <div className="bg-card rounded-2xl border border-border/80 hover:border-gold/50 shadow-xs hover:shadow-sm transition-all duration-300 p-5 sm:p-6 flex flex-col h-full text-center group relative overflow-hidden">
        {/* Subtle decorative gold top accent on hover */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Photo or Monogram Frame */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted/40 border border-border/60 mb-4 shrink-0 flex items-center justify-center">
          {hasPhoto ? (
            <img
              src={founder.img!}
              alt={founder.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="size-full object-cover object-[center_15%] group-hover:scale-103 transition-transform duration-500"
            />
          ) : (
            <div className="size-full flex flex-col items-center justify-center bg-[#071739] text-white relative overflow-hidden">
              <div className="size-16 sm:size-18 rounded-full border border-gold/40 bg-white/10 flex items-center justify-center shadow-inner mb-1.5">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-gold tracking-tight">
                  {founder.initials}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">
                Founder & Trustee
              </span>
            </div>
          )}

          {/* Role badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
              <ShieldCheck className="size-3 text-gold" /> {founder.role}
            </span>
          </div>
        </div>

        {/* Founder Info */}
        <div className="flex flex-col flex-1">
          <h3 className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug group-hover:text-gold transition-colors">
            {founder.name}
          </h3>

          <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5 mb-1.5">
            {founder.title}
          </p>

          <div className="mb-3">
            <span className="inline-block text-[10.5px] font-semibold px-2.5 py-0.5 rounded-md bg-gold/10 text-gold border border-gold/20">
              {founder.focus}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4 font-normal">
            {founder.bio}
          </p>

          {/* Email button */}
          <div className="pt-3 border-t border-border/60 flex items-center justify-center">
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors font-medium truncate max-w-full px-2 py-1 rounded-lg hover:bg-muted/50"
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
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
            Leadership & Governance
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            Our Founders
          </h2>
          <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
            United by blood and driven by a shared commitment to serve humanity and uplift vulnerable communities across Pakistan.
          </p>
        </Reveal>

        {/* Cards grid — balanced responsive 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
