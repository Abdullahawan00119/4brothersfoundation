import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Users, Briefcase, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedPage,
  head: () => ({
    meta: [
      { title: "Get Involved — 4 Brothers Welfare Trust" },
      { name: "description", content: "Volunteer, partner or intern with 4 Brothers Welfare Trust." },
    ],
  }),
});

const ways = [
  { icon: Users, title: "Volunteer", desc: "Give your time and skills on the ground." },
  { icon: Briefcase, title: "Corporate Partnership", desc: "Sponsor programs and run CSR drives." },
  { icon: GraduationCap, title: "Internships", desc: "Hands-on experience in non-profit operations." },
];

const skillTags = ["Cooking", "Teaching", "Medical", "Logistics", "Photography", "Social Media", "Driving", "Translation"];

function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSkills((arr) => (arr.includes(s) ? arr.filter((x) => x !== s) : [...arr, s]));

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title={<>Lend a hand. <span className="text-gradient-gold">Change a life.</span></>}
        subtitle="There are many ways to be part of the movement — find the one that fits you."
      />

      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-gold text-navy mb-4">
                    <w.icon className="size-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{w.title}</h3>
                  <p className="mt-2 text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-soft max-w-3xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Volunteer Sign-up</h2>
              <p className="text-muted-foreground mt-1">We'll get back to you within 48 hours.</p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-2xl bg-success/10 border border-success/30 text-center">
                  <CheckCircle2 className="size-14 text-success mx-auto" />
                  <h3 className="mt-4 font-display text-xl font-bold">Welcome to the family!</h3>
                  <p className="mt-2 text-muted-foreground">Our team will reach out shortly with next steps.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="mt-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input required className="mt-1.5" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input required type="email" className="mt-1.5" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <Input required className="mt-1.5" placeholder="+92 …" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">City</label>
                      <Input required className="mt-1.5" placeholder="Karachi" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Skills you can offer</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skillTags.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                            skills.includes(s)
                              ? "bg-gradient-gold text-navy border-transparent"
                              : "bg-background border-border hover:border-gold"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Tell us why you want to volunteer</label>
                    <Textarea className="mt-1.5" rows={4} placeholder="A short note about your motivation…" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-gold text-navy font-bold h-12">
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
