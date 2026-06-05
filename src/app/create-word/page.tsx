import type { Metadata } from "next";

import { CreateWorlds } from "@/components/home/CreateWorlds";
import { JsonLd } from "@/components/json-ld";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/create-word");

export const metadata: Metadata = metadataForRoute("/create-word");

export default function CreateWordPage() {
  return (
    <main className="standalone-portal-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: seoTarget.primaryKeyword,
          url: absoluteUrl("/create-word"),
          description: seoTarget.description,
        }}
      />
      <section className="create-worlds-intro" aria-labelledby="create-worlds-page-title">
        <p className="home-editorial-kicker">Creator route</p>
        <h1 id="create-worlds-page-title">AI world generator tools people can open today.</h1>
        <p>
          This page is for readers who want to create or explore an AI-generated
          environment now, not just read about world model research. World Models
          Watch separates the practical creator lane from the broader world
          model category because the word "world" can mean several different
          outputs: a 360-degree panorama, an editable 3D scene, a promptable
          interactive demo, an open research stack, or a robotics simulation
          environment. Treating all of those as the same product would mislead
          visitors and weaken the comparison.
        </p>
      </section>
      <CreateWorlds />
      <section className="create-worlds-editorial" aria-labelledby="create-worlds-guide-title">
        <div className="portal-section-heading compact">
          <span>Selection guide</span>
          <h2 id="create-worlds-guide-title">Choose by output, not by buzzword.</h2>
          <p>
            The safest way to choose an AI world generator is to start with the
            artifact you need. A game artist looking for a background sphere, a
            product designer testing a spatial concept, and a researcher
            studying interaction all need different systems.
          </p>
        </div>

        <div className="home-editorial-grid">
          <article>
            <h3>Use a 360 environment generator when the camera stays central.</h3>
            <p>
              Skybox-style tools are useful when the deliverable is an
              immersive backdrop: a panorama for a game prototype, a VR mood
              board, a concept-art horizon, or a fast environment shell. The
              strength is speed and visual coverage around the viewer. The
              limitation is depth: a 360 environment does not automatically
              become a persistent, editable, physics-grounded 3D world.
            </p>
            <p>
              Before using a 360 output in production, verify export options,
              resolution, licensing, pending-generation limits, and whether the
              tool supports the file type required by your engine or design
              pipeline. The output can be valuable, but it should be described as
              an environment layer rather than a complete world simulator.
            </p>
          </article>

          <article>
            <h3>Use a 3D world product when editing and exploration matter.</h3>
            <p>
              Marble-style products are closer to the creator workflow people
              expect from text-to-world or image-to-world prompts. They can make
              persistent spaces easier to inspect, revise, and share. This lane
              is better for spatial concepting, virtual production studies,
              interactive world references, and early 3D asset exploration.
            </p>
            <p>
              The practical checks are different from a skybox workflow. Look
              for import paths, export formats, scene persistence, editability,
              browser performance, account requirements, pricing boundaries, and
              whether examples are public demos or reproducible user outputs.
              A strong page should tell you what can be opened today and what
              still depends on early-access terms.
            </p>
          </article>

          <article>
            <h3>Use research demos for evaluation, not guaranteed production access.</h3>
            <p>
              Genie, Oasis, HY-World, LingBot, Cosmos, and related systems are
              important because they show the direction of interactive and
              embodied worlds. They may demonstrate action conditioning,
              spatial reconstruction, robot control, or promptable environments.
              That does not automatically mean a visitor can use the same system
              as a stable SaaS product or a drop-in game engine feature.
            </p>
            <p>
              When the access path is a paper, GitHub repository, model card, or
              limited prototype, use it as evidence for capability analysis. Do
              not treat it as the same thing as a commercial creator product
              unless the source clearly documents a public workflow, usage terms,
              and current availability.
            </p>
          </article>

          <article>
            <h3>How this page avoids a tool-directory problem.</h3>
            <p>
              The page links out only after explaining the decision boundary.
              It does not rank every AI tool that uses the word world, and it
              does not claim that every demo can generate a production-ready
              environment. Each recommended route should answer a concrete user
              question: what can I create, what does the output look like, where
              do I open it, what source supports the claim, and what limitation
              should I understand before investing time in the workflow?
            </p>
            <p>
              For AdSense and search quality, this matters because the page is
              not just a list of outbound buttons. The original value is the
              classification: 360 environments, persistent 3D worlds,
              interactive research demos, open stacks, and physical-AI systems
              should each keep their own lane.
            </p>
            <p>
              When a new generator appears, it should earn a place here by
              answering those checks, not by matching a keyword. That keeps the
              page useful for creators who need a real next step today.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
