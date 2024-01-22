import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { client } from '@/lib/sanity';
import { woningenQueries } from '@/lib/queries';

export default function Meubels({ thema, length, instruments }) {
  useEffect(() => {
    localStorage.clear();
  });
  console.log(length)
  return (
    <Layout title='CircuLaw - Woningen'>
      <SimpleThemaLayout
        thema={thema}
        numberOfLaws={length}
        instruments={instruments}
        subheading='instrumenten om circulariteit van woningen te bevorderen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const length = await client.fetch(woningenQueries.woningenLength);
  const thema = await client.fetch(woningenQueries.woningenThemaQuery);
  const instruments = await client.fetch(woningenQueries.woningenInstrumentsQuery);
  return {
    props: {
      thema,
      length,
      instruments,
    },
    revalidate: 1,
  };
}
