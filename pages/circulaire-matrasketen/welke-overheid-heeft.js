import { client } from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import matrassenImageMob from '../../public/bevoegdheden/bevoegdheden-matrassen.png';
import { creatQuery } from '../../lib/queries';

const thema = 'circulaire-matrasketen';

export default function InfoPage({ ...props }) {
  return (
    <Layout title='CircuLaw - Welke Overheid Heeft Matrasketen'>
      <WelkeLayout
        thema={thema}
        title='Welke overheid kan welk instrument inzetten om de circulaire matrasketen te stimuleren?'
        icon={mattressIcon}
        p1='Rijk, provincies en gemeenten kunnen op verschillende manieren circulaire matrassen inkopen, bijvoorbeeld door middel van een innovatiepartnerschap, concurrentiegerichte dialogen of het verwerken van circulariteit in geschiktheidseisen. Daarnaast kan een terugnamegarantie helpen bij het recyclen van de matrassen aan het einde van hun levensduur. Dit kun je ook meenemen in de inkoopprocedure. Subsidies kunnen helpen om de ontwikkeling en productie van circulaire matrassen voor partijen aantrekkelijker te maken.'
        p2='Op nationaal niveau kan circulair beleid worden gemaakt via het landelijk afvalbeheerplan. Een meer ingrijpend instrument is het instellen van een reclameverbod voor matrassen die niet duurzaam of niet te recyclen zijn. Statiegeld bij aanschaf van een matras kan er ook voor zorgen dat een matras aan het einde van de levenscyclus weer terug wordt gebracht naar de verkoper, om zo droog en schoon te kunnen worden gerecycled. Op nationaal niveau kunnen fiscale instrumenten worden ingezet om de investeringen in en de verkoop van circulaire matrassen aantrekkelijker te maken.'
        p3='Gemeenten zijn ten slotte bevoegd om afvalstoffen doelmatig te beheren: dit regelen zij via de afvalstoffenverordening waarbij een extra heffing kan worden ingezet voor de inzameling van matrassen.'
        p4=''
        allRegionLaws={props.allRegionLaws}
        natLaws={props.natLaws}
        provLaws={props.provLaws}
        gemLaws={props.gemLaws}
        imageMob={matrassenImageMob}
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
