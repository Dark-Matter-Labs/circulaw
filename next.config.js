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
      // EU law tabs used to be ?tab= query views of one page; each now has its own
      // route. ?tab=overzicht needs no redirect: the law page is the overview.
      {
        source: '/eu-wetgeving/:law',
        has: [
          {
            type: 'query',
            key: 'tab',
            value:
              '(?<tab>verplichtingen-voor-europese-lidstaten|relevantie-voor-regionale-en-lokale-overheden|relevantie-voor-de-circulaire-economie)',
          },
        ],
        destination: '/eu-wetgeving/:law/:tab',
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
