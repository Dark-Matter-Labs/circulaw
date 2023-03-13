import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const houtbouwFeatured = `
*[_type == "measure" && thema == "houtbouw" && isFeatured == true]
`;

const houtbouwLength = `
count(*[_type == "measure" && thema == "houtbouw"])
`;

const houtbouwThemaQuery = `
*[_type == "thema" && themaName == "Houtbouw stimuleren"][0]
`


export default function Houtbouw({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });
  
  return (
    <Layout>
      <ThemeLayout
        featuredLaws={featuredLaws} 
        thema={thema}
        bgHero='bg-houtbouw-hero'
        heroImage='/hero-images/houtbouw.jpeg'
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(houtbouwFeatured);
  const length = await client.fetch(houtbouwLength)
  const thema  = await client.fetch(houtbouwThemaQuery)  
  return { 
    props: { 
      featuredLaws,
      thema,
      length 
    }, };
} 
