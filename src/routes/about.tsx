import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Eye, Compass, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — 4 Brothers Welfare Trust" },
      { name: "description", content: "Our story, mission, vision and the team behind 4 Brothers Welfare Trust." },
    ],
  }),
});

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every life with dignity and warmth." },
  { icon: Eye, title: "Transparency", desc: "Every rupee is tracked, audited and reported." },
  { icon: Compass, title: "Integrity", desc: "We do what's right — even when no one is watching." },
  { icon: Award, title: "Impact", desc: "Programs designed to create measurable change." },
];

const milestones = [
  ["2013", "Founded by four brothers with a shared mission."],
  ["2016", "First mass food drive — 5,000 families in Ramadan."],
  ["2019", "Launched education sponsorship program."],
  ["2022", "Flood relief operations across Sindh & Balochistan."],
  ["2024", "Expanded to 12 cities with 100+ active volunteers."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Born from brotherhood. <span className="text-gradient-gold">Built on service.</span></>}
        subtitle="What started as four brothers sharing meals with neighbors has grown into a movement reaching tens of thousands of Pakistani families every year."
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Mission</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">To stand beside the vulnerable — every day, in every way.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We believe humanity is our shared identity. Through food, education, healthcare and
              emergency response, we restore dignity to families pushed to the margins by poverty,
              disaster or circumstance. We are not just a trust — we are a promise that no one is alone.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Vision</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">A Pakistan where no family goes to bed hungry, sick or unheard.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We envision communities where neighbors care, where children learn, where the sick are
              healed, and where everyone — regardless of background — is treated with the dignity that
              every human being deserves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Values</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">What guides every decision</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-gold text-navy mb-4">
                    <v.icon className="size-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-x max-w-3xl">
          <Reveal className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Our Journey</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">A decade of service</h2>
          </Reveal>
          <div className="relative pl-8 border-l-2 border-border">
            {milestones.map(([year, text], i) => (
              <Reveal key={year} delay={i * 0.1} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[41px] size-5 rounded-full bg-gradient-gold ring-4 ring-background" />
                <div className="font-display text-2xl font-bold text-primary">{year}</div>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
