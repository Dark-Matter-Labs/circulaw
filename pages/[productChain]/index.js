

import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client } from '@/lib/sanity';

// move these to a list of queries in query.js

const pathsQuery = `
*[_type == "productChain" && defined(slug.current)][].slug.current
`
const number = `
count(*[_type == "measure" && transitionAgenda->slug.current == $productChain])
`

const query = `
*[_type == "transitionAgenda" && slug.current == $productChain][0] {
  ...,
  "impactItems": impactItems[]{
    ...,
    "image": image.asset->.url,
  },
  "ambitionItems": ambitionItems[]{
    ...,
    "image": image.asset->.url,
  },
}
`
const themaCardQuery = `
*[_type in ["thema", "simpleThema"] && transitionAgenda->slug.current == $productChain] {
  themaName,
  homePageCardText,
  "slug": slug.current,
  transitionAgenda,
  "image": homePageCardImage.asset->.url,
  "mobileCardImage": homePageCardImageMobile.asset->url,
  "count": count(*[_type == "measure" && thema->slug.current == ^.slug.current || simpleThema->slug.current == ^.slug.current]),
}
`

export default function ProductChainPage({productChainData, instrumentCount, themaCards}) {
  return (
    <Layout title='CircuLaw - Voedsel en biomassa'>
      <PCLayout
       title={productChainData?.pcName}
       totalInstruments={instrumentCount}
       themaList={themaCards}
       impactList={productChainData?.impactItems}
       ambitionList={productChainData?.ambitionItems}
       links={productChainData?.pcLinks}
      />
    </Layout>
  );
}


export async function getStaticPaths() {
  const productChains = await client.fetch(pathsQuery)
  return {
    paths: productChains.map((productChain) => ({ params: { productChain } })),
    fallback: true,
  }
}


export async function getStaticProps({ params }) {
  const productChain = { productChain: params?.productChain ?? '' };
  const productChainData = await client.fetch(query, productChain);
  console.log(productChain.productChain)
  const instrumentCount = await client.fetch(number, productChain)
  const themaCards = await client.fetch(themaCardQuery, productChain)
  return {
    props: {  productChainData, instrumentCount, themaCards },
    revalidate: 1,
  };
}

