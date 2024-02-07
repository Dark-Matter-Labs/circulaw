import Layout from '/components/layouts/layout';
import MatrassenIcon from '@/public/icons/matressIcon.svg';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import { themaQueryFunction } from '@/lib/queries';

export default function Measures({ numberOfInstruments }) {
  return (
    <Layout title='CircuLaw - Matrasketen'>
      <MeasuresLayout
        totalNumberOfLaws={numberOfInstruments}
        title='Lijst van alle matrasketen instrumenten'
        thema='matrasketen'
        heading='Instrumenten om de circulariteit van de matrasketen te bevorderen'
        // introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om matrassen. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={MatrassenIcon}
        searchTitle='Zoek in matrasketen'
      />
    </Layout>
  );
}

// move fetching of laws here
export async function getStaticProps() {
  const numberOfInstruments = await client.fetch(
    themaQueryFunction('matrasketen', 'Matrasketen').length,
  );
  return { props: { numberOfInstruments }, revalidate: 1 };
}
