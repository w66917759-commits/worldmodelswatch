import type { ReactNode } from "react";

import { ShowcaseHero } from "@/components/showcase";
import type { ShowcaseVisual } from "@/lib/content";

interface PageShellProps {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  heroClassName?: string;
  className?: string;
  visual?: ShowcaseVisual;
  children: ReactNode;
}

export function PageShell({
  eyebrow,
  title,
  description,
  className,
  heroClassName,
  visual,
  children,
}: PageShellProps) {
  return (
    <main
      className={["page-shell", className].filter(Boolean).join(" ")}
    >
      {visual ? (
        <ShowcaseHero
          description={description ?? ""}
          eyebrow={String(eyebrow ?? "")}
          title={title}
          visual={visual}
        />
      ) : (
        <section
          className={["page-hero", heroClassName].filter(Boolean).join(" ")}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </section>
      )}
      {children}
    </main>
  );
}
