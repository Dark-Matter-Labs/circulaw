import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { client } from '@/lib/sanity';
import { meubelsQueries } from '@/lib/queries';

export default function Meubels({ thema, length, instruments }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Meubels'>
      <SimpleThemaLayout
        thema={thema}
        numberOfLaws={length}
        instruments={instruments}
        subheading='instrumenten om circulariteit van meubels te bevorderen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const length = await client.fetch(meubelsQueries.meubelsLength);
  const thema = await client.fetch(meubelsQueries.meubelsThemaQuery);
  const instruments = await client.fetch(meubelsQueries.meubelsInstrumentsQuery);
  return {
    props: {
      thema,
      length,
      instruments,
    },
    revalidate: 1,
  };
}
