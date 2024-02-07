import { useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import { client } from '@/lib/sanity';
import { simpleThemaQueryFunction } from '@/lib/queries';

export default function Meubels({ thema, length, instruments }) {
  useEffect(() => {
    localStorage.clear();
  });

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
  const length = await client.fetch(simpleThemaQueryFunction('woningen' ,'Woningen').length);
  const thema = await client.fetch(simpleThemaQueryFunction('woningen' ,'Woningen').themaQuery);
  const instruments = await client.fetch(simpleThemaQueryFunction('woningen' ,'Woningen').instrumentsQuery);
  return {
    props: {
      thema,
      length,
      instruments,
    },
    revalidate: 1,
  };
}
