import { THEME_PATHS_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import ThemeLevelSearch from '@/components/theme-page/theme-level-search';

export async function generateMetadata({ params }, parent) {
  // read route params
  const thema = params.thema;
  // fetch data
  const themaMetaData = await client.fetch(
    THEME_METADATA_QUERY,
    { thema },
    {
      next: { tags: ['thema', 'simpleThema'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  return {
    title: themaMetaData.themaName + ' - CircuLaw',
    description: themaMetaData.metaDescribe || generic.description,
    alternates: {
      canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}/instrumenten`,
      languages: {
        'nl-NL': '/nl-NL',
      },
    },
    openGraph: {
      images: previousImages,
      title: themaMetaData.themaName + ' - CircuLaw',
      description: generic.description,
    },
  };
}

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY, {
    next: { tags: ['thema', 'simpleThema'] },
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
