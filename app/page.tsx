import type { Metadata } from "next"
import Hero from "@/components/hero"
import StatsShowcase from "@/components/stats-showcase"
import Services from "@/components/services"
import ProjectShowcase from "@/components/project-showcase"
import WhyChooseUs from "@/components/why-choose-us"
import DetailedBenefits from "@/components/detailed-benefits"
import ProcessSection from "@/components/process-section"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ServiceAreas from "@/components/service-areas"
import QuoteForm from "@/components/quote-form"
import CTASection from "@/components/cta-section"
import CityServices from "@/components/city-services"
import PremiumServices from "@/components/premium-services"

export const metadata: Metadata = {
  title: "Elite Aluminium | Premium Aluminium Windows, Doors & Glass Solutions in Gauteng",
  description:
    "Expert aluminium window, door, sliding door, security gate & glass installation across Johannesburg, Sandton, Pretoria, Centurion. 15+ years experience. Free quotes - Call 079 593 5025",
  keywords: [
    "aluminium windows Johannesburg",
    "aluminium doors Gauteng",
    "sliding doors Sandton",
    "security gates Pretoria",
    "glass balustrades Centurion",
    "aluminium windows Midrand",
    "shopfronts Fourways",
    "aluminium installation Randburg",
    "burglar bars Roodepoort",
    "window installation Johannesburg",
  ],
  authors: [{ name: "Elite Aluminium" }],
  creator: "Elite Aluminium",
  publisher: "Elite Aluminium",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://elitealuminium.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elite Aluminium | Premium Aluminium & Glass Solutions Gauteng",
    description:
      "Expert installation of aluminium windows, doors, security gates & glass across Johannesburg, Sandton, Pretoria. 15+ years experience. Free quotes available.",
    url: "https://elitealuminium.co.za",
    siteName: "Elite Aluminium",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Aluminium - Premium Aluminium Windows and Doors Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Aluminium | Premium Aluminium Solutions Gauteng",
    description:
      "Expert aluminium & glass installation across Johannesburg, Sandton, Pretoria. Free quotes - 079 593 5025",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data for Local Business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://elitealuminium.co.za",
            name: "Elite Aluminium",
            image: "https://elitealuminium.co.za/logo.png",
            description:
              "Premium aluminium and glass installation company serving Gauteng, South Africa. Expert installation of windows, doors, security gates, carports, and glass balustrades.",
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
            url: "https://elitealuminium.co.za",
            telephone: "+27795935025",
            email: "info@elitealuminium.co.za",
            priceRange: "$$",
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
              {
                "@type": "City",
                name: "Midrand",
              },
              {
                "@type": "City",
                name: "Fourways",
              },
              {
                "@type": "City",
                name: "Randburg",
              },
              {
                "@type": "City",
                name: "Roodepoort",
              },
            ],
            sameAs: ["https://www.facebook.com/elitealuminium", "https://www.instagram.com/elitealuminium"],
          }),
        }}
      />

      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Aluminium and Glass Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Elite Aluminium",
            },
            areaServed: {
              "@type": "State",
              name: "Gauteng",
            },
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
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Commercial Shopfronts",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Carport Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Aluminium Fencing",
                  },
                },
              ],
            },
          }),
        }}
      />

      <Hero />
      <StatsShowcase />
      <Services />
      <ProjectShowcase />
      <WhyChooseUs />
      <CityServices />
      <PremiumServices />
      <DetailedBenefits />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <ServiceAreas />
      <QuoteForm />
      <CTASection />
    </>
  )
}
