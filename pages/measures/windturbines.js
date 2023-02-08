import Layout from '/components/layouts/layout';
import MeasuresLayout from '../../components/layouts/measures-layout';
import client from '../../lib/sanity';
import WindmillIcon from '../../public/windmill.png';

const lawsQuery = `
*[_type == "measure" && thema == "circulaire-windturbines"]
`;

export default function Measures({ laws }) {
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={laws.length}
        thema='circulaire-windturbines'
        heading='Instrumenten om de inzet en circulariteit van windturbines te bevorderen'
        introPara={`We hebben ${laws.length} kansrijke instrumenten gevonden die je kunt inzetten als het gaat om circulaire windturbines. Met sommige van deze instrumenten is al praktijkervaring opgedaan, met andere nog niet. Ga aan de slag! Met jouw ervaringen help je anderen weer verder.`}
        icon={WindmillIcon}
        searchTitle='Zoek in circulaire windturbines'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(lawsQuery);
  return { props: { laws: laws } };
}
