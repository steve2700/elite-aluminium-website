import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elitealuminium.co.za"),
  title: {
    default: "Elite Aluminium | Expert Aluminium & Glass Installation Gauteng | Free Quotes",
    template: "%s | Elite Aluminium",
  },
  description:
    "Premium aluminium windows, doors, sliding doors, security gates & glass installations across Gauteng. 15+ years experience serving Johannesburg, Sandton, Pretoria, Centurion. SABS certified. Free quotes & site visits. Call 067 276 3724 today!",
  keywords: [
    "aluminium windows gauteng",
    "aluminium doors johannesburg",
    "sliding doors pretoria",
    "security gates sandton",
    "glass balustrades centurion",
    "aluminium installation",
    "shopfronts johannesburg",
    "double glazed windows",
    "aluminium fencing",
    "elite aluminium",
  ],
  authors: [{ name: "Elite Aluminium" }],
  creator: "Elite Aluminium",
  publisher: "Elite Aluminium",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://elitealuminium.co.za",
    siteName: "Elite Aluminium",
    title: "Elite Aluminium | Expert Aluminium & Glass Installation Gauteng",
    description:
      "Premium aluminium windows, doors, sliding doors, security gates & glass installations across Gauteng. 15+ years experience. Free quotes. Call 067 276 3724.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Elite Aluminium - Premium Glass & Aluminium Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Aluminium | Expert Aluminium & Glass Installation Gauteng",
    description:
      "Premium aluminium windows, doors, sliding doors, security gates & glass installations across Gauteng. Free quotes. Call 067 276 3724.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://elitealuminium.co.za",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f172a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className="scroll-smooth">
      <head>
        {/* Additional SEO & Performance Tags */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://elitealuminium.co.za/#organization",
              name: "Elite Aluminium",
              legalName: "Elite Aluminium (Pty) Ltd",
              url: "https://elitealuminium.co.za",
              logo: "https://elitealuminium.co.za/logo.png",
              image: "https://elitealuminium.co.za/logo.png",
              description:
                "Premium aluminium windows, doors, sliding doors, security gates & glass installations across Gauteng.",
              telephone: "+27672763724",
              email: "info@elitealuminium.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Johannesburg",
                },
                {
                  "@type": "City",
                  name: "Sandton",
                },
                {
                  "@type": "City",
                  name: "Pretoria",
                },
                {
                  "@type": "City",
                  name: "Centurion",
                },
              ],
              priceRange: "R500-R100000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61570711647291",
                "https://www.instagram.com/_elitealuminium/",
                "https://www.linkedin.com/company/elitealuminiumza/",
                "https://za.pinterest.com/elite_aluminium/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Aluminium & Glass Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aluminium Windows Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aluminium Doors Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sliding Doors Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Security Gates Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Glass Balustrades Installation",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://elitealuminium.co.za/#website",
              url: "https://elitealuminium.co.za",
              name: "Elite Aluminium",
              description:
                "Premium aluminium windows, doors, sliding doors, security gates & glass installations across Gauteng.",
              publisher: {
                "@id": "https://elitealuminium.co.za/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://elitealuminium.co.za/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
