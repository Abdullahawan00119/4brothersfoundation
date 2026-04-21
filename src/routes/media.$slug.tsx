import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { news, formatDate } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, Heart, User } from "lucide-react";

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
      <section className="relative pt-32 pb-12 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="container-x relative max-w-4xl">
          <Reveal>
            <Link to="/media" className="inline-flex items-center gap-2 text-white/80 hover:text-gold text-sm font-medium">
              <ArrowLeft className="size-4" /> Back to Media
            </Link>
            <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.2em] bg-gold text-navy px-3 py-1.5 rounded-full font-bold">
              {article.category}
            </span>
            <h1 className="mt-5 font-display text-3xl sm:text-5xl font-extrabold leading-[1.1]">
              {article.title}
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-3xl">{article.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5"><User className="size-4 text-gold" /> {article.author}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="size-4 text-gold" /> {formatDate(article.date)}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4 text-gold" /> {article.readMin} min read</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[16/9] -mt-24 mb-12 border-4 border-background">
              <img src={article.image} alt={article.title} className="size-full object-cover" />
            </div>
          </Reveal>

          <article className="prose prose-lg max-w-none">
            {article.body.map((p: string, i: number) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-foreground/90 text-lg leading-relaxed mb-6">{p}</p>
              </Reveal>
            ))}
          </article>

          <Reveal>
            <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">Share:</span>
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="share"
                    className="size-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-gradient-gold hover:text-navy transition-all"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <Link to="/donate">
                <Button className="bg-gradient-gold text-navy font-bold h-11 px-6">
                  <Heart className="size-4 mr-2 fill-navy" /> Support our work
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">More from our newsroom</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to="/media/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{p.category}</span>
                    <h3 className="mt-2 font-display font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{formatDate(p.date)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
