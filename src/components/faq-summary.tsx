import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

import { featuredFaqItems, type FaqItem } from "@/lib/content/faq";

type FaqSummaryProps = {
  className?: string;
  description?: string;
  items?: readonly FaqItem[];
  title?: string;
};

export function FaqSummary({
  className,
  description = "A short guide to category boundaries, source confidence, comments, and reader participation.",
  items = featuredFaqItems.slice(0, 4),
  title = "Common questions",
}: FaqSummaryProps) {
  return (
    <section
      className={["faq-summary", className].filter(Boolean).join(" ")}
      aria-labelledby="faq-summary-title"
    >
      <div className="faq-summary-heading">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-summary-title">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="faq-summary-grid">
        {items.map((item) => (
          <article className="faq-summary-card" key={item.slug}>
            <span>
              <HelpCircle size={16} aria-hidden="true" />
              {item.category}
            </span>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>

      <Link className="text-link faq-summary-link" href="/faq">
        Read the full FAQ
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
