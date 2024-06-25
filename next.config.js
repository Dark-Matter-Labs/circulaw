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
      {
        source: '/over/Wat-is-CircuLaw',
        destination: '/over/wat-is-circulaw',
        permanent: true,
      },
      {
        source: '/over/Wat-vind-je-nu-op-CircuLaw',
        destination: '/over/wat-vind-je-nu-op-circulaw',
        permanent: true,
      },
      {
        source: '/over/Wetsanalyse-vanuit-circulaire-blik',
        destination: '/over/wetsanalyse-vanuit-circulaire-blik',
        permanent: true,
      },
      {
        source: '/over/Zorgplicht-van-de-overheid',
        destination: '/over/zorgplicht-van-de-overheid',
        permanent: true,
      },
      {
        source: '/over/Wie-maken-CircuLaw',
        destination: '/over/wie-maken-circulaw',
        permanent: true,
      },
    ]
  },
    images: {
      domains: ['cdn.sanity.io'],
    },
  }
module.exports = withTM(nextConfig);
