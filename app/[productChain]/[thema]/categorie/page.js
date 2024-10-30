import { FUll_THEME_PATHS_QUERY, CATEGORIE_PAGE_QUERY, THEME_METADATA_QUERY } from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';
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

  if (themaMetaData) {
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
}

export async function generateStaticParams() {
  const themas = await client.fetch(FUll_THEME_PATHS_QUERY, {
    next: { tags: ['thema'] },
  });
  console.log(themas);
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

export default async function CategoriePage({ params }) {
  const categorieContent = await sanityFetch({
    query: CATEGORIE_PAGE_QUERY,
    qParams: params,
    tags: ['instrument', 'thema', 'simpleThema'],
  });
  return (
    <ExpertiseLayout
      thema={params?.thema}
      transitionAgenda={params?.productChain}
      expertiseData={categorieContent}
      title={`${categorieContent[0].themaName} instrumenten per categorie`}
    />
  );
}
