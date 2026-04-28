import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Mail, Phone, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Aluminium",
  description:
    "Elite Aluminium's privacy policy. Learn how we collect, use and protect your personal information in accordance with POPIA (Protection of Personal Information Act).",
  alternates: { canonical: "https://elitealuminium.co.za/privacy-policy" },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "13 April 2025"

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-slate-300 text-lg">
              Elite Aluminium is committed to protecting your personal information in accordance with the
              <strong className="text-white"> Protection of Personal Information Act (POPIA)</strong> — South Africa's
              data privacy law.
            </p>
            <p className="text-slate-400 text-sm mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            {/* 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Who We Are</h2>
              <p className="text-slate-700 leading-relaxed">
                Elite Aluminium ("we", "us", "our") is a Gauteng-based aluminium and glass installation company
                operating under the domain <strong>elitealuminium.co.za</strong>. We are the responsible party for
                the personal information we collect, as defined under POPIA.
              </p>
              <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm"><strong>Business name:</strong> Elite Aluminium</p>
                <p className="text-slate-700 text-sm mt-1"><strong>Email:</strong> info@elitealuminium.co.za</p>
                <p className="text-slate-700 text-sm mt-1"><strong>Phone:</strong> 067 276 3724</p>
                <p className="text-slate-700 text-sm mt-1"><strong>Service area:</strong> Gauteng, South Africa</p>
              </div>
            </div>

            {/* 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We only collect personal information that is necessary to provide our services and respond to your
                enquiries. This includes:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Contact details</strong> — your name, phone number and email address when you submit a quote request or contact form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Location information</strong> — your suburb or area so we can confirm we service your location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Project details</strong> — information you voluntarily provide about the work you need done</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Communication records</strong> — emails, WhatsApp messages and call records relating to your enquiry or project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Technical data</strong> — IP address, browser type, pages visited, and device information collected automatically via cookies and analytics tools</span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                We do not collect sensitive personal information (such as identity numbers, financial account details
                or biometric data) through this website.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We use your personal information to:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Respond to quote requests and enquiries</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Schedule site visits, measurements and installations</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Send quotes, invoices and project-related communications</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Follow up on completed installations for feedback or warranty purposes</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Improve our website and services through analytics</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Comply with legal obligations</span></li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                We will only contact you for marketing purposes (such as promotions or new services) if you have
                given us clear consent to do so. You may withdraw this consent at any time.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
              <p className="text-slate-700 leading-relaxed">
                Under POPIA, we process your personal information on the following lawful grounds:
              </p>
              <ul className="space-y-2 text-slate-700 mt-4">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Contract performance</strong> — to fulfil a quote, agreement or installation you have requested</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Consent</strong> — when you voluntarily submit your information through our contact or quote forms</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Legitimate interest</strong> — to operate and improve our business, provided this does not override your rights</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Legal obligation</strong> — where required to comply with South African law</span></li>
              </ul>
            </div>

            {/* 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Sharing Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We do not sell, rent or trade your personal information to third parties. We may share your
                information only in the following limited circumstances:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Service providers</strong> — trusted third-party tools we use to run our business (e.g. email hosting, website analytics), who are contractually bound to protect your data</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Installation sub-contractors</strong> — where we engage a trusted contractor to assist with your installation, we share only the minimum necessary details (your name, contact number and address)</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Legal requirements</strong> — if required by law, court order or regulatory authority</span></li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                Any third party that receives your personal information is required to handle it in accordance
                with POPIA and our data protection standards.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies & Website Analytics</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to improve your browsing experience and
                understand how visitors use our site. These include:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Essential cookies</strong> — required for the website to function correctly</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Analytics cookies</strong> — tools like Google Analytics that help us understand page visits and user behaviour (no personally identifiable information is shared)</span></li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect some
                functionality of the website.
              </p>
            </div>

            {/* 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. How Long We Keep Your Information</h2>
              <p className="text-slate-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfil the purpose for which
                it was collected, or as required by law. In practice:
              </p>
              <ul className="space-y-2 text-slate-700 mt-4">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Quote enquiries that do not proceed to an installation are deleted within <strong>12 months</strong></span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Customer records relating to completed installations are kept for <strong>5 years</strong> to support our workmanship guarantee</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span>Financial and tax records are retained for <strong>5 years</strong> as required by the South African Revenue Service</span></li>
              </ul>
            </div>

            {/* 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights Under POPIA</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                As a data subject under POPIA, you have the following rights:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right of access</strong> — to request a copy of the personal information we hold about you</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right to correction</strong> — to request that inaccurate information be corrected</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right to deletion</strong> — to request that your information be deleted, subject to legal retention requirements</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right to object</strong> — to object to processing for direct marketing purposes</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right to withdraw consent</strong> — to withdraw consent at any time, without affecting the lawfulness of prior processing</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">•</span><span><strong>Right to complain</strong> — to lodge a complaint with the Information Regulator of South Africa</span></li>
              </ul>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-slate-700 text-sm">
                  <strong>Information Regulator of South Africa</strong><br />
                  Website: <a href="https://www.inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.inforegulator.org.za</a><br />
                  Email: inforeg@justice.gov.za
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We take reasonable technical and organisational measures to protect your personal information from
                unauthorised access, loss, misuse or alteration. Our website uses HTTPS encryption, and access to
                customer records is restricted to authorised staff only. While we take these precautions, no
                internet transmission is completely secure and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Links</h2>
              <p className="text-slate-700 leading-relaxed">
                Our website may contain links to third-party websites (such as WhatsApp or Google Maps). We are
                not responsible for the privacy practices of those sites and encourage you to read their own
                privacy policies.
              </p>
            </div>

            {/* 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                obligations. The updated version will always be available on this page with a revised "last
                updated" date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* 12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, wish to exercise your rights, or have a
                concern about how we handle your personal information, please contact us:
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

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 mb-4">Have questions? We're happy to help.</p>
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
