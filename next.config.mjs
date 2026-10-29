/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  // Send the bare domain to www so Google sees one version of every page
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "elitealuminium.co.za" }],
        destination: "https://www.elitealuminium.co.za/:path*",
        permanent: true,
      },
    ]
  },
}
export default nextConfig
