import { client } from '@/lib/sanity';

const baseUrl = 'https://www.circulaw.nl';

async function getInstruments() {
  const INSTRUMENT_QUERY = `{
        "instruments": *[_type == 'instrument'] {
        "URL":'/' + lower(transitionAgenda->pcName) + '/' + lower(thema->themaName) + '/instrumenten/' + slug.current
        }
    }`;
  const urls = await client.fetch(INSTRUMENT_QUERY);
  if (!urls) {
    throw new Error('could not fetch instruments');
  }
  return urls;
}

export default async function Sitemap() {
  const instruments = await getInstruments();

  return instruments.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-').replace('elektr(on)ische', 'elektrische');
    return `
                <loc>${baseUrl}${slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
                `;
  });
}
