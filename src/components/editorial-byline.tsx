import Link from "next/link";

type EditorialBylineProps = {
  label: string;
  published?: string;
  updated?: string;
};

function formatDate(value?: string) {
  if (!value) return undefined;

  const parsed = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(parsed);
}

export function EditorialByline({
  label,
  published,
  updated,
}: EditorialBylineProps) {
  const publishedLabel = formatDate(published);
  const updatedLabel = formatDate(updated);

  return (
    <aside className="editorial-byline" aria-label="Editorial attribution">
      <div className="editorial-byline-copy">
        <span>{label}</span>
        <strong>
          <Link href="/about">World Models Watch editorial desk</Link>
        </strong>
      </div>
      <dl>
        {published && publishedLabel ? (
          <div>
            <dt>Published</dt>
            <dd>
              <time dateTime={published}>{publishedLabel}</time>
            </dd>
          </div>
        ) : null}
        {updated && updatedLabel ? (
          <div>
            <dt>Updated</dt>
            <dd>
              <time dateTime={updated}>{updatedLabel}</time>
            </dd>
          </div>
        ) : null}
      </dl>
    </aside>
  );
}
