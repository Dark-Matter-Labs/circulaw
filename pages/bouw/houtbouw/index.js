import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction } from '@/lib/queries';

export default function Houtbouw({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Houtbouw'>
      <ThemeLayout
        featuredLaws={featuredLaws}
        transitionAgenda='bouw'
        thema={thema}
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(themaQueryFunction('houtbouw').featured);
  const length = await client.fetch(themaQueryFunction('houtbouw').length);
  const thema = await client.fetch(themaQueryFunction('houtbouw').themaQuery);
  return {
    props: {
      featuredLaws,
      thema,
      length,
    },
    revalidate: 1,
  };
}
