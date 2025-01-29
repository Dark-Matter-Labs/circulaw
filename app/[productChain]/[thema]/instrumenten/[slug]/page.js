import { notFound } from 'next/navigation';

import Instrument from '@/components/instrument';
import { INSTRUMENT_META_DATA, INSTRUMENT_PAGE_QUERY, INSTRUMENT_PATHS_QUERY } from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  // fetch data
  const instrumentMetaData = await client.fetch(
    INSTRUMENT_META_DATA,
    { slug },
    {
      next: { tags: ['instrument'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (instrumentMetaData) {
    return {
      title: instrumentMetaData.titel + ' - CircuLaw',
      description:
        instrumentMetaData.metaDescribe || instrumentMetaData.subtitel || generic.description,
      alternates: {
        canonical: `/${instrumentMetaData.productChain}/${instrumentMetaData.thema}/instrumenten/${instrumentMetaData.slug}`,
      },
      openGraph: {
        images: previousImages,
        title: instrumentMetaData.titel + ' - CircuLaw',
        description:
          instrumentMetaData.metaDescribe || instrumentMetaData.subtitel || generic.description,
        type: 'website',
      },
    };
  }
}

export async function generateStaticParams() {
  const slugs = await client.fetch(INSTRUMENT_PATHS_QUERY, { next: { tags: ['instrument'] } });
  return slugs.map((slug) => ({
    thema: slug.thema,
    productChain: slug.productChain,
    slug: slug.slug,
  }));
}

export const dynamicParams = false;

export default async function InstrumentPage({ params }) {
  const instrumentContent = await sanityFetch({
    query: INSTRUMENT_PAGE_QUERY,
    qParams: params,
    tags: ['instrument', 'modelText'],
  });

  if (!instrumentContent) {
    notFound();
  }

  return <Instrument data={instrumentContent} />;
}
