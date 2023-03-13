import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';

const matrassenFeatured = `
*[_type == "measure" && thema == "matrassen" && isFeatured == true]
`;

const matrassenLength = `
count(*[_type == "measure" && thema == "matrassen"])
`;

const matressThemaQuery = `
*[_type == "thema" && themaName == "Circulaire matrasketen"][0]
`;

export default function Matrassen({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout>
      <ThemeLayout
        featuredLaws={featuredLaws}
        thema={thema}
        bgHero='bg-matrassen-hero'
        heroImage='/hero-images/matrassen.jpeg' // needs replacing
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(matrassenFeatured);
  const thema = await client.fetch(matressThemaQuery);
  const length = await client.fetch(matrassenLength);
  return { props: { featuredLaws, thema, length } };
}
