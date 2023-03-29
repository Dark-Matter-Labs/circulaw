import Layout from '/components/layouts/layout';
import MeasuresLayout from '../../components/layouts/measures-layout';
import { client } from '../../lib/sanity';
import WindmillIcon from '../../public/icons/windmill.png';
import { matrassenQueries } from '../../lib/queries';

export default function Measures({ laws }) {
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={totalNumberOfLaws}
        title='Circulaire windturbines'
        thema='circulaire-windturbines'
        heading='Instrumenten om de inzet en circulariteit van windturbines te bevorderen'
        introPara={`We hebben ${totalNumberOfLaws} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om circulaire windturbines. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={WindmillIcon}
        searchTitle='Zoek in circulaire windturbines'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(matrassenQueries.matrassenLength);
  return { props: { laws: laws }, revalidate: 1 };
}
