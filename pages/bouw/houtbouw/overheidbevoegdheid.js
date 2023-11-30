import Layout from '@/components/layouts/layout';
import WelkeLayout from '@/components/layouts/welke-layout';
import { client } from '@/lib/sanity';
import woodIcon from '@/public/icons/woodIcon.svg';
import houtbouwImageMob from '@/public/bevoegdheden/bevoegdheden-houtbouw-mob.png';
import { creatQuery } from '@/lib/queries';

const thema = 'houtbouw';

export default function InfoPage({ ...props }) {
  return (
    <Layout title='CircuLaw - Welke Overheid Heeft Houtbouw Stimuleren'>
      <WelkeLayout
        thema={thema}
        title='Welke overheid kan welk instrument gebruiken voor houtbouw?'
        icon={woodIcon}
        p1='Je kunt op rijksniveau regels bepalen voor het hergebruik van producten. Ook kan het Rijk financieel bijdragen aan doelen die worden gesteld in een omgevingsvisie en/of een programma over houtbouw.'
        p2='Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden in het gebied te vergroten. Het vaststellen van omgevingswaarden (instrumenten uit de Omgevingswet die provincies en gemeenten kunnen inzetten om beleid uit de omgevingsvisie uit te voeren),  kan hierbij helpen. Zo zou je een maximumwaarde voor CO₂ kunnen vaststellen.'
        p3='Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels bepalen voor sloopwerkzaamheden, afvalstoffen en recycling. Ook kunnen ze houtbouw opnemen in het omgevingsplan om de vergunningverlening hierop aan te passen. Ook hierbij kunnen omgevingswaarden een rol spelen.'
        p4='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van die grond. De omgevingsvisie is voor alle overheden belangrijk omdat je hier de beleidsdoelen voor houtbouw in kunt verankeren. En ten slotte kunnen overheden innovatie stimuleren door verschillende experimenten toe te staan.'
        allRegionLaws={props.allRegionLaws}
        natLaws={props.natLaws}
        provLaws={props.provLaws}
        gemLaws={props.gemLaws}
        imageMob={houtbouwImageMob}
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
