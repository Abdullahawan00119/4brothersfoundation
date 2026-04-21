import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import education from "@/assets/program-education.jpg";
import medical from "@/assets/program-medical.jpg";
import water from "@/assets/program-water.jpg";
import relief from "@/assets/program-relief.jpg";
import distribution from "@/assets/hero-distribution.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — 4 Brothers Welfare Trust" },
      { name: "description", content: "Photos from our food drives, medical camps, schools and emergency response operations." },
    ],
  }),
});

const items = [
  { img: distribution, h: "tall" },
  { img: education, h: "short" },
  { img: medical, h: "short" },
  { img: water, h: "tall" },
  { img: relief, h: "short" },
  { img: distribution, h: "short" },
  { img: education, h: "tall" },
  { img: medical, h: "short" },
  { img: relief, h: "tall" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments of <span className="text-gradient-gold">impact</span></>}
        subtitle="A glimpse into our work, our people, and the families whose lives we share in."
      />

      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className={`break-inside-avoid rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all group ${it.h === "tall" ? "h-[420px]" : "h-[280px]"}`}>
                  <img
                    src={it.img}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
