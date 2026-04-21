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
    <section className="relative pt-40 pb-20 bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute -top-32 -right-32 size-[28rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">{eyebrow}</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold max-w-3xl leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
