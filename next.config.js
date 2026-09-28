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
      // Model texts used to open as ?modeltext= on the overview; each now has its
      // own page (which the overview still shows as a popup).
      {
        source: '/bouw/planregels/modelteksten',
        has: [{ type: 'query', key: 'modeltext', value: '(?<slug>.+)' }],
        destination: '/bouw/planregels/modelteksten/:slug',
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
