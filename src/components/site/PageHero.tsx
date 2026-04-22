import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section 
      className="relative py-28 pt-36 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.11 0.07 260) 0%, oklch(0.17 0.09 254) 50%, oklch(0.21 0.10 248) 100%)" }}
    >
      <div className="container-x max-w-2xl mx-auto text-white relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold mb-4">{eyebrow}</p>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-5">{title}</h1>
          {subtitle && <p className="text-lg text-white/60 leading-relaxed max-w-xl mx-auto">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
