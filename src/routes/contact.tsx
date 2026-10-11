import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — 4 Brothers Welfare Trust & Foundation" },
      {
        name: "description",
        content:
          "Reach our team for donation inquiries, partnerships, school sponsorships, or volunteering in Quetta and across Pakistan.",
      },
    ],
  }),
});

const contactItems = [
  {
    icon: MapPin,
    title: "Head Office",
    text: "4 Brothers Spini Road",
    sub: "Quetta, Balochistan, Pakistan",
    color: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
  },
  {
    icon: Mail,
    title: "Official Email",
    text: "info@4brothersfoundation.com",
    sub: "Direct response within 24 hours",
    color: "bg-sky-500/10 text-sky-600 border border-sky-500/20",
    href: "mailto:info@4brothersfoundation.com",
  },
  {
    icon: Phone,
    title: "Helpline & WhatsApp",
    text: "+92 333-3610874",
    sub: "Mon – Sat • 9am – 8pm PKT",
    color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    href: "tel:+923333610874",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            We'd Love to <span className="text-gold font-bold">Hear From You.</span>
          </>
        }
        subtitle="Whether you wish to sponsor a special needs child, arrange a ration distribution, or volunteer with our field team — we are here to connect."
      />

      {/* ── Contact Info Cards ── */}
      <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-b border-border/70">
        <div className="container-x max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {contactItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center h-full">
                  <div className={`p-3 rounded-xl ${item.color} mb-3.5`}>
                    <item.icon className="size-5 sm:size-6" />
                  </div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-display font-bold text-sm sm:text-base hover:text-gold transition-colors break-all"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="font-display font-bold text-sm sm:text-base text-foreground">{item.text}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ── */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Google Map — Quetta */}
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-[380px] lg:h-[460px]">
              <iframe
                title="Quetta, Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115870.84535987792!2d66.93005!3d30.18414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2f8e7a0e7e511%3A0x9a2d4c7a1fc59f65!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713800000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border p-6 sm:p-8 bg-card shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="size-14 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Message Received</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to 4 Brothers Foundation. A member of our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fill out this quick form and our coordination office will follow up with you.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
                        Your Full Name
                      </label>
                      <Input
                        required
                        placeholder="e.g. Tariq Khan"
                        className="h-10 text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="h-10 text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
                      Phone Number (Optional)
                    </label>
                    <Input
                      placeholder="+92 3XX-XXXXXXX"
                      className="h-10 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
                      Subject / Inquiry
                    </label>
                    <Input
                      required
                      placeholder="e.g. School Sponsorship / Ration Drive"
                      className="h-10 text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-foreground/80 mb-1.5 block">
                      Your Message
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Please share any details or questions..."
                      className="text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-gold text-navy font-bold h-11 text-sm shadow-sm"
                  >
                    <Send className="size-4 mr-2" /> Submit Message
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
