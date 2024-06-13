import groq from 'groq';
import { client } from '@/lib/sanity';


// TODO: add other dynamic and non dynamic pages to sitemap as well
export default function SiteMap() {
    return <div>loading</div>;
}
export async function getServerSideProps({ res }) {
    const baseUrl = 'https://www.circulaw.nl';
    const query = groq`{
        "instruments": *[_type == 'instrument'] {
        "URL":'/' + lower(transitionAgenda->pcName) + '/' + lower(thema->themaName) + '/instrumenten/' + slug.current
        }
    }`;
    const urls = await client.fetch(query);
    const instruments = urls.instruments.map((page) => {
    const slug = page.URL;
    return `
        <loc>${baseUrl}${slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
        `;
    });

    const locations = [...instruments];
    const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations.map((location) => {
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
