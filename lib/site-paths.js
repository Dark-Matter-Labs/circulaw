// Routes of the Sanity-backed pages, shared by llms.txt and the JSON-LD
// builders. Each returns null when a segment is missing so callers never emit
// a URL like /bouw/undefined.

const join = (...segments) =>
  segments.every((segment) => typeof segment === 'string' && segment !== '')
    ? `/${segments.join('/')}`
    : null;

export const productChainPath = (productChain) => join(productChain);
export const themaPath = (productChain, thema) => join(productChain, thema);
export const instrumentPath = (productChain, thema, slug) =>
  join(productChain, thema, 'instrumenten', slug);
export const euLawPath = (law) => join('eu-wetgeving', law);
export const euLawTabPath = (law, tab) => join('eu-wetgeving', law, tab);
export const aboutPath = (slug) => join('over', slug);
export const newsPath = (slug) => join('nieuws', slug);

// Same form as the canonical URLs in the page metadata: parentheses in EU law
// slugs stay as they are, spaces and non-ASCII characters are encoded.
export function absoluteUrl(siteUrl, path) {
  if (typeof path !== 'string' || path === '') return null;
  return path === '/' ? siteUrl : siteUrl + encodeURI(path);
}
