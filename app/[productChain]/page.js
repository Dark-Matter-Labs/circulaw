import { notFound } from 'next/navigation';

import PCLayout from '@/components/layouts/product-chain-layout';
import {
  PC_PATHS_QUERY,
  PRODUCT_CHAIN_METADATA_QUERY,
  PRODUCT_CHAIN_PAGE_QUERY,
  THEMES_BY_PC_QUERY,
} from '@/lib/queries';
import { client, sanityFetch } from '@/lib/sanity';

// metadata
export async function generateMetadata({ params }, parent) {
  // read route params
  const productChain = params.productChain;
  // fetch data
  const productChainMetaData = await client.fetch(
    PRODUCT_CHAIN_METADATA_QUERY,
    { productChain },
    {
      next: { tags: ['transitionAgenda'] },
    },
  );
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const generic = (await parent).openGraph;

  if (productChainMetaData) {
    return {
      title: productChainMetaData.metaTitle || productChainMetaData.pcName + ' - CircuLaw',
      description: productChainMetaData.metaDescribe || generic.description,
      alternates: {
        canonical: `/${productChainMetaData.slug}`,
      },
      openGraph: {
        images: previousImages,
        title: productChainMetaData.metaTitle || productChainMetaData.pcName,
        description: productChainMetaData.metaDescribe || generic.description,
        type: 'website',
      },
    };
  }
}

// slugs
export async function generateStaticParams() {
  const productChains = await client.fetch(PC_PATHS_QUERY, {
    next: { tags: ['transitionAgenda'] },
  });
  return productChains.map((productChain) => ({ productChain }));
}

export const dynamicParams = false;

export default async function ProductChainPage({ params }) {
  const productChainData = await sanityFetch({
    query: PRODUCT_CHAIN_PAGE_QUERY,
    qParams: params,
    tags: ['transitionAgenda'],
  });
  const themeByPCData = await sanityFetch({
    query: THEMES_BY_PC_QUERY,
    qParams: params,
    tags: ['thema', 'simpleThema', 'instrument'],
  });

  if (!productChainData || !themeByPCData) {
    notFound();
  }

  return (
    <PCLayout
      productChainData={productChainData}
      totalInstruments={themeByPCData[0].totalNumberInstruments}
      themaList={themeByPCData}
      impactList={productChainData?.impactItems}
      ambitionList={productChainData?.ambitionItems}
      links={productChainData?.pcLinks}
    />
  );
}
