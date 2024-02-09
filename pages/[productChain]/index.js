

import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
import { productChainQueryFunction } from '@/lib/queries';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { groq } from 'next-sanity';
import { fetcher } from '@/utils/swr-fetcher';

export default function ProductChainPage() {
  const router = useRouter()
  const productChain = router.query.productChain
  const {data: productChainData} = useSWR(groq`${productChainQueryFunction(productChain).productChainPageQuery}` , fetcher);
  const {data: instrumentCount} = useSWR(groq`${productChainQueryFunction(productChain).totalNumberOfInstruments}`, fetcher)
  const {data: themaList} = useSWR(groq`${productChainQueryFunction(productChain).themaData}`, fetcher)
  console.log(themaList, 'themalist')
  console.log(instrumentCount, 'icount')
  return (
    <Layout title='CircuLaw - Voedsel en biomassa'>
      <PCLayout
        title={productChainData?.pcName}
        totalInstruments={instrumentCount}
        themaList={themaList}
        impactList={productChainData?.impactItems}
        ambitionList={productChainData?.ambitionItems}
        links={productChainData?.pcLinks}
      />
    </Layout>
  );
}

{/* 
export async function getStaticPaths() {
  const productChainPaths = await client.fetch(pathsQuery)
  console.log(productChainPaths)
  return {
    paths: productChainPaths.map((productChain) => ({ params: { productChain } })),
    fallback: true,
  };
}

export async function getStaticProps({params}) {
  console.log(params)
  const productChainx = await client.fetch(
    productChainQueryFunction('bouw').productChainPageQuery,
  );
  const instrumentCount = await client.fetch(
    productChainQueryFunction('bouw').totalNumberOfInstruments,
  );
  const themalist = await client.fetch(productChainQueryFunction('bouw').themaData);
  return {
    props: {
      title: productChainx.pcName,
      count: instrumentCount,
      themaList: themalist,
      impactList: productChainx.impactItems,
      ambitionList: productChainx.ambitionItems,
      links: productChainx.pcLinks,
    },
    revalidate: 1,
  };
}



*/}