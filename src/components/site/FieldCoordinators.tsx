import { useState } from "react";
import { Reveal } from "./Reveal";
import { Users, GraduationCap, Stethoscope, HeartHandshake } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  img: string;
  initials: string;
}

export const fieldCoordinators: TeamMember[] = [
  {
    name: "Sheraz Haroon",
    role: "Education Coordinator",
    department: "Education & Special Needs",
    bio: "Oversees educational initiatives including Gawahi 4B Hope & Ability School, ensuring special needs children receive quality learning, speech therapy, and compassionate support.",
    img: "/images/sheraz.jpeg",
    initials: "SH",
  },
  {
    name: "Adil Akash",
    role: "Medical Outreach Lead",
    department: "Healthcare & Hospital Relief",
    bio: "Leads clinical outreach operations, hospital meal distributions at BMC Hospital, and rapid medical assistance programs for impoverished families and patients.",
    img: "/images/adil.jpeg",
    initials: "AA",
  },
  {
    name: "Opher Jamil",
    role: "Women Empowerment Officer",
    department: "Community Welfare",
    bio: "Drives grassroots women's welfare programs, vocational training, and emergency ration relief distributions to female-headed households across Quetta.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-[10.5px] font-bold uppercase tracking-wider mb-2.5 border border-gold/30">
            <Users className="size-3" /> Frontline Team
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
            Field Coordinators
          </h2>
          <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm leading-relaxed font-normal">
            The dedicated frontline team managing special school operations, weekly hospital dastarkhwans, and monthly doorstep ration distributions across Quetta every day.
          </p>
        </Reveal>

        {/* 3 Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {fieldCoordinators.map((member, i) => {
            const hasError = imgErrors[member.name];

            return (
              <Reveal key={member.name} delay={i * 0.1} className="h-full">
                <div className="bg-card rounded-2xl border border-border/80 hover:border-gold/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col h-full text-center group relative overflow-hidden">
                  {/* Subtle top hover accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Photo Frame (aspect-[4/3] to preserve natural portrait and photo bounds) */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-muted/40 border border-border/60 mb-4 shrink-0 flex items-center justify-center">
                    {!hasError ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        onError={() => setImgErrors((prev) => ({ ...prev, [member.name]: true }))}
                        className={`size-full ${
                          member.name === "Adil Akash"
                            ? "object-contain bg-slate-100 dark:bg-slate-800 p-1"
                            : "object-cover object-[center_15%]"
                        } group-hover:scale-103 transition-transform duration-500`}
                      />
                    ) : (
                      <div className="size-full flex flex-col items-center justify-center bg-gradient-to-b from-[#071739] to-[#0a2357] text-white">
                        <span className="font-display font-extrabold text-2xl text-gold">{member.initials}</span>
                      </div>
                    )}

                    {/* Department Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
                        {getDepartmentIcon(member.department)}
                        {member.department}
                      </span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>

                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5 mb-3">
                      {member.role}
                    </p>

                    <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3 font-normal">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
