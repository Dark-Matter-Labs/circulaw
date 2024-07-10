// next.config.js
// const { redirects } = require('./utils/redirects')
const withTM = require('next-transpile-modules')(['@piwikpro/next-piwik-pro']);

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
module.exports = withTM(nextConfig);
