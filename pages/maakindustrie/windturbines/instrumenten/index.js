import Layout from '/components/layouts/layout';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import WindmillIcon from '@/public/icons/windmill.png';
import { themaQueryFunction, instrumentListPageFunction } from '@/lib/queries';

export default function Measures({ numberOfInstruments, instruments }) {
  return (
    <Layout title='CircuLaw - Windturbines'>
      <MeasuresLayout
        totalNumberOfLaws={numberOfInstruments}
        title='Lijst van alle windturbines instrumenten'
        thema='windturbines'
        heading='Instrumenten om de inzet en circulariteit van windturbines te bevorderen'
        // introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om circulaire windturbines. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={WindmillIcon}
        searchTitle='Zoek in windturbines'
        instruments={instruments}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const numberOfInstruments = await client.fetch(
    themaQueryFunction('windturbines').length,
  );
  const instruments = await client.fetch(instrumentListPageFunction('windturbines'));
  return { props: { numberOfInstruments, instruments }, revalidate: 1 };
}
