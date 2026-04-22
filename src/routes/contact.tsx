import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — 4 Brothers Welfare Trust" },
      { name: "description", content: "Reach our team for partnerships, donations or volunteering enquiries." },
      { property: "og:title", content: "Contact — 4 Brothers Welfare Trust" },
      { property: "og:description", content: "Reach our team for partnerships, donations or volunteering enquiries." },
      { property: "og:type", content: "website" },
    ],
  }),
});

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    text: "Quetta, Pakistan",
    sub: "Balochistan Province",
    color: "bg-amber-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "4.brothersqta@gmail.com",
    sub: "We reply within 48 hours",
    color: "bg-sky-500",
    href: "mailto:4.brothersqta@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon – Sat • 9am – 7pm",
    sub: "PKT (UTC+5)",
    color: "bg-emerald-500",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-28 pt-36 text-center"
        style={{ background: "linear-gradient(135deg, oklch(0.11 0.07 260) 0%, oklch(0.17 0.09 254) 50%, oklch(0.21 0.10 248) 100%)" }}
      >
        <div className="container-x max-w-2xl mx-auto text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold mb-4">Get in Touch</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5">
            We'd love to{" "}
            <span className="text-gradient-gold">hear from you.</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Whether it's about donating, partnering or just saying hello — drop us a line and we'll get back to you.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}

      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contactItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant hover:border-gold/40 transition-all text-center"
                >
                  <div className={`inline-flex p-3.5 rounded-2xl ${item.color} text-white mb-4`}>
                    <item.icon className="size-6" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-display font-bold text-base hover:text-gold transition-colors break-all"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="font-display font-bold text-base">{item.text}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form ── */}
      <section className="pb-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">

          {/* Google Map — Quetta */}
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-[450px] lg:h-full min-h-[380px]">
              <iframe
                title="Quetta, Pakistan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115870.84535987792!2d66.93005!3d30.18414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2f8e7a0e7e511%3A0x9a2d4c7a1fc59f65!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713800000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.15}>
            <div
              className="relative rounded-3xl border border-white/[0.10] p-8 sm:p-10 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, oklch(0.14 0.07 260 / 0.85) 0%, oklch(0.18 0.09 255 / 0.85) 100%)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 80px oklch(0.78 0.17 70 / 0.07), inset 0 1px 0 oklch(1 0 0 / 0.06)",
              }}
            >
              <div className="absolute -top-16 -right-16 size-56 rounded-full blur-3xl pointer-events-none"
                style={{ background: "oklch(0.78 0.17 70 / 0.10)" }} />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-14 text-center relative"
                >
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.6 }}>
                    <CheckCircle2 className="size-20 text-gold mx-auto mb-5" />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Message sent!</h3>
                  <p className="text-white/60 text-lg">We'll get back to you within 48 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="relative space-y-5"
                >
                  <div className="mb-6">
                    <h2 className="font-display text-2xl font-bold text-white">Send us a message</h2>
                    <p className="text-white/50 text-sm mt-1">We read every message personally.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-white/80">Full Name</label>
                      <Input required placeholder="Your name" className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 h-11" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/80">Email Address</label>
                      <Input required type="email" placeholder="you@email.com" className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 h-11" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/80">Subject</label>
                    <Input required placeholder="How can we help?" className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 h-11" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white/80">Message</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Write your message here…"
                      className="mt-1.5 bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus:border-gold/50 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 bg-gradient-gold text-navy font-extrabold text-base relative overflow-hidden group"
                      style={{ boxShadow: "0 0 28px oklch(0.78 0.17 70 / 0.32)" }}
                    >
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                      <Send className="size-5 mr-2 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
