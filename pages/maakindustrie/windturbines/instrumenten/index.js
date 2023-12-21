import Layout from '/components/layouts/layout';
import MeasuresLayout from '@/components/layouts/measures-layout';
import { client } from '@/lib/sanity';
import WindmillIcon from '@/public/icons/windmill.png';
import { windQueries } from '@/lib/queries';

export default function Measures({ totalNumberOfLaws }) {
  return (
    <Layout title='CircuLaw - Windturbines'>
      <MeasuresLayout
        totalNumberOfLaws={totalNumberOfLaws}
        title='Lijst van alle windturbines instrumenten'
        thema='windturbines'
        heading='Instrumenten om de inzet en circulariteit van windturbines te bevorderen'
        // introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om circulaire windturbines. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={WindmillIcon}
        searchTitle='Zoek in windturbines'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const totalNumberOfLaws = await client.fetch(windQueries.windLength);
  return { props: { totalNumberOfLaws: totalNumberOfLaws }, revalidate: 1 };
}
