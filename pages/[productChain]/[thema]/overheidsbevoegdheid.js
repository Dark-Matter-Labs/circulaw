import { useRouter } from 'next/router';
import Layout from '@/components/layouts/layout';
import WelkeLayout from '@/components/layouts/welke-layout';
import { govLevelQueryFunction } from '@/lib/queries';
import { client } from '@/lib/sanity';
import houtbouwImageMob from '@/public/bevoegdheden/bevoegdheden-houtbouw-mob.png';
import matrassenImageMob from '@/public/bevoegdheden/bevoegdheden-matrassen.png';
import windmillImageMob from '@/public/bevoegdheden/bevoegdheden-windmill.png';

// const thema = 'matrasketen';

const pathsQuery = `
*[_type in ["thema", "simpleThema"] && defined(slug.current)]{
    "thema": slug.current,
    "productChain": transitionAgenda->.slug.current,
  }
`;

const themaInfo = `
*[_type == "thema" && slug.current == $thema][0] {
    "thema": slug.current,
    "transitionAgenda": transitionAgenda->.slug.current, 
    themaName,
}
`;

export default function InfoPage({ themaData, ...props }) {
  const router = useRouter();
  if (themaData?.thema === 'matrasketen') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
        <WelkeLayout
          thema={themaData?.thema}
          transitionAgenda={themaData?.transitionAgenda}
          title='Welke overheid kan welk instrument inzetten om de matrasketen te stimuleren?'
          // icon={mattressIcon}
          p1='Rijk, provincies en gemeenten kunnen op verschillende manieren circulaire matrassen inkopen, bijvoorbeeld door middel van een innovatiepartnerschap, concurrentiegerichte dialogen of het verwerken van circulariteit in geschiktheidseisen. Daarnaast kan een terugnamegarantie helpen bij het recyclen van de matrassen aan het einde van hun levensduur. Dit kun je ook meenemen in de inkoopprocedure. Subsidies kunnen helpen om de ontwikkeling en productie van circulaire matrassen voor partijen aantrekkelijker te maken.'
          p2='Op nationaal niveau kan circulair beleid worden gemaakt via het landelijk afvalbeheerplan. Een meer ingrijpend instrument is het instellen van een reclameverbod voor matrassen die niet duurzaam of niet te recyclen zijn. Statiegeld bij aanschaf van een matras kan er ook voor zorgen dat een matras aan het einde van de levenscyclus weer terug wordt gebracht naar de verkoper, om zo droog en schoon te kunnen worden gerecycled. Op nationaal niveau kunnen fiscale instrumenten worden ingezet om de investeringen in en de verkoop van circulaire matrassen aantrekkelijker te maken.'
          p3='Gemeenten zijn ten slotte bevoegd om afvalstoffen doelmatig te beheren: dit regelen zij via de afvalstoffenverordening waarbij een extra heffing kan worden ingezet voor de inzameling van matrassen.'
          p4=''
          allRegionLaws={props?.allRegionLaws}
          natLaws={props?.natLaws}
          provLaws={props?.provLaws}
          gemLaws={props?.gemLaws}
          imageMob={matrassenImageMob}
        />
      </Layout>
    );
  } else if (themaData?.thema === 'houtbouw') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
        <WelkeLayout
          thema={themaData?.thema}
          transitionAgenda={themaData?.transitionAgenda}
          title='Welke overheid kan welk instrument gebruiken voor houtbouw?'
          // icon={woodIcon}
          p1='Je kunt op rijksniveau regels bepalen voor het hergebruik van producten. Ook kan het Rijk financieel bijdragen aan doelen die worden gesteld in een omgevingsvisie en/of een programma over houtbouw.'
          p2='Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden in het gebied te vergroten. Het vaststellen van omgevingswaarden (instrumenten uit de Omgevingswet die provincies en gemeenten kunnen inzetten om beleid uit de omgevingsvisie uit te voeren),  kan hierbij helpen. Zo zou je een maximumwaarde voor CO₂ kunnen vaststellen.'
          p3='Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels bepalen voor sloopwerkzaamheden, afvalstoffen en recycling. Ook kunnen ze houtbouw opnemen in het omgevingsplan om de vergunningverlening hierop aan te passen. Ook hierbij kunnen omgevingswaarden een rol spelen.'
          p4='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van die grond. De omgevingsvisie is voor alle overheden belangrijk omdat je hier de beleidsdoelen voor houtbouw in kunt verankeren. En ten slotte kunnen overheden innovatie stimuleren door verschillende experimenten toe te staan.'
          allRegionLaws={props?.allRegionLaws}
          natLaws={props?.natLaws}
          provLaws={props?.provLaws}
          gemLaws={props?.gemLaws}
          imageMob={houtbouwImageMob}
        />
      </Layout>
    );
  } else if (themaData?.thema === 'voedselverspilling') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
        <WelkeLayout
          thema={themaData?.thema}
          transitionAgenda={themaData?.transitionAgenda}
          title='Welke overheid kan welk instrument gebruiken voor voedselverspilling?'
          p1=''
          p2=''
          p3=''
          p4=''
          allRegionLaws={props.allRegionLaws}
          natLaws={props.natLaws}
          provLaws={props.provLaws}
          gemLaws={props.gemLaws}
          imageMob={windmillImageMob} // need to update this to correct image
        />
      </Layout>
    );
  } else if (themaData?.thema === 'windturbines') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
        <WelkeLayout
          thema={themaData?.thema}
          transitionAgenda={themaData?.transitionAgenda}
          title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
          //  icon={WindmillIcon}
          p1='Rijk, provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om kenbaar te maken dat zij hiermee aan de slag willen. Het vergroten van het aandeel publieke grond van provincies en gemeenten maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van grond. Dit kan bijvoorbeeld door middel van tenders of het sluiten van huurovereenkomsten. Daarnaast helpen subsidies om bijvoorbeeld de productie, het aanschaffen of recyclen van circulaire windturbines aan te moedigen.'
          p2='Ook kunnen Rijk en provincie met een projectbesluit het omgevingsplan wijzigen om  daarmee de ontwikkeling van circulaire windturbineparken te borgen en te stimuleren.'
          p3='Provincies en gemeenten kunnen hun grondpositie versterken door beschikbare grond op te kopen. Ook kunnen zij in lokale verordeningen en plannen, eisen opnemen die circulariteit van windturbines aanmoedigen.'
          p4='En ten slotte kunnen gemeenten in een anterieure overeenkomst kosten voor gebiedsontwikkeling vastleggen en daar ook circulariteit bij betrekken.'
          allRegionLaws={props?.allRegionLaws}
          natLaws={props?.natLaws}
          provLaws={props?.provLaws}
          gemLaws={props?.gemLaws}
          imageMob={windmillImageMob}
        />
      </Layout>
    );
  } else if (themaData?.thema === 'infra') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
      <WelkeLayout
        thema={themaData?.thema}
        transitionAgenda={themaData?.transitionAgenda}
        title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
        //  icon={WindmillIcon}
        p1=''
        p2=''
        p3=''
        p4=''
        allRegionLaws={props?.allRegionLaws}
        natLaws={props?.natLaws}
        provLaws={props?.provLaws}
        gemLaws={props?.gemLaws}
        imageMob={windmillImageMob}
      />
    </Layout>
    )
  } else if (themaData?.thema === 'bedrijventerreinen') {
    return (
      <Layout title={`${themaData?.themaName} - Wie is waarvoor bevoegd?`} pageUrl={router.asPath}>
      <WelkeLayout
        thema={themaData?.thema}
        transitionAgenda={themaData?.transitionAgenda}
        title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
        //  icon={WindmillIcon}
        p1=''
        p2=''
        p3=''
        p4=''
        allRegionLaws={props?.allRegionLaws}
        natLaws={props?.natLaws}
        provLaws={props?.provLaws}
        gemLaws={props?.gemLaws}
        imageMob={windmillImageMob}
      />
      </Layout>
    )
  }

  else {
    return <Layout></Layout>;
  }
}

export async function getStaticPaths() {
  const themas = await client.fetch(pathsQuery);
  return {
    paths: themas.map((path) => ({
      params: { thema: path.thema, productChain: path.productChain },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const thema = { thema: params?.thema ?? '' };

  const allRegionLaws = await client.fetch(govLevelQueryFunction().allRegions, thema);
  const natLaws = await client.fetch(govLevelQueryFunction().national, thema);
  const provLaws = await client.fetch(govLevelQueryFunction().provincial, thema);
  const gemLaws = await client.fetch(govLevelQueryFunction().local, thema);

  const themaData = await client.fetch(themaInfo, thema);

  if (!themaData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allRegionLaws: allRegionLaws,
      natLaws: natLaws,
      provLaws: provLaws,
      gemLaws: gemLaws,
      themaData,
    },
    revalidate: 1,
  };
}
