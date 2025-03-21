import { SITEMAP_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';

const baseUrl = 'https://www.circulaw.nl';

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
    throw new Error('could not fetch instruments');
  }
  return urls;
}

export default async function sitemap() {
  const urls = await getURLS();
  const array = [];
  const URLS = array.concat(urls.instrument, urls.about, urls.eu, urls.pcs, urls.themas, urls.news);
  return URLS.map((url) => ({
    url: baseUrl + url.URL,
    priority: 0.8,
    changeFrequency: 'daily',
  }));
}
