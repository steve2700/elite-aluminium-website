import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Mail, Phone, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions | Elite Aluminium",
  description:
    "Elite Aluminium's terms and conditions. Understand our service agreements, quotation policy, installation warranty, payment terms and liability.",
  alternates: { canonical: "https://elitealuminium.co.za/terms-and-conditions" },
  robots: { index: true, follow: true },
}

export default function TermsAndConditionsPage() {
  const lastUpdated = "13 April 2025"

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Terms & Conditions</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
            </div>
            <p className="text-slate-300 text-lg">
              Please read these terms carefully before engaging Elite Aluminium for any services. By requesting a
              quote, accepting a quote or commissioning any installation, you agree to be bound by these terms.
            </p>
            <p className="text-slate-400 text-sm mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h2>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>"Elite Aluminium"</strong>, "we", "us" or "our" refers to Elite Aluminium, operating from Gauteng, South Africa.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>"Client"</strong>, "you" or "your" refers to any individual or entity that requests a quote or engages our services.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>"Services"</strong> refers to the supply, manufacture and/or installation of aluminium windows, doors, security gates, fencing, glass and related products.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>"Quote"</strong> refers to the written or electronic estimate provided by Elite Aluminium for the agreed scope of work.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>"Agreement"</strong> refers to the binding contract formed when a Client accepts a Quote.</span></li>
              </ul>
            </div>

            {/* 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Quotations</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>All quotes provided by Elite Aluminium are valid for <strong>30 days</strong> from the date of issue, unless otherwise stated in writing.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Quotes are based on the information provided at the time of the site visit or enquiry. Any changes to the scope of work, materials or site conditions after a quote is issued may result in a revised quote.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>A quote does not constitute a binding agreement until it has been formally accepted by the Client, either in writing, verbally with written confirmation, or by payment of a deposit.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium reserves the right to withdraw or revise a quote before it is accepted, particularly if material costs or lead times change significantly.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Verbal estimates provided over the phone or via WhatsApp are indicative only and do not constitute a formal quote.</span></li>
              </ul>
            </div>

            {/* 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>A <strong>50% deposit</strong> is required to confirm your order and commence manufacturing. Work will not begin until the deposit is received and cleared.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The <strong>remaining 50% balance</strong> is due on the day of installation, prior to completion of the work or handover.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Payment may be made by EFT (Electronic Funds Transfer) to our business bank account. Details will be provided on the invoice.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium reserves the right to charge interest on overdue amounts at a rate of <strong>2% per month</strong> on the outstanding balance.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Ownership of all materials and installed products remains with Elite Aluminium until payment is received in full.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>All prices are quoted in South African Rand (ZAR) and are inclusive of VAT unless otherwise stated.</span></li>
              </ul>
            </div>

            {/* 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cancellations & Changes</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Cancellations must be made in writing (email or WhatsApp) as soon as possible after placing an order.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>If manufacturing has already commenced at the time of cancellation, the deposit paid is <strong>non-refundable</strong> and may not cover the full cost of materials already cut or fabricated.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>If no manufacturing has commenced, Elite Aluminium will refund the deposit less any reasonable administration or site visit costs incurred.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Changes to specifications after an order is confirmed (size, colour, style) may incur additional charges and revised lead times. Please confirm all details carefully before accepting a quote.</span></li>
              </ul>
            </div>

            {/* 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Lead Times & Installation Scheduling</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Lead times vary depending on the scope of work and current production schedule. Estimated lead times will be communicated at the time of quote acceptance.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium will make every reasonable effort to meet agreed installation dates. However, delays caused by material shortages, weather, load shedding or other circumstances beyond our control do not constitute a breach of contract.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The Client must ensure that the installation site is accessible and ready on the agreed installation date. If our team cannot access the site, a rescheduling fee may apply.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>For estate or complex installations, the Client is responsible for obtaining all necessary access permissions and HOA approvals prior to the installation date.</span></li>
              </ul>
            </div>

            {/* 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Client Responsibilities</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The Client is responsible for ensuring that the measurements and specifications provided to Elite Aluminium are accurate. We strongly recommend a professional site measurement, which we offer as part of the quotation process.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The Client must obtain any necessary building plan approvals, municipal permits or estate architectural committee approvals before installation commences.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The Client must ensure that the installation area is clear and accessible on the agreed date, and that all existing furniture, blinds or fittings that may obstruct the installation are removed in advance.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The Client accepts that some dust, noise and minor disruption is unavoidable during installation. Elite Aluminium takes reasonable care to minimise this and will clean up after the installation.</span></li>
              </ul>
            </div>

            {/* 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Workmanship Guarantee</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
                <p className="text-slate-800 font-semibold">Elite Aluminium offers a <strong>10-year workmanship guarantee</strong> on all installations.</p>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The guarantee covers defects in workmanship — including improper installation, faulty sealing or hardware failure caused by installation error.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The guarantee does not cover damage caused by misuse, accidental damage, storm damage, building movement, unauthorised modifications, or normal wear and tear.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Manufacturer warranties on hardware, glass and aluminium profiles are separate from our workmanship guarantee and are subject to the relevant manufacturer's terms.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The guarantee is valid only when full payment has been received and is non-transferable to subsequent property owners unless agreed in writing.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>To make a warranty claim, contact us at info@elitealuminium.co.za with photos and a description of the issue. We will assess and respond within 5 business days.</span></li>
              </ul>
            </div>

            {/* 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Materials & Products</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>All materials supplied by Elite Aluminium are SABS certified and meet South African quality standards.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Powder-coated colours are matched to your selection from our standard RAL colour range. Slight colour variations may occur between batches and between screens and the physical product — this is not a defect.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>All safety glass supplied meets the requirements of SANS 1263. Where laminated or toughened glass is specified, it will be supplied and installed accordingly.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium reserves the right to substitute specified materials with equivalent alternatives if the original materials become unavailable, subject to notifying the Client.</span></li>
              </ul>
            </div>

            {/* 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium's liability to the Client is limited to the value of the contract for the specific installation in question.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>We are not liable for indirect, consequential or economic loss, including loss of rental income, business interruption or damage to contents, unless caused by our gross negligence.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Elite Aluminium is not responsible for damage caused by pre-existing structural defects, subsidence or other building issues not visible at the time of installation.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Nothing in these terms limits or excludes liability for death or personal injury caused by our negligence, or any liability that cannot be excluded by South African law.</span></li>
              </ul>
            </div>

            {/* 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Intellectual Property</h2>
              <p className="text-slate-700 leading-relaxed">
                All content on the Elite Aluminium website — including text, images, logos, designs and layout —
                is the property of Elite Aluminium and may not be copied, reproduced or used without our prior
                written consent.
              </p>
            </div>

            {/* 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Dispute Resolution</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>In the event of a dispute, both parties agree to first attempt to resolve the matter amicably through direct communication.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>If the dispute cannot be resolved within 30 days, either party may refer the matter to a mutually agreed mediator or, failing agreement, to the relevant South African court.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>These terms are governed by the laws of the Republic of South Africa.</span></li>
              </ul>
            </div>

            {/* 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Website Use</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>The information on this website is provided for general informational purposes. While we strive to keep it accurate and up to date, we make no representations or warranties about its completeness or accuracy.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Price ranges published on this website are indicative only. Actual pricing depends on specific measurements, materials and site conditions, and will be confirmed in a formal written quote.</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>We reserve the right to update, modify or remove any content on the website at any time without notice.</span></li>
              </ul>
            </div>

            {/* 13 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Changes to These Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                Elite Aluminium reserves the right to update these Terms & Conditions at any time. The current
                version will always be published on this page with the updated date. Continued use of our
                services after any changes constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 space-y-3">
                <a href="mailto:info@elitealuminium.co.za" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                  info@elitealuminium.co.za
                </a>
                <a href="tel:+27672763724" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone className="h-5 w-5 text-blue-600" />
                  067 276 3724
                </a>
              </div>
            </div>

            {/* Links to other legal pages */}
            <div className="border-t border-slate-200 pt-8">
              <p className="text-slate-600 text-sm mb-3">Related legal documents:</p>
              <Link href="/privacy-policy" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                Privacy Policy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 mb-4">Have questions about our terms? We're happy to explain.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
