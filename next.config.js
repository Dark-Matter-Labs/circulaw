// next.config.js
// const { redirects } = require('./utils/redirects')


module.exports = {
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
