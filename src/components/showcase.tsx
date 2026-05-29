import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Eye,
  Layers3,
  Play,
  Sparkles,
} from "lucide-react";

import type { NewsItem, ShowcaseVisual } from "@/lib/content";
import type { WorldProject } from "@/components/ai-world/worldsData";

type ShowcaseCta = {
  href: string;
  label: string;
  external?: boolean;
};

type ShowcaseHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  visual?: ShowcaseVisual;
  primaryCta?: ShowcaseCta;
  secondaryCta?: ShowcaseCta;
  meta?: string[];
};

type VisualModelCardProps = {
  href: string;
  title: string;
  subtitle: string;
  body: string;
  label: string;
  visual?: ShowcaseVisual;
  meta?: string[];
};

type VideoReelProps = {
  title: string;
  eyebrow?: string;
  description: string;
  worlds: WorldProject[];
};

type SceneStep = {
  eyebrow: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
  image?: string;
  accentColor?: string;
};

type SceneExplainerProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  steps: SceneStep[];
};

type VisualComparisonPanelProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  left: {
    title: string;
    label: string;
    points: string[];
  };
  right: {
    title: string;
    label: string;
    points: string[];
  };
  visual?: ShowcaseVisual;
};

type MilestoneRailProps = {
  items: NewsItem[];
};

function visualStyle(visual?: ShowcaseVisual): CSSProperties {
  return {
    "--showcase-accent": visual?.accentColor ?? "#74f4ff",
    "--showcase-secondary": visual?.secondaryAccentColor ?? "#f6d26e",
  } as CSSProperties;
}

function renderVisualMedia(visual?: ShowcaseVisual, className = "showcase-media-asset") {
  if (visual?.heroVideo) {
    return (
      <video
        autoPlay
        className={className}
        loop
        muted
        playsInline
        poster={visual.posterImage}
        preload="metadata"
      >
        <source src={visual.heroVideo} type="video/mp4" />
      </video>
    );
  }

  if (visual?.heroImage || visual?.posterImage) {
    return (
      <img
        alt=""
        className={className}
        loading="lazy"
        src={visual.heroImage ?? visual.posterImage}
      />
    );
  }

  return (
    <div className={`${className} showcase-media-fallback`} aria-hidden="true">
      <Sparkles size={48} />
    </div>
  );
}

function CtaLink({ cta, variant }: { cta: ShowcaseCta; variant: "primary" | "secondary" }) {
  if (cta.external) {
    return (
      <a className={`showcase-button ${variant}`} href={cta.href} rel="noreferrer" target="_blank">
        {cta.label}
        <ExternalLink size={16} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={`showcase-button ${variant}`} href={cta.href}>
      {cta.label}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}

export function ShowcaseHero({
  eyebrow,
  title,
  description,
  visual,
  primaryCta,
  secondaryCta,
  meta,
}: ShowcaseHeroProps) {
  return (
    <section className="showcase-hero" style={visualStyle(visual)}>
      <div className="showcase-hero-copy">
        <p className="showcase-kicker">{eyebrow}</p>
        <h1>{visual?.visualTitle ?? title}</h1>
        <p>{visual?.visualSubtitle ?? visual?.consumerHook ?? description}</p>
        {primaryCta || secondaryCta ? (
          <div className="showcase-action-row">
            {primaryCta ? <CtaLink cta={primaryCta} variant="primary" /> : null}
            {secondaryCta ? <CtaLink cta={secondaryCta} variant="secondary" /> : null}
          </div>
        ) : null}
        {meta && meta.length > 0 ? (
          <div className="showcase-chip-row">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="showcase-hero-media">
        {renderVisualMedia(visual)}
        <span className="showcase-scene-label">
          <Eye size={14} aria-hidden="true" />
          {visual?.primarySceneLabel ?? "Visual showcase"}
        </span>
      </div>
    </section>
  );
}

export function VisualModelCard({
  href,
  title,
  subtitle,
  body,
  label,
  visual,
  meta,
}: VisualModelCardProps) {
  return (
    <Link className="visual-model-card" href={href} style={visualStyle(visual)}>
      <div className="visual-model-media">
        {renderVisualMedia(visual, "visual-model-asset")}
        <span>
          <Play size={13} aria-hidden="true" />
          {label}
        </span>
      </div>
      <div className="visual-model-copy">
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <strong>{body}</strong>
        {meta && meta.length > 0 ? (
          <div className="visual-model-tags">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

export function VideoReel({ eyebrow = "Demo reel", title, description, worlds }: VideoReelProps) {
  return (
    <section className="video-reel-section" aria-labelledby="video-reel-title">
      <div className="showcase-section-heading">
        <p className="showcase-kicker">{eyebrow}</p>
        <h2 id="video-reel-title">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="video-reel" aria-label="Local demo videos">
        {worlds.map((world) => (
          <article
            className="video-reel-card"
            key={world.id}
            style={visualStyle({
              accentColor: world.accent,
              secondaryAccentColor: world.secondaryAccent,
            })}
          >
            <video autoPlay loop muted playsInline poster={world.posterSrc} preload="metadata">
              <source src={world.videoSrc} type={world.videoType} />
            </video>
            <div className="video-reel-overlay">
              <span>
                <Play size={13} aria-hidden="true" />
                {world.type}
              </span>
              <h3>{world.name}</h3>
              <p>{world.feeling}</p>
              <div className="video-reel-actions">
                <Link href={world.detailHref}>
                  Model
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
                <a href={world.sourceHref ?? world.demoUrl} rel="noreferrer" target="_blank">
                  Official
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SceneExplainer({ title, eyebrow = "Scene explainer", description, steps }: SceneExplainerProps) {
  return (
    <section className="scene-explainer-section" aria-labelledby="scene-explainer-title">
      <div className="showcase-section-heading">
        <p className="showcase-kicker">{eyebrow}</p>
        <h2 id="scene-explainer-title">{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="scene-explainer">
        {steps.map((step, index) => (
          <article
            className="scene-step"
            key={step.title}
            style={visualStyle({ accentColor: step.accentColor })}
          >
            {step.image ? <img alt="" loading="lazy" src={step.image} /> : <Layers3 aria-hidden="true" size={34} />}
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p className="showcase-kicker">{step.eyebrow}</p>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {step.href ? (
              <Link className="showcase-inline-link" href={step.href}>
                {step.cta ?? "Open"}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function VisualComparisonPanel({
  eyebrow = "Visual comparison",
  title,
  summary,
  left,
  right,
  visual,
}: VisualComparisonPanelProps) {
  return (
    <section className="visual-comparison-panel" style={visualStyle(visual)}>
      <div className="visual-comparison-intro">
        <p className="showcase-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{summary}</p>
      </div>
      <div className="visual-comparison-grid">
        <article className="comparison-side">
          <span>{left.label}</span>
          <h3>{left.title}</h3>
          <ul>
            {left.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <div className="comparison-vs" aria-hidden="true">
          vs
        </div>
        <article className="comparison-side right">
          <span>{right.label}</span>
          <h3>{right.title}</h3>
          <ul>
            {right.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function MilestoneRail({ items }: MilestoneRailProps) {
  return (
    <section className="milestone-rail" aria-label="World model milestone timeline">
      {items.map((item, index) => (
        <article
          className="milestone-card"
          key={item.slug}
          style={visualStyle({
            accentColor: index % 2 === 0 ? "#f6d26e" : "#74f4ff",
            secondaryAccentColor: index % 2 === 0 ? "#ff7fa6" : "#8df6dd",
          })}
        >
          <div>
            <span>
              <CalendarDays size={14} aria-hidden="true" />
              <time dateTime={item.date}>{item.date}</time>
            </span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
          <Link className="showcase-inline-link" href={`/news/${item.slug}`}>
            Read update
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </article>
      ))}
    </section>
  );
}

export function ShowcaseBand({ children }: { children: ReactNode }) {
  return <section className="showcase-band">{children}</section>;
}
