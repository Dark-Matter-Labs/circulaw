import { PC_PATHS_QUERY, PRODUCT_CHAIN_PAGE_QUERY, THEMES_BY_PC_QUERY } from '@/lib/queries';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client } from '@/lib/sanity';

export async function generateStaticParams() {
  const productChains = await client.fetch(PC_PATHS_QUERY);
  return productChains.map((productChain) => ({ productChain }));
}

async function getProductChainData(params) {
  const productChain = params;
  const productChainContent = await client.fetch(PRODUCT_CHAIN_PAGE_QUERY, { productChain });
  if (!productChainContent) {
    throw new Error('could not get product chain data');
  }
  return productChainContent;
}

async function getThemeByPCData(params) {
  const productChain = params;
  const themeByPCData = await client.fetch(THEMES_BY_PC_QUERY, { productChain });
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