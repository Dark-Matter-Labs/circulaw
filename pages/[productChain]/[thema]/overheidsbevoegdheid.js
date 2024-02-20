

import { client } from '@/lib/sanity';
import Layout from '@/components/layouts/layout';
import WelkeLayout from '@/components/layouts/welke-layout';
import matrassenImageMob from '@/public/bevoegdheden/bevoegdheden-matrassen.png';
import { govLevelQueryFunction } from '@/lib/queries';

// const thema = 'matrasketen';

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`

const themaInfo = `
*[_type == "thema" && slug.current == $thema][0] {
    "thema": slug.current,
    "transitionAgenda": transitionAgenda->.slug.current, 
    themaName,
}
`

export default function InfoPage({themaData,  ...props }) {

    if (themaData.thema === 'matrasketen') {
        return (
            <Layout title='CircuLaw - Wie is waarvoor bevoegd?'>
              <WelkeLayout
                thema={themaData.thema}
                transitionAgenda={themaData.transitionAgenda}
                title='Welke overheid kan welk instrument inzetten om de matrasketen te stimuleren?'
                // icon={mattressIcon}
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
    } else if (themaData.thema === 'houtbouw') {
        return (
            <>
            </>
        )
    } else if (themaData.thema === 'voedselverspilling') {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
  
}

export async function getStaticPaths() {
    const themas = await client.fetch(pathsQuery)
    return {
      paths: themas.map((path) => ({ params: { thema: path.thema, productChain: path.productChain } })),
      fallback: true,
    }
  }

export async function getStaticProps({params}) {
  const thema = { thema: params?.thema ?? '' };

  const allRegionLaws = await client.fetch(govLevelQueryFunction().allRegions, thema);
  const natLaws = await client.fetch(govLevelQueryFunction().national, thema);
  const provLaws = await client.fetch(govLevelQueryFunction().provincial, thema);
  const gemLaws = await client.fetch(govLevelQueryFunction().local, thema);

  const themaData = await client.fetch(themaInfo, thema)
    console.log(themaData)
  return {
    props: {
      allRegionLaws: allRegionLaws,
      natLaws: natLaws,
      provLaws: provLaws,
      gemLaws: gemLaws,
      themaData
    },
    revalidate: 1,
  };
}
