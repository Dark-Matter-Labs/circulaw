import Layout from '/components/layouts/layout';
import WindmillIcon from '../../public/windmill.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';
import client from '../../lib/sanity';

const lawsQuery = `
*[_type == "measure" && thema == "circulaire-windturbines"]
`;

export default function Measures({laws}) {
  console.log(laws)
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={laws.length}
        thema='circulaire-windturbines'
        heading=''
        introPara={`Wij hebben ${laws.length} kansvolle maatregelen gevonden waarmee je beleid uit kunt voeren om de
          circulariteit van windturbines te versnellen. Met sommige maatregelen is al
          praktijkervaring opgedaan, met andere nog niet. Durf te pionieren. Jouw ervaringen
          kunnen dan ook anderen weer verder helpen.`}
        icon={WindmillIcon}
        searchTitle='Zoek in windturbines maatregelen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(lawsQuery);
  return { props: { laws: laws } };
}