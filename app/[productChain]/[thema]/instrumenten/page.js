import ThemeLevelSearch from '@/components/theme-page/theme-level-search';
import { FUll_THEME_PATHS_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

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
      title: themaMetaData.themaName + ' - CircuLaw',
      description: themaMetaData.metaDescribe || generic.description,
      alternates: {
        canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}/instrumenten`,
      },
      openGraph: {
        images: previousImages,
        title: themaMetaData.themaName + ' - CircuLaw',
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

export const dynamic = 'force-dynamic';

export default async function InstrumentenPage({ params }) {
  return (
    <ThemeLevelSearch
      title={`Lijst van alle ${params?.thema} instrumenten`}
      thema={params?.thema}
      productChain={params?.productChain}
      searchTitle={`Zoek in ${params?.thema}`}
    />
  );
}
