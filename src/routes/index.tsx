import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ImpactStats } from "@/components/site/ImpactStats";
import { Programs } from "@/components/site/Programs";
import { TransparencyModel } from "@/components/site/TransparencyModel";
import { Leadership } from "@/components/site/Leadership";
import { FieldCoordinators } from "@/components/site/FieldCoordinators";
import { VolunteerHelpdesk } from "@/components/site/VolunteerHelpdesk";
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
      <LatestNews />
      <Programs />
      <TransparencyModel />
      <Leadership />
      <FieldCoordinators />
      <VolunteerHelpdesk />
      <DonateCTA />
    </>
  );
}
