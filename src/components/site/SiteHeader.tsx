import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  to: string;
  label: string;
  sub?: { to: string; label: string; desc?: string }[];
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    sub: [
      { to: "/about", label: "Our Story",    desc: "History, mission & vision" },
      { to: "/about", label: "Our Team",     desc: "Founders & leadership" },
      { to: "/about", label: "Core Values",  desc: "What guides every decision" },
    ],
  },
  {
    to: "/programs",
    label: "Programs",
    sub: [
      { to: "/programs", label: "Food & Ration",    desc: "Weekly meals & ration packs" },
      { to: "/programs", label: "Education",         desc: "Books, tuition & uniforms" },
      { to: "/programs", label: "Healthcare",        desc: "Free camps & surgeries" },
      { to: "/programs", label: "Clean Water",       desc: "Wells & filtration plants" },
      { to: "/programs", label: "Emergency Relief",  desc: "Flood & disaster response" },
      { to: "/programs", label: "Orphan Care",       desc: "Sponsorships for children" },
    ],
  },
  { to: "/gallery", label: "Gallery" },
  {
    to: "/media",
    label: "Media",
    sub: [
      { to: "/media", label: "News & Updates",  desc: "Latest field reports" },
      { to: "/media", label: "Press Releases",  desc: "Official announcements" },
      { to: "/media", label: "Impact Reports",  desc: "Annual & quarterly data" },
    ],
  },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact",      label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [dropdown, setDropdown]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); setDropdown(null); }, [location.pathname]);

  const textColor = scrolled ? "text-foreground/80" : "text-white/90";
  const hoverBg   = scrolled ? "hover:bg-accent hover:text-primary" : "hover:bg-white/10 hover:text-white";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border border-border shadow-elegant"
            : "bg-white/[0.06] backdrop-blur-xl border border-white/10"
        }`}
        ref={dropdownRef as React.RefObject<HTMLElement>}
      >
        <div className="flex items-center justify-between px-5 py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <motion.img
              src="/logo.png"
              alt="4 Brothers Welfare Trust"
              className={`transition-all duration-300 ${scrolled ? "h-9" : "h-10"} w-auto drop-shadow`}
              whileHover={{ rotate: 8, scale: 1.06 }}
            />
            <div className="leading-tight hidden sm:block">
              <div className={`font-display font-bold text-sm ${scrolled ? "text-foreground" : "text-white"}`}>
                4 Brothers Welfare
              </div>
              <div className={`text-[10px] tracking-[0.18em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/60"}`}>
                Together as Humans
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <div key={item.to} className="relative">
                {item.sub ? (
                  <button
                    onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${textColor} ${hoverBg}`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: dropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="size-3.5 opacity-60" />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all block ${textColor} ${hoverBg}`}
                    activeProps={{ className: `px-3.5 py-2 rounded-xl text-sm font-semibold block ${scrolled ? "text-primary bg-accent" : "text-white bg-white/15"}` }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.sub && dropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-border bg-background/95 backdrop-blur-2xl shadow-elegant overflow-hidden"
                    >
                      <div className="p-1.5">
                        {item.sub.map((s) => (
                          <Link
                            key={s.label}
                            to={s.to}
                            onClick={() => setDropdown(null)}
                            className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-accent transition-colors group"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary">{s.label}</span>
                            {s.desc && <span className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link to="/donate" className="hidden sm:block">
              <Button className="bg-gradient-gold text-navy font-semibold h-9 px-5 text-sm shadow-glow hover:opacity-95">
                <Heart className="size-3.5 mr-1.5 fill-navy" /> Donate
              </Button>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              <div className="px-4 py-3 flex flex-col gap-0.5">
                {nav.map((item) => (
                  <div key={item.label}>
                    {item.sub ? (
                      <>
                        <button
                          onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:bg-accent transition-colors"
                        >
                          {item.label}
                          <motion.span animate={{ rotate: mobileOpen === item.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="size-4 opacity-50" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {mobileOpen === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-3"
                            >
                              {item.sub.map((s) => (
                                <Link
                                  key={s.label}
                                  to={s.to}
                                  onClick={() => setOpen(false)}
                                  className="flex flex-col px-3 py-2 rounded-xl hover:bg-accent transition-colors"
                                >
                                  <span className="text-sm font-medium text-foreground/80">{s.label}</span>
                                  {s.desc && <span className="text-[11px] text-muted-foreground">{s.desc}</span>}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:bg-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 pb-1">
                  <Link to="/donate" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gradient-gold text-navy font-semibold">
                      <Heart className="size-4 mr-1.5 fill-navy" /> Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
