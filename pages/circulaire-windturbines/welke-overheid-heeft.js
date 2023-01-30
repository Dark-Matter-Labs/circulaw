import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';

export default function InfoPage() {
  return (
    <Layout>
      <WelkeLayout
        casus='circulaire Windturbines'
        title='Welke overheid heeft welke bevoegdheid voor maatregelen circulaire windturbines?'
        p1='Provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om
      dit beleidsdoel kenbaar te maken. Het vergroten van het aandeel publieke grond van
      provincies en gemeenten zorgt ervoor dat circulaire eisen kunnen worden gesteld bij de
      uitgifte van de gronden.'
        p2='Gemeenten kunnen daarnaast circulariteit opnemen in hun omgevingsplan en zodoende
      aanvullende eisen stellen bij de vergunningverlening. In een anterieure overeenkomst
      worden kosten voor gebiedsontwikkeling vastgelegd en daar kan circulariteit ook bij
      betrokken worden.'
        p3='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: door circulaire
      eisen te stellen bij gronduitgifte - door verkoop, erfpacht en huurovereenkomsten -
      wordt het plaatsen van circulaire windturbines aangemoedigd.'
        p4=''
      />
    </Layout>
  );
}
