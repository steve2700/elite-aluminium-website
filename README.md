# Elite Aluminium Website

Next.js (App Router), TypeScript, Tailwind CSS v4.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```

## Change contact details in one file
Phone, WhatsApp, email, hours, social links and domain: `lib/site.ts`. Also update the domain in `public/robots.txt`.

## Add new photos (this is the main job)
1. Put the photo in `public` with a descriptive file name, for example `black-aluminium-sliding-doors-pool-view.jpg`.
2. Add one line to `lib/photos.ts` with the file name, title, description, tags and width and height.
3. It appears in the gallery, on the matching product pages and in the homepage ribbon automatically. Every photo gets its own share link: `/gallery?photo=<id>`.

Gallery filter links: `/gallery?group=windows`, `doors`, `sliding-doors`, `gates`, `balustrades`, `shower-doors`, `etched-glass`.

## Where things are
| What | Where |
| --- | --- |
| Photos and videos | `lib/photos.ts` |
| Products, options, FAQs | `lib/products.ts` |
| Areas and suburbs | `lib/cities.ts` |
| Every page URL (kept from the old site) | `lib/pages.ts` |
| Yebo Invoices partner link | `lib/yebo.ts` |
| AI crawler files | `lib/llms.ts` |
| Colours and animations | `app/globals.css` |
