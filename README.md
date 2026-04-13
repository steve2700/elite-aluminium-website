# Elite Aluminium — Next.js Website

Production website for **Elite Aluminium**, a Gauteng-based aluminium and glass installation company serving Johannesburg, Pretoria, Sandton, Centurion and surrounding areas.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

---

## Project Structure

```
app/
├── page.tsx                          # Homepage
├── contact/page.tsx                  # Contact page
├── about/page.tsx                    # About page
├── faq/page.tsx                      # FAQ page
│
├── areas/                            # Area hub pages
│   ├── johannesburg/page.tsx
│   ├── sandton/page.tsx
│   ├── pretoria/page.tsx
│   ├── centurion/page.tsx
│   ├── midrand/page.tsx
│   ├── fourways/page.tsx
│   ├── randburg/page.tsx
│   └── roodepoort/page.tsx
│
├── aluminium-windows/page.tsx        # General service pages
├── aluminium-doors/page.tsx
├── sliding-doors/page.tsx
├── security-gates/page.tsx
├── glass-balustrades/page.tsx
│
├── aluminium-windows-johannesburg/   # City-specific service pages
├── aluminium-windows-sandton/
├── aluminium-windows-pretoria/
├── aluminium-windows-centurion/
├── aluminium-windows-fourways/
├── aluminium-doors-johannesburg/
├── aluminium-doors-sandton/
├── sliding-doors-johannesburg/
├── sliding-doors-sandton/
├── sliding-doors-pretoria/
├── security-gates-johannesburg/
├── security-gates-sandton/
├── security-gates-pretoria/
├── burglar-bars-johannesburg/
├── burglar-bars-sandton/
├── glass-balustrades-sandton/
├── glass-balustrades-pretoria/
├── aluminium-fencing-johannesburg/
├── aluminium-fencing-pretoria/
├── aluminium-fencing-centurion/
├── shower-doors-johannesburg/
├── glass-glazing-johannesburg/
├── stacking-doors-johannesburg/
├── shopfronts-johannesburg/
├── carports-pretoria/
├── aluminium-carports-centurion/
│
└── [...long-tail pages]/             # High-intent long-tail pages
    ├── affordable-security-gates-johannesburg/
    ├── modern-aluminium-sliding-doors-johannesburg/
    ├── frameless-glass-balustrades-sandton/
    ├── pool-compliant-glass-fencing-pretoria/
    ├── commercial-shopfront-installers-johannesburg/
    ├── aluminium-window-repairs-johannesburg/
    ├── cheap-burglar-bars-johannesburg/
    ├── powder-coated-aluminium-doors-johannesburg/
    ├── estate-approved-security-solutions-centurion/
    ├── 24-hour-security-gate-installation-pretoria/
    └── double-glazed-aluminium-windows-pretoria/

public/
└── sitemap.xml                       # Full XML sitemap
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/elite-aluminium.git
cd elite-aluminium

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Page Architecture

The site uses a **three-tier content structure** for SEO:

```
Tier 1 — Area Hub Pages  (/areas/johannesburg)
    └── Tier 2 — City Service Pages  (/aluminium-windows-johannesburg)
            └── Tier 3 — Long-Tail Pages  (/double-glazed-aluminium-windows-pretoria)
```

### How internal linking works

- **Area hub pages** (`/areas/*`) link to every city-specific service page available for that area. They never link to a page that doesn't exist in the sitemap.
- **City service pages** link back to their area hub and cross-link to related services in the same city.
- **Long-tail pages** link up to the relevant city service page and area hub.
- All pages link to `/contact` for quote requests.

---

## SEO Setup

Every page includes:

| Element | Detail |
|---|---|
| `<title>` | Keyword-rich, city-specific |
| `<meta description>` | Unique per page, under 160 chars |
| `canonical` URL | Set via `alternates.canonical` in metadata |
| Open Graph tags | Title, description, URL, locale (`en_ZA`) |
| JSON-LD schema | `LocalBusiness` with geo, address, areaServed |
| Breadcrumb nav | Visible breadcrumbs on every inner page |
| `sitemap.xml` | Full XML sitemap at `/public/sitemap.xml` |

### Updating the sitemap

When you add a new page, add a corresponding `<url>` entry to `public/sitemap.xml`:

```xml
<url>
  <loc>https://elitealuminium.co.za/your-new-page</loc>
  <lastmod>2025-04-13</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.92</priority>
</url>
```

Then submit the updated sitemap in **Google Search Console** → Sitemaps.

---

## Adding a New City

To add a new area (e.g. Midrand with its own service pages):

1. **Create the area hub page**
   ```
   app/areas/midrand/page.tsx
   ```
   Copy an existing area page (e.g. `areas/sandton/page.tsx`) and replace:
   - All instances of `Sandton` → `Midrand`
   - All instances of `sandton` → `midrand`
   - Update suburbs list
   - Update geo coordinates in JSON-LD
   - Update the `services` array to only include pages that exist

2. **Create city-specific service pages** (optional)
   ```
   app/aluminium-windows-midrand/page.tsx
   ```
   Copy an existing city service page and replace the city name throughout.

3. **Add all new URLs to `public/sitemap.xml`**

4. **Update the nearby areas** on adjacent area pages to cross-link to the new area.

---

## Adding a New Service Page

1. Create the folder and file:
   ```
   app/aluminium-fencing-sandton/page.tsx
   ```

2. Copy the closest existing service page for that city and update:
   - Page title, metadata and canonical URL
   - `h1` and all heading text
   - JSON-LD schema (`@id`, `url`, `name`)
   - WhatsApp pre-filled message text
   - Related services links at the bottom

3. Add the URL to `public/sitemap.xml`

4. Add the service card to the relevant area hub page (`app/areas/sandton/page.tsx`)

---

## Contact Details

These appear throughout the codebase. If they change, do a global find & replace:

| Item | Value |
|---|---|
| Phone | `079 593 5025` |
| Tel href | `tel:+27795935025` |
| WhatsApp | `https://wa.me/27795935025` |
| Email | `info@elitealuminium.co.za` |
| Domain | `https://elitealuminium.co.za` |

---

## Deployment

The site is optimised for deployment on **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on push to `main`.

Make sure the following are configured in your Vercel project settings:
- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Output directory:** `.next`

---

## Business Info

| | |
|---|---|
| **Company** | Elite Aluminium |
| **Website** | elitealuminium.co.za |
| **Phone** | 079 593 5025 |
| **Email** | info@elitealuminium.co.za |
| **Service area** | Gauteng (JHB, Pretoria, Sandton, Centurion and surrounds) |
| **Hours** | Mon–Fri 08:00–17:00 |
