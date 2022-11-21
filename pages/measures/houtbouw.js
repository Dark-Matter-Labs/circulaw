import Layout from '/components/layouts/layout';
import IconWood from '../../public/icons/houtbouwIconBg.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';

export default function Measures() {
// casus must be exactly as written in data.js
  return (
    <Layout>
      <MeasuresLayout
        totalNumberOfLaws = {36}
        casus = 'Houtbouw'
        heading = '36 houtbouwmaatregelen voor innovatieve beleidsmakers'
        introPara = 'Wij hebben 36 kansvolle maatregelen gevonden waarmee je beleid uit kunt voeren om de
        houtbouwtransitie te versnellen. Met sommige maatregelen is al praktijkervaring
        opgedaan, met andere nog niet. Durf te pionieren. Jouw ervaringen kunnen dan ook
        anderen weer verder helpen.'
        icon = {IconWood}
        searchTitle = 'Zoek in houtbouwmaatregelen'
        />
    </Layout>
  );
}
