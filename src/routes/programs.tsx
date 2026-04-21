import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import education from "@/assets/program-education.jpg";
import medical from "@/assets/program-medical.jpg";
import water from "@/assets/program-water.jpg";
import relief from "@/assets/program-relief.jpg";
import distribution from "@/assets/hero-distribution.jpg";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [
      { title: "Programs — 4 Brothers Welfare Trust" },
      { name: "description", content: "Food, education, medical, water, relief and orphan-care programs reaching thousands of families." },
    ],
  }),
});

const programs = [
  {
    title: "Food & Ration Distribution",
    img: distribution,
    desc: "Weekly hot meals, monthly ration packs and Ramadan iftar drives across low-income neighborhoods.",
    impact: "50,000+ meals delivered annually",
  },
  {
    title: "Education Support",
    img: education,
    desc: "Tuition fees, books, uniforms and after-school tutoring for children whose families can't afford it.",
    impact: "10,000+ students supported",
  },
  {
    title: "Medical Assistance",
    img: medical,
    desc: "Free medical camps, life-saving surgeries, and ongoing care for chronic patients.",
    impact: "5,000+ patients treated each year",
  },
  {
    title: "Clean Water Projects",
    img: water,
    desc: "Hand pumps, water filtration plants and rehabilitation of broken supply systems.",
    impact: "120+ water sites operational",
  },
  {
    title: "Emergency & Disaster Relief",
    img: relief,
    desc: "Rapid response with food, shelter and medical aid during floods, earthquakes and other disasters.",
    impact: "On-call 24/7, nationwide",
  },
  {
    title: "Orphan Care",
    img: education,
    desc: "Sponsorship covering food, education, healthcare and emotional support for orphaned children.",
    impact: "300+ children sponsored",
  },
];

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title={<>Six pillars. <span className="text-gradient-gold">One mission.</span></>}
        subtitle="Every program is built around real, measurable change in the lives of the people we serve."
      />

      <section className="py-24 bg-background">
        <div className="container-x space-y-20">
          {programs.map((p, i) => (
            <Reveal key={p.title}>
              <article className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div>
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] bg-accent text-primary px-3 py-1 rounded-full font-bold">
                    Program 0{i + 1}
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{p.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-gold font-semibold">
                    <Heart className="size-4 fill-gold" /> {p.impact}
                  </div>
                  <div className="mt-7">
                    <Link to="/donate">
                      <Button className="bg-gradient-gold text-navy font-bold h-11 px-6">
                        Support this program
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
