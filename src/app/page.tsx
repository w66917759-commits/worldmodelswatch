import type { Metadata } from "next";
import Link from "next/link";

import { HeroWordSquares } from "@/components/home/HeroWordSquares";
import { JsonLd } from "@/components/json-ld";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/");

export const metadata: Metadata = metadataForRoute("/");

export default function Home() {
  return (
    <main className="world-portal-home min-h-screen bg-black text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "World Models Watch",
          url: site.url,
          description: seoTarget.description,
          sameAs: site.sameAs,
        }}
      />
      <HeroWordSquares />
      <section className="home-editorial-section" aria-labelledby="home-editorial-title">
        <div className="home-editorial-intro">
          <p className="home-editorial-kicker">Editorial guide</p>
          <h2 id="home-editorial-title">How World Models Watch evaluates AI world models.</h2>
          <p>
            World Models Watch is not a generator, a marketplace, or a generic
            AI tool directory. The site follows public evidence about systems
            that create, simulate, reconstruct, or control worlds, then separates
            those systems by what people can actually do with them. A reader
            should be able to tell whether a page describes a usable product, an
            open research stack, a limited demo, a robotics platform, or a
            reported product signal that still needs stronger confirmation.
          </p>
        </div>

        <div className="home-editorial-grid">
          <article>
            <h3>What counts as a world model signal?</h3>
            <p>
              A world model signal earns coverage when it changes how readers
              should understand generated environments, spatial memory,
              action-conditioned simulation, embodied AI, or many-agent worlds.
              Marble and Skybox AI matter because they give creators visible
              spatial outputs. Genie and Oasis matter because they make
              interaction and control easier to see. LingBot, Cosmos, HY-World,
              and related open stacks matter because they connect public code,
              model weights, benchmarks, or robotics workflows to the same
              broader category.
            </p>
            <p>
              The page language stays conservative on purpose. If a source only
              proves a 360 panorama workflow, the page should not call it a
              persistent simulator. If a research preview is not a public API,
              the page should not present it as a ready developer platform. This
              boundary is the main value of the site: readers get a map of the
              category without having to treat every demo reel as the same kind
              of product.
            </p>
          </article>

          <article>
            <h3>How sources are ranked.</h3>
            <p>
              The strongest evidence is a primary source: an official project
              page, documentation page, GitHub repository, model card, paper, or
              product announcement. Reported sources can be useful for tracking
              early access or regional product movement, but they are marked as
              reported and should not carry the same weight as a release note
              from the organization that built the system. Every model dossier
              and release signal should leave a reader with a path back to the
              source, a short explanation of what changed, and a clear warning
              about what the source does not prove.
            </p>
            <p>
              This approach also protects readers from the most common category
              mistakes. A video avatar model can be relevant to world modeling
              without being an explorable world. A robot policy model can be
              part of physical AI without being a consumer world creator. A
              many-agent simulation can be important for persistent behavior
              without proving that a visual generator has solved long-term
              world consistency.
            </p>
          </article>

          <article>
            <h3>How to use the site.</h3>
            <p>
              Start with the <Link href="/models">company map</Link> when you
              want stable profiles for specific systems. Use{" "}
              <Link href="/compare">decision guides</Link> when you need to
              choose between product lanes, such as a 360 skybox workflow versus
              a generated 3D world workflow. Open{" "}
              <Link href="/news">release signals</Link> when you need to know
              what changed recently, then follow the related model or comparison
              page for the slower, more durable context.
            </p>
            <p>
              The site intentionally links news back to stable pages instead of
              forcing every update to become a new standalone landing page. That
              keeps the public surface closer to a source-backed reference and
              further from a programmatic SEO wall. The goal is not to publish a
              page for every keyword variation; it is to give readers enough
              context to decide which demos are usable, which stacks are
              reproducible, and which claims need more evidence.
            </p>
          </article>

          <article>
            <h3>What gets updated.</h3>
            <p>
              Updates are prioritized when they change access, reproducibility,
              category boundaries, or real user choices. A new API page, a model
              weight release, a benchmark script, a documented pricing or queue
              limit, or a product rollout can all justify a new signal. A vague
              marketing post, a reposted demo clip, or an unsupported rumor
              usually should not. When the site does publish an update, the page
              should explain why the change matters and where the reader should
              verify the current status.
            </p>
            <p>
              This means World Models Watch can stay useful even when the field
              moves fast. The homepage shows the visible front door, but the
              underlying editorial work is slower: classify the system, check
              the strongest source, compare it with adjacent systems, state the
              limit, and keep the source trail available for readers who need to
              inspect the claim themselves.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
