import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VolunteerHelpdesk() {
  return (
    <section className="py-12 sm:py-16 bg-muted/20 border-b border-border/40">
      <div className="container-x max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Community Direct Helpdesk */}
          <Reveal className="h-full">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30 mb-4">
                  <MapPin className="size-3 text-gold" /> Direct Field Helpdesk
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-2.5">
                  Need Relief Assistance in Quetta?
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-normal">
                  If you or a family in your neighborhood needs emergency food rations, special needs school enrollment for a child, or patient support at BMC Hospital, reach out to our team.
                </p>

                <div className="space-y-2.5 text-xs text-foreground/80 mb-6">
                  <div className="flex items-center gap-2.5">
                    <Phone className="size-3.5 text-gold shrink-0" />
                    <a href="tel:+923333610874" className="hover:text-gold transition-colors font-semibold">
                      +92 333-3610874
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="size-3.5 text-gold shrink-0" />
                    <a href="mailto:info@4brothersfoundation.com" className="hover:text-gold transition-colors font-medium truncate">
                      info@4brothersfoundation.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="size-3.5 text-gold shrink-0 mt-0.5" />
                    <span className="leading-snug">Spini Road & Brewery Road, Quetta, Balochistan</span>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button variant="outline" className="w-full font-semibold text-xs sm:text-sm border-border hover:border-gold hover:text-gold rounded-xl h-10">
                  Contact Our Quetta Office
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Card 2: Volunteer With Us */}
          <Reveal delay={0.1} className="h-full">
            <div className="rounded-2xl border border-white/10 bg-[#071739] text-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-gold border border-white/15 mb-4">
                  <Users className="size-3 text-gold" /> Join The Movement
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2.5">
                  Become a Ground Volunteer
                </h3>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                  Our missions thrive through passionate youth and community members. Volunteer your time for monthly ration packaging, weekly hospital food drives, or school activities.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3 text-center">
                    <div className="font-extrabold text-base sm:text-lg text-gold">Weekly</div>
                    <div className="text-[10px] text-white/60 font-medium">Meal Packing</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.05] border border-white/10 p-3 text-center">
                    <div className="font-extrabold text-base sm:text-lg text-gold">Monthly</div>
                    <div className="text-[10px] text-white/60 font-medium">Ration Logistics</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Link to="/get-involved">
                  <Button className="w-full bg-gold hover:bg-[#b8986c] text-navy font-bold text-xs sm:text-sm h-10 rounded-xl shadow-xs">
                    <HeartHandshake className="size-4 mr-2 fill-navy" /> Register as a Volunteer
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
