import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client } from '@/lib/sanity';
import { productChainQueryFunction } from '@/lib/queries';

export default function Biomassa({ title, count, themaList, impactList, ambitionList, links }) {
  return (
    <Layout title='CircuLaw - Voedsel en biomassa'>
      <PCLayout
        title={title}
        totalInstruments={count}
        themaList={themaList}
        impactList={impactList}
        ambitionList={ambitionList}
        links={links}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const productChain = await client.fetch(productChainQueryFunction('biomassa-en-voedsel').productChainPageQuery);
  const instrumentCount = await client.fetch(productChainQueryFunction('biomassa-en-voedsel').totalNumberOfInstruments);
  const themalist = await client.fetch(productChainQueryFunction('biomassa-en-voedsel').themaData);
  return {
    props: {
      title: productChain.pcName,
      count: instrumentCount,
      themaList: themalist,
      impactList: productChain.impactItems,
      ambitionList: productChain.ambitionItems,
      links: productChain.pcLinks
    },
    revalidate: 1,
  };
}
