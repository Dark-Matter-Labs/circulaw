import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import { client } from '../../lib/sanity';
import { windQueries } from '../../lib/queries';

export default function Windturbine({ featuredLaws, length, thema }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Circulaire Windturbines'>
      <ThemeLayout
        featuredLaws={featuredLaws}
        thema={thema}
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(windQueries.windFeatured);
  const length = await client.fetch(windQueries.windLength);
  const thema = await client.fetch(windQueries.windThemaQuery);
  return {
    props: {
      featuredLaws,
      length,
      thema,
    },
    revalidate: 1,
  };
}
