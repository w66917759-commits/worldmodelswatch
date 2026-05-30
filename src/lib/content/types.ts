export type Source = {
  label: string;
  url: string;
};

export type ShowcaseVisual = {
  visualTitle?: string;
  visualSubtitle?: string;
  heroImage?: string;
  heroVideo?: string;
  posterImage?: string;
  backgroundImage?: string;
  cardImage?: string;
  stickerImages?: string[];
  imagePosition?: string;
  accentColor?: string;
  secondaryAccentColor?: string;
  consumerHook?: string;
  primarySceneLabel?: string;
};

export type SeoFields = {
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  officialKeywords?: string[];
  sourceUrls?: string[];
  categoryBoundary?: string;
};

export type ModelPricing = {
  label: string;
  note: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export type ModelAlternative = {
  label: string;
  href: string;
  description: string;
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
  bestFor?: string[];
  notFor?: string[];
  evidenceLevel?: string;
  relatedNewsSlugs?: string[];
  pricing?: ModelPricing;
  platforms?: string[];
  compatibility?: string[];
  outputFormats?: string[];
  alternatives?: ModelAlternative[];
  workflowSteps?: string[];
  schemaType?: "SoftwareApplication" | "TechArticle";
} & SeoFields &
  ShowcaseVisual;

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  evolutionStageId?: string;
  organization: string;
  summary: string;
  whyItMatters: string;
  tags: string[];
  sources: Source[];
  signalType: "Product" | "Open source" | "Reported" | "Physical AI" | "Research" | "Platform";
  impactLevel: "High" | "Medium" | "Low";
  whatChanged?: string[];
  sourceConfidence: string;
  availabilityNote?: string;
  overclaimWarning?: string;
  relatedModelSlugs: string[];
  relatedComparisonSlugs: string[];
} & SeoFields &
  ShowcaseVisual;

export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type Comparison = {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  guideType: "creator" | "developer" | "research" | "robotics" | "beginner" | "concept-boundary";
  decisionQuestion: string;
  columns: string[];
  rows: string[][];
  takeaways: string[];
  sources: Source[];
  faq?: ComparisonFaq[];
  relatedModelSlugs: string[];
  decisionGuide?: string[];
} & SeoFields &
  ShowcaseVisual;

export type Concept = {
  slug: string;
  term: string;
  summary: string;
  plainEnglish: string;
  related: string[];
} & ShowcaseVisual;

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
