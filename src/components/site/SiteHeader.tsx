import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/media", label: "Media" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="4 Brothers Welfare Trust logo"
            className={`transition-all duration-300 ${scrolled ? "h-10" : "h-12"} w-auto drop-shadow`}
            whileHover={{ rotate: 8, scale: 1.05 }}
          />
          <div className="leading-tight hidden sm:block">
            <div className={`font-display font-bold ${scrolled ? "text-foreground" : "text-white"}`}>
              4 Brothers Welfare
            </div>
            <div className={`text-[11px] tracking-[0.18em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Together as Humans
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-accent"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              activeProps={{
                className: scrolled
                  ? "px-4 py-2 rounded-md text-sm font-semibold text-primary bg-accent"
                  : "px-4 py-2 rounded-md text-sm font-semibold text-white bg-white/15",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="hidden sm:block">
            <Button className="bg-gradient-gold text-navy font-semibold hover:opacity-95 shadow-glow">
              <Heart className="size-4 mr-1.5 fill-navy" /> Donate
            </Button>
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-foreground/90 hover:bg-accent font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/donate" onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full bg-gradient-gold text-navy font-semibold">
                  <Heart className="size-4 mr-1.5 fill-navy" /> Donate Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
