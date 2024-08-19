import { client } from '@/lib/sanity';
import { SITEMAP_QUERY } from '@/lib/queries';

const baseUrl = 'https://www.circulaw.nl';

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
  console.log(urls);
  const array = [];
  const URLS = array.concat(urls.instrument, urls.about, urls.eu, urls.pcs, urls.themas, urls.news);
  return URLS.map((url) => ({
    url: baseUrl + url.URL,
    priority: 0.8,
    changeFrequency: 'daily',
  }));
}
