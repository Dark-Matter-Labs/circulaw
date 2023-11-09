// next.config.js
// const { redirects } = require('./utils/redirects')
const withTM = require('next-transpile-modules')(['@piwikpro/next-piwik-pro']);

const nextConfig = {
  // redirects,
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = withTM(nextConfig);