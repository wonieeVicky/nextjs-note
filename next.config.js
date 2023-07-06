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
        permanent: true // status 308 - search engine에게 영구적 캐싱해도 된다고 알려줌
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/vicky',
        destination: '/about/me/vicky'
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug'
      }
    ];
  }
};

module.exports = nextConfig;
