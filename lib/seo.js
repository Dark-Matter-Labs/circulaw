// Pure builders behind app/robots.js and app/sitemap.js, kept free of Next and
// Sanity imports so they can be unit tested with node --test.
import { EU_LAW_SUBTABS } from './eu-law-tabs.js';

// Pages that are not a single Sanity document. The planregels pages only exist
// for the 'bouw' product chain (see their generateStaticParams).
export const STATIC_PATHS = [
  '/',
  '/nieuws',
  '/eu-wetgeving',
  '/vraag-en-antwoord',
  '/training',
  '/contact',
  '/nieuwsbrief',
  '/bouw/planregels',
  '/bouw/planregels/modelteksten',
  '/bouw/gebiedsontwikkeling',
];

// Every full 'thema' (not 'simpleThema') has these pages under its own URL.
const THEMA_SUBPAGES = ['instrumenten', 'categorie', 'overheidsbevoegdheid'];

const DOCUMENT_GROUPS = ['pcs', 'themas', 'instrument', 'eu', 'about', 'news', 'modelTexts'];

// Staging and dev serve copies of the production content; letting them be
// indexed splits ranking with www.circulaw.nl.
export function isIndexableDataset(dataset) {
  return dataset === 'production';
}

export function buildRobots({ indexable, siteUrl }) {
  if (!indexable) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [
      {
        userAgent: '*',
        // /api/og stays open so social and AI previews can fetch the share image.
        allow: ['/', '/api/og'],
        disallow: ['/studio', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

// data: the result of SITEMAP_QUERY, groups of { URL, updatedAt }.
export function buildSitemapEntries(data, siteUrl) {
  const toUrl = (path) => (path === '/' ? siteUrl : siteUrl + path);

  const staticEntries = STATIC_PATHS.map((path) => ({ url: toUrl(path) }));

  const documentEntries = DOCUMENT_GROUPS.flatMap((group) => data?.[group] ?? [])
    .filter((doc) => doc?.URL)
    .map((doc) => ({ url: toUrl(doc.URL), lastModified: doc.updatedAt }));

  const themaSubpageEntries = (data?.fullThemas ?? [])
    .filter((thema) => thema?.URL)
    .flatMap((thema) =>
      THEMA_SUBPAGES.map((sub) => ({
        url: toUrl(`${thema.URL}/${sub}`),
        lastModified: thema.updatedAt,
      })),
    );

  const euLawTabEntries = (data?.eu ?? [])
    .filter((law) => law?.URL)
    .flatMap((law) =>
      EU_LAW_SUBTABS.map((tab) => ({
        url: toUrl(`${law.URL}/${tab.slug}`),
        lastModified: law.updatedAt,
      })),
    );

  const seen = new Set();
  return [...staticEntries, ...documentEntries, ...themaSubpageEntries, ...euLawTabEntries].filter(
    (entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    },
  );
}
