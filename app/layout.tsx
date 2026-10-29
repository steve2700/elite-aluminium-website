import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/instrument-sans/400.css"
import "@fontsource/instrument-sans/500.css"
import "@fontsource/instrument-sans/700.css"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { JsonLd } from "@/components/json-ld"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { SITE } from "@/lib/site"
import { PRODUCTS } from "@/lib/products"
import { CITIES } from "@/lib/cities"

export const viewport: Viewport = { themeColor: "#0f1419" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Elite Aluminium | Aluminium Windows, Doors, Gates and Glass in Gauteng", template: "%s | Elite Aluminium" },
  description: "Elite Aluminium makes and installs aluminium windows, doors, sliding doors, security gates, glass balustrades and more across Gauteng. See real photos of our work. Call Now or send a WhatsApp quote card.",
  keywords: ["aluminium windows Johannesburg", "aluminium doors", "sliding doors", "security gates", "glass balustrades", "burglar bars", "glass pool fencing", "shower doors", "Elite Aluminium"],
  applicationName: "Elite Aluminium",
  authors: [{ name: "Elite Aluminium", url: SITE.url }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1f6bff" }],
  },
  manifest: "/site.webmanifest",
  openGraph: { type: "website", locale: "en_ZA", url: SITE.url, siteName: "Elite Aluminium", title: "Elite Aluminium | Windows, Doors, Gates and Glass in Gauteng", description: "Made to measure aluminium and glass, installed across Gauteng. See real photos of our work.", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Elite Aluminium, windows, doors, gates and glass in Gauteng" }] },
  twitter: { card: "summary_large_image", title: "Elite Aluminium | Gauteng", description: "Aluminium windows, doors, gates and glass, made to measure.", images: ["/og-image.png"] },
  category: "Aluminium and glass",
  other: { "geo.region": "ZA-GP", "geo.placename": "Johannesburg, Gauteng, South Africa" },
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/logo-square.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  description: "Aluminium windows, doors, sliding doors, security gates, glass balustrades, burglar bars, shower doors and more, made to measure and installed across Gauteng.",
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: "Gauteng", addressCountry: "ZA" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ],
  sameAs: [SITE.instagram, SITE.facebook, SITE.linkedin],
  knowsAbout: PRODUCTS.map((p) => p.name),
  areaServed: [{ "@type": "AdministrativeArea", name: "Gauteng" }, ...CITIES.map((c) => ({ "@type": "City", name: c.name }))],
  makesOffer: PRODUCTS.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: p.name } })),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {GOOGLE_ADS_CONVERSION_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_CONVERSION_ID}');` }} />
          </>
        )}
        <JsonLd data={businessSchema} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en-ZA", publisher: { "@id": `${SITE.url}/#business` } }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} className="pb-[72px] outline-none md:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
