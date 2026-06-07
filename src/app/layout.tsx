import type { Metadata } from "next";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getStaticSeoTarget } from "@/lib/seo/page-targets";
import { site } from "@/lib/site";

import "./globals.css";

const homeSeo = getStaticSeoTarget("/");
const adsenseClientId = "ca-pub-9068083570091757";
const defaultGoogleAnalyticsId = "G-Q25HZZZ88X";
const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() ||
  defaultGoogleAnalyticsId;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${homeSeo.primaryKeyword} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: homeSeo.description,
  other: {
    "google-adsense-account": adsenseClientId,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${homeSeo.primaryKeyword} | ${site.name}`,
    description: homeSeo.description,
    images: [
      {
        url: site.socialImage,
        width: 1280,
        height: 640,
        alt: site.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.social.twitterHandle,
    creator: site.social.twitterHandle,
    title: `${homeSeo.primaryKeyword} | ${site.name}`,
    description: homeSeo.description,
    images: [site.socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <Script
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
        strategy="beforeInteractive"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
          googleAnalyticsId,
        )}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(googleAnalyticsId)});
        `}
      </Script>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
