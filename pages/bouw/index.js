import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client } from '@/lib/sanity';
import { productChainQueryFunction } from '@/lib/queries';

export default function Biomassa({ title, count, themaList, impactList, ambitionList }) {
  return (
    <Layout title='CircuLaw - Bouw'>
      <PCLayout
        title={title}
        totalInstruments={count}
        themaList={themaList}
        impactList={impactList}
        ambitionList={ambitionList}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const productChain = await client.fetch(productChainQueryFunction('bouw').productChainPageQuery);
  const instrumentCount = await client.fetch(productChainQueryFunction('bouw').totalNumberOfInstruments);
  const themalist = await client.fetch(productChainQueryFunction('bouw').themaData);
  return {
    props: {
      title: productChain.pcName,
      count: instrumentCount,
      themaList: themalist,
      impactList: productChain.impactItems,
      ambitionList: productChain.ambitionItems,
    },
    revalidate: 1,
  };
}
