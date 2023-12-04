import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { client } from '@/lib/sanity';
import { plasticInDeBouwQueries } from '@/lib/queries';

export default function PlasticInDeBouw({ thema, length, instruments }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - PLastic in de bouw'>
      <SimpleThemaLayout thema={thema} numberOfLaws={length} instruments={instruments} />
    </Layout>
  );
}

export async function getStaticProps() {
  const length = await client.fetch(plasticInDeBouwQueries.plasticLength);
  const thema = await client.fetch(plasticInDeBouwQueries.plasticThemaQuery);
  const instruments = await client.fetch(plasticInDeBouwQueries.plasticInstrumentsQuery);
  return {
    props: {
      thema,
      length,
      instruments,
    },
    revalidate: 1,
  };
}
