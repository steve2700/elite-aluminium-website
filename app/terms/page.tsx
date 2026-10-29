import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms for using the Elite Aluminium website and requesting quotes.", alternates: { canonical: "/terms" } }

export default function Terms() {
  const h = "mt-10 text-3xl font-bold"
  const p = "mt-3 text-lg leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Terms and Conditions", href: "/terms" }]} title="Terms and Conditions" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>By using this website you agree to these terms. They are a general guide and do not replace a written quote or contract.</p>
        <h2 className={h}>Quotes</h2>
        <p className={p}>Quotes given from photos or messages are estimates. The final price is confirmed in writing after measurements are taken and before work begins.</p>
        <h2 className={h}>Made to measure products</h2>
        <p className={p}>Windows, doors and similar products are made to measure for your openings. The terms of payment and any warranty are stated on the signed quote or contract.</p>
        <h2 className={h}>Photos</h2>
        <p className={p}>Photos on this website show real installations and are for illustration. Your product may differ in size, colour and finish.</p>
        <h2 className={h}>Website content</h2>
        <p className={p}>Information on this site is provided in good faith and may change without notice.</p>
        <h2 className={h}>Liability</h2>
        <p className={p}>To the extent allowed by law, Elite Aluminium is not liable for loss arising from the use of this website.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>Questions about these terms can be sent to us through the contact page.</p>
      </article>
    </>
  )
}
