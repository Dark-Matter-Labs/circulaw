import client from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import WindmillIcon from '../../public/windmill.png';
import windmillImageMob from '../../public/bevoegdheden/bevoegdheden-windmill.png';
import { creatQuery } from '../../lib/queries';

const thema = 'circulaire-windturbines';

export default function InfoPage({ ...props }) {
  return (
    <Layout>
      <WelkeLayout
        thema={thema}
        title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
        icon={WindmillIcon}
        p1='Rijk, provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om kenbaar te maken dat zij hiermee aan de slag willen. Het vergroten van het aandeel publieke grond van provincies en gemeenten maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van grond. Dit kan bijvoorbeeld door middel van tenders of het sluiten van huurovereenkomsten. Daarnaast helpen subsidies om bijvoorbeeld de productie, het aanschaffen of recyclen van circulaire windturbines aan te moedigen.'
        p2='Ook kunnen Rijk en provincie met een projectbesluit het omgevingsplan wijzigen om  daarmee de ontwikkeling van circulaire windturbineparken te borgen en te stimuleren.'
        p3='Provincies en gemeenten kunnen hun grondpositie versterken door beschikbare grond op te kopen. Ook kunnen zij in lokale verordeningen en plannen, eisen opnemen die circulariteit van windturbines aanmoedigen.'
        p4='En ten slotte kunnen gemeenten in een anterieure overeenkomst kosten voor gebiedsontwikkeling vastleggen en daar ook circulariteit bij betrekken.'
        allRegionLaws={props.allRegionLaws}
        natLaws={props.natLaws}
        provLaws={props.provLaws}
        gemLaws={props.gemLaws}
        imageMob={windmillImageMob}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const allRegionLaws = await client.fetch(creatQuery(thema).allRegions);
  const natLaws = await client.fetch(creatQuery(thema).national);
  const provLaws = await client.fetch(creatQuery(thema).provincial);
  const gemLaws = await client.fetch(creatQuery(thema).local);
  return {
    props: {
      allRegionLaws: allRegionLaws,
      natLaws: natLaws,
      provLaws: provLaws,
      gemLaws: gemLaws,
    },
    revalidate: 1,
  };
}
