/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true // status 308
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false // status 308
      }
    ];
  }
};

module.exports = nextConfig;
