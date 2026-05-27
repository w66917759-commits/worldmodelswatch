import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  heroClassName?: string;
  className?: string;
  children: ReactNode;
}

export function PageShell({
  eyebrow,
  title,
  description,
  className,
  heroClassName,
  children,
}: PageShellProps) {
  return (
    <main
      className={["page-shell", className].filter(Boolean).join(" ")}
    >
      <section
        className={["page-hero", heroClassName].filter(Boolean).join(" ")}
      >
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </section>
      {children}
    </main>
  );
}
