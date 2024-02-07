import Layout from '/components/layouts/layout';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction, instrumentListPageFunction } from '@/lib/queries';

export default function Measures({ numberOfInstruments, instruments }) {
  return (
    <Layout title='CircuLaw - Voedselverspilling voorkomen'>
      <MeasuresLayout
        totalNumberOfLaws={numberOfInstruments}
        transitionAgenda='biomassa-en-voedsel'
        title='Lijst van alle voedselverspilling instrumenten'
        thema='voedselverspilling' // must be the same as value in cms
        heading='Lijst van alle voedselverspilling voorkomen instrumenten'
        searchTitle='Zoek in voedselverspilling voorkomen'
        instruments={instruments}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const numberOfInstruments = await client.fetch(themaQueryFunction('voedselverspilling').length);
  const instruments = await client.fetch(instrumentListPageFunction('voedselverspilling'));
  return { props: { numberOfInstruments, instruments }, revalidate: 1 };
}
