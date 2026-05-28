import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Compass, Microscope, Network } from "lucide-react";

import { WorldExplorer } from "@/components/ai-world/WorldExplorer";
import { WorldHero } from "@/components/ai-world/WorldHero";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Generated Worlds | AI World Interface",
  description:
    "An immersive video gallery for HappyOyster, Genie, Oasis, Skybox AI, World Labs, HY-World 2.0, and Project Sid, with deeper narrative routes for world-model research.",
};

const homeRouteCards = [
  {
    href: "/spatial-intelligence",
    label: "Spatial Intelligence",
    text: "Why world models are about place, action, memory, and reasoning rather than better video alone.",
    Icon: Compass,
  },
  {
    href: "/from-video-to-worlds",
    label: "From Video to Worlds",
    text: "A guided path from generated clips to controllable worlds, persistent spaces, and agent societies.",
    Icon: Network,
  },
  {
    href: "/world-model-labs",
    label: "World Model Labs",
    text: "The dedicated gallery for local demo videos, official demos, and site context for each system.",
    Icon: Boxes,
  },
  {
    href: "/research-insights",
    label: "Research Insights",
    text: "Source-backed updates, timelines, comparisons, concepts, and normalized model dossiers.",
    Icon: Microscope,
  },
] as const;

function HomeRouteRail() {
  return (
    <section className="home-route-rail" aria-labelledby="home-route-title">
      <div className="home-route-intro">
        <span>Next layers</span>
        <h2 id="home-route-title">Leave the gallery for the deeper pages.</h2>
        <p>
          The homepage stays focused on video discovery. Use these routes to
          move into the explanation, lab notes, research evidence, and model
          records behind the visual demos.
        </p>
      </div>

      <div className="home-route-grid">
        {homeRouteCards.map(({ href, label, text, Icon }) => (
          <Link className="home-route-card" href={href} key={href}>
            <Icon size={22} aria-hidden="true" />
            <h3>{label}</h3>
            <p>{text}</p>
            <span>
              Open page
              <ArrowRight size={15} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Generated Worlds",
          url: site.url,
          description:
            "A spatial interface for exploring emerging AI-generated world systems.",
        }}
      />
      <WorldHero />
      <WorldExplorer />
      <HomeRouteRail />
    </main>
  );
}
