// next.config.js
// const { redirects } = require('./utils/redirects')

const nextConfig = {
  // reactStrictMode: false,
  // redirects,
  async redirects() {
    return [
      {
        source: '/houtbouw-stimuleren',
        destination: '/bouw/houtbouw',
        permanent: true,
      },
      {
        source: '/training/aanmelden',
        destination: '/training',
        permanent: true,
      },
    ]
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '**',
        },
      ],
      qualities: [75, 90, 100],
    },
  }
module.exports = nextConfig
