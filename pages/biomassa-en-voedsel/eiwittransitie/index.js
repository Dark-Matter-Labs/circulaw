import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { client } from '@/lib/sanity';
import { simpleThemaQueryFunction } from '@/lib/queries';

export default function Eiwittransitie({ thema, length, instruments }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout title='CircuLaw - Eiwittransitie'>
      <SimpleThemaLayout
        thema={thema}
        numberOfLaws={length}
        instruments={instruments}
        subheading='instrumenten om circulariteit van eiwittransitie te bevorderen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const length = await client.fetch(
    simpleThemaQueryFunction('eiwittransitie', 'Eiwittransitie').length,
  );
  const thema = await client.fetch(
    simpleThemaQueryFunction('eiwittransitie', 'Eiwittransitie').themaQuery,
  );
  const instruments = await client.fetch(
    simpleThemaQueryFunction('eiwittransitie', 'Eiwittransitie').instrumentsQuery,
  );
  return {
    props: {
      thema,
      length,
      instruments,
    },
    revalidate: 1,
  };
}
