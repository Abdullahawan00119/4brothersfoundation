import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { news, formatDate } from "@/data/news";

export function LatestNews() {
  const items = news.slice(0, 3);
  return (
    <section className="py-16 sm:py-24 bg-slate-50/80 dark:bg-slate-900/40 border-t border-border/60">
      <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-bold mb-2">
              Media & Field Reports
            </p>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Latest Stories From The Ground
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/media"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-gold transition-colors"
            >
              View all updates
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/media/$slug"
                params={{ slug: p.slug }}
                className="group block h-full bg-card rounded-2xl overflow-hidden border border-border/70 shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 text-xs text-muted-foreground mb-2.5">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <Calendar className="size-3 text-gold" /> {formatDate(p.date)}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/70 inline-flex items-center gap-1.5 text-gold font-bold text-xs">
                    Read full report
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
