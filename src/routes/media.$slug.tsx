import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { news, formatDate } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Heart, User, MapPin } from "lucide-react";

export const Route = createFileRoute("/media/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = news.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — 4 Brothers Welfare Trust` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.image },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.article.image },
        ]
      : [{ title: "Article — 4 Brothers Welfare Trust" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-[70vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="font-display text-4xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The story you're looking for may have been moved.</p>
        <Link to="/media" className="mt-6 inline-flex">
          <Button className="bg-gradient-gold text-navy font-semibold">Back to Media</Button>
        </Link>
      </div>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = news.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-28 xs:pt-32 pb-10 sm:pb-16 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container-x relative max-w-4xl px-4 sm:px-6">
          <Reveal>
            <Link to="/media" className="inline-flex items-center gap-2 text-white/80 hover:text-gold text-xs sm:text-sm font-medium">
              <ArrowLeft className="size-4" /> Back to Media
            </Link>
            <div>
              <span className="mt-4 sm:mt-6 inline-block text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] bg-gold text-navy px-3 py-1 sm:py-1.5 rounded-full font-bold">
                {article.category}
              </span>
            </div>
            <h1 className="mt-4 sm:mt-5 font-display text-2xl xs:text-3xl sm:text-5xl font-extrabold leading-[1.18] sm:leading-[1.1]">
              {article.title}
            </h1>
            <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-white/85 max-w-3xl leading-relaxed">{article.excerpt}</p>
            <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5"><User className="size-3.5 sm:size-4 text-gold" /> {article.author}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 sm:size-4 text-gold" /> {article.location}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5 sm:size-4 text-gold" /> {formatDate(article.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5 sm:size-4 text-gold" /> {article.readMin} min read</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-background">
        <div className="container-x max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant aspect-[16/9] -mt-16 sm:-mt-24 mb-8 sm:mb-12 border-2 sm:border-4 border-background">
              <img src={article.image} alt={article.title} className="size-full object-cover" />
            </div>
          </Reveal>

          <article className="prose prose-lg max-w-none">
            {article.body.map((p: string, i: number) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-foreground/90 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">{p}</p>
              </Reveal>
            ))}
          </article>

          <Reveal>
            <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Share:</span>
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="share"
                    className="size-9 sm:size-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-gradient-gold hover:text-navy transition-all"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <Link to="/donate" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-gold text-navy font-bold h-11 px-6">
                  <Heart className="size-4 mr-2 fill-navy" /> Support our work
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-muted/40 border-t border-border">
        <div className="container-x max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-xl sm:text-3xl font-bold mb-6 sm:mb-10">More from our newsroom</h2>
          </Reveal>
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 no-scrollbar">
            {related.map((p, i) => (
              <div key={p.slug} className="w-[82vw] xs:w-[72vw] sm:w-auto shrink-0 snap-center h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <Link
                    to="/media/$slug"
                    params={{ slug: p.slug }}
                    className="group block h-full bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{p.category}</span>
                      <h3 className="mt-1.5 font-display font-bold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                      <p className="mt-auto pt-2 text-[11px] text-muted-foreground">{formatDate(p.date)}</p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
