import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import { client } from '../../lib/sanity';
import { matrassenQueries } from '../../lib/queries';

export default function Matrassen({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Circulaire Matrasketen'>
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
  const featuredLaws = await client.fetch(matrassenQueries.matrassenFeatured);
  const thema = await client.fetch(matrassenQueries.matressThemaQuery);
  const length = await client.fetch(matrassenQueries.matrassenLength);
  return { props: { featuredLaws, thema, length }, revalidate: 1 };
}
