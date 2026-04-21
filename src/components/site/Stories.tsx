import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "When the floods took everything, 4 Brothers were the first to reach our village. They gave us food, clean water and the courage to rebuild.",
    name: "Ayesha B.",
    role: "Beneficiary, Sindh",
  },
  {
    quote:
      "My son got the surgery he needed because of this trust. I am a mother with no words — only prayers for these wonderful people.",
    name: "Saima K.",
    role: "Mother, Karachi",
  },
  {
    quote:
      "Volunteering here changed my life. You don't just give — you receive ten times more in love and purpose.",
    name: "Hamza A.",
    role: "Volunteer, Lahore",
  },
];

export function Stories() {
  return (
    <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="container-x relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Voices of Hope</p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Stories from the people <span className="text-gradient-gold">we serve</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.15}>
              <div className="relative h-full bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-gold/50 transition-colors">
                <Quote className="size-10 text-gold/70 mb-4" />
                <p className="text-white/90 leading-relaxed italic">"{s.quote}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-display font-semibold">{s.name}</div>
                  <div className="text-sm text-white/60">{s.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
