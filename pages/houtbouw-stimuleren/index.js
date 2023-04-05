import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import { client } from '../../lib/sanity';
import { houtbouwQueries } from '../../lib/queries';

export default function Houtbouw({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout>
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
  const featuredLaws = await client.fetch(houtbouwQueries.houtbouwFeatured);
  const length = await client.fetch(houtbouwQueries.houtbouwLength);
  const thema = await client.fetch(houtbouwQueries.houtbouwThemaQuery);
  return {
    props: {
      featuredLaws,
      thema,
      length,
    },
    revalidate: 1,
  };
}
