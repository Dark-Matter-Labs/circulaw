import Layout from '/components/layouts/layout';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import { instrumentListPageFunction, themaQueryFunction } from '@/lib/queries';

export default function Measures({ numberOfInstruments, instruments }) {
  return (
    <Layout title='CircuLaw - Houtbouw stimuleren'>
      <MeasuresLayout
        totalNumberOfLaws={numberOfInstruments}
        transitionAgenda='bouw'
        title='Lijst van alle houtbouw instrumenten'
        thema='houtbouw' // must be the same as value in cms
        heading='Instrumenten om de inzet van hout in de bouw te bevorderen'
        // introPara={`We hebben ${numberOfInstruments} kansrijke instrumenten gevonden die je kunt inzetten om de houtbouwtransitie te versnellen. Sommige van deze instrumenten zijn al eerder toegepast, andere nog niet. Ga aan de slag! Met jouw ervaringen help je ook anderen weer verder.`}
        // icon={IconWood}
        instruments={instruments}
        searchTitle='Zoek in houtbouw stimuleren'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const numberOfInstruments = await client.fetch(themaQueryFunction('houtbouw', 'Houtbouw').length);
  const instruments = await client.fetch(instrumentListPageFunction('houtbouw'))
  return { props: { numberOfInstruments, instruments }, revalidate: 1 };
}
