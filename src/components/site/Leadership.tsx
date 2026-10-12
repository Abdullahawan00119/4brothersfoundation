import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail } from "lucide-react";

export interface Founder {
  name: string;
  role: string;
  title: string;
  bio: string;
  email: string;
  img: string | null;
  initials: string;
}

export const founders: Founder[] = [
  {
    name: "Roshan",
    role: "Founder",
    title: "Founder",
    bio: "Visionary leader with a decade in social development, leading humanitarian missions and relief operations.",
    email: "chouhanroshan877@gmail.com",
    img: "/R.jpg",
    initials: "R",
  },
  {
    name: "Sharoon Chouhan",
    role: "Founder",
    title: "Founder",
    bio: "Expert in community health systems and grassroots mobilization across Balochistan and nationwide.",
    email: "Sharoonchouhan702@gmail.com",
    img: "/SC.jpg",
    initials: "SC",
  },
  {
    name: "Afshan",
    role: "Founder",
    title: "Founder",
    bio: "Certified accountant ensuring transparent fund allocation, financial integrity, and accountability.",
    email: "afshanwilliam00@gmail.com",
    img: "/images/afshan.png",
    initials: "A",
  },
  {
    name: "Sonia Khurram Chohan",
    role: "Founder",
    title: "Founder",
    bio: "Connecting communities through strategic partnerships, inclusive education, and digital engagement.",
    email: "sonia@4brotherfoundation.com",
    img: "/images/sonia.png",
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
    <Reveal delay={i * 0.08} className="h-full">
      <div className="bg-card rounded-2xl border border-border hover:border-gold/50 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col h-full text-center group">
        {/* Photo Container — aspect-[4/3] to ensure SC.jpg (4:3) and R.jpg are never cut */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted/60 border border-border/60 mb-3.5 shrink-0 flex items-center justify-center">
          {hasPhoto ? (
            <img
              src={founder.img!}
              alt={founder.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-[center_15%] group-hover:scale-102 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-primary/20 text-primary">
              <span className="font-sans font-bold text-3xl sm:text-4xl tracking-tight text-primary">
                {founder.initials}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70 mt-1">
                Founder
              </span>
            </div>
          )}
          {/* testing */}

          {/* Clean Role Badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
              {founder.role}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-snug">
            {founder.name}
          </h3>
          <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-0.5 mb-2">
            {founder.title}
          </p>

          <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {founder.bio}
          </p>

          {/* Email link (no social media icons) */}
          <div className="mt-3 pt-3 border-t border-border/70 flex items-center justify-center">
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors truncate max-w-full font-medium"
              title={founder.email}
            >
              <Mail className="size-3 text-gold shrink-0" />
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
    <section className="py-12 sm:py-16 bg-muted/20 border-y border-border/40">
      <div className="container-x max-w-6xl">
        {/* Section header */}
        <Reveal className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-bold mb-2">
            Leadership & Governance
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            Our Founders
          </h2>
          <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm leading-relaxed">
            United by blood and driven by a shared vision to serve humanity and give back to the communities that raised them.
          </p>
        </Reveal>

        {/* Cards grid — compact, balanced 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
