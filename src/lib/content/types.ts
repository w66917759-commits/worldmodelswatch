export type Source = {
  label: string;
  url: string;
};

export type ModelProfile = {
  slug: string;
  name: string;
  organization: string;
  category: string;
  date: string;
  updated?: string;
  status: string;
  summary: string;
  focus: string;
  availability: string;
  strengths: string[];
  limits: string[];
  sources: Source[];
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  organization: string;
  summary: string;
  whyItMatters: string;
  tags: string[];
  sources: Source[];
};

export type Comparison = {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  columns: string[];
  rows: string[][];
  takeaways: string[];
  sources: Source[];
};

export type Concept = {
  slug: string;
  term: string;
  summary: string;
  plainEnglish: string;
  related: string[];
};

export type ModelJumpLink = {
  name: string;
  maker: string;
  category: string;
  url: string;
  relation: string;
  cta: string;
};

export type ConceptMapNode = {
  title: string;
  label: string;
  summary: string;
  examples: string[];
  bridge: string;
};

export type ConceptMapCluster = {
  slug: string;
  eyebrow: string;
  title: string;
  thesis: string;
  nodes: ConceptMapNode[];
};

export type ConceptBridge = {
  from: string;
  knownFor: string;
  connectsTo: string;
  worldModelMeaning: string;
};
