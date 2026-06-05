import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getStaticSeoTarget } from "@/lib/seo/page-targets";
import { site } from "@/lib/site";

import "./globals.css";

const homeSeo = getStaticSeoTarget("/");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${homeSeo.primaryKeyword} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: homeSeo.description,
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
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
