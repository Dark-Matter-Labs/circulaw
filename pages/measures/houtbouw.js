import Layout from '/components/layouts/layout';
import IconWood from '../../public/icons/houtbouwIconBg.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';
import client from '../../lib/sanity';

const lawsQuery = `
*[_type == "measure" && thema == "houtbouw"]
`;

export default function Measures({ laws }) {
  // casus must be exactly as written in data.js
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws={laws.length}
        thema='houtbouw' // must be the same as value in cms
        heading={`${laws.length} houtbouwmaatregelen voor innovatieve beleidsmakers`}
        introPara={`Wij hebben ${laws.length} kansvolle maatregelen gevonden waarmee je beleid uit kunt voeren om de
        houtbouwtransitie te versnellen. Met sommige maatregelen is al praktijkervaring
        opgedaan, met andere nog niet. Durf te pionieren. Jouw ervaringen kunnen dan ook
        anderen weer verder helpen.`}
        icon={IconWood}
        searchTitle='Zoek in houtbouwmaatregelen'
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(lawsQuery);
  return { props: { laws: laws } };
}
