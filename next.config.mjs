/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'elitealuminium.co.za' }],
        destination: 'https://www.elitealuminium.co.za/:path*',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
