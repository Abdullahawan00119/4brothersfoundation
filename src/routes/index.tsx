import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ImpactStats } from "@/components/site/ImpactStats";
import { Programs } from "@/components/site/Programs";
import { Stories } from "@/components/site/Stories";
import { DonateCTA } from "@/components/site/DonateCTA";
import { LatestNews } from "@/components/site/LatestNews";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "4 Brothers Welfare Trust — Together as Humans" },
      {
        name: "description",
        content:
          "Donate, volunteer or partner with 4 Brothers Welfare Trust. Food, education, healthcare and emergency relief for families across Pakistan.",
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <Programs />
      <Stories />
      <DonateCTA />
      <LatestNews />
    </>
  );
}
