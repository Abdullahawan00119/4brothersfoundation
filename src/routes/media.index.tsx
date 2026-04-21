import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { news, formatDate, type NewsCategory } from "@/data/news";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";

export const Route = createFileRoute("/media/")({
  component: MediaIndex,
  head: () => ({
    meta: [
      { title: "Media & Updates — 4 Brothers Welfare Trust" },
      { name: "description", content: "News, press releases, event coverage and impact reports from 4 Brothers Welfare Trust." },
    ],
  }),
});

const categories: ("All" | NewsCategory)[] = ["All", "News", "Stories", "Press Release", "Events", "Reports"];

function MediaIndex() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return news
      .filter((n) => (active === "All" ? true : n.category === active))
      .filter((n) =>
        query.trim()
          ? (n.title + n.excerpt).toLowerCase().includes(query.toLowerCase())
          : true
      )
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [active, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Media & Updates"
        title={<>News, stories & <span className="text-gradient-gold">field reports</span></>}
        subtitle="Stay close to our work — read the latest from our programs, press releases and impact reports."
      />

      <section className="py-16 bg-background">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    active === c
                      ? "bg-gradient-gold text-navy border-transparent shadow-glow"
                      : "bg-background border-border text-foreground/80 hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search updates…"
                className="w-full h-11 pl-10 pr-4 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
          </div>

          {featured && (
            <Reveal>
              <Link
                to="/media/$slug"
                params={{ slug: featured.slug }}
                className="group grid lg:grid-cols-2 gap-8 items-stretch bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all mb-12"
              >
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex w-fit text-xs uppercase tracking-widest bg-accent text-primary px-3 py-1.5 rounded-full font-bold">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-5 font-display text-2xl sm:text-4xl font-extrabold leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="size-3.5" /> {formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {featured.readMin} min read</span>
                  </div>
                  <div className="mt-7 inline-flex items-center gap-2 text-gold font-semibold">
                    Read full story <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">No updates match your filters.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <Link
                    to="/media/$slug"
                    params={{ slug: p.slug }}
                    className="group block h-full bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
                        <span className="inline-block bg-accent text-primary px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">{p.category}</span>
                        <span className="inline-flex items-center gap-1"><Calendar className="size-3" /> {formatDate(p.date)}</span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
