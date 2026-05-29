export type FaqItem = {
  slug: string;
  category: string;
  question: string;
  answer: string;
  featured?: boolean;
};

export const faqItems = [
  {
    slug: "what-counts-as-world-model",
    category: "Definition",
    question: "What does World Models Watch count as a world model?",
    answer:
      "The site tracks systems that model environments, actions, spatial structure, or persistent simulated state. Pure text chatbots and ordinary video generators are only included when they provide a clear bridge toward interactive or physical world modeling.",
    featured: true,
  },
  {
    slug: "why-video-models-appear",
    category: "Category boundary",
    question: "Why do some AI video systems appear on a world-model site?",
    answer:
      "Video models are included only when they help explain the path from generated clips to controllable spaces, physics-aware prediction, or agent-ready simulation. The site keeps that distinction explicit so video generation is not overstated as a finished world simulator.",
    featured: true,
  },
  {
    slug: "source-confidence",
    category: "Editorial policy",
    question: "How does the site decide whether a release is reliable enough to list?",
    answer:
      "Primary sources carry the most weight: official product pages, research posts, papers, documentation, code repositories, and company announcements. Secondary media can be referenced, but it stays labeled as reported or adjacent unless independently confirmed.",
    featured: true,
  },
  {
    slug: "comments-policy",
    category: "Community",
    question: "What should readers post in comments?",
    answer:
      "Useful comments add source links, corrections, release-status notes, comparison questions, or concrete reader context. Comments are public immediately, so readers should avoid private information and unsupported promotional claims.",
    featured: true,
  },
  {
    slug: "comment-likes",
    category: "Community",
    question: "How do comment likes work?",
    answer:
      "Signed-in readers can like a comment once. Clicking the same control again removes the like. Likes are meant to surface useful notes rather than rank products or models.",
    featured: true,
  },
  {
    slug: "google-sign-in",
    category: "Accounts",
    question: "Why is Google sign-in required for comments and likes?",
    answer:
      "Google sign-in gives the site a lightweight identity layer for public comments and duplicate-like prevention without adding a separate password system. The existing editor login remains separate.",
  },
  {
    slug: "missing-projects",
    category: "Coverage",
    question: "Can readers suggest a missing model, lab, or paper?",
    answer:
      "Yes. The best suggestion includes an official source URL, the organization name, model or product name, what changed, and whether the source is a paper, product page, repository, or announcement.",
  },
  {
    slug: "update-frequency",
    category: "Coverage",
    question: "How often are pages updated?",
    answer:
      "World Models Watch is maintained as a source-backed research site. When no strong primary-source update exists, a smaller crawlable cleanup or correction is preferred over publishing weak news.",
  },
] satisfies FaqItem[];

export const featuredFaqItems = faqItems.filter((item) => item.featured);
