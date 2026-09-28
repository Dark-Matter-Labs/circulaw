import { SITEMAP_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import { buildSitemapEntries } from '@/lib/seo';
import globalMeta from '@/utils/global-meta';

// TODO: update to sanityFetch
export async function getURLS() {
  const urls = await client.fetch(SITEMAP_QUERY, {
    next: {
      tags: [
        'aboutPage',
        'instrument',
        'euLaw',
        'thema',
        'simpleThema',
        'transitionAgenda',
        'newsItem',
      ],
    },
  });
  if (!urls) {
    throw new Error('could not fetch sitemap URLs');
  }
  return urls;
}

export default async function sitemap() {
  const urls = await getURLS();
  return buildSitemapEntries(urls, globalMeta.siteUrl);
}
