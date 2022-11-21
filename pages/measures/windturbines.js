import Layout from '/components/layouts/layout';
import WindmillIcon from '../../public/windmill.svg';
import MeasuresLayout from '../../components/layouts/measures-layout';

export default function Measures() {
  return (
    <Layout>
      <MeasuresLayout
          totalNumberOfLaws = {10}
          casus = 'Circulaire windturbines'
          heading = ''
          introPara = 'Wij hebben 10 kansvolle maatregelen gevonden waarmee je beleid uit kunt voeren om de
          circulariteit van windturbines te versnellen. Met sommige maatregelen is al
          praktijkervaring opgedaan, met andere nog niet. Durf te pionieren. Jouw ervaringen
          kunnen dan ook anderen weer verder helpen.'
          icon = {WindmillIcon}
          searchTitle = 'Zoek in windturbines maatregelen'
      />
    </Layout>
  );
}
