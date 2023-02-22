/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cryrdle-et-al.infura-ipfs.io",
      },
    ],
  },
}

module.exports = nextConfig
