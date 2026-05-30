const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#05070d"/>
  <path d="M14 18h36v28H14z" fill="none" stroke="#8ee6ff" stroke-width="3"/>
  <path d="M21 25h22M21 32h14M21 39h28" stroke="#f8fbff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="48" cy="18" r="6" fill="#7cffc5"/>
</svg>`;

export function GET() {
  return new Response(faviconSvg, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml",
    },
  });
}
