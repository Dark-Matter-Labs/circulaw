import groq from 'groq';
import { client } from '@/lib/sanity';

export default function SiteMap() {
  return <div>loading</div>;
}
export async function getServerSideProps({ res }) {
  const baseUrl = 'https://www.circulaw.nl';

  // get all instruments
  const query = groq`{
        "instruments": *[_type == 'instrument'] {
        "URL":'/' + lower(transitionAgenda->pcName) + '/' + lower(thema->themaName) + '/instrumenten/' + slug.current
        }
    }`;
  const urls = await client.fetch(query);
  const instruments = urls.instruments.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-').replace('(', '').replace(')', '');
    return `
        <loc>${baseUrl}${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        `;
  });

  // get all product chains
  const PCquery = groq`{
        "urls": *[_type == 'transitionAgenda'] {"URL":'/' + lower(pcName)}
}`;
  const PCs = await client.fetch(PCquery);
  const PC_urls = PCs.urls.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-');
    return `
    <loc>${baseUrl}${slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    `;
  });

  // get all themas
  const themaQuery = groq`{
    "urls": *[_type == 'thema' || _type =='simpleThema'] {"URL":'/' + lower(transitionAgenda->pcName) + '/' + lower(themaName)}
}`;
  const themas = await client.fetch(themaQuery);
  const thema_urls = themas.urls.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-').replace('(on)', '');
    return `
<loc>${baseUrl}${slug}</loc>
<changefreq>daily</changefreq>
<priority>0.8</priority>
`;
  });

  // get all EU instruments
  const EUQuery = groq`{
        "instruments": *[_type == 'euLaw'] {
        "URL":'/eu-wetgeving/' + slug.current
        }
}`;
  const EUinstruments = await client.fetch(EUQuery);
  const EU_urls = EUinstruments.instruments.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-');
    return `
<loc>${baseUrl}${slug}</loc>
<changefreq>daily</changefreq>
<priority>0.8</priority>
`;
  });

  // get all about pages
  const AboutQuery = groq`{
        "pages": *[_type == 'aboutPage'] {
        "URL":'/over/' + slug.current
        }
}`;
  const aboutPages = await client.fetch(AboutQuery);
  const about_urls = aboutPages.pages.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-');
    return `
<loc>${baseUrl}${slug}</loc>
<changefreq>daily</changefreq>
<priority>0.8</priority>
`;
  });

  // get all news articles
  const newsQuery = groq`
    *[_type == 'newsPage']{
  "items": newsItems[createPage == true]{
    "URL": '/nieuws/' + slug.current, 
  },
}`;
  const newsPages = await client.fetch(newsQuery);
  const news_urls = newsPages[0].items.map((page) => {
    const slug = page.URL.replace(/\s+/g, '-');
    return `
<loc>${baseUrl}${slug}</loc>
<changefreq>daily</changefreq>
<priority>0.8</priority>
`;
  });

  const locations = [...instruments];
  const PCLinks = [...PC_urls];
  const themaLinks = [...thema_urls];
  const EULinks = [...EU_urls];
  const aboutLinks = [...about_urls];
  const newsLinks = [...news_urls];

  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations
          .map((location) => {
            return `<url>
                ${location}
                </url>
                `;
          })
          .join('')}

          ${PCLinks.map((location) => {
            return `<url>
                  ${location}
                  </url>
                  `;
          }).join('')}

          ${themaLinks
            .map((location) => {
              return `<url>
                  ${location}
                  </url>
                  `;
            })
            .join('')}

            ${EULinks.map((location) => {
              return `<url>
                  ${location}
                  </url>
                  `;
            }).join('')}

            ${aboutLinks
              .map((location) => {
                return `<url>
                  ${location}
                  </url>
                  `;
              })
              .join('')}

            ${newsLinks
              .map((location) => {
                return `<url>
                  ${location}
                  </url>
                  `;
              })
              .join('')}
    </urlset>
    `;
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
