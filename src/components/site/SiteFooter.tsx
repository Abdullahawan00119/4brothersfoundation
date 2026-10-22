import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
const logo = "/logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
      <div className="container-x relative pt-14 sm:pt-20 pb-8 sm:pb-10">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="" className="h-12 w-auto" />
              <div>
                <div className="font-sans font-bold text-lg">4 Brothers</div>
                <div className="text-xs tracking-[0.18em] uppercase text-white/60">Welfare Trust</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Together as humans, we build hope, restore dignity and change lives
              across Quetta and Balochistan through food, education, healthcare
              and emergency relief.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com/4brotherswelfare", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="size-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy transition-all flex items-center justify-center"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/75">
              {[
                ["/about", "About Us"],
                ["/management", "Our Management"],
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
            <h4 className="font-sans font-bold mb-4 text-gold">Get in Touch</h4>
            <ul className="space-y-3.5 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-gold shrink-0" /> Spini Road, Quetta, Balochistan, Pakistan</li>
              <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-gold shrink-0" /> <a href="tel:+923333610874" className="hover:text-gold transition-colors">+92 333-3610874</a></li>
              <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:info@4brothersfoundation.com" className="hover:text-gold transition-colors">info@4brothersfoundation.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-white/60">
          <p>© {year} 4 Brothers Welfare Trust. All rights reserved.</p>
          <p className="text-xs text-white/75">
            Developed by{" "}
            <a
              href="https://abdullahawan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:underline transition-all"
            >
              Developer
            </a>
          </p>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:text-gold text-xs">Privacy</a>
            <a href="#" className="hover:text-gold text-xs">Terms</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="size-9 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform ml-2"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
