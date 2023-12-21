import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { client } from '@/lib/sanity';
import { voedselverspillingQueries } from '@/lib/queries';

export default function Houtbouw({ featuredLaws, thema, length }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Voedselverspilling voorkomen'>
      <ThemeLayout
        featuredLaws={featuredLaws}
        transitionAgenda='biomassa-en-voedsel'
        thema={thema}
        numberOfLaws={length}
        listTitle={`Lijst van ${length} instrumenten`}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredLaws = await client.fetch(voedselverspillingQueries.voedselverspillingFeatured);
  const length = await client.fetch(voedselverspillingQueries.voedselverspillingLength);
  const thema = await client.fetch(voedselverspillingQueries.voedselverspillingThemaQuery);
  return {
    props: {
      featuredLaws,
      thema,
      length,
    },
    revalidate: 1,
  };
}
