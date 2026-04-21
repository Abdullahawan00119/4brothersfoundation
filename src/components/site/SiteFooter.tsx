import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="" className="h-12 w-auto" />
              <div>
                <div className="font-display font-bold text-lg">4 Brothers</div>
                <div className="text-xs tracking-[0.18em] uppercase text-white/60">Welfare Trust</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Together as humans, we build hope, restore dignity and change lives
              across Quetta and Balochistan through food, education, healthcare
              and emergency relief.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="size-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {[
                ["/about", "About Us"],
                ["/programs", "Our Programs"],
                ["/gallery", "Gallery"],
                ["/media", "Media & Updates"],
                ["/get-involved", "Volunteer"],
                ["/donate", "Donate"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-gold">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-gold shrink-0" /> Sariab Road, Quetta, Balochistan, Pakistan</li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-gold shrink-0" /> +92 81 000 0000</li>
              <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-gold shrink-0" /> info@4brotherswelfare.org</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-5 text-gold">Stay Updated</h4>
            <p className="text-sm text-white/70 mb-4">
              Get monthly stories of impact straight to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-gold"
              />
              <Button type="submit" className="bg-gradient-gold text-navy font-semibold">Join</Button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {year} 4 Brothers Welfare Trust. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="size-9 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
