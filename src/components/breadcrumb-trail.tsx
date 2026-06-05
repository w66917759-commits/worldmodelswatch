import Link from "next/link";

export type BreadcrumbItem = {
  href: string;
  label: string;
};

type BreadcrumbTrailProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbTrail({ items }: BreadcrumbTrailProps) {
  return (
    <nav className="breadcrumb-trail" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const current = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.label}`} aria-current={current ? "page" : undefined}>
              {current ? <span>{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
