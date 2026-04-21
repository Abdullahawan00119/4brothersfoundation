import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { news, formatDate } from "@/data/news";

export function LatestNews() {
  const items = news.slice(0, 3);
  return (
    <section className="py-24 bg-muted/40">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">Media & Updates</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold max-w-xl">
              Latest <span className="text-gradient-gold">stories from the field</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/media" className="inline-flex items-center gap-2 text-primary font-semibold group">
              View all updates
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                to="/media/$slug"
                params={{ slug: p.slug }}
                className="group block h-full bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-block bg-accent text-primary px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3" /> {formatDate(p.date)}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {p.readMin} min</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-gold font-semibold text-sm">
                    Read story
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
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
