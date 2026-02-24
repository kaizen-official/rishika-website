import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://www.rishikabuilders.com"),
  title: {
    default: "Rishika Builders — Luxury Real Estate & Premium Homes in Sonipat",
    template: "%s | Rishika Builders",
  },
  description:
    "Rishika Builders crafts enduring legacies through Vastu-compliant luxury residences, premium estates, and refined engineering in Sonipat. Not just spaces — statements of legacy.",
  keywords: [
    "Rishika Builders",
    "luxury homes Sonipat",
    "Vastu compliant homes",
    "premium real estate",
    "luxury villas Sonipat",
    "real estate developer Haryana",
    "premium apartments",
    "independent floors Sonipat",
  ],
  authors: [{ name: "Rishika Builders" }],
  creator: "Rishika Builders",
  publisher: "Rishika Builders",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rishikabuilders.com",
    siteName: "Rishika Builders",
    title: "Rishika Builders — Luxury Real Estate & Premium Homes in Sonipat",
    description:
      "Not just spaces. Statements of legacy — Luxury redefined by Rishika Builders. Crafting enduring legacies through Vastu-compliant foundations and timeless aesthetics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rishika Builders - Premium Luxury Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rishika_builders",
    creator: "@rishika_builders",
    title: "Rishika Builders — Luxury Real Estate & Premium Homes",
    description:
      "Crafting enduring legacies through Vastu-compliant foundations, refined engineering, and timeless aesthetics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.rishikabuilders.com",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Rishika Builders",
    url: "https://www.rishikabuilders.com",
    logo: "https://www.rishikabuilders.com/logo-black.png",
    description:
      "Rishika Builders crafts enduring legacies through Vastu-compliant luxury residences, premium estates, and refined engineering in Sonipat.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/rishika_builders",
      "https://twitter.com/rishika_builders",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@rishikabuilders.com",
      contactType: "customer service",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="apple-mobile-web-app-title" content="Rishika" />
      </head>
      <body className="antialiased text-dark">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
