import Instrument from '@/components/instrument';
import { INSTRUMENT_PATHS_QUERY, INSTRUMENT_PAGE_QUERY, INSTRUMENT_META_DATA } from '@/lib/queries';
import { client } from '@/lib/sanity';

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

export async function generateStaticParams() {
  const slugs = await client.fetch(INSTRUMENT_PATHS_QUERY, { next: { tags: ['instrument'] } });
  return slugs.map((slug) => ({
    thema: slug.thema,
    productChain: slug.productChain,
    slug: slug.slug,
  }));
}

export const dynamicParams = false;

async function getInstrumentData(params) {
  const slug = params;
  const instrumentData = await client.fetch(
    INSTRUMENT_PAGE_QUERY,
    { slug },
    { next: { tags: ['instrument'] } },
  );
  if (!instrumentData) {
    throw new Error('could not get instrument data');
  }
  return instrumentData;
}

export default async function InstrumentPage({ params }) {
  const instrumentContent = await getInstrumentData(params.slug);

  return <Instrument data={instrumentContent} />;
}
