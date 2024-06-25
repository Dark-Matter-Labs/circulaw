let url = 'https://circulaw-staging.vercel.app';

if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
} else {
    url = 'https://www.circulaw.nl';
}

module.exports = {
    siteUrl: url,
    generateRobotsTxt: true,
  }