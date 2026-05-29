import type { Metadata } from "next";

import { CommentThread } from "@/components/comments/comment-thread";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { faqItems } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about World Models Watch, world-model category boundaries, source confidence, comments, and likes.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <PageShell
      className="showcase-page utility-page"
      eyebrow="FAQ"
      title="Frequently asked questions"
      description="Clear answers for how World Models Watch classifies sources, handles reader comments, and separates world models from adjacent AI systems."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
          mainEntityOfPage: absoluteUrl("/faq"),
        }}
      />

      <section className="faq-list single-column" aria-label="FAQ list">
        {faqItems.map((item) => (
          <article className="faq-item" id={item.slug} key={item.slug}>
            <p className="eyebrow">{item.category}</p>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </section>

      <CommentThread
        description="Ask follow-up questions or suggest improvements to the public FAQ."
        targetPath="/faq"
        title="FAQ discussion"
      />
    </PageShell>
  );
}
