// next.config.js
// const { redirects } = require('./utils/redirects')

const nextConfig = {
  
  // redirects,
  async redirects() {
    return [
      {
        source: '/houtbouw-stimuleren',
        destination: '/bouw/houtbouw',
        permanent: true,
      },
    ]
  },
  transpilePackages: ['@piwikpro/next-piwik-pro'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '**',
        },
      ],
    },
  }
module.exports = nextConfig
