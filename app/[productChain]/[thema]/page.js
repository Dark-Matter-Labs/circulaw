import { notFound } from 'next/navigation';

import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';
import { THEME_METADATA_QUERY, THEME_PATHS_QUERY, THEME_QUERY } from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';

// metadata
export async function generateMetadata({ params }, parent) {
  // read route params
  const thema = params.thema;
  // fetch data
  const themaMetaData = await client.fetch(
    THEME_METADATA_QUERY,
    { thema },
    {
      next: { tags: ['thema', 'simpleThema', 'instrument'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (themaMetaData) {
    return {
      title: themaMetaData.metaTitle || themaMetaData.themaName + ' - CircuLaw',
      description: themaMetaData.metaDescribe || generic.description,
      alternates: {
        canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}`,
      },
      openGraph: {
        images: previousImages,
        title: themaMetaData.metaTitle || themaMetaData.themaName,
        description: themaMetaData.metaDescribe || generic.description,
      },
    };
  }
}

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY, {
    next: { tags: ['thema', 'simpleThema', 'instrument'] },
  });
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

export default async function ThemePage({ params }) {
  const themeData = await sanityFetch({
    query: THEME_QUERY,
    qParams: params,
    tags: ['thema', 'simpleThema', 'instrument'],
  });
  if (!themeData) {
    notFound();
  }

  if (themeData.thema._type === 'simpleThema') {
    return (
      <SimpleThemaLayout
        thema={themeData?.thema}
        numberOfLaws={themeData?.length}
        instruments={themeData?.instruments ?? []}
      />
    );
  } else if (themeData.thema._type === 'thema') {
    return (
      <ThemeLayout
        featuredLaws={themeData?.featured}
        thema={themeData?.thema}
        numberOfLaws={themeData?.length}
      />
    );
  }
}
