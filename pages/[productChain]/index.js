import { useRouter } from 'next/router';
import Layout from '@/components/layouts/layout';
import PCLayout from '@/components/layouts/product-chain-layout';
import { client } from '@/lib/sanity';

// move these to a list of queries in query.js

const pathsQuery = `
*[_type == "productChain" && defined(slug.current)][].slug.current
`;
const number = `
count(*[_type == "instrument" && transitionAgenda->slug.current == $productChain])
`;

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
`;
const themaCardQuery = `
*[_type in ["thema", "simpleThema"] && transitionAgenda->slug.current == $productChain] {
  themaName,
  homePageCardText,
  "slug": slug.current,
  "transitionAgenda": transitionAgenda->slug.current,
  "image": homePageCardImage.asset->.url,
  "mobileCardImage": homePageCardImageMobile.asset->url,
  "count": count(*[_type == "instrument" && thema->slug.current == ^.slug.current || simpleThema->slug.current == ^.slug.current]),
}
`;

export default function ProductChainPage({ productChainData, instrumentCount, themaCards }) {
  const router = useRouter();

  if (Object.keys(router.query).length > 0) {
    return (
      <Layout title={`${productChainData?.pcName}`} pageUrl={router.asPath}>
        <PCLayout
          productChainData={productChainData}
          totalInstruments={instrumentCount}
          themaList={themaCards}
          impactList={productChainData?.impactItems}
          ambitionList={productChainData?.ambitionItems}
          links={productChainData?.pcLinks}
        />
      </Layout>
    );
  } else {
    return <Layout></Layout>;
  }
}

export async function getStaticPaths() {
  const productChains = await client.fetch(pathsQuery);
  return {
    paths: productChains.map((productChain) => ({ params: { productChain } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productChain = { productChain: params?.productChain ?? '' };
  const productChainData = await client.fetch(query, productChain);
  const instrumentCount = await client.fetch(number, productChain);
  const themaCards = await client.fetch(themaCardQuery, productChain);

  if (!productChainData) {
    return {
        notFound: true
    };
}
console.log(productChainData)
  return {
    props: { productChainData, instrumentCount, themaCards },
    revalidate: 1,
  };
}

export async function generateMetadata({ params }) {
  // read route params
  console.log('yo');
  console.log(params);

  return {
    pageUrl: params.url,
  };
}
