import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import education from "@/assets/program-education.jpg";
import medical from "@/assets/program-medical.jpg";
import water from "@/assets/program-water.jpg";
import relief from "@/assets/program-relief.jpg";
import distribution from "@/assets/hero-distribution.jpg";
import { Reveal } from "./Reveal";

const programs = [
  { title: "Food Distribution", desc: "Hot meals & ration packs reaching families every week.", img: distribution, count: "50K+ meals" },
  { title: "Education Support", desc: "Tuition, books and uniforms for under-served children.", img: education, count: "10K+ students" },
  { title: "Medical Assistance", desc: "Free camps, medicine and life-saving treatments.", img: medical, count: "5K+ patients" },
  { title: "Clean Water Projects", desc: "Hand pumps and filtration where water is scarce.", img: water, count: "120+ wells" },
  { title: "Emergency Relief", desc: "First responders during floods and disasters.", img: relief, count: "24/7 ready" },
  { title: "Orphan Care", desc: "Sponsorships covering food, schooling and shelter.", img: education, count: "300+ kids" },
];

export function Programs() {
  return (
    <section className="py-24 bg-background">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">What We Do</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold max-w-xl">
              Programs designed for <span className="text-gradient-gold">lasting change</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-semibold group">
              Explore all programs
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <article className="group relative h-[420px] rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] bg-gold text-navy px-2.5 py-1 rounded-full font-bold mb-3">
                    {p.count}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-white/80 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                  <Link
                    to="/programs"
                    className="mt-4 inline-flex items-center gap-2 text-gold font-semibold text-sm group/btn"
                  >
                    Learn more
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
