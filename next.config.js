/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'panel.mwa3id.com',
        port: '',
        pathname:'/public/**'
      },
    ],
  },
}

module.exports = nextConfig
