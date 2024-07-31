import { PC_PATHS_QUERY, PRODUCT_CHAIN_PAGE_QUERY, THEMES_BY_PC_QUERY } from '@/lib/queries';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client, urlFor } from '@/lib/sanity';

const PRODUCT_CHAIN_METADATA_QUERY = `
*[_type == "transitionAgenda" && slug.current == $productChain][0] {
  metaTitle,
  metaDescribe,
  pcName,
  'image': homepageImage.asset,
}
`

export async function generateMetadata({ params }, parent) {
  // read route params
  const productChain = params.productChain
  // fetch data
  const productChainMetaData = await client.fetch(PRODUCT_CHAIN_METADATA_QUERY, {productChain})
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const image = urlFor(productChainMetaData.image).url()
  console.log(image)
  return {
    title: productChainMetaData.pcName + ' - CircuLaw',
    description: productChainMetaData.metaDescribe,
    openGraph: {
      images: [image, ...previousImages],
      title: productChainMetaData.pcName,
      description: productChainMetaData.metaDescribe
    },
  }
}

export async function generateStaticParams() {
  const productChains = await client.fetch(PC_PATHS_QUERY, {
    next: { tags: ['transitionAgenda'] },
  });
  return productChains.map((productChain) => ({ productChain }));
}

export const dynamicParams = false;

async function getProductChainData(params) {
  const productChain = params;
  const productChainContent = await client.fetch(
    PRODUCT_CHAIN_PAGE_QUERY,
    { productChain },
    { next: { tags: ['transitionAgenda'] } },
  );
  if (!productChainContent) {
    throw new Error('could not get product chain data');
  }
  return productChainContent;
}

async function getThemeByPCData(params) {
  const productChain = params;
  const themeByPCData = await client.fetch(
    THEMES_BY_PC_QUERY,
    { productChain },
    { next: { tags: ['thema', 'simpleThema'] } },
  );
  if (!themeByPCData) {
    throw new Error('count not get theme data');
  }
  return themeByPCData;
}

export default async function ProductChainPage({ params }) {
  const productChainData = await getProductChainData(params.productChain);
  const themeByPCData = await getThemeByPCData(params.productChain);
  return (
    <PCLayout
      productChainData={productChainData}
      totalInstruments={themeByPCData.totalNumberInstruments}
      themaList={themeByPCData}
      impactList={productChainData?.impactItems}
      ambitionList={productChainData?.ambitionItems}
      links={productChainData?.pcLinks}
    />
  );
}
