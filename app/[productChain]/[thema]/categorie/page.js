import { THEME_PATHS_QUERY, CATEGORIE_PAGE_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import ExpertiseLayout from '@/components/layouts/expertise-layout';

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
    title: themaMetaData.themaName + ' - instrumenten per categorie - CircuLaw',
    description: themaMetaData.metaDescribe || generic.description,
    alternates: {
      canonical: `/${themaMetaData.productChain}/${themaMetaData.slug}/categorie`,
    },
    openGraph: {
      images: previousImages,
      title: themaMetaData.themaName + ' - instrumenten per categorie - CircuLaw',
      description: generic.description,
      type: 'website',
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

async function getCategoryData(params) {
  const thema = params;
  const categorieData = await client.fetch(
    CATEGORIE_PAGE_QUERY,
    { thema },
    { next: { tags: ['instrument'] } },
  );
  if (!categorieData) {
    throw new Error('could not get categorie data');
  }
  return categorieData;
}

export default async function CategoriePage({ params }) {
  const categorieContent = await getCategoryData(params.thema);
  return (
    <ExpertiseLayout
      thema={params?.thema}
      transitionAgenda={params?.productChain}
      expertiseData={categorieContent}
      title={`${categorieContent[0].themaName} instrumenten per categorie`}
    />
  );
}
