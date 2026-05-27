import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Tag } from "lucide-react";

import { newsItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "World Model News",
  description:
    "Official world model news, research releases, API announcements, and platform updates.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  const sortedNewsItems = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">News index</p>
        <h1>Official world model updates</h1>
        <p>
          This index prioritizes primary sources: company announcements,
          research posts, official API launches, and platform releases.
        </p>
      </section>

      <section className="timeline-list">
        {sortedNewsItems.map((item) => (
          <Link className="timeline-card" href={`/news/${item.slug}`} key={item.slug}>
            <span className="meta-line">
              <CalendarDays size={16} aria-hidden="true" />
              {item.date} · {item.organization}
            </span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <span className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>
                  <Tag size={13} aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
