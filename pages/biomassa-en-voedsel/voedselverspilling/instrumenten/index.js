import Layout from '/components/layouts/layout';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction } from '@/lib/queries';

export default function Measures({ numberOfInstruments }) {
  return (
    <Layout title='CircuLaw - Voedselverspilling voorkomen'>
      <MeasuresLayout
        totalNumberOfLaws={numberOfInstruments}
        transitionAgenda='biomassa-en-voedsel'
        title='Lijst van alle voedselverspilling instrumenten'
        thema='voedselverspilling' // must be the same as value in cms
        heading='Lijst van alle voedselverspilling voorkomen instrumenten'
        searchTitle='Zoek in voedselverspilling voorkomen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const numberOfInstruments = await client.fetch(themaQueryFunction('voedselverspilling', 'Voedselverspilling').length);
  return { props: { numberOfInstruments }, revalidate: 1 };
}
