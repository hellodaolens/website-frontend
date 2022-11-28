/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/content',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
