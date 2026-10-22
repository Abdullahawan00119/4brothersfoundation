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
      /* { to: "/programs", label: "Hope & Ability School", desc: "Special needs education" }, */
      { to: "/programs", label: "Ration Distribution", desc: "Monthly food security" },
      { to: "/programs", label: "Hospital Meal Drives", desc: "BMC Hospital weekly food" },
      { to: "/programs", label: "All Programs", desc: "Key welfare initiatives" },
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
    const onScroll = () => setScrolled(window.scrollY > 15);
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2.5 sm:pt-3.5 px-2.5 sm:px-4 pointer-events-none">
      <header
        ref={dropdownRef as React.RefObject<HTMLElement>}
        role="banner"
        className={`w-full max-w-5xl rounded-2xl pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "bg-[#061430]/95 backdrop-blur-2xl border border-white/20 shadow-xl shadow-black/30 py-2 sm:py-2.5 px-3 sm:px-5"
            : "bg-[#061430]/85 backdrop-blur-xl border border-white/15 shadow-lg py-2.5 sm:py-3 px-3 sm:px-5"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Brand Identity (Clean without extra badges or pulsing dots) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink min-w-0 group"
            aria-label="4 Brothers Foundation Home"
          >
            <img
              src="/logo.png"
              alt="4 Brothers Welfare Trust logo"
              className="h-7.5 sm:h-8.5 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
            />

            <div className="leading-tight min-w-0">
              <div className="font-display font-bold text-xs sm:text-sm tracking-tight truncate text-white">
                4 Brothers Foundation
              </div>
              <div className="text-[9px] sm:text-[9.5px] tracking-[0.14em] uppercase font-semibold truncate text-white/70">
                Together as Humans
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main navigation">
            {nav.map((item) => {
              const isSubActive =
                item.sub && item.sub.some((s) => location.pathname === s.to);
              const isDirectActive = location.pathname === item.to;
              const isActive = isDirectActive || isSubActive;

              return (
                <div key={item.label} className="relative">
                  {item.sub ? (
                    <button
                      onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                        isActive
                          ? "text-gold bg-white/10 font-semibold"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                      aria-expanded={dropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-3 opacity-60 transition-transform duration-200 ${
                          dropdown === item.label ? "rotate-180 text-gold opacity-100" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.to}
                      className={`px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all block ${
                        isActive
                          ? "text-gold bg-white/10 font-semibold"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown Card */}
                  <AnimatePresence>
                    {item.sub && dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-60 rounded-2xl border border-white/15 bg-[#07193d]/98 backdrop-blur-2xl shadow-2xl overflow-hidden z-50 p-2"
                      >
                        <div className="flex flex-col gap-1">
                          {item.sub.map((s) => (
                            <Link
                              key={s.label}
                              to={s.to}
                              onClick={() => setDropdown(null)}
                              className="flex flex-col px-3 py-2 rounded-xl hover:bg-white/10 transition-colors group text-left"
                            >
                              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold transition-colors">
                                {s.label}
                              </span>
                              {s.desc && (
                                <span className="text-[11px] text-white/60 group-hover:text-white/80 transition-colors mt-0.5">
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
              );
            })}
          </nav>

          {/* Right Action: Donate Button & Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/donate">
              <Button
                className="bg-gradient-gold text-navy font-bold text-xs sm:text-sm h-7.5 sm:h-8.5 px-3 sm:px-4 shadow-sm hover:opacity-95 active:scale-95 transition-all rounded-xl"
              >
                <Heart className="size-3.5 mr-1 fill-navy" />
                <span>Donate</span>
              </Button>
            </Link>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10 mt-2.5 pt-2"
            >
              <div className="flex flex-col gap-1 max-h-[calc(100dvh-6rem)] overflow-y-auto">
                {nav.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.sub ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`size-4 text-white/60 transition-transform duration-200 ${
                              mobileExpanded === item.label ? "rotate-180 text-gold" : ""
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
                              className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-1 border-l border-gold/30 ml-3 my-1"
                            >
                              {item.sub.map((s) => (
                                <Link
                                  key={s.label}
                                  to={s.to}
                                  onClick={() => setOpen(false)}
                                  className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/80 hover:text-gold hover:bg-white/10 transition-colors"
                                >
                                  <div>{s.label}</div>
                                  {s.desc && (
                                    <div className="text-[10px] text-white/50 mt-0.5">
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
                        className="px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-2 border-t border-white/10 mt-1">
                  <Link to="/donate" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gradient-gold text-navy font-bold h-9.5 rounded-xl">
                      <Heart className="size-4 mr-2 fill-navy" /> Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
