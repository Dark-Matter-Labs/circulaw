import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/layout';
import NewsDetailPageBody from '@/components/news-page/news-detail-page-body';
import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client } from '@/lib/sanity';

const newsSlugsQuery = `
*[_type == "newsPage"][0]{
    newsItems[slug != undefined]{
      "paths": slug.current
    }
 }
`;
const newsDetailPageQuery = `
*[_type == "newsPage"][0] {
    "newsItems" :newsItems[slug.current == $slug]{
      ...,
    }
}
`;

export default function NewsDetailPage({ data }) {
  const router = useRouter();
  const [cardColour, setCardColour] = useState();

  useEffect(() => {
    if (data?.colour === 'lightGreen') {
      setCardColour('bg-green-300');
    } else if (data?.colour === 'green') {
      setCardColour('bg-green-500');
    } else if (data?.colour === 'darkGreen') {
      setCardColour('bg-green-600');
    } else setCardColour('bg-green-800');
  }, [data]);

  if (Object.keys(router.query).length > 0) {
    return (
      <>
        <Layout title={data?.newsTitle} pageUrl={router.asPath}>
          <NewsDetailPageHeader cardColour={cardColour} data={data} />
          <NewsDetailPageBody data={data} />
        </Layout>
      </>
    );
  } else return <Layout></Layout>;
}

export async function getStaticPaths() {
  const fetchSlugs = await client.fetch(newsSlugsQuery);
  const paths = fetchSlugs.newsItems.map((slug) => slug.paths);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = { slug: params?.slug.toString() };
  const data = await client.fetch(newsDetailPageQuery, slug);
  return {
    props: {
      data: data.newsItems[0],
    },
    revalidate: 1,
  };
}
