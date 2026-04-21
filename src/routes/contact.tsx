import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — 4 Brothers Welfare Trust" },
      { name: "description", content: "Reach our team for partnerships, donations or volunteering enquiries." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const items = [
    { icon: MapPin, title: "Office", text: "Karachi, Sindh, Pakistan" },
    { icon: Phone, title: "Phone", text: "+92 300 0000000" },
    { icon: Mail, title: "Email", text: "info@4brotherswelfare.org" },
    { icon: Clock, title: "Hours", text: "Mon – Sat • 9am – 7pm" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <span className="text-gradient-gold">hear from you.</span></>}
        subtitle="Whether it's about donating, partnering or just saying hello — drop us a line."
      />

      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="flex gap-4 p-5 bg-card border border-border rounded-2xl hover:border-gold transition-colors">
                  <div className="size-12 shrink-0 rounded-xl bg-gradient-gold text-navy flex items-center justify-center">
                    <it.icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.title}</div>
                    <div className="font-display font-semibold mt-1">{it.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-3xl p-7 sm:p-10 shadow-soft">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="size-14 text-success mx-auto" />
                  <h3 className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 text-muted-foreground">We'll get back within 48 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <Input required className="mt-1.5" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input required type="email" className="mt-1.5" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <Input required className="mt-1.5" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <Textarea required rows={6} className="mt-1.5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-gold text-navy font-bold h-12">
                    Send Message
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
