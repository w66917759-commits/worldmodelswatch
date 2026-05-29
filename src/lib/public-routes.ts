const commentTargetPatterns = [
  /^\/faq$/,
  /^\/news\/[a-z0-9-]+$/,
  /^\/models\/[a-z0-9-]+$/,
  /^\/compare\/[a-z0-9-]+$/,
];

export function sanitizePublicRedirect(
  value: FormDataEntryValue | string | null | undefined,
  fallback = "/",
) {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) return fallback;
  if (value.startsWith("/api") || value.startsWith("/auth/callback")) {
    return fallback;
  }

  return value;
}

export function sanitizeCommentTargetPath(
  value: FormDataEntryValue | string | null | undefined,
) {
  if (typeof value !== "string") return null;
  const [path] = value.split(/[?#]/);
  if (!path) return null;

  return commentTargetPatterns.some((pattern) => pattern.test(path))
    ? path
    : null;
}
