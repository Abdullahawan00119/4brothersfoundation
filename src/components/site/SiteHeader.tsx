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

// Streamlined, merged navigation (5 concise links + Donate)
const nav: NavItem[] = [
  {
    to: "/about",
    label: "About Us",
    sub: [
      { to: "/about", label: "Our Story & Vision", desc: "History, mission & values" },
      { to: "/management", label: "Leadership & Team", desc: "Founders & coordinators" },
    ],
  },
  {
    to: "/programs",
    label: "Programs",
    sub: [
      { to: "/programs", label: "Hope & Ability School", desc: "Special needs education" },
      { to: "/programs", label: "Ration Distribution", desc: "Monthly food security" },
      { to: "/programs", label: "Hospital Meal Drives", desc: "BMC Hospital weekly food" },
      { to: "/programs", label: "All Programs", desc: "Water, medical & recovery" },
    ],
  },
  {
    to: "/gallery",
    label: "Media & Gallery",
    sub: [
      { to: "/gallery", label: "Photo Gallery", desc: "On-the-ground field photos" },
      { to: "/media", label: "News & Field Reports", desc: "Updates & impact stories" },
    ],
  },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close dropdown & mobile menu on outside click or tap
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  // close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdown(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isSolid = scrolled || open;
  const textColor = isSolid ? "text-foreground/80" : "text-white/90";
  const hoverBg = isSolid
    ? "hover:bg-accent hover:text-primary"
    : "hover:bg-white/10 hover:text-white";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2.5 sm:pt-3 px-2 sm:px-4">
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          isSolid
            ? "bg-background/98 backdrop-blur-xl border border-border shadow-md"
            : "bg-slate-900/60 backdrop-blur-md border border-white/15"
        }`}
        ref={dropdownRef as React.RefObject<HTMLElement>}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink min-w-0 group">
            <img
              src="/logo.png"
              alt="4 Brothers Foundation"
              className={`transition-all duration-300 ${isSolid ? "h-7 sm:h-8" : "h-7.5 sm:h-9"} w-auto shrink-0`}
            />
            <div className="leading-tight min-w-0">
              <div
                className={`font-display font-bold text-xs sm:text-sm tracking-tight truncate ${
                  isSolid ? "text-foreground" : "text-white"
                }`}
              >
                4 Brothers Foundation
              </div>
              <div
                className={`text-[8.5px] sm:text-[9px] tracking-[0.14em] uppercase font-semibold truncate hidden min-[360px]:block ${
                  isSolid ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Together as Humans
              </div>
            </div>
          </Link>

          {/* Desktop nav - clean 5 links */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.label} className="relative">
                {item.sub ? (
                  <button
                    onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${textColor} ${hoverBg}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-3 opacity-60 transition-transform duration-200 ${
                        dropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all block ${textColor} ${hoverBg}`}
                    activeProps={{
                      className: `px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold block ${
                        isSolid ? "text-primary bg-accent" : "text-white bg-white/15"
                      }`,
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.sub && dropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1.5 w-56 rounded-xl border border-border bg-background/98 backdrop-blur-xl shadow-lg overflow-hidden z-50"
                    >
                      <div className="p-1.5">
                        {item.sub.map((s) => (
                          <Link
                            key={s.label}
                            to={s.to}
                            onClick={() => setDropdown(null)}
                            className="flex flex-col px-3 py-2 rounded-lg hover:bg-accent transition-colors group"
                          >
                            <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary">
                              {s.label}
                            </span>
                            {s.desc && (
                              <span className="text-[11px] text-muted-foreground mt-0.5">
                                {s.desc}
                              </span>
                            )}
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
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link to="/donate">
              <Button className="bg-gradient-gold text-navy font-bold h-7.5 sm:h-8 px-2.5 sm:px-3.5 text-xs sm:text-sm shadow-sm hover:opacity-95">
                <Heart className="size-3.5 mr-1 fill-navy" />
                <span>Donate</span>
              </Button>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden p-1.5 rounded-lg transition-colors ${
                isSolid ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
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
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border/60"
            >
              <div className="px-3 sm:px-4 py-3 flex flex-col gap-1 bg-background/98 backdrop-blur-2xl max-h-[calc(100dvh-5rem)] overflow-y-auto">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  activeProps={{
                    className: "px-3 py-2 rounded-lg text-sm font-bold text-primary bg-accent/70",
                  }}
                >
                  Home
                </Link>

                {nav.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.sub ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`size-4 text-muted-foreground transition-transform duration-200 ${
                              mobileExpanded === item.label ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-1 border-l-2 border-primary/20 ml-3 my-1"
                            >
                              {item.sub.map((s) => (
                                <Link
                                  key={s.label}
                                  to={s.to}
                                  onClick={() => setOpen(false)}
                                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-foreground/85 hover:text-primary hover:bg-accent transition-colors"
                                  activeProps={{
                                    className:
                                      "px-2.5 py-1.5 rounded-lg text-xs font-bold text-primary bg-accent/70",
                                  }}
                                >
                                  <div>{s.label}</div>
                                  {s.desc && (
                                    <div className="text-[10.5px] text-muted-foreground mt-0.5">
                                      {s.desc}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                        activeProps={{
                          className:
                            "px-3 py-2 rounded-lg text-sm font-bold text-primary bg-accent/70",
                        }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-2 pb-1 border-t border-border/50 mt-1">
                  <Link to="/donate" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gradient-gold text-navy font-bold h-9 shadow-sm hover:opacity-95">
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
