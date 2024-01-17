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
      domains: ['cdn.sanity.io'],
    },
  }
module.exports = withTM(nextConfig);
