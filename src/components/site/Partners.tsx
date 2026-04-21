const partners = [
  "JazzCash", "EasyPaisa", "HBL", "Meezan Bank", "PTCL", "Engro",
  "Telenor", "K-Electric", "Habib University", "DAWN", "ARY", "Geo News",
];

export function Partners() {
  return (
    <section className="py-20 bg-muted/40 border-y border-border overflow-hidden">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-10">
          Trusted by partners across Pakistan
        </p>
      </div>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-14 px-7">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="shrink-0 grid place-items-center px-6 py-4 rounded-xl bg-card border border-border min-w-[180px] font-display font-bold text-lg text-muted-foreground hover:text-primary hover:border-gold transition-all"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
