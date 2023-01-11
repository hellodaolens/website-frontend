/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "pbs.twimg.com",
      "res.cloudinary.com",
      "pbs.twimg.com",
      "abs.twimg.com",
      "cryptologos.cc",
      "deepdao-uploads.s3.us-east-2.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/content",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = nextConfig;
