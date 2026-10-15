import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  Users,
  GraduationCap,
  Stethoscope,
  HeartHandshake,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  station: string;
  bio: string;
  img: string | null;
  initials: string;
}

export const fieldCoordinators: TeamMember[] = [
  {
    name: "Sheraz Haroon",
    role: "Education Coordinator",
    department: "Education & Special Needs",
    station: "Gawahi 4B Special School • Quetta",
    bio: "Oversees educational initiatives including Gawahi 4B Hope & Ability School, ensuring special needs children receive quality learning, speech therapy, and compassionate support.",
    img: "/images/sheraz.jpeg",
    initials: "SH",
  },
  {
    name: "Adil Akash",
    role: "Medical Outreach Lead",
    department: "Healthcare & Hospital Relief",
    station: "BMC Hospital Relief Hub • Quetta",
    bio: "Leads clinical outreach operations, hospital meal distributions at BMC Hospital, and rapid medical assistance programs for impoverished families and patients.",
    img: "/images/adil.jpeg",
    initials: "AA",
  },
  {
    name: "Opher Jamil",
    role: "Women Empowerment Officer",
    department: "Community Welfare",
    station: "Grassroots Relief Network • Balochistan",
    bio: "Drives grassroots women's welfare programs, vocational training, and emergency ration relief distributions to female-headed households across Quetta.",
    img: "/images/opher.jpeg",
    initials: "OJ",
  },
];

function getDepartmentIcon(dept: string) {
  if (dept.includes("Education")) return <GraduationCap className="size-3 text-gold" />;
  if (dept.includes("Healthcare")) return <Stethoscope className="size-3 text-gold" />;
  return <HeartHandshake className="size-3 text-gold" />;
}

export function FieldCoordinators() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="py-14 sm:py-20 bg-background border-b border-border/40">
      <div className="container-x max-w-5xl">
        {/* Section Header */}
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-bold mb-2">
            Frontline Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            Our Dedicated <span className="text-gold">Field Coordinators</span>
          </h2>
          <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
            The dedicated frontline team managing special school operations, hospital relief dastarkhwans, and emergency doorstep ration distributions across Quetta every day.
          </p>
        </Reveal>

        {/* Coordinators: Horizontal Snap Scroll on Mobile, 3-column Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 gap-5 sm:gap-6 no-scrollbar">
          {fieldCoordinators.map((member, i) => {
            const hasPhoto = Boolean(member.img) && !imgErrors[member.name];

            return (
              <div
                key={member.name}
                className="w-[82vw] xs:w-[72vw] sm:w-auto shrink-0 snap-center h-full"
              >
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="bg-card rounded-2xl border border-border/80 hover:border-gold/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 flex flex-col h-full text-center group relative overflow-hidden">
                    {/* Subtle executive gold hairline accent on top */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    {/* Photo Frame */}
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-border/60 mb-4 shrink-0 flex items-center justify-center shadow-inner">
                      {hasPhoto ? (
                        <div className="relative size-full overflow-hidden flex items-center justify-center">
                          {member.name === "Adil Akash" || member.name === "Opher Jamil" ? (
                            <>
                              {/* Ambient subtle blur to smoothly blend the edges without cropping */}
                              <img
                                src={member.img!}
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 size-full object-cover blur-xl opacity-45 scale-125 pointer-events-none"
                              />
                              {/* Full uncropped portrait showing entire head, hair, and collar */}
                              <img
                                src={member.img!}
                                alt={member.name}
                                loading="lazy"
                                onError={() => setImgErrors((prev) => ({ ...prev, [member.name]: true }))}
                                className="relative h-full max-w-full object-contain p-1 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-md"
                              />
                            </>
                          ) : (
                            <img
                              src={member.img!}
                              alt={member.name}
                              loading="lazy"
                              onError={() => setImgErrors((prev) => ({ ...prev, [member.name]: true }))}
                              className="size-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                          )}
                          {/* Filmic vignette gradient */}
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

                          {/* Embossed Coordinator Monogram Seal */}
                          <div className="relative size-16 sm:size-20 rounded-full border-2 border-gold/50 bg-[#071739]/90 shadow-lg flex items-center justify-center mb-2 group-hover:border-gold group-hover:scale-105 transition-all duration-300">
                            <div className="absolute inset-1 rounded-full border border-gold/20" />
                            <span className="font-display font-black text-2xl sm:text-3xl text-gold tracking-tight drop-shadow-sm">
                              {member.initials}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/75">
                            Field Coordinator
                          </span>
                        </div>
                      )}

                      {/* Department Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#071739]/85 backdrop-blur-md text-white border border-gold/30 shadow-sm">
                          {getDepartmentIcon(member.department)}
                          <span>{member.department}</span>
                        </span>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex flex-col flex-1">
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-foreground leading-snug group-hover:text-gold transition-colors">
                        {member.name}
                      </h3>

                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 mb-2">
                        {member.role}
                      </p>

                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/25">
                          <CheckCircle2 className="size-3 text-gold" />
                          <span>Active Field Lead</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4 font-normal">
                        {member.bio}
                      </p>

                      {/* Station / Duty Badge */}
                      <div className="pt-3 border-t border-border/70 flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium truncate max-w-full px-2 py-1">
                          <MapPin className="size-3 text-gold shrink-0" />
                          <span className="truncate">{member.station}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Mobile swipe helper indicator */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-2 text-[11px] text-muted-foreground/80 font-medium">
          <span className="size-1.5 rounded-full bg-gold/80" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-1 text-[10.5px]">Swipe to view team members</span>
        </div>
      </div>
    </section>
  );
}

