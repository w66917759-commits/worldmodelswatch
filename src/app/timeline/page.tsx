import type { Metadata } from "next";
import Link from "next/link";

import { timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "World Model Timeline",
  description:
    "A dated timeline of world model announcements, product launches, and platform milestones.",
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Timeline</p>
        <h1>World model timeline</h1>
        <p>
          The timeline tracks the category by official release dates, keeping
          product launches, API signals, and research announcements in one place.
        </p>
      </section>

      <section className="dated-timeline">
        {timeline.map((item) => (
          <article className="dated-item" key={item.slug}>
            <time dateTime={item.date}>{item.date}</time>
            <div>
              <p className="eyebrow">{item.organization}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <Link className="text-link" href={`/news/${item.slug}`}>
                Read update
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
