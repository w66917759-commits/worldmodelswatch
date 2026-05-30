import type { Metadata } from "next";

import { CommentThread } from "@/components/comments/comment-thread";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { faqItems } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

const seoTarget = getStaticSeoTarget("/faq");

export const metadata: Metadata = metadataForRoute("/faq");

export default function FaqPage() {
  return (
    <PageShell
      className="showcase-page utility-page"
      eyebrow="World models FAQ"
      title="World models FAQ"
      description={seoTarget.description}
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
