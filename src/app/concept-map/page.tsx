import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  Clapperboard,
  Cuboid,
  Glasses,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero } from "@/components/showcase";
import { conceptBridges, conceptMapClusters } from "@/lib/content";
import { pageVisuals, showcaseImages } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Concept Map: From Metaverse and AI Video to World Models",
  description:
    "A structured map connecting Minecraft-style worlds, metaverse, Vision Pro, AI video, digital twins, physical AI, and world models.",
  alternates: {
    canonical: "/concept-map",
  },
};

const mapIcons = [Boxes, Clapperboard, Glasses, Building2, BrainCircuit];

export default function ConceptMapPage() {
  return (
    <main className="page-shell showcase-page concept-map-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Concept Map: From Metaverse and AI Video to World Models",
          description: metadata.description,
          datePublished: "2026-04-28",
          dateModified: "2026-05-27",
          mainEntityOfPage: absoluteUrl("/concept-map"),
        }}
      />

      <ShowcaseHero
        description="Minecraft, AI video, spatial computing, digital twins, physical AI, and world models are easier to understand as one visual chain."
        eyebrow="Concept map"
        meta={["Virtual worlds", "AI video", "Spatial computing", "Physical AI"]}
        primaryCta={{ href: "/what-is-world-model", label: "Start definition" }}
        secondaryCta={{ href: "/models", label: "See models" }}
        title="From familiar worlds to AI-generated worlds."
        visual={pageVisuals["concept-map"]}
      />

      <section className="map-thesis">
        <div>
          <p className="eyebrow">Core sentence</p>
          <h2>Virtual worlds were built by humans. Now AI is learning to generate, control, and simulate them.</h2>
        </div>
        <p>
          This sentence is the spine of the site. Minecraft and Roblox explain
          the user mental model. The metaverse explains persistence and social
          space. Vision Pro explains spatial computing. EMO, Veo, Wan, Kling,
          and Ray explain controllable video. Cosmos and digital twins explain
          simulation. World models connect all of it into one technical future.
        </p>
      </section>

      <SceneExplainer
        description="The map works best as a consumer story: start from what people already know, then reveal the new layer."
        steps={[
          {
            eyebrow: "Known worlds",
            title: "Games and metaverse taught the interface.",
            body: "People already understand avatars, spaces, inventories, maps, and shared places.",
            image: showcaseImages.civilization,
            accentColor: "#f6d26e",
          },
          {
            eyebrow: "Generated media",
            title: "AI video made the world visible.",
            body: "Synthetic scenes became easy to watch, remix, and share, but still behaved like clips.",
            image: showcaseImages.videoToWorlds,
            accentColor: "#ff7fa6",
          },
          {
            eyebrow: "World models",
            title: "The next layer is enterable and controllable.",
            body: "The scene starts to remember space, respond to action, and support agents or physical simulation.",
            image: showcaseImages.spatial3d,
            accentColor: "#76ffe5",
          },
        ]}
        title="A three-step visual map."
      />

      <section className="map-flow" aria-labelledby="map-flow-title">
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">Concept flow</p>
            <h2 id="map-flow-title">How familiar ideas lead to world models.</h2>
          </div>
          <Link className="text-link" href="/what-is-world-model">
            Definition page
          </Link>
        </div>

        <div className="flow-lanes">
          {conceptMapClusters.map((cluster, index) => {
            const Icon = mapIcons[index] ?? Cuboid;
            return (
              <article className="flow-lane" key={cluster.slug}>
                <div className="flow-lane-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p className="eyebrow">{cluster.eyebrow}</p>
                <h3>{cluster.title}</h3>
                <p>{cluster.thesis}</p>
                {index < conceptMapClusters.length - 1 ? (
                  <ArrowRight className="flow-arrow" size={20} aria-hidden="true" />
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="map-clusters" aria-label="Detailed concept clusters">
        {conceptMapClusters.map((cluster) => (
          <article className="cluster-section" id={cluster.slug} key={cluster.slug}>
            <div className="cluster-intro">
              <p className="eyebrow">{cluster.eyebrow}</p>
              <h2>{cluster.title}</h2>
              <p>{cluster.thesis}</p>
            </div>
            <div className="cluster-node-grid">
              {cluster.nodes.map((node) => (
                <div className="cluster-node" key={node.title}>
                  <span>{node.label}</span>
                  <h3>{node.title}</h3>
                  <p>{node.summary}</p>
                  <div className="example-row">
                    {node.examples.map((example) => (
                      <small key={example}>{example}</small>
                    ))}
                  </div>
                  <strong>{node.bridge}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="bridge-table-section">
        <div className="section-heading">
          <p className="eyebrow">Bridge table</p>
          <h2>What each familiar concept contributes.</h2>
        </div>
        <table className="data-table map-table">
          <thead>
            <tr>
              <th>Entry concept</th>
              <th>Known for</th>
              <th>Connects to</th>
              <th>Meaning inside world models</th>
            </tr>
          </thead>
          <tbody>
            {conceptBridges.map((bridge) => (
              <tr key={bridge.from}>
                <td>{bridge.from}</td>
                <td>{bridge.knownFor}</td>
                <td>{bridge.connectsTo}</td>
                <td>{bridge.worldModelMeaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
