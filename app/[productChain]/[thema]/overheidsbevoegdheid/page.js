// import { notFound } from 'next/navigation';
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

  return (
    <GovLevelLayout
      thema={params.thema}
      title='Overheidsbevoegdheidpagina'
      transitionAgenda={params?.productChain}
      allRegionLaws={govLevelContent?.allRegions}
      natLaws={govLevelContent?.national}
      provLaws={govLevelContent?.provincial}
      gemLaws={govLevelContent?.local}
      imageMob={placeholderImage}
    />
  );
}
