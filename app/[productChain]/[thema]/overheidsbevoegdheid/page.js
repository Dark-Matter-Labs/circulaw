import { notFound } from 'next/navigation';

import GovLevelLayout from '@/components/layouts/gov-level-layout';
import { FUll_THEME_PATHS_QUERY, GOV_LEVEL_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import placeholderImage from '@/public/gov-level-placeholder-mobile.png';

export async function generateMetadata({ params }, parent) {
  // read route params
  const thema = params.thema;
  // fetch data
  const themaMetaData = await sanityFetch({
    query: THEME_METADATA_QUERY,
    qParams: { thema },
    tags: ['thema', 'simpleThema'],
  });
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (themaMetaData) {
    return {
      title: themaMetaData.themaName + ' - Wie is waarvoor bevoegd? - CircuLaw',
      description: themaMetaData.metaDescribe || generic.description,
      alternates: {
        canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}/overheidsbevoegdheid`,
      },
      openGraph: {
        images: previousImages,
        title: themaMetaData.themaName + ' - Wie is waarvoor bevoegd? - CircuLaw',
        description: generic.description,
        type: 'website',
      },
    };
  }
}

export async function generateStaticParams() {
  const themas = await sanityFetch({
    query: FUll_THEME_PATHS_QUERY,
    tags: ['thema', 'simpleThema'],
  });
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

export default async function GovernmentLevelPage({ params }) {
  const govLevelContent = await sanityFetch({
    query: GOV_LEVEL_QUERY,
    qParams: params,
    tags: ['instrument'],
  });
  if (params.thema === 'matrasketen') {
    return (
      <GovLevelLayout
        thema={params.thema}
        transitionAgenda={params?.productChain}
        title='Welke overheid kan welk instrument inzetten om de matrasketen te stimuleren?'
        p1='Rijk, provincies en gemeenten kunnen op verschillende manieren circulaire matrassen inkopen, bijvoorbeeld door middel van een innovatiepartnerschap, concurrentiegerichte dialogen of het verwerken van circulariteit in geschiktheidseisen. Daarnaast kan een terugnamegarantie helpen bij het recyclen van de matrassen aan het einde van hun levensduur. Dit kun je ook meenemen in de inkoopprocedure. Subsidies kunnen helpen om de ontwikkeling en productie van circulaire matrassen voor partijen aantrekkelijker te maken.'
        p2='Op nationaal niveau kan circulair beleid worden gemaakt via het landelijk afvalbeheerplan. Een meer ingrijpend instrument is het instellen van een reclameverbod voor matrassen die niet duurzaam of niet te recyclen zijn. Statiegeld bij aanschaf van een matras kan er ook voor zorgen dat een matras aan het einde van de levenscyclus weer terug wordt gebracht naar de verkoper, om zo droog en schoon te kunnen worden gerecycled. Op nationaal niveau kunnen fiscale instrumenten worden ingezet om de investeringen in en de verkoop van circulaire matrassen aantrekkelijker te maken.'
        p3='Gemeenten zijn ten slotte bevoegd om afvalstoffen doelmatig te beheren: dit regelen zij via de afvalstoffenverordening waarbij een extra heffing kan worden ingezet voor de inzameling van matrassen.'
        p4=''
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'houtbouw') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welke overheid kan welk instrument gebruiken voor houtbouw?'
        p1='Je kunt op rijksniveau regels bepalen voor het hergebruik van producten. Ook kan het Rijk financieel bijdragen aan doelen die worden gesteld in een omgevingsvisie en/of een programma over houtbouw.'
        p2='Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden in het gebied te vergroten. Het vaststellen van omgevingswaarden (instrumenten uit de Omgevingswet die provincies en gemeenten kunnen inzetten om beleid uit de omgevingsvisie uit te voeren),  kan hierbij helpen. Zo zou je een maximumwaarde voor CO₂ kunnen vaststellen.'
        p3='Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels bepalen voor sloopwerkzaamheden, afvalstoffen en recycling. Ook kunnen ze houtbouw opnemen in het omgevingsplan om de vergunningverlening hierop aan te passen. Ook hierbij kunnen omgevingswaarden een rol spelen.'
        p4='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van die grond. De omgevingsvisie is voor alle overheden belangrijk omdat je hier de beleidsdoelen voor houtbouw in kunt verankeren. En ten slotte kunnen overheden innovatie stimuleren door verschillende experimenten toe te staan.'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'voedselverspilling') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welke overheid kan welk instrument gebruiken voor voedselverspilling?'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'windturbines') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
        p1='Rijk, provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om kenbaar te maken dat zij hiermee aan de slag willen. Het vergroten van het aandeel publieke grond van provincies en gemeenten maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van grond. Dit kan bijvoorbeeld door middel van tenders of het sluiten van huurovereenkomsten. Daarnaast helpen subsidies om bijvoorbeeld de productie, het aanschaffen of recyclen van circulaire windturbines aan te moedigen.'
        p2='Ook kunnen Rijk en provincie met een projectbesluit het omgevingsplan wijzigen om  daarmee de ontwikkeling van circulaire windturbineparken te borgen en te stimuleren.'
        p3='Provincies en gemeenten kunnen hun grondpositie versterken door beschikbare grond op te kopen. Ook kunnen zij in lokale verordeningen en plannen, eisen opnemen die circulariteit van windturbines aanmoedigen.'
        p4='En ten slotte kunnen gemeenten in een anterieure overeenkomst kosten voor gebiedsontwikkeling vastleggen en daar ook circulariteit bij betrekken.'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'infra') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor infra?'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'bedrijventerreinen') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor bedrijventerreinen'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'bedrijfskleding') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor bedrijfskleding'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'consumententextiel') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor consumententextiel'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'zonnepanelen') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor zonnepanelen'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'organische-reststromen') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor organische reststromen'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else if (params.thema === 'biobased-isoleren') {
    return (
      <GovLevelLayout
        thema={params?.thema}
        transitionAgenda={params?.productChain}
        title='Welk instrument kan welke overheid gebruiken voor biobased isoleren'
        allRegionLaws={govLevelContent?.allRegions}
        natLaws={govLevelContent?.national}
        provLaws={govLevelContent?.provincial}
        gemLaws={govLevelContent?.local}
        imageMob={placeholderImage}
      />
    );
  } else {
    return notFound();
  }
}
