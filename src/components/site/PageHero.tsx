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
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-[#071739] via-[#0C2D6E] to-[#185FA5] text-white overflow-hidden">
      {/* Subtle geometric texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-x max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
        <Reveal>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md mb-4 sm:mb-5">
            <span className="size-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>

          {/* Heading with clean professional sans font */}
          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {/* Optional children */}
          {children && <div className="mt-6 sm:mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
