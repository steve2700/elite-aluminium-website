import { getProduct } from "@/lib/products"
import { getCity } from "@/lib/cities"
import { SITE } from "@/lib/site"

export interface PageDef {
  slug: string
  product: string
  city?: string
  title: string
  h1?: string
  angle?: { lead: string; points: string[] }
}

// Every URL that already exists on the live site is kept, so no rankings or links are lost.
export const PAGES: PageDef[] = [
  // Service hubs
  { slug: "aluminium-windows", product: "windows", title: "Aluminium Windows in Gauteng | Made to Measure Installation" },
  { slug: "aluminium-doors", product: "doors", title: "Aluminium Doors in Gauteng | Pivot, Hinged and French Doors" },
  { slug: "sliding-doors", product: "sliding-doors", title: "Aluminium Sliding Doors in Gauteng | Installation" },
  { slug: "security-gates", product: "security-gates", title: "Security Gates in Gauteng | Slatted and Trellis Gates" },
  { slug: "glass-balustrades", product: "balustrades", title: "Glass Balustrades in Gauteng | Frameless Glass and Stainless Steel" },
  // City pages
  { slug: "aluminium-windows-johannesburg", product: "windows", city: "johannesburg", title: "Aluminium Windows Johannesburg | Professional Installation" },
  { slug: "aluminium-windows-sandton", product: "windows", city: "sandton", title: "Aluminium Windows Sandton | Premium Installation" },
  { slug: "aluminium-windows-pretoria", product: "windows", city: "pretoria", title: "Aluminium Windows Pretoria | Professional Installation" },
  { slug: "aluminium-windows-centurion", product: "windows", city: "centurion", title: "Aluminium Windows Centurion | Installation" },
  { slug: "aluminium-windows-fourways", product: "windows", city: "fourways", title: "Aluminium Windows Fourways | Modern Installation" },
  { slug: "aluminium-doors-johannesburg", product: "doors", city: "johannesburg", title: "Aluminium Doors Johannesburg | Professional Installation" },
  { slug: "aluminium-doors-sandton", product: "doors", city: "sandton", title: "Aluminium Doors Sandton | Door Installation" },
  { slug: "sliding-doors-johannesburg", product: "sliding-doors", city: "johannesburg", title: "Sliding Doors Johannesburg | Aluminium Sliding Door Installation" },
  { slug: "sliding-doors-sandton", product: "sliding-doors", city: "sandton", title: "Sliding Doors Sandton | Aluminium Sliding Door Installation" },
  { slug: "sliding-doors-pretoria", product: "sliding-doors", city: "pretoria", title: "Sliding Doors Pretoria | Aluminium Sliding Door Installation" },
  { slug: "stacking-doors-johannesburg", product: "stacking-doors", city: "johannesburg", title: "Stacking Doors Johannesburg | Folding and Stacking Door Systems" },
  { slug: "security-gates-johannesburg", product: "security-gates", city: "johannesburg", title: "Security Gates Johannesburg | Professional Installation" },
  { slug: "security-gates-sandton", product: "security-gates", city: "sandton", title: "Security Gates Sandton | Installation" },
  { slug: "security-gates-pretoria", product: "security-gates", city: "pretoria", title: "Security Gates Pretoria | Professional Installation" },
  { slug: "burglar-bars-johannesburg", product: "burglar-bars", city: "johannesburg", title: "Burglar Bars Johannesburg | Installation" },
  { slug: "burglar-bars-sandton", product: "burglar-bars", city: "sandton", title: "Burglar Bars Sandton | Installation" },
  { slug: "aluminium-fencing-johannesburg", product: "fencing", city: "johannesburg", title: "Aluminium Fencing Johannesburg | Professional Installation" },
  { slug: "aluminium-fencing-pretoria", product: "fencing", city: "pretoria", title: "Aluminium Fencing Pretoria | Professional Installation" },
  { slug: "aluminium-fencing-centurion", product: "fencing", city: "centurion", title: "Aluminium Fencing Centurion | Slat and Glass Fencing" },
  { slug: "glass-balustrades-sandton", product: "balustrades", city: "sandton", title: "Glass Balustrades Sandton | Frameless Pool and Deck Glass" },
  { slug: "glass-balustrades-pretoria", product: "balustrades", city: "pretoria", title: "Glass Balustrades Pretoria | Frameless Pool and Deck Glass" },
  { slug: "shower-doors-johannesburg", product: "shower-doors", city: "johannesburg", title: "Shower Doors and Enclosures Johannesburg" },
  { slug: "glass-glazing-johannesburg", product: "glazing", city: "johannesburg", title: "Glass and Glazing Johannesburg | Etched, Frosted and Replacement Glass" },
  { slug: "shopfronts-johannesburg", product: "shopfronts", city: "johannesburg", title: "Shopfront Installers Johannesburg | Aluminium and Glass" },
  { slug: "carports-pretoria", product: "carports", city: "pretoria", title: "Carports Pretoria | Aluminium Carport Installation" },
  { slug: "aluminium-carports-centurion", product: "carports", city: "centurion", title: "Aluminium Carports Centurion | Carport Installation" },
  // Long tail pages
  { slug: "24-hour-security-gate-installation-pretoria", product: "security-gates", city: "pretoria", title: "Urgent Security Gate Installation Pretoria | Gate Repairs and Installs", h1: "Urgent security gate installation and repairs in Pretoria",
    angle: { lead: "When a gate has been damaged or the property needs securing quickly, speed matters. Tell us what happened and how urgent it is, and we will tell you what we can do and when.", points: ["Say it is urgent on the quote card and call us", "Send photos of the opening so we can quote fast", "We measure, make and install the replacement gate", "We can also repair damaged gates where possible"] } },
  { slug: "affordable-security-gates-johannesburg", product: "security-gates", city: "johannesburg", title: "Affordable Security Gates Johannesburg | Fair Priced Installation", h1: "Affordable security gates in Johannesburg",
    angle: { lead: "Good security does not have to cost a fortune. We keep gate designs simple and well made, and we give you a clear price before we start.", points: ["Simple, strong designs keep the price fair", "Aluminium does not rust, so there is little upkeep", "A clear written quote before any work starts", "Send photos and measurements for a fast price"] } },
  { slug: "cheap-burglar-bars-johannesburg", product: "burglar-bars", city: "johannesburg", title: "Cheap Burglar Bars Johannesburg | Affordable Options", h1: "Affordable burglar bars in Johannesburg",
    angle: { lead: "If you are on a budget, we can make burglar bars that are simple, strong and neat. Send us your measurements and we will quote the most affordable good option.", points: ["Simple designs that keep costs down", "Made to measure so they fit properly", "Colour matched to your frames where possible", "A clear price before work begins"] } },
  { slug: "commercial-shopfront-installers-johannesburg", product: "shopfronts", city: "johannesburg", title: "Commercial Shopfront Installers Johannesburg | Aluminium and Glass", h1: "Commercial shopfront installers in Johannesburg",
    angle: { lead: "Shops, offices and commercial properties need frontages that look professional and stand up to daily use. We install aluminium and glass shopfronts and commercial doors.", points: ["Aluminium and glass shopfronts", "Commercial glass doors and windows", "Planned around your trading hours", "Clear quotes from photos and measurements"] } },
  { slug: "double-glazed-aluminium-windows-pretoria", product: "windows", city: "pretoria", title: "Double Glazed Aluminium Windows Pretoria | Elite Aluminium", h1: "Double glazed aluminium windows in Pretoria",
    angle: { lead: "Double glazing helps keep rooms comfortable and quieter. Ask for double glazing on your quote and we will explain the options for your openings.", points: ["Double glazing options for new and replacement windows", "Aluminium frames made to measure", "Helps with comfort and noise", "Powder coated colours to suit the house"] } },
  { slug: "estate-approved-security-solutions-centurion", product: "security-gates", city: "centurion", title: "Security Solutions for Estates Centurion | Gates and Burglar Bars", h1: "Security gates and burglar bars for Centurion estates",
    angle: { lead: "Estates have design rules. Send us your estate's guidelines with your quote request and we will build security gates and burglar bars that follow them.", points: ["Send the estate design guidelines with your request", "Gates and burglar bars built to those guidelines", "Colour and style matched to the estate", "Clear quotes before any work starts"] } },
  { slug: "frameless-glass-balustrades-sandton", product: "balustrades", city: "sandton", title: "Frameless Glass Balustrades Sandton | Pool and Balcony Glass Fencing", h1: "Frameless glass balustrades in Sandton",
    angle: { lead: "Frameless glass keeps the view and keeps people safe. We install frameless glass balustrades and pool fencing for Sandton homes, balconies and decks.", points: ["Frameless glass for pools, balconies and decks", "Stainless steel balustrades for stairs and ramps", "Measured and made for your property", "See real installations in the gallery"] } },
  { slug: "modern-aluminium-sliding-doors-johannesburg", product: "sliding-doors", city: "johannesburg", title: "Modern Aluminium Sliding Doors Johannesburg | Contemporary Designs", h1: "Modern aluminium sliding doors in Johannesburg",
    angle: { lead: "Slim black frames and big panes of glass give a clean, contemporary look. We install modern aluminium sliding doors for patios, pools and large openings.", points: ["Slim black and charcoal frames", "Large and floor to ceiling openings", "Etched and frosted glass options", "Optional trellis security gate"] } },
  { slug: "pool-compliant-glass-fencing-pretoria", product: "fencing", city: "pretoria", title: "Pool Glass Fencing Pretoria | Frameless Glass Pool Fences", h1: "Frameless glass pool fencing in Pretoria",
    angle: { lead: "Pool fencing has safety requirements. Tell us about your pool and we will advise on a frameless glass design that keeps the view and keeps children safe.", points: ["Frameless glass pool fencing", "We advise on the right design for your pool", "Measured and made for your pool area", "See pool fencing photos in the gallery"] } },
  { slug: "powder-coated-aluminium-doors-johannesburg", product: "doors", city: "johannesburg", title: "Powder Coated Aluminium Doors Johannesburg | Elite Aluminium", h1: "Powder coated aluminium doors in Johannesburg",
    angle: { lead: "Powder coating gives aluminium doors a tough, even finish in the colour you choose. We build and install powder coated doors for entrances, patios and gardens.", points: ["A tough, even powder coated finish", "Black, charcoal, bronze, white and more", "Pivot, hinged and French doors", "Clear, frosted or etched glass"] } },
  { slug: "aluminium-window-repairs-johannesburg", product: "windows", city: "johannesburg", title: "Aluminium Window Repairs Johannesburg | Repairs and Replacements", h1: "Aluminium window repairs in Johannesburg",
    angle: { lead: "Sticking, leaking or broken windows can often be repaired, and sometimes a replacement is the better option. We tell you honestly which makes sense.", points: ["Repairs to sticking and damaged windows", "Replacement glass and new frames", "New windows made to measure", "Honest advice on repair or replace"] } },
]

export const getPage = (slug: string) => PAGES.find((p) => p.slug === slug)

export function pageMeta(p: PageDef) {
  const prod = getProduct(p.product)
  const city = p.city ? getCity(p.city) : null
  const description = `${prod.short}${city ? ` Serving ${city.name} and surrounds.` : " Serving Gauteng."} Made to measure with free quotes. Call ${SITE.phoneDisplay} or send a WhatsApp quote card.`
  const h1 = p.h1 ?? (city ? `${prod.name} in ${city.name}` : prod.name)
  return { prod, city, description, h1 }
}

export function pagesFor(product?: string, city?: string) {
  return PAGES.filter((p) => (!product || p.product === product) && (!city || p.city === city))
}
