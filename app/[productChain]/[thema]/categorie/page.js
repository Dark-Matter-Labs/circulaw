import { notFound } from 'next/navigation';

import ExpertiseLayout from '@/components/layouts/expertise-layout';
import {
  CATEGORIE_PAGE_QUERY,
  FULL_THEME_IN_PRODUCT_CHAIN_QUERY,
  FUll_THEME_PATHS_QUERY,
  THEME_METADATA_QUERY,
} from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export async function generateMetadata(props, parent) {
  const params = await props.params;
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
  const themas = await sanityFetch({ query: FUll_THEME_PATHS_QUERY, tags: ['thema'] }, {});
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = true;

export default async function CategoriePage(props) {
  const params = await props.params;

  const theme = await sanityFetch({
    query: FULL_THEME_IN_PRODUCT_CHAIN_QUERY,
    qParams: { productChain: params.productChain, thema: params.thema },
    tags: ['thema'],
  });
  if (!theme) {
    notFound();
  }
  const categorieContent = await sanityFetch({
    query: CATEGORIE_PAGE_QUERY,
    qParams: params,
    tags: ['instrument', 'thema', 'simpleThema'],
  });

  const { productChain, thema } = params;

  const pageOptions = [
    { name: 'Categorie', end: 'categorie' },
    { name: 'Instrumenten', end: 'instrumenten' },
    { name: 'Overheidsbevoegdheid', end: 'overheidsbevoegdheid' },
  ];

  const pages = pageOptions.map((opt) => ({
    name: opt.name,
    href: `/${productChain}/${thema}/${opt.end}`,
  }));
  return (
    <ExpertiseLayout
      thema={params?.thema}
      transitionAgenda={params?.productChain}
      expertiseData={categorieContent}
      title={`${theme.themaName} instrumenten per categorie`}
      pages={pages}
    />
  );
}
